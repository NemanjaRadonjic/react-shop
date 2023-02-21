import "@styles/common/index.scss";
import "@styles/components/Product.scss";

const Product = ({ product }) => {
  const truncatedTitle = product.title.substring(0, 20) + "...";

  return (
    <div className="product">
      <img className="product__image" src={product.image} />
      <div className="product__info">
        <div className="product__title">{truncatedTitle}</div>
        <div className="product__price">{product.price}$</div>
        <div className="product__buttons">
          <button className="button--primary">Buy</button>
          <button className="button--primary">Info</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
