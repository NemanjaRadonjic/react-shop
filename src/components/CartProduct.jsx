import "@styles/components/CartProduct.scss";

import { truncateString } from "@helpers";

const CartProduct = ({ product }) => {
  return (
    <div className="cart-product">
      <img src={product.image} className="cart-product__image" />
      <div className="cart-product__info">
        <div className="cart-product__title">
          {truncateString(product.title, 30)}{" "}
          {product.amount > 1 && `X${product.amount}`}
        </div>
        <div className="cart-product__price">{product.price}$</div>
      </div>
    </div>
  );
};

export default CartProduct;
