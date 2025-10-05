"use client";

import SubComponent from "@/component/subComponent";
import { useState } from "react";

export default function Home() {
  const [value, setValue] = useState(0);
  return (
    <div>
      <div>hello</div>
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
    </div>
  );
}
