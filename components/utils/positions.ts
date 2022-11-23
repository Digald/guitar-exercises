// pattern is (relative multiplyer * position start)/(string)
export const positions = {
  1: [
    "0/6",
    "2/6",
    "4/6",
    "0/5",
    "2/5",
    "4/5",
    "1/4",
    "2/4",
    "4/4",
    "1/3",
    "2/3",
    "4/3",
    "2/2",
    "4/2",
    "5/2",
    "2/1",
    "4/1",
    "5/1",
  ],
  2: [
    "0/6",
    "2/6",
    "3/6",
    "0/5",
    "2/5",
    "4/5",
    "0/4",
    "2/4",
    "4/4",
    "0/3",
    "2/3",
    "4/3",
    "2/2",
    "3/2",
    "5/2",
    "2/1",
    "3/1",
    "5/1",
  ],
  3: [
    "0/6",
    "1/6",
    "3/6",
    "0/5",
    "2/5",
    "3/5",
    "0/4",
    "2/4",
    "3/4",
    "0/3",
    "2/3",
    "4/3",
    "1/2",
    "3/2",
    "5/2",
    "1/1",
    "3/1",
    "5/1",
  ],
  4: [
    "0/6",
    "2/6",
    "4/6",
    "1/5",
    "2/5",
    "4/5",
    "1/4",
    "2/4",
    "4/4",
    "1/3",
    "3/3",
    "4/3",
    "2/2",
    "4/2",
    "5/2",
    "2/1",
    "4/1",
    "6/1",
  ],
  5: [
    "0/6",
    "2/6",
    "4/6",
    "0/5",
    "2/5",
    "4/5",
    "0/4",
    "2/4",
    "4/4",
    "1/3",
    "2/3",
    "4/3",
    "2/2",
    "3/2",
    "5/2",
    "2/1",
    "4/1",
    "5/1",
  ],
  6: [
    "0/6",
    "2/6",
    "3/6",
    "0/5",
    "2/5",
    "3/5",
    "0/4",
    "2/4",
    "4/4",
    "0/3",
    "2/3",
    "4/3",
    "1/2",
    "3/2",
    "5/2",
    "2/1",
    "3/1",
    "5/1",
  ],
  7: [
    "0/6",
    "1/6",
    "3/6",
    "0/5",
    "1/5",
    "3/5",
    "0/4",
    "2/4",
    "3/4",
    "0/3",
    "2/3",
    "3/3",
    "1/2",
    "3/2",
    "5/2",
    "1/1",
    "3/1",
    "5/1",
  ],
};

