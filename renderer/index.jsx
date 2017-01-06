/* eslint no-console: 0 */

import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {syncHistoryWithStore} from 'react-router-redux';
import {ipcRenderer} from 'electron';
import {Router, hashHistory} from 'react-router';
import configureStore from './store.js';
import routes from './routes.jsx';

const store = configureStore(),
    history = syncHistoryWithStore(hashHistory, store);

store.dispatch({
    type: 'SET_ENTRIES',
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
});
store.dispatch({type: 'NEXT'});

ipcRenderer.on('store', (event, arg) => {
    console.log('store-update recieved', event, arg);
});

ipcRenderer.send('window-connected');

window.onload = () => {
    const container = document.querySelector('.app');
    if (!container) {
        return;
    }
    render(
        <Provider store={store}>
            <Router history={history} routes={routes} />
        </Provider>,
        container
    );
};
