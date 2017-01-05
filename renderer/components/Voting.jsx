import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

const propTypes = {
    pair: PropTypes.array,
    entries: PropTypes.array,
    vote: PropTypes.func,
    next: PropTypes.func,
    hasVoted: PropTypes.string,
    winner: PropTypes.string,
    tally: PropTypes.object
};

class Voting extends Component {
    getPair() {
        return this.props.pair || [];
    }
    isDisabled() {
        return !!this.props.hasVoted;
    }
    hasVotedFor(entry) {
        return this.props.hasVoted === entry;
    }
    hasWinner() {
        return !!this.props.winner;
    }
    render() {
        return (
            <div>

                <div>
                    <Link to="/">{'back'}</Link>
                </div>

                <div className="entries ui list">
                    {this.props.entries.map(entry => <div className="item" key={entry}>{entry}</div>)}
                </div>

                <div className="voting">
                    {
                        this.hasWinner()
                            ? <span>{this.props.winner}{' winner!'}</span>
                            : (
                                <div className="voting ui buttons">
                                    {this.getPair().map(entry => (
                                        <button className="ui button" key={entry} onClick={this.props.vote(entry)}>
                                            {this.hasVotedFor(entry)
                                                ? <i className="heart icon" />
                                                : null
                                            }
                                            {entry}
                                        </button>
                                    ))}
                                </div>
                            )
                    }
                </div>

                <div className="tally">
                    {
                        !this.props.tally
                            ? null
                            : (
                                <div className="ui list">
                                    {Object.getOwnPropertyNames(this.props.tally).map(entry =>
                                        <div className="item" key={entry}>{entry}{': '}{this.props.tally[entry]}</div>
                                    )}
                                </div>
                            )
                    }
                </div>

                <button className="ui blue button" onClick={this.props.next()}>
                    {'Next'}
                </button>
            </div>
        );
    }
}

Voting.propTypes = propTypes;

export default Voting;
