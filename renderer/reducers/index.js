import {combineReducers} from 'redux';
import {routerReducer as routing} from 'react-router-redux';
import counter from './counter';
import voting from './voting';

const rootReducer = combineReducers({counter, voting, routing});

export default rootReducer;
