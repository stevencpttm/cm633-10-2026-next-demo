"use client";

import { hello } from "./actions";

export default function () {
  //   const hello = async () => {
  //     "use server";
  //     return "Hello World";
  //   };

  const click = async () => {
    const result = await hello();

    console.log(result);
  };

  return (
    <div>
      <button onClick={click} className="bg-slate-300">
        Hello
      </button>
    </div>
  );
}
