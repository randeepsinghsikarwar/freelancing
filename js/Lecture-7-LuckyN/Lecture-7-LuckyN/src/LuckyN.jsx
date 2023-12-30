import Dice from "./Dice";
import { useState } from "react";
import { getRolls, sum } from "./utilities";
import Button from "./button";

// With one condition of winning

// export default function LuckyN({ numDice = 2, goal = 7 }) {
//   const [dice, setDice] = useState(() => getRolls(numDice));
//   const isWinner = sum(dice) === goal;
//   return (
//     <main>
//       <h1>
//         Lucky{goal} {isWinner && "You Win!"}
//       </h1>
//       <Dice dice={dice} />
//       <button
//         onClick={() => {
//           setDice(() => getRolls(numDice));
//         }}
//       >
//         Re-Roll
//       </button>
//     </main>
//   );
// }

//With winning as a function to change the winning condition

export default function LuckyN({ numDice = 2, winCheck, title = "" }) {
  const [dice, setDice] = useState(() => getRolls(numDice));
  const isWinner = winCheck(dice);
  const roll = () => {
    setDice(() => getRolls(numDice));
  };
  return (
    <main>
      <h1>
        {title} {isWinner && "You Win!"}
      </h1>
      <Dice dice={dice} />
      <button onClick={roll}>Re-Roll</button>

      <Button clickFunction={roll} title="re-roll" />
    </main>
  );
}
