import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Metronome from '../components/Metronome.jsx';
import * as MetronomeActions from '../actions/metronome';

function mapStateToProps(state) {
    return {
        counter: state.metronome
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(MetronomeActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Metronome);
