import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Metronome from '../components/Metronome.jsx';
import * as MetronomeActions from '../actions/metronome.js';

function mapStateToProps(state) {
    return {
        loading: state.metronome.loading,
        tempo: state.metronome.tempo,
        noteResolution: state.metronome.noteResolution,
        signature: state.metronome.signature,
        volume: state.metronome.volume,
        isPlaying: state.metronome.isPlaying,
        audio: state.metronome.audio
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(MetronomeActions, dispatch);
}

export function onInit(dispatch) {
    dispatch(MetronomeActions.fetchBeats());
}

export function metronomePage() {
    return connect(mapStateToProps, mapDispatchToProps)(Metronome);
}
