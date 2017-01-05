/* eslint no-console: 0 */

import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {syncHistoryWithStore} from 'react-router-redux';
import {ipcRenderer} from 'electron';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import configureStore from './store';

// import MainWindow from './components/MainWindow.jsx';
import App from './containers/App.jsx';
import HomePage from './containers/HomePage.jsx';
import CounterPage from './containers/CounterPage.jsx';

const routes = (
    <Route path={'/'} component={App}>
        <IndexRoute component={HomePage} />
        <Route path="/counter" component={CounterPage} />
    </Route>
    ),
    store = configureStore(),
    history = syncHistoryWithStore(hashHistory, store);

ipcRenderer.on('store-update', (event, arg) => {
    console.log('store-update recieved', event, arg);
});

ipcRenderer.send('window-connected');

window.onload = () => {
    const container = document.querySelector('.app');
    if (!container) {
        return;
    }
    // render(<MainWindow ipc={ipcRenderer} />, container);
    render(
        <Provider store={store}>
            <Router history={history} routes={routes} />
        </Provider>,
        container
    );
};
