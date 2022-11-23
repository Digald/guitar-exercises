import { keyMaps, positions } from "./positions";

type KeyMaps = typeof keyMaps;
type Positions = typeof positions;

export const ascending = (
  scaleKey: string,
  keyMaps: KeyMaps,
  positions: Positions
): string => {
  console.log("log scaleKey", scaleKey);
  // console.log("log scaleType", scaleType);
  console.log("log keyMap", keyMaps[scaleKey as keyof typeof keyMaps]);
  console.log("log positions", positions);
  let data = `tabstave notation=true key=${scaleKey} time=18/8`;

  // get list of relative from each position of the specific scaleKey
  keyMaps[scaleKey as keyof typeof keyMaps].forEach((position) => {
    // console.log(
    //   "log position",
    //   positions[position.position as keyof typeof positions]
    // );
    // console.log("log start", position.startingFret);
    // console.log("log -----------------------");
    let barString = "\nnotes :8 8/6 |";

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
    // console.log("log notesOfThisPosition", notesOfThisPosition);
    data += barString;
    console.log("log data", data);
  });
  return data;
};
