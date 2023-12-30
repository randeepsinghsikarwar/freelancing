//The below code won't work because the counter is updating but the page is not
//refreshing to rerender the count variable

// export default function Counter() {
//   let counter = 0;
//   return (
//     <div>
//       <p>Counter: {counter}</p>
//       <button
//         onClick={() => {
//           counter++;
//           console.log(counter);
//         }}
//       >
//         Add to counter
//       </button>
//     </div>
//   );
// }

//useState returns an array of 2 elements. The varaiable and a setter function for the variable
//between the brackets of useState(0) is the initial value of the counter variable
//inside the setter functinon, we add one to the counter with every click

import { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <button
        onClick={() => {
          setCounter(counter - 1);
          console.log(counter);
        }}
      >
        -
      </button>
      <p style={{ display: "inline" }}>Counter: {counter}</p>

      <button
        onClick={() => {
          setCounter(counter + 1);
          console.log(counter);
        }}
      >
        +
      </button>
    </div>
  );
}
