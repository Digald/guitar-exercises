import { keyMaps } from "../data/majorPositions";
import { getNotesOfPosition } from "./getNotesOfPosition";
import {
  getAscAndDescThreeCoils,
  getAscAndDescFourCoils,
} from "./getAscAndDescNotes";
import { Options } from "./types";

type KeyMaps = typeof keyMaps;

export const ascOrDesc = (
  scaleKey: string,
  keyMaps: KeyMaps,
  options: Options
): string => {
  let data = ""; // holds full display of staffs
  let fullStaffLine = ""; // holds all of the lines for a single staff
  let tempSwitch = false; // controls when to display a new staff line

  // map through each position in a key
  keyMaps[scaleKey as keyof typeof keyMaps].forEach((position) => {
    let newStaffLine = `tabstave notation=true key=${scaleKey} time=18/8`;

    // calculate each note of each position in the scaleKey
    const notesOfThisPosition = getNotesOfPosition(position);

    // is asc, desc, or both
    if (options?.type === "desc") {
      notesOfThisPosition.reverse();
    }

    // Set up scale for each position
    let notesInMeasure = "\nnotes :8 ";
    notesOfThisPosition.map((note) => {
      notesInMeasure += `${note} `;
    });
    notesInMeasure += "|";

    newStaffLine += notesInMeasure;

    if (!tempSwitch) {
      fullStaffLine += newStaffLine;
      tempSwitch = true;
      return;
    }

    fullStaffLine += notesInMeasure;
    tempSwitch = false;
    data += `\n${fullStaffLine}`;
    fullStaffLine = "";
  });
  return data;
};

export const ascAndDesc = (scaleKey: string, keyMaps: KeyMaps): string => {
  let data = ""; // holds full display of staffs

  // map through each position in a key
  keyMaps[scaleKey as keyof typeof keyMaps].forEach((position) => {
    let newStaffLine = `tabstave notation=true key=${scaleKey} time=18/8`;

    // calculate each note of each position in the scaleKey
    const notesOfThisPosition = getNotesOfPosition(position);

    const descNotesOfPosition = notesOfThisPosition?.slice()?.reverse();

    // Set up scale for each position x2
    let notesInMeasure = "";
    for (let i = 0; i < 2; i++) {
      notesInMeasure += "\nnotes :8 ";
      const notesMap = i === 0 ? notesOfThisPosition : descNotesOfPosition;
      notesMap.map((note) => {
        notesInMeasure += `${note} `;
      });
      notesInMeasure += "|";
      newStaffLine += notesInMeasure;
      notesInMeasure = "";
    }

    data += `\n${newStaffLine}`;
  });
  return data;
};

// TODO can this be combined with ascOrDesc?
// TODO missing a repeat of the first position
export const ascAndDescAlternating = (
  scaleKey: string,
  keyMaps: KeyMaps
): string => {
  let data = ""; // holds full display of staffs
  let fullStaffLine = ""; // holds all of the lines for a single staff
  let tempSwitch = false; // controls when to display a new staff line
  const doubleKeyMaps = [
    ...keyMaps[scaleKey as keyof typeof keyMaps],
    ...keyMaps[scaleKey as keyof typeof keyMaps].slice(0, -1).reverse(),
  ];

  // map through each position in a key
  doubleKeyMaps.forEach((position, index) => {
    let newStaffLine = `tabstave notation=true key=${scaleKey} time=18/8`;

    // calculate each note of each position in the scaleKey
    const notesOfThisPosition = getNotesOfPosition(position);

    if (index < 7 && index % 2) {
      // If the position is below the first seven and is even
      notesOfThisPosition.reverse();
    } else if (index >= 7 && index % 2) {
      // If the position is the next set of seven and is odd
      notesOfThisPosition.reverse();
    }

    // Set up scale for each position
    let notesInMeasure = "\nnotes :8 ";
    notesOfThisPosition.map((note) => {
      notesInMeasure += `${note} `;
    });
    notesInMeasure += "|";

    newStaffLine += notesInMeasure;

    if (!tempSwitch) {
      fullStaffLine += newStaffLine;
      tempSwitch = true;
      return;
    }

    fullStaffLine += notesInMeasure;
    tempSwitch = false;
    data += `\n${fullStaffLine}`;
    fullStaffLine = "";
  });
  return data;
};

