import Listing from "./Listing";

export default function ListingsContainer({ items }) {
  return (
    <div className="ListingsContainer">
      {items.map((i) => (
        <Listing key={i.id} {...i} />
      ))}
    </div>
  );
}

// export default function ListingsContainer({ items }) {
//     return (
//       <div>
//         {items.map((i) => (
//           <Listing
//             key={i.id}
//             country={i.country}
//             location={i.location}
//             rating={i.rating}
//             price={i.price}
//           />
//         ))}
//       </div>
//     );
//   }
