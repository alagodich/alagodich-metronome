import {loadBeats} from '../models/metronome.js';

export const TOGGLE = 'TOGGLE',
    START = 'START',
    STOP = 'STOP',
    SET_BEATS = 'SET_BEATS',
    SET_TEMPO = 'SET_TEMPO',
    SET_VOLUME = 'SET_VOLUME';

export function toggle() {
    return {
        type: TOGGLE
    };
}

export function start() {
    return {
        type: START
    };
}

export function stop() {
    return {
        type: STOP
    };
}

export function setBeats(beats) {
    return {
        type: SET_BEATS,
        beats
    };
}

export function setTempo(tempo) {
    return {
        type: SET_TEMPO,
        tempo
    };
}

export function setVolume(volume) {
    return {
        type: SET_VOLUME,
        volume
    };
}

export function fetchBeats() {
    return dispatch => {
        loadBeats(beats => dispatch(setBeats(beats)));
    };
}
