import React, {Component, PropTypes} from 'react';

const propTypes = {
    pair: PropTypes.array
};

class Voting extends Component {
    getPair() {
        return this.props.pair || [];
    }
    render() {
        return (
            <div className="voting">
                {this.getPair().map(entry => <button className="ui button" key={entry}>
                    <h5>{entry}</h5>
                </button>)}
            </div>
        );
    }
}

Voting.propTypes = propTypes;

export default Voting;
