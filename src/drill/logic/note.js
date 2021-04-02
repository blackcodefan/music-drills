
const Intervals = [
    {
        fullName: 'Perfect 1st',
        notes: ['1', '1'],
        shortName: 'Perf. 1st'
    },
    {
        fullName: 'Minor 2nd',
        notes: ['1', 'b2'],
        shortName: 'Min 2nd'
    },
    {
        fullName: 'Major 2nd',
        notes: ['1', '2'],
        shortName: 'Maj 2nd'
    },
    {
        fullName: 'Minor 3rd',
        notes: ['1', 'b3'],
        shortName: 'Min 3rd'
    },
    {
        fullName: 'Major 3rd',
        notes: ['1', '3'],
        shortName: 'Maj 3rd'
    },
    {
        fullName: 'Perfect 4th',
        notes: ['1', '4'],
        shortName: 'Perf. 4th'
    },
    {
        fullName: 'Augmented 4th',
        notes: ['1', 'b5'],
        shortName: 'Aug. 4th'
    },
    {
        fullName: 'Diminished 5th',
        notes: ['1', 'b5'],
        shortName: 'Dim. 5th'
    },
    {
        fullName: 'Perfect 5th',
        notes: ['1', '5'],
        shortName: 'Perf. 5th'
    },
    {
        fullName: 'Minor 6th',
        notes: ['1', 'b6'],
        shortName: 'Min 6th'
    },
    {
        fullName: 'Maj 6th',
        notes: ['1', '6'],
        shortName: 'Maj 6th'
    },
    {
        fullName: 'Minor 7th',
        notes: ['1', 'b7'],
        shortName: 'Min 7th'
    },
    {
        fullName: 'Major 7th',
        notes: ['1', '7'],
        shortName: 'Maj 7th'
    },
    {
        fullName: 'Perfect 8th',
        notes: ['1', '8'],
        shortName: 'Perf. 7th'
    }
];

