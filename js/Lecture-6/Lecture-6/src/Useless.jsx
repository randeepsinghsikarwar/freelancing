//If you have a complex initial state, like the one below,
//pass the function without the brackets to only run once, instead of running
//each time the component renders.

import { useState } from "react";

export default function Useless() {
  function generateRandomStartPositions() {
    const initialStartPositions = [];
    for (let i = 0; i < 5000; i++) {
      initialStartPositions.push(i);
    }
    console.log("INITIAL POSITIONS SET AND READY!");
    return initialStartPositions;
  }
  const [positions, setPositions] = useState(generateRandomStartPositions);
  return (
    <button onClick={() => setPositions("Hello")}>Click to make a move</button>
  );
}
