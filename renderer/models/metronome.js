// https://github.com/akabekobeko/examples-electron/blob/master/audio-player/src/js/renderer/main/model/AudioPlayer.js
import fs from 'fs';
import path from 'path';

function prepareAudioContext() {
    const context = new window.AudioContext(),
        gainNode = context.createGain(),
        source = context.createBufferSource();
        // beat = context.decodeAudioData();

    source.connect(gainNode);
    gainNode.connect(context.destination);
    return {context, gainNode, source};
}

export function loadBeats(callback) {
    const context = new window.AudioContext(),
        beatBuffer = fs.readFileSync(path.resolve('./renderer/assets/beat.mp3')),
        beatArrayBuffer = beatBuffer.buffer.slice(beatBuffer.byteOffset, beatBuffer.byteOffset + beatBuffer.byteLength);

    context.decodeAudioData(beatArrayBuffer, buffer => {
        callback({mp3: buffer});
    });
}

// /**
//  * Playing note here
//  * @param beatNumber
//  * @param time
//  */
// function scheduleNote(beatNumber, time) {
//     this.notesInQueue.push({note: beatNumber, time});
//     this.movePointer();
//     if (!this.noteShouldBePlayed(beatNumber)) {
//         return;
//     }
//
//     // create an oscillator
//     const source = this.getAudioSource(beatNumber);
//     source.start(time);
//     source.stop(time + noteLength);
// }

export const INITIAL_STATE = {
    loading: true,
    isPlaying: false,
    tempo: 101.0,
    noteResolution: 4,
    signature: '4/4',
    volume: 0.5,
    audio: prepareAudioContext()
    // accentFirstBeat: false,
    // useOscillator: false
};