const Chords = [
    {
        type: 'triad',
        name: 'Maj',
        notes: ['1', '3', '5']
    },
    {
        type: 'triad',
        name: 'Min',
        notes: ['1', 'b3', '5']
    },
    {
        type: 'triad',
        name: 'Dim',
        notes:  ['1', 'b3', 'b5']
    },
    {
        type: 'triad',
        name: 'Aug',
        notes: ['1', '3', '#5']
    },
    {
        type: 'triad',
        name: 'Sus4',
        notes: ['1', '4', '5']
    },
    {
        type: '6th',
        name: 'Maj6',
        notes: ['1', '3', '5', '6']
    },
    {
        type: '6th',
        name: 'Min6',
        notes: ['1', 'b3', '5', '6']
    },
    {
        type: '6th',
        name: 'Maj6/9',
        notes: ['1', '3', '5', '5', '9']
    },
    {
        type: '6th',
        name: 'Min6/9',
        notes: ['1', 'b3', '5', '6', '9']
    },
    {
        type: '7th',
        name: 'Maj7',
        notes: ['1', '3', '5', '7']
    },
    {
        type: '7th',
        name: 'Min7',
        notes: ['1', 'b3', '5', 'b7']
    },
    {
        type: '7th',
        name: 'Dom7',
        notes: ['1', '3', '5', 'b7']
    },
    {
        type: '7th',
        name: 'Dim7',
        notes: ['1', 'b3', 'b5', 'bb7']
    },
    {
        type: '7th',
        name: 'Aug7',
        notes: ['1', '3', '#5', 'b7']
    },
    {
        type: '7th',
        name: 'Dom7Sus2',
        notes: ['1', '2', '5', 'b7']
    },
    {
        type: '7th',
        name: 'Dom7Sus2',
        notes: ['1', '4', '5', 'b7']
    },
    {
        type: '7th',
        name: 'Min/Maj7',
        notes: ['1', 'b3', '5','7']
    },
    {
        type: '7th',
        name: 'Min7b5',
        notes: ['1', 'b3', 'b5', 'b7']
    },
    {
        type: '7th',
        name: 'Maj7b5',
        notes: ['1', '3', 'b5', '7']
    },
    {
        type: '7th',
        name: 'Dom7b9',
        notes: ['1', '3', '5', 'b7', 'b9']
    },
    {
        type: '7th',
        name: 'Dom7#9',
        notes: ['1', '3', '5', 'b7', '#9']
    },
    {
        type: '7th',
        name: 'Dom7b5',
        notes: ['1', '3', 'b5', 'b7']
    },
    {
        type: '7th',
        name: 'Dom7b9b5',
        notes: ['1', '3', 'b5', 'b7', 'b9']
    },
    {
        type: '7th',
        name: 'Dom7b9#5',
        notes: ['1', '3', '#5', 'b7', 'b9']
    },
    {
        type: '7th',
        name: 'Dom7#9b5',
        notes: ['1', '3', 'b5', 'b7', '#9']
    },
    {
        type: '7th',
        name: 'Dom7#5#9',
        notes: ['1', '3', '#5', 'b7', '#9']
    },
    {
        type: '7th',
        name: 'Aug7b9',
        notes: ['1', '3', '#5', 'b7', 'b9']
    },
    {
        type: '7th',
        name: 'Dom7#11',
        notes: ['1', '3', '5', 'b7', '#11']
    },
    {
        type: '7th',
        name: 'Maj7#11',
        notes: ['1', '3', '5', '7', '#11']
    },
    {
        type: '9th',
        name: 'Maj9',
        notes: ['1', '3', '5', '7', '9']
    },
    {
        type: '9th',
        name: 'Min9',
        notes: ['1', 'b3', '5', 'b7', '9']
    },
    {
        type: '9th',
        name: 'Min/Maj9',
        notes: ['1', 'b3', '5', '7', '9']
    },
    {
        type: '9th',
        name: 'Sus9',
        notes: ['1', '4', '5', 'b7', '9']
    },
    {
        type: '9th',
        name: 'Maj(add9)',
        notes: ['1', '3', '5','9']
    },
    {
        type: '9th',
        name: 'Min(add9)',
        notes: ['1', 'b3', '5', '9']
    },
    {
        type: '9th',
        name: 'Dom9',
        notes: ['1', '3', '5', 'b7', '9']
    },
    {
        type: '11th',
        name: 'Dom11',
        notes: ['1', '3', '5', 'b7', '9', '11']
    },
    {
        type: '11th',
        name: 'Maj11',
        notes: ['1', '3', '5', '7', '9', '11']
    },
    {
        type: '11th',
        name: 'Min11',
        notes: ['1', 'b3', '5', 'b7', '9', '11']
    },
    {
        type: '11th',
        name: 'Min/Maj11',
        notes: ['1', 'b3', '5', '7', '9', '11']
    },
    {
        type: '13th',
        name: 'Dom13',
        notes: ['1', '3', '5', 'b7', '9', '11', '13']
    },
    {
        type: '13th',
        name: 'Maj13',
        notes: ['1', '3', '5', '7', '9', '11', '13']
    },
    {
        type: '13th',
        name: 'Min13',
        notes: ['1', 'b3', '5', 'b7', '9', '11', '13']
    },
    {
        type: '13th',
        name: 'Min/Maj13',
        notes: ['1', 'b3', '5', '7', '9', '11', '13']
    }
];

