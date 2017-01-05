import React from 'react';
import Voting from '../Voting';
import renderer from 'react-test-renderer';

jest.mock('electron', () => ({
    ipcRenderer: ({
        on: jest.fn(() => {})
    })
}));

test('voting', () => {
    const vote = () => {},
        pair = ['Trainspotting', '28 Days Later'],
        component = renderer.create(
            <Voting pair={pair} vote={vote} />
        ),
        tree = component.toJSON();

    expect(tree).toMatchSnapshot();
});

test('voted', () => {
    const vote = () => {},
        pair = ['Trainspotting', '28 Days Later'],
        component = renderer.create(
            <Voting pair={pair} vote={vote} hasVoted={pair[0]}/>
        ),
        tree = component.toJSON();

    expect(tree).toMatchSnapshot();
});

test('winner', () => {
    const pair = ['Trainspotting', '28 Days Later'],
        component = renderer.create(
            <Voting pair={pair} winner={pair[0]} />
        ),
        tree = component.toJSON();

    expect(tree).toMatchSnapshot();
});
