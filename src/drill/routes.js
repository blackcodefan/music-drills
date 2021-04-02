import React from 'react';

const Home = React.lazy(() => import('./home'));

const ChordOption = React.lazy(() => import('./chord/option'));
const ChordToSpell = React.lazy(() => import('./chord/chordToSpell'));
const ChordNameOnStaff = React.lazy(() => import('./chord/chordNameOnStaff'));
const ChordSpellOnStaff = React.lazy(() => import('./chord/chordSpellOnStaff'));
const ChordNotesOnInstrument = React.lazy(() => import('./chord/chordNotesOnInstrument'));

const IntervalStaff = React.lazy(() => import('./interval/staff'));
const IntervalInstrument = React.lazy(() => import('./interval/instrument'));
const IntervalName = React.lazy(() => import('./interval/name'));

const NoteStaff = React.lazy(() => import('./note/staff'));
const NoteInstrument = React.lazy(() => import('./note/instrument'));

const ScaleOption = React.lazy(() => import('./scale/option'));
const ScaleSpell = React.lazy(() => import('./scale/scaleSpell'));
const ScaleSpellOnStaff = React.lazy(() => import('./scale/scaleSpellOnStaff'));
const ScaleSpellOnInstrument = React.lazy(() => import('./scale/scaleSpellOnInstrument'));
const ScaleNotesOnInstrument = React.lazy(() => import('./scale/scaleNotesOnInstrument'));

const routes = [

    {path: '/drills/chord-option', name: 'Chord Option', component: ChordOption, exact: true},
    {path: '/drills/chord-to-spell', name: 'Spell Chord', component: ChordToSpell, exact: true},
    {path: '/drills/chord-name-staff', name: 'Name Chord on Staff', component: ChordNameOnStaff, exact: true},
    {path: '/drills/chord-spell-staff', name: 'Spell Chord on Staff', component: ChordSpellOnStaff, exact: true},
    {path: '/drills/chord-notes-instrument', name: 'Select All Chord notes on Instrument', component: ChordNotesOnInstrument, exact: true},

    {path: '/drills/interval-staff', name: 'Place Interval Note on Staff', component: IntervalStaff, exact: true},
    {path: '/drills/interval-instrument', name: 'Place Interval Note on Instrument', component: IntervalInstrument, exact: true},
    {path: '/drills/interval-name', name: 'Name the Interval', component: IntervalName, exact: true},

    {path: '/drills/note-staff', name: 'Name Note on Staff', component: NoteStaff, exact: true},
    {path: '/drills/note-instrument', name: 'Name Note on Instrument', component: NoteInstrument, exact: true},

    {path: '/drills/scale-option', name: 'Scale Option', component: ScaleOption, exact: true},
    {path: '/drills/scale-spell', name: 'Spell Scale', component: ScaleSpell, exact: true},
    {path: '/drills/scale-spell-staff', name: 'Spell Scale on Staff', component: ScaleSpellOnStaff, exact: true},
    {path: '/drills/scale-spell-instrument', name: 'Spell Scale on Instrument', component: ScaleSpellOnInstrument, exact: true},
    {path: '/drills/scale-notes-instrument', name: 'Select All Scale Notes on Instrument', component: ScaleNotesOnInstrument, exact: true},

    {path: '/drills', name: 'Music Drills', component: Home, exact: false},
];

export default routes;