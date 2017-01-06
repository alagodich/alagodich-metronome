import {combineReducers} from 'redux';
import {routerReducer as routing} from 'react-router-redux';
import counter from './counter';
import voting from './voting';
import metronome from './metronome';

const rootReducer = combineReducers({counter, voting, metronome, routing});

export default rootReducer;
