import { useState } from "react";

function SlowComponent() {
  // If this is too slow on your maching, reduce the `length`
  const words = Array.from({ length: 100_000 }, () => "Ndzalo_NK");
  return (
    <ul>
      {words.map((word, i) => (
        <li key={i}>
          {i}: {word}
        </li>
      ))}
    </ul>
  );
}

const ConterComponent = function ({ Children }) {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Slow counter?!?</h1>
      <button onClick={() => setCount((c) => c + 1)}>Increase: {count}</button>
      {Children}
    </div>
  );
};

export default function Test() {
  return (
    <div>
      <h1>Slow counter?!?</h1>
      <ConterComponent>
        <SlowComponent />
      </ConterComponent>
    </div>
  );
}
