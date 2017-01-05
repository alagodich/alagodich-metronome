/* eslint no-console: 0 */

import MainWindow from './components/MainWindow.jsx';
import React from 'react';
import ReactDom from 'react-dom';
import {ipcRenderer} from 'electron';

ipcRenderer.on('store-update', (event, arg) => {
    console.log('store-update recieved', event, arg);
});

ipcRenderer.send('window-connected');

window.onload = () => {
    const container = document.querySelector('.app');
    if (!container) {
        return;
    }
    ReactDom.render(<MainWindow ipc={ipcRenderer} />, container);
};
