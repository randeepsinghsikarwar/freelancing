export default function CartList(props) {
  return (
    <div>

      {/* using ternary operation to conditionally render different things based on the fact that there are any items in the cart or not. */}
      
      {props.items.length == 0 ? (
        <h2>Your Cart is empty!</h2>
      ) : (
        <div className>
          <h2>Your Cart</h2>
          <p>No. of items: {[props.items.length]}</p>

          {props.items.map((product) => (
            <div className="CartList-Card" key={product.id}>
              <div className="counter-container">
                <div>{product.productName}</div>
                <div> {product.price}</div>
              </div>
              <button
                className="Remove-Button"
                onClick={(e) => {
                  e.preventDefault();
                  props.removeItem(product);
                }}
              >
                Remove
              </button>
            </div>
          ))}

          <div className="CartList-Buttons">
            <button
              className="Remove-Button"
              onClick={(e) => {
                e.preventDefault();
                props.empty();
              }}
            >
              Empty Cart
            </button>
            <button id="Buy-Button">Buy - Total: ${props.total}</button>
          </div>
        </div>
      )}
    </div>
  );
}
