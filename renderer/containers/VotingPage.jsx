import {connect} from 'react-redux';
import Voting from '../components/Voting.jsx';
import * as actions from '../actions/voting';

function mapStateToProps(state) {
    return {
        entries: state.voting.entries,
        pair: state.voting.vote.pair,
        tally: state.voting.vote.tally,
        hasVoted: state.voting.hasVoted,
        winner: state.voting.winner
    };
}

function mapDispatchToProps(dispatch) {
    return {
        vote: entry => () => dispatch(actions.vote(entry)),
        next: () => () => dispatch(actions.next())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Voting);
