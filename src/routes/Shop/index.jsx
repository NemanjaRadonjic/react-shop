import { useState } from "react";
import { useSelector } from "react-redux";
import { defer } from "react-router-dom";
import axiosInstance from "@axios";
import uniqueId from "lodash.uniqueid";
import Product from "@components/Product";

import Portal from "@components/modals/Portal";
import ProductInfoModal from "@components/modals/ProductInfoModal";

import "@styles/routes/Shop.scss";

const Shop = ({ products }) => {
  const [modal, setModal] = useState({
    active: false,
    product: null,
  });

  const closeModal = () => setModal({ active: false, product: null });

  const userId = useSelector(state => state.currentUser?.id);
  const renderProducts = products.map(product => (
    <Product
      product={product}
      userId={userId}
      setModal={setModal}
      key={uniqueId()}
    />
  ));

  return (
    <div className="shop">
      <div className="shop__products">{renderProducts}</div>
      {modal.active && (
        <Portal closeModal={closeModal}>
          <ProductInfoModal product={modal.product} closeModal={closeModal} />
        </Portal>
      )}
    </div>
  );
};

export const productsLoader = async () => {
  const response = axiosInstance.get("products");
  return defer({ products: response });
};

export default Shop;