export const ascOrDescThreeNoteCoils = (
  scaleKey: string,
  keyMaps: KeyMaps,
  options: Options
): string => {
  let data = ""; // holds full display of staffs
  let fullStaffLine = ""; // holds all of the lines for a single staff

  // map through each position in a key
  keyMaps[scaleKey as keyof typeof keyMaps].forEach((position) => {
    // calculate each note of each position in the scaleKey
    const notesOfThisPosition = getNotesOfPosition(position);

    if (options?.type === "desc") {
      notesOfThisPosition.reverse();
    }

    const newStaffLine = getAscAndDescThreeCoils(notesOfThisPosition, scaleKey);
    fullStaffLine += `\n${newStaffLine}`;
  });
  data += `\n${fullStaffLine}`;
  return data;
};

export const ascAndDescThreeNoteCoils = (
  scaleKey: string,
  keyMaps: KeyMaps
): string => {
  let data = ""; // holds full display of staffs
  let fullStaffLine = ""; // holds all of the lines for a single staff

  // map through each position in a key
  keyMaps[scaleKey as keyof typeof keyMaps].forEach((position) => {
    // calculate each note of each position in the scaleKey
    const notesOfThisPosition = getNotesOfPosition(position);
    const reversedNotesOfThisPosition = [...notesOfThisPosition].reverse();

    const newStaffLine = getAscAndDescThreeCoils(notesOfThisPosition, scaleKey);
    const reversedNewStaffLine = getAscAndDescThreeCoils(
      reversedNotesOfThisPosition,
      scaleKey
    );

    fullStaffLine += `\n${newStaffLine}`;
    fullStaffLine += `\n${reversedNewStaffLine}`;
  });
  data += `\n${fullStaffLine}`;
  return data;
};

export const alternatingThreeNoteCoils = (
  scaleKey: string,
  keyMaps: KeyMaps
): string => {
  let data = ""; // holds full display of staffs
  let fullStaffLine = ""; // holds all of the lines for a single staff
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

    const newStaffLine = getAscAndDescThreeCoils(notesOfThisPosition, scaleKey);

    fullStaffLine += `\n${newStaffLine}`;
  });
  data += `\n${fullStaffLine}`;
  return data;
};

export const ascOrDescFourNoteCoils = (
  scaleKey: string,
  keyMaps: KeyMaps,
  options: Options
): string => {
  let data = ""; // holds full display of staffs
  let fullStaffLine = ""; // holds all of the lines for a single staff

  // map through each position in a key
  keyMaps[scaleKey as keyof typeof keyMaps].forEach((position) => {
    // let newStaffLine = `tabstave notation=true key=${scaleKey} time=9/8`;

    // calculate each note of each position in the scaleKey
    const notesOfThisPosition = getNotesOfPosition(position);

    if (options?.type === "desc") {
      notesOfThisPosition.reverse();
    }

    const newStaffLine = getAscAndDescFourCoils(notesOfThisPosition, scaleKey);
    fullStaffLine += `\n${newStaffLine}`;
  });
  data += `\n${fullStaffLine}`;
  return data;
};

export const ascAndDescFourNoteCoils = (
  scaleKey: string,
  keyMaps: KeyMaps
): string => {
  let data = ""; // holds full display of staffs
  let fullStaffLine = ""; // holds all of the lines for a single staff

  // map through each position in a key
  keyMaps[scaleKey as keyof typeof keyMaps].forEach((position) => {
    // calculate each note of each position in the scaleKey
    const notesOfThisPosition = getNotesOfPosition(position);
    const reversedNotesOfThisPosition = [...notesOfThisPosition].reverse();

    const newStaffLine = getAscAndDescFourCoils(notesOfThisPosition, scaleKey);
    const reversedNewStaffLine = getAscAndDescFourCoils(
      reversedNotesOfThisPosition,
      scaleKey
    );

    fullStaffLine += `\n${newStaffLine}`;
    fullStaffLine += `\n${reversedNewStaffLine}`;
  });
  data += `\n${fullStaffLine}`;
  return data;
};

