'use strict';

import React, {Component} from 'react';
import {ipcRenderer} from 'electron';

class Metronome extends Component {
    componentDidMount() {
        ipcRenderer.on('asynchronous-reply', (event, arg) => {
            const message = `Asynchronous message reply: ${arg}`;
            this.responseContainer.innerHTML = message;
        });
    }

    handleClick() {
        ipcRenderer.send('asynchronous-message', 'ping');
    }

    render() {
        return (
            <div className="metronome">
                <button className="ui icon button" onClick={this.handleClick}>
                    <i className="cloud icon" />
                </button>
                <div ref={c => (this.responseContainer = c)} />
            </div>
        );
    }
}

export default Metronome;
