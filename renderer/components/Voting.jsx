import React, {PureComponent, PropTypes} from 'react';

const propTypes = {
    pair: PropTypes.object,
    vote: PropTypes.func,
    hasVoted: PropTypes.string,
    winner: PropTypes.string
};

class Voting extends PureComponent {
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
        );
    }
}

Voting.propTypes = propTypes;

export default Voting;
