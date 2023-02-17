import { useEffect } from "react";
import { useNavigate, useLocation, Outlet } from "react-router-dom";

import "@styles/routes/Landing.scss";

const Landing = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    location.pathname === "/" && navigate("/login");
  }, []);

  return (
    <div className="landing">
      <Outlet />
    </div>
  );
};

export default Landing;
