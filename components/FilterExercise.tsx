import React, { useState } from "react";
import KeySelect from "./KeySelect";
import ScaleSelect from "./ScaleSelect";
import { ButtonListItem } from "./utils/types";
import Button from "./Button";
import {
  ascOrDesc,
  ascAndDesc,
  ascAndDescAlternating,
  ascOrDescThreeNoteCoils,
  ascAndDescThreeNoteCoils,
  alternatingThreeNoteCoils,
  ascOrDescFourNoteCoils,
  ascAndDescFourNoteCoils,
  alternatingFourNoteCoils,
  singleString,
  twoString,
} from "../components/utils/exercises";

const buttonList: ButtonListItem[] = [
  {
    name: "Ascending",
    function: ascOrDesc,
    options: { type: "asc" },
  },
];

type FilterExerciseProps = {
  setExerciseList: (value: ButtonListItem[]) => void;
};

function FilterExercise({ setExerciseList }: FilterExerciseProps) {
  return (
    <>
      {buttonList.map((buttonListItem) => {
        return (
          <Button buttonListItem={buttonListItem} key={buttonListItem.name} />
        );
      })}
    </>
  );
}

export default FilterExercise;
