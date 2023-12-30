import "./Button.css";

export default function Button({ clickFunction, title }) {
  return (
    <button onClick={clickFunction} className="Button">
      {title}
    </button>
  );
}
