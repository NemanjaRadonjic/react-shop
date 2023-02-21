import { Outlet, useLoaderData } from "react-router-dom";
import Shop from "@routes/Shop";
import AuthBar from "@components/AuthBar";
import "@styles/routes/Main.scss";

const Main = () => {
  const { data } = useLoaderData();
  return (
    <div>
      <div className="spotlight">
        <Outlet />
        <AuthBar />
      </div>
      <Shop products={data} />
    </div>
  );
};

export default Main;
