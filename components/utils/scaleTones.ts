import { keyMaps } from "./positions";
import { getNotesOfPosition } from "./getNotesOfPosition";
import { getAscAndDescScaleTones } from "./getAscAndDescCoils";

type KeyMaps = typeof keyMaps;

export const scaleToneAscOrDesc = (
  scaleKey: string,
  keyMaps: KeyMaps,
  type: exerciseType1
): string => {
  let data = ""; // holds full display of staffs

  // map through each position in a key
  keyMaps[scaleKey as keyof typeof keyMaps].forEach((position) => {
    let newStaffLine = `tabstave notation=true key=${scaleKey} time=6/8`;

    // calculate each note of each position in the scaleKey
    const notesOfThisPosition = getNotesOfPosition(position);

    // is asc, desc, or both
    if (type === "desc") {
      notesOfThisPosition.reverse();
    }

    newStaffLine += "\nnotes :8 ";
    let count = 0;

    const getScaleToneMeasure = (i: number, addition: number): string => {
      newStaffLine += notesOfThisPosition[i + addition] + " ";
      count += 1;

      if (count === 6) {
        newStaffLine += " | ";
        count = 0;
      }
      return newStaffLine;
    };

    for (let i = 0; i < 16; i++) {
      i === 0 && getScaleToneMeasure(i, 0);
      getScaleToneMeasure(i, 2);
      i !== 15 && getScaleToneMeasure(i, 1);
    }

    data += `\n${newStaffLine}`;
  });
  return data;
};

export const scaleToneAscAndDesc = (
  scaleKey: string,
  keyMaps: KeyMaps
): string => {
  let data = ""; // holds full display of staffs

  // map through each position in a key
  keyMaps[scaleKey as keyof typeof keyMaps].forEach((position) => {
    let newStaffLine = `tabstave notation=true key=${scaleKey} time=6/8`;

    // calculate each note of each position in the scaleKey
    const notesOfThisPosition = getNotesOfPosition(position);
    const notesOfThisPositionReversed = notesOfThisPosition.slice().reverse();

    newStaffLine += "\nnotes :8 ";
    let count = 0;

    const getScaleToneMeasure = (
      i: number,
      addition: number,
      notes: string[]
    ): string => {
      newStaffLine += notes[i + addition] + " ";
      count += 1;

      if (count === 6) {
        newStaffLine += "| ";
        count = 0;
      }
      return newStaffLine;
    };

    // Ascending staff line
    for (let i = 0; i < 16; i++) {
      i === 0 && getScaleToneMeasure(i, 0, notesOfThisPosition);
      getScaleToneMeasure(i, 2, notesOfThisPosition);
      i !== 15 && getScaleToneMeasure(i, 1, notesOfThisPosition);
    }

    // Descending staff line
    count = 0;
    newStaffLine += `\ntabstave notation=true key=${scaleKey} time=6/8\nnotes :8 `;
    for (let i = 0; i < 16; i++) {
      i === 0 && getScaleToneMeasure(i, 0, notesOfThisPositionReversed);
      getScaleToneMeasure(i, 2, notesOfThisPositionReversed);
      i !== 15 && getScaleToneMeasure(i, 1, notesOfThisPositionReversed);
    }

    data += `\n${newStaffLine}`;
  });
  return data;
};

export const scaleToneAlternating = (
  scaleKey: string,
  keyMaps: KeyMaps
): string => {
  let data = ""; // holds full display of staffs
  const doubleKeyMaps = [
    ...keyMaps[scaleKey as keyof typeof keyMaps],
    ...keyMaps[scaleKey as keyof typeof keyMaps].slice(0, -1).reverse(),
  ];
  // map through each position in a key
  doubleKeyMaps.forEach((position, index) => {
    // calculate each note of each position in the scaleKey
    const notesOfThisPosition = getNotesOfPosition(position);
    if (index < 7 && index % 2) {
      // If the position is below the first seven and is even
      notesOfThisPosition.reverse();
    } else if (index >= 7 && index % 2) {
      // If the position is the next set of seven and is odd
      notesOfThisPosition.reverse();
    }

    const newStaffLine = getAscAndDescScaleTones(notesOfThisPosition, scaleKey);
    data += `\n${newStaffLine}`;
  });
  return data;
};
