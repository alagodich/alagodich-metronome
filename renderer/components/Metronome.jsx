'use strict';

import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import {metronome as Constants} from './../../common/Constants.js';
import {Button, Icon} from 'semantic-ui-react';

const propTypes = {
    loading: PropTypes.bool,
    isPlaying: PropTypes.bool,
    tempo: PropTypes.number,
    volume: PropTypes.number,

    noteResolution: PropTypes.number,
    signature: PropTypes.string,

    setTempo: PropTypes.func,
    setVolume: PropTypes.func,
    start: PropTypes.func,
    stop: PropTypes.func
};

class Metronome extends Component {

    render() {
        return (
            <div className="metronome">
                <div>
                    <Link to="/">{'back'}</Link>
                </div>
                <div className="ui centered card">
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
                                    style={{width: '100%'}}
                                />
                            </div>
                        </div>
                    </div>
                    <Button
                        primary
                        attached="bottom"
                        disabled={this.props.loading}
                        onClick={this.props.isPlaying ? this.props.stop : this.props.start}
                    >
                        <Icon name={this.props.isPlaying ? 'stop' : 'play'} />
                    </Button>
                </div>

            </div>
        );
    }
}

Metronome.propTypes = propTypes;

export default Metronome;
