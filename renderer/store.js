import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {hashHistory} from 'react-router';
import {routerMiddleware} from 'react-router-redux';
import rootReducer from './reducers/index.js';

const router = routerMiddleware(hashHistory),
    enhancer = applyMiddleware(thunk, router);

export default function configureStore(initialState) {
    return createStore(rootReducer, initialState, enhancer);
}
