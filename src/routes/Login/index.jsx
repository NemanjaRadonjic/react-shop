import { useNavigate } from "react-router-dom";

import "@styles/routes/Login.scss";
import "@styles/common/login-register.scss";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="container--auth">
      <h1 className="container--auth__heading">Login</h1>
      <input
        className="container--auth__input"
        type="email"
        placeholder="Email"
      />
      <input
        className="container--auth__input"
        type="password"
        placeholder="Password"
      />
      <span className="message">
        <p>If you don't have an account,</p>
        <p>
          you can register{" "}
          <a onClick={() => navigate("/register")} className="inline-link">
            here
          </a>
        </p>
      </span>
      <button className="button--primary">Login</button>
    </div>
  );
};

export default Login;
