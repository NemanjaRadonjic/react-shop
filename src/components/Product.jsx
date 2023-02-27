import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { purchase } from "@store/reducers/currentUserReducer";

import "@styles/common/index.scss";
import "@styles/components/Product.scss";

const Product = ({ product, userId }) => {
  const truncatedTitle = product.title.substring(0, 20) + "...";

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlePurchase = () => {
    dispatch(purchase({ product, id: userId }));
    navigate("/cart");
  };

  return (
    <div className="product">
      <img className="product__image" src={product.image} />
      <div className="product__info">
        <div className="product__title">{truncatedTitle}</div>
        <div className="product__price">{product.price}$</div>
        <div className="product__buttons">
          <button
            className="button--primary"
            onClick={handlePurchase}
            disabled={!userId && true}
          >
            Buy
          </button>
          <button className="button--primary">Info</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
