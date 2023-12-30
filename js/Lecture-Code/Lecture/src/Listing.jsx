export default function Listing({ country, location, rating, price }) {
  return (
    <div className="Listing">
      <h2>{country}</h2>
      <h3>{location}</h3>
      <p>{rating}</p>
      <p>{price}</p>
    </div>
  );
}
