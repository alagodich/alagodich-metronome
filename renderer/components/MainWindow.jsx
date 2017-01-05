import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import Metronome from './Metronome.jsx';
import Voting from './Voting.jsx';
import {List as list} from 'immutable';

const propTypes = {
        // ipc: PropTypes.object,
        // children: PropTypes.object
    },
    pair = list.of('Trainspotting', '28 Days Later'),
    vote = entry => () => console.log(`I vote for ${entry}`);

class MainWindow extends Component {
    render() {
        console.log('MainWindow::render()');
        // return React.cloneElement(this.props.children, {pair: pair.toJS(), vote});
        return (
            <div>
                <Voting pair={pair} vote={vote} hasVoted={pair[0]}/>
                <Metronome />
                <Link to="/counter">to Counter</Link>
            </div>
        );
    }
}

MainWindow.propTypes = propTypes;

export default MainWindow;
