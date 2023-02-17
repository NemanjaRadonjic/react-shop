import { useNavigate } from "react-router-dom";

import "@styles/routes/Register.scss";
import "@styles/common/login-register.scss";
import "@styles/common/index.scss";

const Register = () => {
  const navigate = useNavigate();
  return (
    <div className="container--auth">
      <h1 className="container--auth__heading">Register</h1>
      <input
        placeholder="Username"
        className="container--auth__input"
        type="text"
      />
      <input
        placeholder="Email"
        className="container--auth__input"
        type="email"
      />
      <input
        placeholder="Password"
        className="container--auth__input"
        type="password"
      />
      <input
        placeholder="Repeat password"
        className="container--auth__input"
        type="password"
      />
      <span className="message">
        <p>If you already have an account,</p>
        <p>
          you can login{" "}
          <a onClick={() => navigate("/login")} className="inline-link">
            here
          </a>
        </p>
      </span>
      <button className="button--primary">Register</button>
    </div>
  );
};

export default Register;
