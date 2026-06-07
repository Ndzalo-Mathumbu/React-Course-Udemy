"use client";

import { useState } from "react";

function Counter({ userNames }) {
  const [count, setCount] = useState(0);
  console.log(userNames);
  const handleAdd = function () {
    setCount((a) => a + 1);
  };
  const handleminus = function () {
    setCount((a) => a - 1);
  };
  return (
    <div>
      <p> there are {userNames.legnth}</p>
      <button onClick={handleAdd}>inc</button>
      <p>{count}</p>
      <button onClick={handleminus}>dec</button>
    </div>
  );
}

export default Counter;
