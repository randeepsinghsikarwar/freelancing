//Multiple states in the same component

import { useState } from "react";

export default function TogglerCounter() {
  const [toggle, setToggle] = useState(true);
  const [counter, setCounter] = useState(0);
  return (
    <div>
      {toggle ? <h2>&#128540;</h2> : <h2>&#128541;</h2>}
      <button
        onClick={() => {
          setToggle(!toggle);
          setCounter(counter + 1);
        }}
      >
        Toggle Me
      </button>
      <p>{counter}</p>
    </div>
  );
}
