import axiosInstance from "@axios";
import Product from "@components/Product";

import "@styles/routes/Shop.scss";

const Shop = ({ products }) => {
  const renderProducts = products.map(product => <Product product={product} />);

  return (
    <div className="shop">
      <div className="shop__products">{renderProducts}</div>
    </div>
  );
};

export const productsLoader = async () => {
  const response = axiosInstance.get("products");
  return response;
};

export default Shop;
