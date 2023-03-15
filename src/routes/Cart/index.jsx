import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { purchase } from "@store/reducers/currentUserReducer";
import uniqueId from "lodash.uniqueid";

import CartProduct from "@components/CartProduct";

import "@styles/common/index.scss";
import "@styles/routes/Cart.scss";

const Cart = () => {
  const currentUser = useSelector(state => state.currentUser);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  if (currentUser?.cart) {
    const total = currentUser.cart.reduce(
      (acc, current) => acc + current.price * current.amount,
      0
    );

    const handlePurchase = () => {
      if (currentUser.money > total) {
        dispatch(purchase({ total, userId: currentUser.id }));
      } else {
        setError("You dont have enough money.");
        setTimeout(() => setError(null), 4000);
      }
    };

    const renderCart = currentUser.cart.length ? (
      currentUser.cart.map(product => (
        <CartProduct product={product} key={uniqueId()} />
      ))
    ) : (
      <div className="cart__message">The cart is empty...</div>
    );

    return (
      <div className="cart__container">
        <div className="cart-products">{renderCart}</div>
        <div className="cart__checkout-container">
          <div className={`cart__checkout__error${error ? " active" : ""}`}>
            {error}
          </div>
          <div className="cart__checkout">
            <div className="cart__total">
              {total === 0 ? 0 : total.toFixed(2)}$
            </div>
            <button
              onClick={handlePurchase}
              className="button--primary"
              disabled={error && true}
            >
              Buy
            </button>
          </div>
        </div>
      </div>
    );
  }
  return null;
};

export default Cart;
