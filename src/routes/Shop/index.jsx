import { Outlet } from "react-router-dom";

import "@styles/routes/Shop.scss";

const Shop = () => {
  return (
    <div>
      <div className="spotlight">
        <Outlet />
      </div>
      <h1>Shop</h1>
    </div>
  );
};

export default Shop;
