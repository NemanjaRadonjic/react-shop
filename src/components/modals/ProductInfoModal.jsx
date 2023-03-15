import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "@store/reducers/currentUserReducer";
import CloseIcon from "@components/svgs/Close";

import "@styles/components/ProductInfoModal.scss";

const ProductInfoModal = ({ product, closeModal }) => {
  const currentUser = useSelector(state => state.currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = () => {
    dispatch(addToCart({ product, id: currentUser.id, productId: product.id }));
    closeModal();
    navigate("/cart");
  };
  return (
    <div
      onClick={event => event.stopPropagation()}
      className="product-modal__container"
    >
      <div className="product-modal__close">
        <CloseIcon closeModal={closeModal} />
      </div>
      <img className="product-modal__image" src={product.image} />
      <h1 className="product-modal__title">{product.title}</h1>
      <p className="product-modal__category">{product.category}</p>
      <p className="product-modal__description">{product.description}</p>
      <p className="product-modal__rating__rate">
        Rating: {product.rating.rate}
      </p>
      <p className="product-modal__rating__count">
        Votes: {product.rating.count}
      </p>
      <p className="product-modal__price">{product.price}$</p>
      <button onClick={handleClick} className="button--primary">
        Add To Cart
      </button>
    </div>
  );
};

export default ProductInfoModal;
