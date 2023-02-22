import { Navigate } from "react-router-dom";
import localStorage from "@helpers/localStorage";

const ProtectedRoute = ({ children, privilege }) => {
  const currentUser = localStorage.get("currentUser");
  if (privilege === "user") {
    if (currentUser) {
      return children;
    }
    return <Navigate to="/" replace={true} />;
  } else {
    if (!currentUser) {
      return children;
    }
    return <Navigate to="/" replace={true} />;
  }
};

export default ProtectedRoute;
