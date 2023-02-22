import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import MoneySvg from "@svgs/Money";

import "@styles/common/index.scss";
import "@styles/components/AuthBar.scss";

const AuthBar = () => {
  const currentUser = useSelector(state => state.currentUser);

  if (currentUser) {
    return (
      <div className="auth-bar">
        <Link className="inline-link" to="profile">
          Profile
        </Link>
        <Link className="inline-link" to="cart">
          Cart
        </Link>
        <div className="auth-bar__separator" />
        <div className="auth-bar__username">{currentUser.username}</div>
        <div className="auth-bar__money">
          1000
          <MoneySvg />
        </div>
      </div>
    );
  }
  return (
    <div className="auth-bar no-user">
      <Link className="inline-link" to="/auth/login">
        Login
      </Link>
      <Link className="inline-link" to="/auth/register">
        Register
      </Link>
    </div>
  );
};

export default AuthBar;
