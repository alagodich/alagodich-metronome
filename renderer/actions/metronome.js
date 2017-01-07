import {fetchAudio} from '../models/metronome.js';

export const START = 'START',
    STOP = 'STOP',
    READY = 'READY',
    SET_TEMPO = 'SET_TEMPO',
    SET_VOLUME = 'SET_VOLUME',
    init = dispatch => fetchAudio(() => dispatch(ready()));


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

export function ready() {
    return {
        type: READY
    };
}

export function setTempo(event) {
    return {
        type: SET_TEMPO,
        tempo: parseInt(event.target.value, 10)
    };
}

export function setVolume(event) {
    return {
        type: SET_VOLUME,
        volume: parseInt(event.target.value, 10)
    };
}
