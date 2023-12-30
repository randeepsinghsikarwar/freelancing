import "./App.css";
import LuckyN from "./LuckyN";
// import Dice from "./Dice";
// import Die from "./Die";
import { sum } from "./utilities";

function lessThan4(dice) {
  return sum(dice) < 4;
}

function sameNum(dice) {
  return dice.every((v) => v === dice[0]);
}

function App() {
  return (
    <>
      {/* <LuckyN /> */}
      {/* <LuckyN numDice={3} goal={12} /> */}
      <LuckyN winCheck={lessThan4} title="roll less than 4" />
      <LuckyN numDice={3} winCheck={sameNum} title="roll all the same" />
    </>
  );
}

export default App;
