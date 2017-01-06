import {fromJS, Map as map} from 'immutable';
import reducer from '../voting.js';

describe('reducer', () => {

    it('has an initial state', () => {
        const action = {type: 'SET_ENTRIES', entries: ['Trainspotting']},
            nextState = reducer(undefined, action);

        expect(nextState).toEqual({
            entries: ['Trainspotting']
        });
    });

    it('handles SET_ENTRIES', () => {
        const initialState = map(),
            action = {
                type: 'SET_ENTRIES',
                entries: ['Trainspotting']
            },
            nextState = reducer(initialState, action);

        expect(nextState).toEqual({
            entries: ['Trainspotting']
        });
    });

    it('handles NEXT', () => {
        const initialState = fromJS({
                entries: ['Trainspotting', '28 Days Later']
            }),
            action = {
                type: 'NEXT'
            },
            nextState = reducer(initialState, action);

        expect(nextState).toEqual({
            vote: {
                pair: ['Trainspotting', '28 Days Later']
            },
            entries: []
        });
    });

    it('handles VOTE', () => {
        const initialState = fromJS({
                vote: {
                    pair: ['Trainspotting', '28 Days Later']
                },
                entries: []
            }),
            action = {
                type: 'VOTE',
                entry: 'Trainspotting'
            },
            nextState = reducer(initialState, action);

        expect(nextState).toEqual({
            vote: {
                pair: ['Trainspotting', '28 Days Later'],
                tally: {
                    Trainspotting: 1
                }
            },
            entries: []
        });
    });

    it('может использоваться с reduce', () => {
        const actions = [
                {type: 'SET_ENTRIES', entries: ['Trainspotting', '28 Days Later']},
                {type: 'NEXT'},
                {type: 'VOTE', entry: 'Trainspotting'},
                {type: 'VOTE', entry: '28 Days Later'},
                {type: 'VOTE', entry: 'Trainspotting'},
                {type: 'NEXT'}
            ],
            finalState = actions.reduce(reducer, map());

        expect(finalState).toEqual({
            winner: 'Trainspotting'
        });
    });

});
