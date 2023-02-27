import { useSelector } from "react-redux";
import { defer } from "react-router-dom";
import axiosInstance from "@axios";
import uniqueId from "lodash.uniqueid";
import Product from "@components/Product";

import "@styles/routes/Shop.scss";

const Shop = ({ products }) => {
  const userId = useSelector(state => state.currentUser?.id);
  const renderProducts = products.map(product => (
    <Product product={product} userId={userId} key={uniqueId()} />
  ));

  return (
    <div className="shop">
      <div className="shop__products">{renderProducts}</div>
    </div>
  );
};

export const productsLoader = async () => {
  const response = axiosInstance.get("products");
  return defer({ products: response });
};

export default Shop;
