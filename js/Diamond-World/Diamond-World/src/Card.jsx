// Card function definition
// exctract props to their individual variables with the same name
// we can set a default value for onSale in the function attributes
//  if not given at decleration in the other component
export default function Card({ pic, price, title, onSale = false, info }) {
  {
    /* to use dynamic attribues with styles
we can declare the style as a variable and add it to the html code as inline attribute  */
  }
  const styles = {
    boxShadow: onSale && "0 0 10px 5px #48abe0",
  };
  return (
    // The main return is a div wrapper with all the HTML code needed
    <div className="Card" style={styles}>
      <img src={pic} alt="Diamonds" width="100em" />
      <h3>{title}</h3>
      <p>{price}</p>
      {/* info is an array of strings
      we use the array map method to create an li for each item */}
      <ul>
        {info.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      {/* {onSale ? <div className="onSale">SALE!</div> : <div></div>} */}
      {/* the commented line is valid but the next line is neater using short circuting  
      to aviod making empty divs */}

      {onSale && <div className="onSale">SALE!</div>}
    </div>
  );
}
