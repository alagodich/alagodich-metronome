import React from 'react';
import Voting from '../Voting';
import renderer from 'react-test-renderer';

jest.mock('electron', () => ({
    ipcRenderer: ({
        on: jest.fn(() => {})
    })
}));

test('Voting can be rendered', () => {
    const component = renderer.create(<Voting pair={['Trainspotting', '28 Days Later']}/>),
        tree = component.toJSON();

    expect(tree).toMatchSnapshot();
});
