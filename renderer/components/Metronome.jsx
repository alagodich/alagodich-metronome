'use strict';
/* eslint complexity: 0 */
/* eslint react/no-set-state: 0 */
/* eslint no-console: 0 */

import React, {Component} from 'react';
import {ipcRenderer as ipc} from 'electron';

// import 'script-loader!Bower/Snap.svg/dist/snap.svg.js';

// const minTempo = 30,
//     maxTempo = 200,
//     minVolume = 0,
//     maxVolume = 100,
//     lookAhead = 25.0,
//     /**
//      * How far ahead to schedule audio (sec)
//      */
//     scheduleAheadTime = 0.1,
//     noteLength = 0.05,
//     /**
//      * Svg settings
//      */
//     svgHeight = 50,
//     svgPadding = 4,
//     rulerLineWidth = 1,
//     quarterSerifHeight = 14,
//     eightSerifHeight = 7,
//     rulerColor = '#979797',
//     stressedNoteColor = '#DB2828',
//     noteColor = '#2185D0',
//     emptyNoteColor = '#EEE',
//     defaultState = {
//         tempo: 101.0,
//         noteResolution: '4',
//         isPlaying: false,
//         signature: '4/4',
//         accentFirstBeat: false,
//         volume: 0.5,
//         useOscillator: true
//     },
//     spaceKeyCode = 32;

/**
 * TODO get rid of Snap and render svg with pure js
 */
class Metronome extends Component {
    componentDidMount() {
        ipc.on('asynchronous-reply', (event, arg) => {
            const message = `Asynchronous message reply: ${arg}`;
            this.responseContainer.innerHTML = message;
        });
    }

    handleClick() {
        ipc.send('asynchronous-message', 'ping');
        console.log('click handled');
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
