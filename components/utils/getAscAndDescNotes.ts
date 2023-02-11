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
    notesInMeasure += `${note}${noteCount % 12 === 0 ? " |" : ""} `;

    if (i === 17) break;
    if (coilCount === 3) {
      coilCount = 0;
      i -= 3;
      continue;
    }
    coilCount++;
  }
  newStaffLine += notesInMeasure;
  return newStaffLine;
};

export const getAscAndDescScaleTones = (
  notesOfThisPosition: string[],
  scaleKey: string
): string => {
  let newStaffLine = `tabstave notation=true key=${scaleKey} time=6/8\nnotes :8 `;
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

  // Create scale tones
  for (let i = 0; i < 16; i++) {
    i === 0 && getScaleToneMeasure(i, 0, notesOfThisPosition);
    getScaleToneMeasure(i, 2, notesOfThisPosition);
    i !== 15 && getScaleToneMeasure(i, 1, notesOfThisPosition);
  }

  return newStaffLine;
};
