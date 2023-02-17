import { useNavigate } from "react-router-dom";

import useForm from "@hooks/useForm";

import "@styles/routes/Login.scss";
import "@styles/common/login-register.scss";
import "@styles/common/index.scss";

const initialFormState = {
  email: "",
  password: "",
};

const Login = () => {
  const { formState, handleChange } = useForm(initialFormState);
  const navigate = useNavigate();

  return (
    <div className="container--auth">
      <form className="container--auth__form">
        <h1 className="container--auth__heading">Login</h1>
        <input
          name="email"
          onChange={handleChange}
          value={formState.email}
          className="container--auth__input"
          type="email"
          placeholder="Email"
        />
        <input
          name="password"
          onChange={handleChange}
          value={formState.password}
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
      </form>
    </div>
  );
};

export default Login;
