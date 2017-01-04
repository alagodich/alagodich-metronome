const immutable = require('immutable'),
    list = immutable.List,
    map = immutable.Map;

module.exports.INITIAL_STATE = map();

function getWinners(vote) {
    if (!vote) return [];
    const [a, b] = vote.get('pair'),
        aVotes = vote.getIn(['tally', a], 0),
        bVotes = vote.getIn(['tally', b], 0);

    if (aVotes > bVotes) return [a];
    else if (aVotes < bVotes) return [b];
    else return [a, b];
}

module.exports.setEntries = (state, entries) =>
    state.set('entries', list(entries));

module.exports.nextAction = state => {
    const entries = state.get('entries').concat(getWinners(state.get('vote')));

    return entries.size === 1
        ? state.remove('vote').remove('entries').set('winner', entries.first())
        : state.merge({
            vote: map({pair: entries.take(2)}),
            entries: entries.skip(2)
        });
};

module.exports.vote = (state, entry) => state.updateIn(
    ['tally', entry],
    0,
    tally => tally + 1
);
