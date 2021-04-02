import React, {useEffect, useState} from 'react';
import {Fretboard} from "./react-fretboard";

const Guitar = props =>{

    useEffect(() =>{
        let elem = document.getElementById('fretboard');
        let width = elem.offsetWidth;
        elem.innerHTML = '';

        const fb = Fretboard({
            where: '#fretboard',
            fretWidth: Math.round(width /13),
            fretHeight: Math.round(width /25),
            onLineClick: props.onLineClick,
            onNoteClick: props.onNoteClick,
            notes: props.notes
        });

        fb.paint();

    }, [props.notes]);

    return <div id="fretboard"/>;
};

export default Guitar;