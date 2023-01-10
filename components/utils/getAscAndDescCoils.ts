export const getAscAndDescThreeCoils = (
  notesOfThisPosition: string[],
  scaleKey: string
): string => {
  let newStaffLine = `tabstave notation=true key=${scaleKey} time=9/8`;
  let notesInMeasure = "\nnotes :8 ";
  let coilCount = 0; // Tracks when to coil
  let noteCount = 0; // Tracks when to insert measure
  for (let i = 0; i < 18; i++) {
    const note = notesOfThisPosition[i];
    noteCount++;
    notesInMeasure += `${note}${noteCount % 9 === 0 ? "|" : ""} `;

    if (i === 17) break;
    if (coilCount === 2) {
      coilCount = 0;
      i -= 2;
      continue;
    }
    coilCount++;
  }
  notesInMeasure += "|";
  newStaffLine += notesInMeasure;
  return newStaffLine;
};

export const getAscAndDescFourCoils = (
  notesOfThisPosition: string[],
  scaleKey: string
): string => {
  let newStaffLine = `tabstave notation=true key=${scaleKey} time=12/8`;
  let notesInMeasure = "\nnotes :8 ";
  let coilCount = 0; // Tracks when to coil
  let noteCount = 0; // Tracks when to insert measure
  for (let i = 0; i < 18; i++) {
    const note = notesOfThisPosition[i];
    noteCount++;
    notesInMeasure += `${note}${noteCount % 12 === 0 ? "|" : ""} `;

    if (i === 17) break;
    if (coilCount === 3) {
      coilCount = 0;
      i -= 3;
      continue;
    }
    coilCount++;
  }
  notesInMeasure += "|";
  newStaffLine += notesInMeasure;
  return newStaffLine;
};
