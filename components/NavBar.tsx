import React, { useEffect, useState } from "react";
import KeySelect from "./KeySelect";
import ScaleSelect from "./ScaleSelect";
import FilterExercise from "./FilterExercise";
import { ButtonListItem, SetExerciseList } from "./utils/types";

type NavBarProps = {
  scaleType: string;
  setKey: (value: string) => void;
  setScaleType: (value: string) => void;
  setExerciseList: SetExerciseList;
  exerciseList: ButtonListItem[];
};

//className="fixed top-0 w-full shadow-xl flex justify-evenly items-center h-12"
function NavBar({
  scaleType,
  setKey,
  setScaleType,
  setExerciseList,
  exerciseList,
}: NavBarProps) {
  useEffect(() => {
    setExerciseList([]);
  }, [scaleType, setExerciseList]);

  return (
    <div className="flex flex-col">
      <div>
        <KeySelect setKey={setKey} scaleType={scaleType} />
        <ScaleSelect setScaleType={setScaleType} />
      </div>
      <div>
        <FilterExercise
          setExerciseList={setExerciseList}
          exerciseList={exerciseList}
          scaleType={scaleType}
        />
      </div>
    </div>
  );
}

export default NavBar;
