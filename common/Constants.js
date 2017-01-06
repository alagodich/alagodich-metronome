module.exports = {
    metronome: {
        minTempo: 30,
        maxTempo: 200,
        minVolume: 0,
        maxVolume: 100,
        lookAhead: 25.0,
        /**
         * How far ahead to schedule audio (sec)
         */
        scheduleAheadTime: 0.1,
        noteLength: 0.05,
        /**
         * Svg settings
         */
        svgHeight: 50,
        svgPadding: 4,
        rulerLineWidth: 1,
        quarterSerifHeight: 14,
        eightSerifHeight: 7,
        rulerColor: '#979797',
        stressedNoteColor: '#DB2828',
        noteColor: '#2185D0',
        emptyNoteColor: '#EEE',
        defaultState: {
            tempo: 101.0,
            noteResolution: 4,
            isPlaying: false,
            signature: '4/4',
            accentFirstBeat: false,
            volume: 0.5,
            useOscillator: true
        },
        spaceKeyCode: 32
    }
};
