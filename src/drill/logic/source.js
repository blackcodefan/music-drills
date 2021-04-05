export const RandomInt = (min = 0, max) =>{
    return Math.floor(Math.random() * (max - min) + min);
};

export const Notes = [
    {
        index: 0,
        note: ['e'],
        accident: [],
        octave: 3,
        piano: 52,
        guitar: [6],
    },
    {
        index: 1,
        note: ['f'],
        accident: [],
        octave: 3,
        piano: 53,
        guitar: [6]
    },
    {
        index: 2,
        note: ['f', 'c'],
        octave: 3,
        accident: ['#', 'b'],
        piano: 54,
        guitar: [6]
    },
    {
        index: 3,
        note: ['g'],
        accident: [],
        octave: 3,
        piano: 55,
        guitar: [6]
    },
    {
        index: 4,
        note: ['g', 'a'],
        octave: 3,
        accident: ['#','b'],
        piano: 56,
        guitar: [6]
    },
    {
        index: 5,
        note: 'a',
        accident: [],
        octave: 3,
        piano: 57,
        guitar: [6, 5]
    },
    {
        index: 6,
        note: ['a', 'b'],
        octave: 3,
        accident: ['#', 'b'],
        piano: 58,
        guitar: [6, 5]
    },
    {
        index: 7,
        note: ['b'],
        accident: [],
        octave: 3,
        piano: 59,
        guitar: [6, 5]
    },
    {
        index: 8,
        note: ['c'],
        accident: [],
        octave: 4,
        piano: 60,
        guitar: [6, 5]
    },
    {
        index: 9,
        note: ['c','d'],
        octave: 4,
        accident: ['#', 'b'],
        piano: 61,
        guitar: [6, 5]
    },
    {
        index: 10,
        note: 'd',
        accident: [],
        octave: 4,
        piano: 62,
        guitar: [6, 5, 4]
    },
    {
        index: 11,
        note: ['d', 'e'],
        octave: 4,
        accident: ['#', 'b'],
        piano: 63,
        guitar: [6, 5, 4]
    },
    {
        index: 12,
        note: ['e'],
        accident: [],
        octave: 4,
        piano: 64,
        guitar: [6, 5, 4]
    },
    {
        index: 13,
        note: ['f'],
        accident: [],
        octave: 4,
        piano: 65,
        guitar: [5, 4]
    },
    {
        index: 14,
        note: ['f', 'g'],
        octave: 4,
        accident: ['#', 'b'],
        piano: 66,
        guitar: [5, 4]
    },
    {
        index: 15,
        note: ['g'],
        accident: [],
        octave: 4,
        piano: 67,
        guitar: [5, 4, 3]
    },
    {
        index: 16,
        note: ['g', 'a'],
        octave: 4,
        accident: ['#', 'b'],
        piano: 68,
        guitar: [5, 4, 3]
    },
    {
        index: 17,
        note: ['a'],
        accident: [],
        octave: 4,
        piano: 69,
        guitar: [5, 4, 3]
    },
    {
        index: 18,
        note: ['a', 'b'],
        octave: 4,
        accident: ['#', 'b'],
        piano: 70,
        guitar: [4, 3]
    },
    {
        index: 19,
        note: ['b'],
        accident: [],
        octave: 4,
        piano: 71,
        guitar: [4, 3, 2]
    },
    {
        index: 20,
        note: ['c'],
        accident: [],
        octave: 5,
        piano: 72,
        guitar: [4, 3, 2]
    },
    {
        index: 21,
        note: ['c', 'd'],
        octave: 5,
        accident: ['#', 'b'],
        piano: 73,
        guitar: [4, 3, 2]
    },
    {
        index: 22,
        note: ['d'],
        accident: [],
        octave: 5,
        piano: 74,
        guitar: [4, 3, 2]
    },
    {
        index: 23,
        note: ['d', 'e'],
        octave: 5,
        accident: ['#', 'b'],
        piano: 75,
        guitar: [3, 2]
    },
    {
        index: 24,
        note: ['e'],
        accident: [],
        octave: 5,
        piano: 76,
        guitar: [3, 2, 1]
    },
    {
        index: 25,
        note: ['f'],
        accident: [],
        octave: 5,
        piano: 77,
        guitar: [3, 2, 1]
    },
    {
        index: 26,
        note: ['f', 'g'],
        octave: 5,
        accident: ['#', 'b'],
        piano: 78,
        guitar: [3, 2, 1]
    },
    {
        index: 27,
        note: ['g'],
        accident: [],
        octave: 5,
        piano: 79,
        guitar: [3, 2, 1]
    },
    {
        index: 28,
        note: ['g', 'a'],
        octave: 5,
        accident: ['#', 'b'],
        piano: 80,
        guitar: [2, 1]
    },
    {
        index: 29,
        note: ['a'],
        accident: [],
        octave: 5,
        piano: 81,
        guitar: [2, 1]
    },
    {
        index: 30,
        note: ['a', 'b'],
        octave: 5,
        accident: ['#', 'b'],
        piano: 82,
        guitar: [2, 1]
    },
    {
        index: 31,
        note: ['b'],
        accident: [],
        octave: 5,
        piano: 83,
        guitar: [2, 1]
    },
    {
        index: 32,
        note: ['c'],
        accident: [],
        octave: 6,
        piano: 84,
        guitar: [1]
    },
    {
        index: 33,
        note: ['c', 'd'],
        octave: 6,
        accident: ['#', 'b'],
        piano: 85,
        guitar: [1]
    },
    {
        index: 34,
        note: ['d'],
        accident: [],
        octave: 6,
        piano: 86,
        guitar: [1]
    },
    {
        index: 35,
        note: ['d', 'e'],
        octave: 6,
        accident: ['#', 'b'],
        piano: 87,
        guitar: [1]
    },
    {
        index: 36,
        note: ['e'],
        accident: [],
        octave: 6,
        piano: 88,
        guitar: [1]
    }
];

