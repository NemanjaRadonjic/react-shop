import "@styles/routes/Cart.scss";

const Cart = () => {
  return (
    <div className="cart__container">
      <div className="cart-items__container"></div>
      <div className="cart__checkout">
        <div className="cart__total"></div>
        <button className="cart__buy">Buy</button>
      </div>
    </div>
  );
};

export default Cart;
