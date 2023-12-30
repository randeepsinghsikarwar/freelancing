import { useState } from "react";

export default function Toggler() {
  const [toggle, setToggle] = useState(true);

  return (
    <div>
      {toggle ? <h2>&#128540;</h2> : <h2>&#128541;</h2>}
      <button onClick={() => setToggle(!toggle)}>Toggle Me</button>
    </div>
  );
}
