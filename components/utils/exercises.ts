import { keyMaps, positions } from "./positions";

type KeyMaps = typeof keyMaps;
type Positions = typeof positions;

export const ascending = (
  scaleKey: string,
  keyMaps: KeyMaps,
  positions: Positions
): string => {
  let data = ``;

  // map through each position in a key
  keyMaps[scaleKey as keyof typeof keyMaps].forEach((position, index) => {
    let initString = `tabstave notation=true key=${scaleKey} time=18/8`;
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

    // Set up scale for each position
    let lineOfNotes = "\nnotes :8 ";
    notesOfThisPosition.map((note) => {
      lineOfNotes += `${note} `;
    });
    initString += lineOfNotes;
    data += `\n${initString}`;
  });
  return data;
};