export const keyMaps = {
  F: [
    {
      position: 1,
      startingFret: 1,
    },
    {
      position: 2,
      startingFret: 3,
    },
    {
      position: 3,
      startingFret: 5,
    },
    {
      position: 4,
      startingFret: 5,
    },
    {
      position: 5,
      startingFret: 5,
    },
    {
      position: 6,
      startingFret: 5,
    },
    {
      position: 7,
      startingFret: 5,
    },
  ],
  "F#": [
    {
      position: 7,
      startingFret: 1,
    },
    {
      position: 1,
      startingFret: 2,
    },
    {
      position: 2,
      startingFret: 4,
    },
    {
      position: 3,
      startingFret: 6,
    },
    {
      position: 4,
      startingFret: 7,
    },
    {
      position: 5,
      startingFret: 9,
    },
    {
      position: 6,
      startingFret: 11,
    },
  ],
  Gb: [
    {
      position: 7,
      startingFret: 1,
    },
    {
      position: 1,
      startingFret: 2,
    },
    {
      position: 2,
      startingFret: 4,
    },
    {
      position: 3,
      startingFret: 6,
    },
    {
      position: 4,
      startingFret: 7,
    },
    {
      position: 5,
      startingFret: 9,
    },
    {
      position: 6,
      startingFret: 11,
    },
  ],
  G: [
    {
      position: 7,
      startingFret: 2,
    },
    {
      position: 1,
      startingFret: 3,
    },
    {
      position: 2,
      startingFret: 5,
    },
    {
      position: 3,
      startingFret: 7,
    },
    {
      position: 4,
      startingFret: 8,
    },
    {
      position: 5,
      startingFret: 10,
    },
    {
      position: 6,
      startingFret: 12,
    },
  ],
  Ab: [
    {
      position: 6,
      startingFret: 1,
    },
    {
      position: 7,
      startingFret: 3,
    },
    {
      position: 1,
      startingFret: 4,
    },
    {
      position: 2,
      startingFret: 6,
    },
    {
      position: 3,
      startingFret: 8,
    },
    {
      position: 4,
      startingFret: 9,
    },
    {
      position: 5,
      startingFret: 11,
    },
  ],
  A: [
    {
      position: 6,
      startingFret: 2,
    },
    {
      position: 7,
      startingFret: 4,
    },
    {
      position: 1,
      startingFret: 5,
    },
    {
      position: 2,
      startingFret: 7,
    },
    {
      position: 3,
      startingFret: 9,
    },
    {
      position: 4,
      startingFret: 10,
    },
    {
      position: 5,
      startingFret: 12,
    },
  ],
  Bb: [
    {
      position: 5,
      startingFret: 1,
    },
    {
      position: 6,
      startingFret: 3,
    },
    {
      position: 7,
      startingFret: 5,
    },
    {
      position: 1,
      startingFret: 6,
    },
    {
      position: 2,
      startingFret: 8,
    },
    {
      position: 3,
      startingFret: 10,
    },
    {
      position: 4,
      startingFret: 11,
    },
  ],
  B: [
    {
      position: 5,
      startingFret: 2,
    },
    {
      position: 6,
      startingFret: 4,
    },
    {
      position: 7,
      startingFret: 6,
    },
    {
      position: 1,
      startingFret: 7,
    },
    {
      position: 2,
      startingFret: 9,
    },
    {
      position: 3,
      startingFret: 11,
    },
    {
      position: 4,
      startingFret: 12,
    },
  ],
  Cb: [
    {
      position: 5,
      startingFret: 2,
    },
    {
      position: 6,
      startingFret: 4,
    },
    {
      position: 7,
      startingFret: 6,
    },
    {
      position: 1,
      startingFret: 7,
    },
    {
      position: 2,
      startingFret: 9,
    },
    {
      position: 3,
      startingFret: 11,
    },
    {
      position: 4,
      startingFret: 12,
    },
  ],
  C: [
    {
      position: 4,
      startingFret: 1,
    },
    {
      position: 5,
      startingFret: 3,
    },
    {
      position: 6,
      startingFret: 5,
    },
    {
      position: 7,
      startingFret: 7,
    },
    {
      position: 1,
      startingFret: 8,
    },
    {
      position: 2,
      startingFret: 10,
    },
    {
      position: 3,
      startingFret: 12,
    },
  ],
  "C#": [
    {
      position: 3,
      startingFret: 1,
    },
    {
      position: 4,
      startingFret: 2,
    },
    {
      position: 5,
      startingFret: 4,
    },
    {
      position: 6,
      startingFret: 6,
    },
    {
      position: 7,
      startingFret: 8,
    },
    {
      position: 1,
      startingFret: 9,
    },
    {
      position: 2,
      startingFret: 11,
    },
  ],
  Db: [
    {
      position: 3,
      startingFret: 1,
    },
    {
      position: 4,
      startingFret: 2,
    },
    {
      position: 5,
      startingFret: 4,
    },
    {
      position: 6,
      startingFret: 6,
    },
    {
      position: 7,
      startingFret: 8,
    },
    {
      position: 1,
      startingFret: 9,
    },
    {
      position: 2,
      startingFret: 11,
    },
  ],
  D: [
    {
      position: 3,
      startingFret: 2,
    },
    {
      position: 4,
      startingFret: 3,
    },
    {
      position: 5,
      startingFret: 5,
    },
    {
      position: 6,
      startingFret: 7,
    },
    {
      position: 7,
      startingFret: 9,
    },
    {
      position: 1,
      startingFret: 10,
    },
    {
      position: 2,
      startingFret: 12,
    },
  ],
  Eb: [
    {
      position: 2,
      startingFret: 1,
    },
    {
      position: 3,
      startingFret: 3,
    },
    {
      position: 4,
      startingFret: 4,
    },
    {
      position: 5,
      startingFret: 6,
    },
    {
      position: 6,
      startingFret: 8,
    },
    {
      position: 7,
      startingFret: 10,
    },
    {
      position: 1,
      startingFret: 11,
    },
  ],
  E: [
    {
      position: 2,
      startingFret: 2,
    },
    {
      position: 3,
      startingFret: 4,
    },
    {
      position: 4,
      startingFret: 5,
    },
    {
      position: 5,
      startingFret: 7,
    },
    {
      position: 6,
      startingFret: 9,
    },
    {
      position: 7,
      startingFret: 11,
    },
    {
      position: 1,
      startingFret: 12,
    },
  ],
};
