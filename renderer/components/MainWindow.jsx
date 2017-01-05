import React, {Component, PropTypes} from 'react';
import Metronome from './Metronome.jsx';
import Voting from './Voting.jsx';

const propTypes = {
        ipc: PropTypes.object
    },
    pair = ['Trainspotting', '28 Days Later'];

class MainWindow extends Component {
    render() {
        return (
            <div>
                <Voting pair={pair} />
                <Metronome ipc={this.props.ipc} />
            </div>
        );
    }
}

MainWindow.propTypes = propTypes;

export default MainWindow;
