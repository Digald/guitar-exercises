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
      <a
        href="https://github.com/Digald"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2.5 mb-2.5 text-center text-white name-banner"
      >
        Created by Mark Alaniz
      </a>
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
