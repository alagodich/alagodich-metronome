'use strict';

import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import {metronome as Constants} from './../../common/Constants.js';

const propTypes = {
        loading: PropTypes.bool,

        audio: PropTypes.shape({
            context: PropTypes.object,
            source: PropTypes.object,
            gainNode: PropTypes.object
        }),

        isPlaying: PropTypes.bool,
        tempo: PropTypes.number,
        volume: PropTypes.number,

        noteResolution: PropTypes.number,
        signature: PropTypes.string,

        setTempo: PropTypes.func,
        setVolume: PropTypes.func,
        toggle: PropTypes.func

        // useOscillator: PropTypes.bool,
        // accentFirstBeat: PropTypes.bool,
    },
    githubUrl = 'https://github.com/alagodich/alagodich.github.io/blob/master/app/components/Metronome.jsx';

class Metronome extends Component {
    render() {
        return (
            <div className="metronome">
                <div>
                    <Link to="/">{'back'}</Link>
                </div>
                <div className="ui centered card">
                    <div className="content" ref={c => (this.container = c)}>
                        <a
                            href={githubUrl}
                            target="_blank"
                            className="ui right corner blue label"
                        >
                            <i
                                className="white github icon"
                                style={{textDecoration: 'none', cursor: 'pointer'}}
                            />
                        </a>
                    </div>
                    <div className="extra content ui form">
                        <div id="controls">
                            <div id="tempo">
                                {'Tempo: '}<span>{this.props.tempo}</span><br/>
                                <input
                                    id="tempo"
                                    type="range"
                                    min={Constants.minTempo}
                                    max={Constants.maxTempo}
                                    value={this.props.tempo}
                                    onChange={this.props.setTempo}
                                    className="metronome__slider"
                                />
                            </div>
                            <div id="volume">
                                {'Volume: '}<span>{this.props.volume}{'%'}</span><br/>
                                <input
                                    id="volume"
                                    type="range"
                                    min={Constants.minVolume}
                                    max={Constants.maxVolume}
                                    value={this.props.volume}
                                    onChange={this.props.setVolume}
                                    className="metronome__slider"
                                />
                            </div>

                        </div>
                    </div>
                    <button
                        className={
                            this.props.loading
                                ? 'ui bottom primary attached disabled button'
                                : 'ui bottom primary attached button'
                        }
                        onClick={this.props.toggle}
                    >
                        <i className="white play icon" />
                    </button>
                </div>

            </div>
        );
    }
}

Metronome.propTypes = propTypes;

export default Metronome;
