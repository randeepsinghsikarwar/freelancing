import { useState } from "react";

//The correct way is to pass setCount as a function as shown below.
//this new function will take the previous count as input then updates count
//using the previous count

export default function Counter2() {
  console.log("RENDERING");
  const [count, setCount] = useState(0);
  return (
    <>
      <p>Count: {count}</p>
      <button
        onClick={() => {
          setCount((prevCount) => prevCount + 1);
          setCount((prevCount) => prevCount + 1);
          setCount((prevCount) => prevCount + 1);
        }}
      >
        Click me
      </button>

      <button
        onClick={() => {
          setCount(10);
        }}
      >
        Set counter to 10
      </button>
    </>
  );
}