const Scales = [
    {
        index: 1,
        type: 'Major',
        name: 'Major (Ionian)',
        notes: ['1', '2', '3', '4', '5', '6', '7']
    },
    {
        index: 2,
        type: 'Major',
        name: 'Dorian',
        notes: ['1', '2', 'b3', '4', '5', '6', 'b7']
    },
    {
        index: 3,
        type: 'Major',
        name: 'Phrygian',
        notes: ['1', 'b2', 'b3', '4', '5', '6', 'b7']
    },
    {
        index: 4,
        type: 'Major',
        name: 'Lydian',
        notes: ['1', '2', '3', '#4', '5', '6', '7']
    },
    {
        index: 5,
        type: 'Major',
        name: 'Mixolydian',
        notes: ['1', '2', '3', '4', '5', '6', 'b7']
    },
    {
        index: 6,
        type: 'Major',
        name: 'Aeolian',
        notes: ['1', '2', 'b3', '4', '5', 'b6', 'b7']
    },
    {
        index: 7,
        type: 'Pentatonic/Blues',
        name: 'Minor Pentatonic',
        notes: ['1', 'b3', '4', '5', 'b7']
    },
    {
        index: 8,
        type: 'Pentatonic/Blues',
        name: 'Major Pentatonic',
        notes: ['1', '2', '3', '5', '6']
    },
    {
        index: 9,
        type: 'Pentatonic/Blues',
        name: 'Minor Blues',
        notes: ['1', 'b3', '4', 'b5', '5', 'b7']
    },
    {
        index: 10,
        type: 'Pentatonic/Blues',
        name: 'Major Blues',
        notes: ['1', '2', 'b3', '4', '5', '6']
    },
    {
        index: 11,
        type: 'Melodic Minor',
        name: 'Melodic Minor',
        notes: ['1', '2', 'b3', '4', '5', '6', '7']
    },
    {
        index: 12,
        type: 'Melodic Minor',
        name: 'Dorian b2',
        notes: ['1', 'b2', 'b3', '4', '5', '6', 'b7']
    },
    {
        index: 13,
        type: 'Melodic Minor',
        name: 'Lydian Augmented',
        notes: ['1', '2', '3', '#4', '#5', '6', '7']
    },
    {
        index: 14,
        type: 'Melodic Minor',
        name: 'Lydian Dominant',
        notes: ['1', '2', '3', '#4', '5', '6', 'b7']
    },
    {
        index: 15,
        type: 'Melodic Minor',
        name: 'Mixolydian b6',
        notes: ['1', '2', '3', '4', '5', 'b6', 'b7']
    },
    {
        index: 16,
        type: 'Melodic Minor',
        name: 'Locrian #2',
        notes: ['1', '2', 'b3', '4', 'b5', 'b6', 'b7']
    },
    {
        index: 17,
        type: 'Melodic Minor',
        name: 'Altered Dominant',
        notes: ['1', 'b2', '#2', '3', 'b5', '#5', 'b7']
    },
    {
        index: 18,
        type: 'Harmonic Minor',
        name: 'Harmonic Minor',
        notes: ['1', '2', 'b3', '4', '5', 'b6', '7']
    },
    {
        index: 19,
        type: 'Harmonic Minor',
        name: 'HM Mode 2:Locrian #6',
        notes: ['1', 'b2', 'b3', '4', 'b5', '6', 'b7']
    },
    {
        index: 20,
        type: 'Harmonic Minor',
        name: 'HM Mode 3:Harmonic Major',
        notes: ['1', '2', '3', '4', '5', 'b6', '7']
    },
    {
        index: 21,
        type: 'Harmonic Minor',
        name: 'HM Mode 4:Spanish Phrygian',
        notes: ['1', '2', 'b3', '#4', '5', '6', 'b7']
    },
    {
        index: 22,
        type: 'Harmonic Minor',
        name: 'HM Mode 5:Phrygian Dominant',
        notes: ['1', 'b2', '3', '4', '5', 'b6', 'b7']
    },
    {
        index: 23,
        type: 'Harmonic Minor',
        name: 'HM Mode 6:Lydian b3',
        notes: ['1', '2', 'b3', '#4', '5', '6', '7']
    },
    {
        index: 24,
        type: 'Harmonic Minor',
        name: 'HM Mode 7:Alt Dominant bb7',
        notes: ['1', 'b2', 'b3', 'b4', 'b5', 'b6', 'bb7']
    },
    {
        index: 25,
        type: 'Symmetric',
        name: 'Diminished HW',
        notes: ['1', 'b2', '#2', '3', '#4', '5', '6', 'b7']
    },
    {
        index: 26,
        type: 'Symmetric',
        name: 'Diminished WH',
        notes: ['1', '2', 'b3', '4', 'b5', 'b6', '6', '7']
    },
    {
        index: 27,
        type: 'Symmetric',
        name: 'Whole Tone',
        notes: ['1', '2', '3', '#4', '#5', '#6']
    }
];

const Octaves = [
    3, 3, 3, 3, 3, 3, 3, 3,
    4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
    5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
    6, 6, 6, 6, 6
];