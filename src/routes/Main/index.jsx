import { Outlet } from "react-router-dom";

import Shop from "@routes/Shop";
import AuthBar from "@components/AuthBar";
import "@styles/routes/Main.scss";

const Main = () => {
  return (
    <div>
      <div className="spotlight">
        <Outlet />
        <AuthBar />
      </div>
      <Shop />
    </div>
  );
};

export default Main;
