import uniqueId from "lodash.uniqueid";
import "@styles/components/skeletons/ShopSkeleton.scss";

const amount = 20;

const ShopSkeleton = () => {
  const createProduct = id => (
    <div className="shop-skeleton__product" key={id}>
      <div className="shop-skeleton__info">
        <div className="shop-skeleton__title" />
        <div className="shop-skeleton__price" />
        <div className="shop-skeleton__buttons">
          <div className="shop-skeleton__button" />
          <div className="shop-skeleton__button" />
        </div>
      </div>
    </div>
  );

  const products = Array(amount)
    .fill()
    .map(() => createProduct(uniqueId()));

  return <div className="shop-skeleton">{products}</div>;
};

export default ShopSkeleton;
