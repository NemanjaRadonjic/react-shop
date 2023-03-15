import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "@store/reducers/currentUserReducer";

import { truncateString } from "@helpers";

import "@styles/common/index.scss";
import "@styles/components/Product.scss";

const Product = ({ product, userId, setModal }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    dispatch(addToCart({ product, id: userId, productId: product.id }));
    navigate("/cart");
  };

  const handleClickInfo = () => setModal({ active: true, product });

  return (
    <div className="product">
      <img className="product__image" src={product.image} />
      <div className="product__info">
        <div className="product__title">{truncateString(product.title)}</div>
        <div className="product__price">{product.price}$</div>
        <div className="product__buttons">
          <button
            className="button--primary"
            onClick={handleAddToCart}
            disabled={!userId && true}
          >
            Buy
          </button>
          <button onClick={handleClickInfo} className="button--primary">
            Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
