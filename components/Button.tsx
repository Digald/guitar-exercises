import React, { useState } from "react";
import { ButtonListItem } from "./utils/types";

type ButtonProps = {
  buttonListItem: ButtonListItem;
};

function Button({ buttonListItem }: ButtonProps) {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    // setExerciseList(buttonListItem);
  };

  return <button onClick={handleClick}>{buttonListItem.name}</button>;
}

export default Button;
