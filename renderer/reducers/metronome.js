import {INITIAL_STATE} from '../models/metronome.js';
import {TOGGLE, START, STOP, LOAD_BEATS, SET_BEATS} from '../actions/metronome.js';
import {fromJS} from 'immutable';

export default function metronome(state = INITIAL_STATE, action) {
    const immutableState = fromJS(state);

    switch (action.type) {
        case TOGGLE:
            return immutableState.update('isPlaying', isPlaying => !isPlaying).toJS();
        case START:
            return immutableState.set('isPlaying', true).toJS();
        case STOP:
            return immutableState.set('isPlaying', false).toJS();
        case SET_BEATS:
            return immutableState.set('beats', action.beats).set('loading', false).toJS();
        default:
            return state;
    }

}
