import { positions } from "./positions";

type Positions = typeof positions;
interface Position {
  position: number;
  startingFret: number;
}

export const getNotesOfPosition = (position: Position): string[] => {
  return positions[position.position as keyof typeof positions].map((note) => {
    const splitNoteString = note.split("/");
    const calculatedFret = (
      Number(splitNoteString[0]) + position?.startingFret
    ).toString();
    splitNoteString[0] = calculatedFret;
    return splitNoteString.join("/");
  });
};
