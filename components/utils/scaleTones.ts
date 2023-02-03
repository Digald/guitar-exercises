import { keyMaps } from "./positions";
import { getNotesOfPosition } from "./getNotesOfPosition";

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
