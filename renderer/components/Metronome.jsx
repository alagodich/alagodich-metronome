'use strict';

import React, {Component, PropTypes} from 'react';

const propTypes = {
    // ipc: PropTypes.object
};

class Metronome extends Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        // this.props.ipc.on('asynchronous-reply', (event, arg) => {
        //     const message = `Asynchronous message reply: ${arg}`;
        //     this.responseContainer.innerHTML = message;
        // });
    }

    handleClick() {
        // this.props.ipc.send('asynchronous-message', 'ping');
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

Metronome.propTypes = propTypes;
export default Metronome;