export const Intervals = [
    {
        index: 0,
        fullName: 'Perfect 1st',
        space: 0,
        shortName: 'Perf. 1st'
    },
    {
        index: 1,
        fullName: 'Minor 2nd',
        space: 1,
        shortName: 'Min 2nd'
    },
    {
        index: 2,
        fullName: 'Major 2nd',
        space: 2,
        shortName: 'Maj 2nd'
    },
    {
        index: 3,
        fullName: 'Minor 3rd',
        space: 3,
        shortName: 'Min 3rd'
    },
    {
        index: 4,
        fullName: 'Major 3rd',
        space: 4,
        shortName: 'Maj 3rd'
    },
    {
        index: 5,
        fullName: 'Perfect 4th',
        space: 5,
        shortName: 'Perf. 4th'
    },
    {
        index: 6,
        fullName: 'Augmented 4th',
        space: 6,
        shortName: 'Aug. 4th'
    },
    {
        index: 7,
        fullName: 'Diminished 5th',
        space: 6,
        shortName: 'Dim. 5th'
    },
    {
        index: 8,
        fullName: 'Perfect 5th',
        space: 7,
        shortName: 'Perf. 5th'
    },
    {
        index: 9,
        fullName: 'Minor 6th',
        space: 8,
        shortName: 'Min 6th'
    },
    {
        index: 10,
        fullName: 'Maj 6th',
        space: 9,
        shortName: 'Maj 6th'
    },
    {
        index: 11,
        fullName: 'Minor 7th',
        space: 10,
        shortName: 'Min 7th'
    },
    {
        index: 12,
        fullName: 'Major 7th',
        space: 11,
        shortName: 'Maj 7th'
    },
    {
        index: 13,
        fullName: 'Perfect 8th',
        space: 12,
        shortName: 'Perf. 8th'
    }
];

export const GuitarNoteArrangement = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
    6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
    11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
    16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27,
    20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
    25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36
];

export const StaffNoteArrangement = {
    22: 0,
    21: 1,
    20: 3,
    19: 5,
    18: 7,
    17: 8,
    16: 10,
    15: 12,
    14: 13,
    13: 15,
    12: 17,
    11: 19,
    10: 20,
    9: 22,
    8: 24,
    7: 25,
    6: 27,
    5: 29,
    4: 31,
    3: 32,
    2: 34,
    1:36
};

export const getRandomNote = () =>{
    let index = RandomInt(1, Notes.length -1);
    let note = Notes[index];
    let noteIndex = RandomInt(0, note.note.length - 1);
    return {index: index, noteIndex: noteIndex, color: 'black', readOnly: true};
};

export const getRandomInterval = () =>{
    let index = RandomInt(1, Intervals.length - 1);
    return Intervals[index];
};

export const getRandomNoteForInterval = (intervalSpace) =>{
    let index = RandomInt(0, Notes.length - intervalSpace);
    let note = Notes[index];
    let noteIndex = RandomInt(0, note.note.length - 1);
    return {index: index, noteIndex: noteIndex, color: 'black', readOnly: true};
};

export const getRandomNotesForInterval = (intervalSpace) =>{
    let assignmentIndex = RandomInt(0, Notes.length - intervalSpace);
    let assignmentNote = Notes[assignmentIndex];
    let noteIndex = RandomInt(0, assignmentNote.note.length - 1);
    let answerIndex = assignmentIndex + intervalSpace;
    let answerNote = Notes[answerIndex];
    let answerNoteIndex = RandomInt(0, answerNote.note.length - 1);
    return [
        {index: assignmentIndex, noteIndex: noteIndex, color: 'black', readOnly: true},
        {index: answerIndex, noteIndex: answerNoteIndex, color: 'black', readOnly: true},
    ];
};