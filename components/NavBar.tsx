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
    <div className="">
        <KeySelect setKey={setKey} scaleType={scaleType} />
        <ScaleSelect setScaleType={setScaleType}/>
    </div>
  );
}

export default NavBar;
