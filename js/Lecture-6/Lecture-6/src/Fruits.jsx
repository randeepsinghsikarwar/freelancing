import { useState } from "react";

// To pass an array or an object (collections in general) as the initial and changing variable,
//we need to make a new object each time to replace the old object.
//So when we call set function, we need to return a new object with the
//items of the old object, but only change the item being changed.

export default function Fruits() {
  const [fruitsQuantity, setFruitsQuantity] = useState({
    apples: 0,
    oranges: 0,
    melons: 0,
  });

  return (
    <div>
      <p>Apples: {fruitsQuantity.apples}</p>
      <p>Oranges: {fruitsQuantity.oranges}</p>
      <p>Melons: {fruitsQuantity.melons}</p>

      {/* <button
        onClick={() => {
          const newfruitsQuantity = {
            ...fruitsQuantity,
            apples: fruitsQuantity.apples + 1,
          };
          setFruitsQuantity(newfruitsQuantity);
          console.log(newfruitsQuantity);
        }}
      >
        +1 Apple
      </button> */}

      {/* Better to pass a setter function in setFruitsQuantity directly */}

      <button
        onClick={() => {
          setFruitsQuantity((prevFruitQuantity) => {
            return {
              ...prevFruitQuantity,
              apples: prevFruitQuantity.apples + 1,
            };
          });
          console.log(fruitsQuantity);
        }}
      >
        +1 Apple
      </button>

      <button
        onClick={() => {
          setFruitsQuantity((prevFruitQuantity) => {
            return {
              ...prevFruitQuantity,
              oranges: prevFruitQuantity.oranges + 1,
            };
          });
          console.log(fruitsQuantity);
        }}
      >
        +1 Orange
      </button>
      <button
        onClick={() => {
          setFruitsQuantity((prevFruitQuantity) => {
            return {
              ...prevFruitQuantity,
              melons: prevFruitQuantity.melons + 1,
            };
          });
          console.log(fruitsQuantity);
        }}
      >
        +1 Melon
      </button>
    </div>
  );
}
