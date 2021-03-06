const immutable = require('immutable'),
    list = immutable.List,
    map = immutable.Map;

function getWinners(vote) {
    if (!vote) {
        return [];
    }
    const [a, b] = vote.get('pair'),
        aVotes = vote.getIn(['tally', a], 0),
        bVotes = vote.getIn(['tally', b], 0);

    if (aVotes > bVotes) {
        return [a];
    } else if (aVotes < bVotes) {
        return [b];
    } else {
        return [a, b];
    }
}

module.exports = {
    INITIAL_STATE: {
        entries: [
            'Shallow Grave',
            'Trainspotting',
            'A Life Less Ordinary',
            'The Beach',
            '28 Days Later',
            'Millions',
            'Sunshine',
            'Slumdog Millionaire',
            '127 Hours',
            'Trance',
            'Steve Jobs'
        ]
    },
    setEntries: (state, entries) => state.set('entries', list(entries)),
    nextAction: state => {
        const entries = state.get('entries').concat(getWinners(state.get('vote')));

        return entries.size === 1
            ? state.remove('vote').remove('entries').set('winner', entries.first())
            : state.merge({
                vote: map({pair: entries.take(2)}),
                entries: entries.skip(2)
            });
    },
    vote: (state, entry) => state.updateIn(
        ['tally', entry],
        0,
        tally => tally + 1
    )
};
