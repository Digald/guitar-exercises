import React from "react";
import { ButtonListItem, SetExerciseList } from "./utils/types";
import { buttonList } from "./data/buttonList";
import Button from "./Button";

type FilterExerciseProps = {
  setExerciseList: SetExerciseList;
  exerciseList: ButtonListItem[];
  scaleType: string;
};

function FilterExercise({
  setExerciseList,
  exerciseList,
  scaleType,
}: FilterExerciseProps) {
  return (
    <>
      {buttonList.map((buttonListItem) => {
        return (
          <Button
            buttonListItem={buttonListItem}
            key={buttonListItem.name}
            setExerciseList={setExerciseList}
            exerciseList={exerciseList}
          />
        );
      })}
    </>
  );
}

export default FilterExercise;
