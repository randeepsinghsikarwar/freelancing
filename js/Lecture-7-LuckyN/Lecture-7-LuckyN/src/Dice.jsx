import Die from "./Die";
import "./Dice.css";
export default function Dice({ dice, color }) {
  return (
    <div className="Dice">
      {dice.map((v, i) => (
        <Die key={i} value={v} color={color} />
      ))}
    </div>
  );
}
