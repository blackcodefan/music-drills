import React, {useEffect, useState} from 'react';
import { CardHeader, CardBody, Card, CardFooter, Button } from "reactstrap";
import { AppSwitch } from '@coreui/react'
import CustomPiano from '../../component/piano';
import Guitar from '../../component/guitar';
import {GuitarNoteArrangement, Notes} from "../../logic/source";

const getNotes = notesInfo => {
    let notes = [];
    notesInfo.forEach(info =>{
        let note = Notes[info.index];
        let newNote = {...note,
            note: note.note[info.noteIndex],
            accident: note.accident[info.noteIndex] || null,
            color: info.color || 'default',
            readOnly: info.readOnly || false,
            string: info.string || note.guitar[note.guitar.length - 1]
        };

        notes.push(newNote);
    });
    return notes;
};

const transferToGuitarFormat = notes =>{
    let guitarNotes = [];
    notes.forEach(note =>{
        let guitarNote = {
            note: `${note.note}${note.accident?note.accident:''}${note.octave - 1}`,
            string: note.string,
            color: note.color,
            index: note.index,
            readOnly: note.readOnly
        };
        guitarNotes.push(guitarNote);
    });
    return guitarNotes;
};

const Instrument = props =>{

    const notes = getNotes(props.notes);
    const guitar = transferToGuitarFormat(notes);
    const [piano, chooseInstrument] = useState(true);

    const pianoStrike = miniNumber =>{

        let note = Notes[miniNumber - 52];

        !!props.onNoteSelect?
                props.onNoteSelect({
                index: miniNumber - 52,
                noteIndex: 0,
                color: 'black',
                string: note.guitar[note.guitar.length - 1],
                readOnly: false
            })
            :console.log('');
    };

    const onGuitarLineClick = (midiIndex, stringIndex, termIndex) =>{

        let index = GuitarNoteArrangement[midiIndex];

        !!props.onNoteSelect?
            props.onNoteSelect({
                index: index,
                noteIndex: 0,
                color: 'black',
                string: stringIndex,
                readOnly: false
            })
            :console.log('');
    };

    const onGuitarNoteClick = (index, string) =>{

        !!props.onNoteSelect?props.onNoteSelect({
            index: index,
            noteIndex: 0,
            color: 'black',
            string: string,
            readOnly: false
        }):console.log('');
    };

    return <Card className="border-primary">
        <CardHeader>Instrument
            <div className="card-header-actions instrument-switcher">
                <strong>Piano</strong>
                <AppSwitch className={'mx-1'} color={'success'} label
                           checked dataOn={'P'}
                           dataOff={'G'}
                           onChange={e => chooseInstrument(e.target.checked)}/>
                <strong>Guitar</strong>
            </div>
        </CardHeader>
        <CardBody>
            {
                piano?
                    <CustomPiano
                        notes={notes}
                        playNote={pianoStrike}
                    />:
                    <Guitar notes={guitar} onLineClick={onGuitarLineClick} onNoteClick={onGuitarNoteClick}/>
            }
        </CardBody>
        {props.onAnswer?
            <CardFooter className="text-center">
                <Button color={
                    props.answerStatus === 0?
                        "primary":props.answerStatus === 1?
                        "success":"danger"} onClick={props.onAnswer}>
                    {
                        props.answerStatus === 0?'Answer':'Next'
                    }
                </Button>
            </CardFooter>
            :<div />
        }
    </Card>;
};

export default Instrument;