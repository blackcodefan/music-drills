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
        guitar: [],
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
        guitar: [6]
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
        guitar: [6, 5]
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
        guitar: [5, 4]
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
        guitar: [4, 3]
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
        guitar: [3, 2]
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

export const GuitarNoteArrangement = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
    6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
    11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
    16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27,
    20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
    25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36
];

export const StaffNoteArrangement = {
    165: 0,
    160: 1,
    155: 3,
    150: 5,
    145: 7,
    140: 8,
    135: 10,
    130: 12,
    125: 13,
    120: 15,
    115: 17,
    110: 19,
    105: 20,
    100: 22,
    95: 24,
    90: 25,
    85: 27,
    80: 29,
    75: 31,
    70: 32,
    65: 34,
    60: 36
};

export const getRandomNote = () =>{
    let index = RandomInt(1, Notes.length -1);
    let note = Notes[index];
    let noteIndex = RandomInt(0, note.note.length - 1);
    return {index: index, noteIndex: noteIndex, color: 'black', readOnly: true};
};