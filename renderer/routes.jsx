import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './containers/App.jsx';
import HomePage from './containers/HomePage.jsx';
import CounterPage from './containers/CounterPage.jsx';
import {metronomePage, onInit as initMetronome} from './containers/metronomePage.jsx';
import VotingPage from './containers/VotingPage.jsx';

// export default dispatch => (
//     <Route path={'/'} component={App}>
//         <IndexRoute component={HomePage} />
//         <Route path="/counter" component={CounterPage} />
//         <Route path="/metronome" component={metronomePage()} onEnter={initMetronome(dispatch)} />
//         <Route path="/voting" component={VotingPage} />
//     </Route>
// );
export default dispatch => (
    <Route path={'/'} component={App}>
        <IndexRoute component={metronomePage()} onEnter={initMetronome(dispatch)} />
    </Route>
);
