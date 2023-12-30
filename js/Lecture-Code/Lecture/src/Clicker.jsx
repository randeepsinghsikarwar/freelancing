function handleClick() {
  console.log("Button is clicked!");
}

export default function Clicker() {
  return (
    <div>
      <p>Click the button</p>
      <button onClick={handleClick}>Click</button>
      {/* and not handleClick() as this will execute the function */}
    </div>
  );
}
