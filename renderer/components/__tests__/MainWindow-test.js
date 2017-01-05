import React from 'react';
import MainWindow from '../MainWindow';
import renderer from 'react-test-renderer';
import electron from 'electron';

jest.mock('electron', () => ({
    ipcRenderer: ({
        on: jest.fn(() => {})
    })
}));

test('MainWindow can be rendered', () => {
    const component = renderer.create(<MainWindow ipc={electron.ipcRenderer} />),
        tree = component.toJSON();

    expect(tree).toMatchSnapshot();
});
