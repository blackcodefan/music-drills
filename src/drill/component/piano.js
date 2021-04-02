import React from "react";
import { Piano, MidiNumbers } from './react-piano/react-piano.esm';
import './react-piano/styles.css';
import DimensionsProvider from './demention_provider';
import SoundfontProvider from './sound';

const audioContext = new (window.AudioContext || window.webkitAudioContext)();
const soundfontHostname = 'https://d1pzp51pvbm36p.cloudfront.net';

const noteRange = {
    first: MidiNumbers.fromNote('e3'),
    last: MidiNumbers.fromNote('e6'),
};

const CustomPiano = props =>{

    return <DimensionsProvider>
        {({ containerWidth, containerHeight }) => (
            <SoundfontProvider
                instrumentName="acoustic_grand_piano"
                audioContext={audioContext}
                hostname={soundfontHostname}
                playNote={props.playNote}
                render={({ isLoading, playNote, stopNote }) => (
                    <Piano
                        noteRange={noteRange}
                        width={containerWidth}
                        playNote={playNote}
                        stopNote={stopNote}
                        disabled={isLoading}
                        notes={props.notes}
                        {...props}
                    />
                )}
            />
        )}
    </DimensionsProvider>;
};

export default CustomPiano;