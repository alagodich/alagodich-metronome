import React, {Component} from 'react';
import Metronome from './Metronome.jsx';

const propTypes = {};

class MainWindow extends Component {
    render() {
        return (
            <div>
                <Metronome />
            </div>
        );
    }
}

MainWindow.propTypes = propTypes;

export default MainWindow;
