import {VOTE, NEXT, SET_ENTRIES} from '../actions/voting.js';
import * as VotingCore from '../../core/voting.js';
import {fromJS} from 'immutable';

const {INITIAL_STATE, setEntries, nextAction, vote} = VotingCore;

export default function voting(state = INITIAL_STATE, action) {
    switch (action.type) {
        case SET_ENTRIES:
            return setEntries(fromJS(state), action.entries).toJS();
        case NEXT:
            return nextAction(fromJS(state)).toJS();
        case VOTE:
            return fromJS(state).update(
                'vote',
                voteState => vote(voteState, action.entry)
            ).toJS();
        default:
            return state;
    }
}
