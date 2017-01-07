// https://github.com/akabekobeko/examples-electron/blob/master/audio-player/src/js/renderer/main/model/AudioPlayer.js
import fs from 'fs';
import path from 'path';
import {ipcRenderer as ipc} from 'electron';

const context = new window.AudioContext(),
    scheduleAheadTime = 0.1,
    beats = {},
    INITIAL_STATE = {
        loading: true,
        isPlaying: false,
        tempo: 101.0,
        noteResolution: 4,
        signature: '4/4',
        volume: 50
    },
    sixteenthQuantity = 16,
    nextNoteMultiplier = 0.25,
    noteLength = 0.05;

let nextNoteTime = 0.0,
    current16thNote = 0.0,
    tempo = INITIAL_STATE.tempo;

ipc.on('tick', scheduler);

export {INITIAL_STATE};

/**
 * Init Audio interface and prepare beats
 * @param callback
 */
export function fetchAudio(callback) {
    const beatBuffer = fs.readFileSync(path.resolve('./renderer/assets/beat.mp3')),
        beatArrayBuffer = beatBuffer.buffer.slice(beatBuffer.byteOffset, beatBuffer.byteOffset + beatBuffer.byteLength);

    context.decodeAudioData(beatArrayBuffer, buffer => {
        beats.mp3 = buffer;

        callback();
    });
}

export function start(state) {
    tempo = state.get('tempo');
    ipc.send('start');
}

export function stop() {
    ipc.send('stop');
}

function tick(time) {
    const gainNode = context.createGain(),
        source = context.createBufferSource();

    source.buffer = beats.mp3;
    source.connect(gainNode);
    gainNode.connect(context.destination);
    gainNode.gain.value = 1;

    source.start(time);
    source.stop(time + noteLength);
}

/**
 * While there are notes that will need to play before the next interval,
 * schedule them and advance the pointer.
 */
function scheduler() {
    while (nextNoteTime < context.currentTime + scheduleAheadTime) {
        scheduleNote(current16thNote, nextNoteTime);
        nextNote();
    }
}

/**
 * Playing note here
 * @param beatNumber
 * @param time
 */
function scheduleNote(beatNumber, time) {
    if (!noteShouldBePlayed(beatNumber)) {
        return;
    }

    tick(time);
}

/**
 * Advance current note and time by a 16th note
 */
function nextNote() {
    const secondsPerBeat = 60.0 / tempo;
    nextNoteTime += secondsPerBeat * nextNoteMultiplier;

    // Advance the beat number, wrap to zero
    current16thNote++;
    if (current16thNote === sixteenthQuantity) {
        current16thNote = 0;
    }
}

/**
 * @param beatNumber
 * @returns {boolean}
 */
function noteShouldBePlayed(beatNumber) {
    // Play only quarter notes
    return beatNumber % 4 === 0;
}

