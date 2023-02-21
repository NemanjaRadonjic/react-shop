import { Suspense } from "react";
import { Outlet, useLoaderData, Await } from "react-router-dom";
import Shop from "@routes/Shop";
import AuthBar from "@components/AuthBar";
import ShopSkeleton from "@components/skeletons/ShopSkeleton";
import "@styles/routes/Main.scss";

const Main = () => {
  const { products } = useLoaderData();
  return (
    <div>
      <div className="spotlight">
        <Outlet />
        <AuthBar />
      </div>
      <Suspense fallback={<ShopSkeleton />}>
        <Await
          resolve={products}
          children={({ data }) => <Shop products={data} />}
        />
      </Suspense>
    </div>
  );
};

export default Main;
