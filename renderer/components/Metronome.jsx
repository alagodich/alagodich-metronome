'use strict';

import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import {metronome as Constants} from './../../common/Constants.js';

const propTypes = {
        tempo: PropTypes.number,
        useOscillator: PropTypes.bool,
        noteResolution: PropTypes.number,
        signature: PropTypes.string,
        changeTempo: PropTypes.func,
        changeVolume: PropTypes.func,
        accentFirstBeat: PropTypes.bool,
        volume: PropTypes.number
    },
    defaultProps = Object.assign({
        changeTempo: () => console.log('changeTempo'),
        changeVolume: () => console.log('changeVolume')
    }, Constants.defaultState),
    githubUrl = 'https://github.com/alagodich/alagodich.github.io/blob/master/app/components/Metronome.jsx';

class Metronome extends Component {
    componentDidMount() {
        // this.props.ipc.on('asynchronous-reply', (event, arg) => {
        //     const message = `Asynchronous message reply: ${arg}`;
        //     this.responseContainer.innerHTML = message;
        // });
    }

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
                        <svg ref={c => (this.svgContainer = c)}/>
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
                                    onChange={this.props.changeTempo}
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
                                    onChange={this.props.changeVolume}
                                    className="metronome__slider"
                                />
                            </div>

                            <div>
                                <div className="ui divider"/>
                                <div className="ui oscillator toggle checkbox">
                                    <input
                                        type="checkbox"
                                        tabIndex="0"
                                        className="hidden"
                                        name="oscillator"
                                        defaultChecked={this.props.useOscillator}
                                        onChange={() => {}}
                                    />
                                    <label>{'Digital sound'}</label>
                                </div>
                            </div>

                            <div className="ui divider"/>

                            <div className="inline fields">
                                <div className="field">
                                    <div className="ui resolution radio checkbox">
                                        <input type="radio"
                                            name="resolution"
                                            value="4"
                                            tabIndex="0"
                                            className="hidden"
                                            defaultChecked={this.props.noteResolution === 4}
                                            onChange={() => {}}
                                        />
                                        <label>{'Quarter'}</label>
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="ui resolution radio checkbox">
                                        <input type="radio"
                                            name="resolution"
                                            value="8"
                                            tabIndex="0"
                                            className="hidden"
                                            defaultChecked={this.props.noteResolution === 8}
                                            onChange={() => {}}
                                        />
                                        <label>{'8th'}</label>
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="ui resolution radio checkbox">
                                        <input type="radio"
                                            name="resolution"
                                            value="12"
                                            tabIndex="0"
                                            className="hidden"
                                            defaultChecked={this.props.noteResolution === 12}
                                            onChange={() => {}}
                                        />
                                        <label>{'Shuffle'}</label>
                                    </div>
                                </div>
                            </div>

                            <div className="ui divider"/>

                            <div className="inline fields">
                                <div className="field">
                                    <div className="ui signature radio checkbox">
                                        <input type="radio"
                                            name="signature"
                                            value="4/4"
                                            tabIndex="0"
                                            className="hidden"
                                            defaultChecked={this.props.signature === '4/4'}
                                            onChange={() => {}}
                                        />
                                        <label>{'4/4'}</label>
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="ui signature radio checkbox">
                                        <input type="radio"
                                            name="signature"
                                            value="3/4"
                                            tabIndex="0"
                                            className="hidden"
                                            defaultChecked={this.props.signature === '3/4'}
                                            onChange={() => {}}
                                        />
                                        <label>{'3/4'}</label>
                                    </div>
                                </div>
                            </div>

                            <div style={{display: this.props.useOscillator ? 'block' : 'none'}}>

                                <div className="ui divider"/>

                                <div className="ui accent toggle checkbox">
                                    <input
                                        type="checkbox"
                                        tabIndex="0"
                                        className="hidden"
                                        name="accent"
                                        defaultChecked={this.props.accentFirstBeat}
                                        onChange={() => {}}
                                    />
                                    <label>{'Accent the first beat'}</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button
                        className="ui bottom primary attached button"
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
Metronome.defaultProps = defaultProps;

export default Metronome;
