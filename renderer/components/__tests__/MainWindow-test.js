import React from 'react';
import MainWindow from '../MainWindow';
import renderer from 'react-test-renderer';

jest.mock('electron', () => ({
    ipcRenderer: ({
        on: jest.fn(() => {})
    })
}));

test('MainWindow can be rendered', () => {
    const component = renderer.create(<MainWindow />),
        tree = component.toJSON();

    expect(tree).toMatchSnapshot();
});
