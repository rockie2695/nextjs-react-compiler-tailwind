"use client";

import SubComponent from "./SubComponent";
import { useState } from "react";

export default function Display() {
  const [value, setValue] = useState(0);
  return (
    <>
      <button
        className="border-black border w-10 h-10 cursor-pointer"
        onClick={() => setValue(value + 1)}
      >
        {value} +
      </button>

      <>
        <SubComponent name="subComponentA" value={0} />
        <SubComponent name="subComponentB" value={value} />
      </>
    </>
  );
}
