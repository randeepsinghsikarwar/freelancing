import { useState } from "react";

// The code below will not increment the counter by 3 as expected because
// the count is not set until the function ends and rerenders,
// so it will only use the last setCount and ignore the rest

// export default function Counter() {
//   const [count, setCount] = useState(0);
//   return (
//     <>
//       <p>Count: {count}</p>
//       <button
//         onClick={() => {
//           setCount(count + 1);
//           setCount(count + 1);
//           setCount(count + 1);
//         }}
//       >
//         Click me
//       </button>
//     </>
//   );
// }

//The correct way is to pass setCount as a function as shown below.
//this new function will take the previous count as input then updates count
//using the previous count

export default function Counter() {
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
    </>
  );
}
