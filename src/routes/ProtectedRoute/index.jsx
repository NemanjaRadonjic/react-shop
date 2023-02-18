import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, privilege }) => {
  const currentUser = useSelector(state => state.currentUser);
  if (privilege === "user") {
    if (currentUser) {
      return children;
    }
    <Navigate to="/shop" replace={true} />;
  } else {
    if (!currentUser) {
      return children;
    }
    <Navigate to="/shop" replace={true} />;
  }
};

export default ProtectedRoute;
