"use client";

import { useState } from "react";

function Like() {
  const [likes, setLikes] = useState(0);

  return (
    <button
      onClick={() => setLikes(likes + 1)}
      className="bg-slate-600 text-white"
    >
      Like ({likes})
    </button>
  );
}

export default Like;
