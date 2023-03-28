import React, { useState, useEffect } from "react";
import { ButtonListItem, SetExerciseList } from "./utils/types";

type ButtonProps = {
  buttonListItem: ButtonListItem;
  setExerciseList: SetExerciseList;
  exerciseList: ButtonListItem[];
};

function Button({
  buttonListItem,
  setExerciseList,
  exerciseList,
}: ButtonProps) {
  const [isActive, setIsActive] = useState(false);
  const backgroundStyle = isActive ? "bg-teal-700" : "";

  useEffect(() => {
    setIsActive(
      exerciseList.some((val) => {
        return val?.name === buttonListItem?.name;
      })
    );
  }, [exerciseList, buttonListItem]);

  const handleClick = () => {
    setExerciseList((prevExercises: ButtonListItem[]) => {
      if (!isActive) {
        return [...prevExercises, buttonListItem];
      }
      return prevExercises.filter(
        (exercise) => exercise?.name !== buttonListItem?.name
      );
    });
  };

  return (
    <button
      className={`${backgroundStyle} m-1 p-1 border-solid border-black border-2`}
      onClick={handleClick}
    >
      {buttonListItem?.name}
    </button>
  );
}

export default Button;
