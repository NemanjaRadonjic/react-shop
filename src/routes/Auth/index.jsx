import { useEffect } from "react";
import { useNavigate, useLocation, Outlet } from "react-router-dom";

import "@styles/routes/Auth.scss";

const Auth = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    location.pathname === "/auth" && navigate("/auth/login");
  }, []);

  return (
    <div className="auth">
      <Outlet />
    </div>
  );
};

export default Auth;
