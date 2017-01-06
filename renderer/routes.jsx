import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './containers/App.jsx';
import HomePage from './containers/HomePage.jsx';
import CounterPage from './containers/CounterPage.jsx';
import {metronomePage, onInit as initMetronome} from './containers/metronomePage.jsx';
import VotingPage from './containers/VotingPage.jsx';

// this function is called only once, before application initially starts to render react-route and any of its related DOM elements
// it can be used to add init config settings to the application
function onAppInit(dispatch) {
  return (nextState, replace, callback) => {
    dispatch(performTokenRequest())
      .then(() => {
        // callback is like a "next" function, app initialization is stopped until it is called.
        callback();
      });
  };
}

export default dispatch => (
    <Route path={'/'} component={App}>
        <IndexRoute component={HomePage} />
        <Route path="/counter" component={CounterPage} />
        <Route path="/metronome" component={metronomePage()} onEnter={initMetronome(dispatch)} />
        <Route path="/voting" component={VotingPage} />
    </Route>
);