export const alternatingFourNoteCoils = (
  scaleKey: string,
  keyMaps: KeyMaps
): string => {
  let data = ""; // holds full display of staffs
  let fullStaffLine = ""; // holds all of the lines for a single staff
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

    const newStaffLine = getAscAndDescFourCoils(notesOfThisPosition, scaleKey);

    fullStaffLine += `\n${newStaffLine}`;
  });
  data += `\n${fullStaffLine}`;
  return data;
};

// TODO not accurate to the book exercise
export const singleString = (scaleKey: string, keyMaps: KeyMaps): string => {
  let data = ""; // holds full display of staffs
  const stringNotes: Record<string, string[]> = {
    6: [],
    5: [],
    4: [],
    3: [],
    2: [],
    1: [],
  };
  // map through each position in a key
  keyMaps[scaleKey as keyof typeof keyMaps].forEach((position) => {
    // calculate each note of each position in the scaleKey
    const notesOfThisPosition = getNotesOfPosition(position);

    notesOfThisPosition.forEach((note) => {
      const splitNote = note.split("/");
      stringNotes[splitNote[1]].push(note);
    });
  });

  for (let i = 6; i > 0; i--) {
    const newStaffLine = `\ntabstave notation=true key=${scaleKey} time=3/8`;
    let notesInMeasure = "notes :8  ";
    let count = 0;
    stringNotes[i.toString()].forEach((note) => {
      if (count === 2) {
        notesInMeasure += `${note} | `;
        count = 0;
        return;
      }
      notesInMeasure += `${note} `;
      count += 1;
    });
    data += `${newStaffLine}\n${notesInMeasure}`;
  }

  return data;
};

// TODO entire scale is wrong REDO
export const twoString = (
  scaleKey: string,
  keyMaps: KeyMaps,
  options: Options
): string => {
  let data = ""; // holds full display of staffs
  let fullStaffLine = ""; // holds all of the lines for a single staff
  // let stringNotes: string[] = [];
  const stringNotes: Record<string, string[]> = {
    6: [],
    5: [],
    4: [],
    3: [],
    2: [],
    1: [],
  };
  // map through each position in a key
  keyMaps[scaleKey as keyof typeof keyMaps].forEach((position) => {
    // calculate each note of each position in the scaleKey
    const notesOfThisPosition = getNotesOfPosition(position);

    notesOfThisPosition.forEach((note) => {
      const splitNote = note.split("/");
      const string = splitNote[1];
      if (!stringNotes[string].includes(note)) {
        stringNotes[string].push(note);
      }
    });
  });

  console.log("log stringNotes", stringNotes);

  for (let i = 6; i > 1; i--) {
    const newStaffLine = `\ntabstave notation=true key=${scaleKey} time=3/8`;
    let notesInMeasure = "notes :8  ";
    // let count = 0;
    // let element = 0;
    // stringNotes[i.toString()].forEach((note) => {
    //   if (count === 3) {
    //     notesInMeasure += `${stringNotes[(i - 1).toString()][element]} | `;
    //     count = 0;
    //     return;
    //   }
    //   notesInMeasure += `${note} `;
    //   count += 1;
    // });
    const bigStringArr = stringNotes[i];
    const littleStringArr = stringNotes[i - 1];
    let bigStringCount = 0;
    let littleStringCount = 0;

    for (let i = 0; i < 8; i++) {
      if (!bigStringArr[bigStringCount + 2]) {
        // The final note is not available due to the scales. Need to maybe include a new object here with values?
        const replacementNote = bigStringArr[bigStringCount + 1].split("/")[0];
        console.log("log replacementNote", replacementNote);
      }
      notesInMeasure += `${bigStringArr[bigStringCount]} `;
      notesInMeasure += `${bigStringArr[bigStringCount + 1]} `;
      notesInMeasure += `${bigStringArr[bigStringCount + 2]} `;
      notesInMeasure += `${littleStringArr[littleStringCount]} | `;
      bigStringCount += 1;
      littleStringCount += 1;
      // console.log("log notesInMeasure", notesInMeasure);
    }
    data += `${newStaffLine}\n${notesInMeasure}`;
  }
  return data;
};
