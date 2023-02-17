import { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";

import "@styles/routes/Landing.scss";

const Landing = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/login");
  }, []);

  return (
    <div className="landing">
      <Outlet />
    </div>
  );
};

export default Landing;
