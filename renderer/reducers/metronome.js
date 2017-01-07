import {INITIAL_STATE, start, stop} from '../models/metronome.js';
import {START, STOP, READY, SET_TEMPO} from '../actions/metronome.js';
import {fromJS} from 'immutable';

export default function metronome(state = INITIAL_STATE, action) {
    const immutableState = fromJS(state);

    switch (action.type) {
        case START:
            start(immutableState);
            return immutableState.set('isPlaying', true).toJS();
        case STOP:
            stop();
            return immutableState.set('isPlaying', false).toJS();
        case SET_TEMPO: {
            const newState = immutableState.set('tempo', action.tempo);
            if (immutableState.get('isPlaying')) {
                stop();
                start(newState);
            }
            return newState.toJS();
        }
        case READY:
            return immutableState.set('audio', action.audio).set('loading', false).toJS();
        default:
            return state;
    }

}
