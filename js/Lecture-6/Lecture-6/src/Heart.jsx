import { useState } from "react";
import { v4 as uuid } from "uuid";

export default function Heart() {
  const [hearts, setHearts] = useState([{ id: uuid(), emoji: "❤️" }]);

  //Special function to handle addition of a heart by making a new array,
  //then spread all the previous elements in them,
  //then adding a new heart
  const addHeart = () => {
    return setHearts((prevHearts) => [
      ...prevHearts,
      { id: uuid(), emoji: "❤️" },
    ]);
  };

  //a special function to handle deletion by getting the id and filtering that
  //element with id out of the new array
  const deleteHeart = (id) => {
    return setHearts((prevHearts) => prevHearts.filter((h) => h.id !== id));
  };

  //this function will remap all the elements in the hearts array to make a new object
  //and chaning the emoji then return it in the new array

  const changeHeartsToHappyFaces = () => {
    setHearts((prevHearts) => {
      return prevHearts.map((h) => {
        return { ...h, emoji: "😊" };
      });
    });
  };

  return (
    <div>
      <p>
        {hearts.map((h) => (
          <span
            onClick={() => deleteHeart(h.id)}
            key={h.id}
            style={{ cursor: "pointer" }}
          >
            {h.emoji}
          </span>
        ))}
      </p>

      <button onClick={() => addHeart()}>Add a Heart</button>
      <button onClick={() => changeHeartsToHappyFaces()}>
        Change to happy faces
      </button>
    </div>
  );
}
