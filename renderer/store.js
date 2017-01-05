import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {hashHistory} from 'react-router';
import {routerMiddleware, push} from 'react-router-redux';
import createLogger from 'redux-logger';
import rootReducer from './reducers/index.js';

import * as counterActions from './actions/counter.js';

const actionCreators = Object.assign({
        push
    }, counterActions),
    logger = createLogger({
        level: 'info',
        collapsed: true
    }),
    // If Redux DevTools Extension is installed use it, otherwise use Redux compose
    /* eslint-disable no-underscore-dangle */
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Options: http://zalmoxisus.github.io/redux-devtools-extension/API/Arguments.html
        actionCreators
    })
    : compose,
    router = routerMiddleware(hashHistory),
    enhancer = composeEnhancers(
        applyMiddleware(thunk, router, logger)
    );

export default function configureStore(initialState) {
    return createStore(rootReducer, initialState, enhancer);
}
