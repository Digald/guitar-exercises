import React, { useState } from "react";
import KeySelect from "./KeySelect";
import ScaleSelect from "./ScaleSelect";
import FilterExercise from "./FilterExercise";
import { ButtonListItem } from "./utils/types";

type NavBarProps = {
  scaleType: string;
  setKey: (value: string) => void;
  setScaleType: (value: string) => void;
  setExerciseList: (value: ButtonListItem[]) => void;
};

//className="fixed top-0 w-full shadow-xl flex justify-evenly items-center h-12"
function NavBar({ scaleType, setKey, setScaleType, setExerciseList }: NavBarProps) {
  return (
    <div className="flex flex-col">
      <div>
        <KeySelect setKey={setKey} scaleType={scaleType} />
        <ScaleSelect setScaleType={setScaleType} />
      </div>
      <div>
        <FilterExercise setExerciseList={setExerciseList} />
      </div>
    </div>
  );
}

export default NavBar;
