const Main = require('./main.js'),
    setEntries = Main.setEntries,
    nextAction = Main.nextAction,
    vote = Main.vote;

module.exports = (state = Main.INITIAL_STATE, action) => {

    switch (action.type) {
        case 'SET_ENTRIES':
            return setEntries(state, action.entries);
        case 'NEXT':
            return nextAction(state);
        case 'VOTE':
            return state.update(
                'vote',
                voteState => vote(voteState, action.entry)
            );
        default:
            return state;
    }

};
