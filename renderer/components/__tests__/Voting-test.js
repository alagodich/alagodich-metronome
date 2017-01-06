import React from 'react';
import Voting from '../Voting.jsx';
import renderer from 'react-test-renderer';

const vote = () => {},
    next = () => {};

test('voting', () => {
    const pair = ['Trainspotting', '28 Days Later'],
        component = renderer.create(
            <Voting pair={pair} vote={vote} next={next} />
        ),
        tree = component.toJSON();

    expect(tree).toMatchSnapshot();
});

test('voted', () => {
    const pair = ['Trainspotting', '28 Days Later'],
        component = renderer.create(
            <Voting
                pair={pair}
                vote={vote}
                next={next}
                hasVoted={pair[0]}
            />
        ),
        tree = component.toJSON();

    expect(tree).toMatchSnapshot();
});

test('winner', () => {
    const pair = ['Trainspotting', '28 Days Later'],
        component = renderer.create(
            <Voting
                pair={pair}
                winner={pair[0]}
                vote={vote}
                next={next}
            />
        ),
        tree = component.toJSON();

    expect(tree).toMatchSnapshot();
});
