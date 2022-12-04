import { keyMaps, positions } from "./positions";

type KeyMaps = typeof keyMaps;
type Positions = typeof positions;

export const ascOrDesc = (
  scaleKey: string,
  keyMaps: KeyMaps,
  positions: Positions,
  type: exerciseType1
): string => {
  let data = ""; // holds full display of staffs
  let fullStaffLine = ""; // holds all of the lines for a single staff
  let tempSwitch = false; // controls when to display a new staff line

  // map through each position in a key
  keyMaps[scaleKey as keyof typeof keyMaps].forEach((position) => {
    let newStaffLine = `tabstave notation=true key=${scaleKey} time=18/8`;

    // calculate each note of each position in the scaleKey
    const notesOfThisPosition = positions[
      position.position as keyof typeof positions
    ].map((note) => {
      const splitNoteString = note.split("/");
      const calculatedFret = (
        Number(splitNoteString[0]) + position?.startingFret
      ).toString();
      splitNoteString[0] = calculatedFret;
      return splitNoteString.join("/");
    });

    // is asc, desc, or both
    if (type === "desc") {
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

export const ascAndDesc = (
  scaleKey: string,
  keyMaps: KeyMaps,
  positions: Positions
): string => {
  let data = ""; // holds full display of staffs

  // map through each position in a key
  keyMaps[scaleKey as keyof typeof keyMaps].forEach((position) => {
    let newStaffLine = `tabstave notation=true key=${scaleKey} time=18/8`;

    // calculate each note of each position in the scaleKey
    const notesOfThisPosition = positions[
      position.position as keyof typeof positions
    ].map((note) => {
      const splitNoteString = note.split("/");
      const calculatedFret = (
        Number(splitNoteString[0]) + position?.startingFret
      ).toString();
      splitNoteString[0] = calculatedFret;
      return splitNoteString.join("/");
    });

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
  keyMaps: KeyMaps,
  positions: Positions
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
    const notesOfThisPosition = positions[
      position.position as keyof typeof positions
    ].map((note) => {
      const splitNoteString = note.split("/");
      const calculatedFret = (
        Number(splitNoteString[0]) + position?.startingFret
      ).toString();
      splitNoteString[0] = calculatedFret;
      return splitNoteString.join("/");
    });

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
