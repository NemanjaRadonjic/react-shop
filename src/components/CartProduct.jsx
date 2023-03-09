import "@styles/components/CartProduct.scss";
import { useSelector, useDispatch } from "react-redux";
import DeleteIcon from "@svgs/Delete";

import { removeProduct } from "@store/reducers/currentUserReducer";

import { truncateString } from "@helpers";

const CartProduct = ({ product }) => {
  const currentUser = useSelector(state => state.currentUser);
  const dispatch = useDispatch();
  const handleRemove = () => {
    dispatch(removeProduct({ productId: product.id, userId: currentUser.id }));
  };

  return (
    <div className="cart-product">
      <img src={product.image} className="cart-product__image" />
      <div className="cart-product__info">
        <div className="cart-product__title">
          {truncateString(product.title, 30)}{" "}
          {product.amount > 1 && `X${product.amount}`}
        </div>
        <div className="cart-product__price">{product.price}$</div>
        <div className="cart-product__actions">
          <DeleteIcon size="23px" handleRemove={handleRemove} />
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
