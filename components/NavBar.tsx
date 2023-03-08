import React, { useState } from "react";
import KeySelect from "./KeySelect";
import ScaleSelect from "./ScaleSelect";

type NavBarProps = {
  scaleType: string,
  setKey: (value: string) => void,
  setScaleType: (value: string) => void
}

function NavBar({
  scaleType,
  setKey,
  setScaleType
}: NavBarProps) {
  return (
    <div className="fixed top-0 w-full shadow-xl flex justify-evenly items-center h-12">
        <KeySelect setKey={setKey} scaleType={scaleType} />
        <ScaleSelect setScaleType={setScaleType}/>
    </div>
  );
}

export default NavBar;
