import { useSelector } from "react-redux";

import uniqueId from "lodash.uniqueid";

import CartProduct from "@components/CartProduct";

import "@styles/common/index.scss";
import "@styles/routes/Cart.scss";

const Cart = () => {
  const cart = useSelector(state => state.currentUser?.cart);

  if (cart) {
    const total = cart.reduce(
      (acc, current) => acc + current.price * current.amount,
      0
    );

    const renderCart = cart.map(product => (
      <CartProduct product={product} key={uniqueId()} />
    ));
    return (
      <div className="cart__container">
        <div className="cart-products">{renderCart}</div>
        <div className="cart__checkout">
          <div className="cart__total">{total}$</div>
          <button className="button--primary">Buy</button>
        </div>
      </div>
    );
  }
  return null;
};

export default Cart;
