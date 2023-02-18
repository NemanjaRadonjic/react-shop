import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import useLoginForm from "@hooks/useLoginForm";

import "@styles/routes/Login.scss";
import "@styles/common/login-register.scss";
import "@styles/common/index.scss";

const initialFormState = {
  email: "",
  password: "",
};

const Login = () => {
  const { formState, handleChange, errors, isLoginFormValid } =
    useLoginForm(initialFormState);
  const users = useSelector(state => state.users);
  const navigate = useNavigate();

  const handleSubmit = event => {
    event.preventDefault();
    isLoginFormValid(users) && console.log("Would be logged in");
  };

  return (
    <div className="container--auth">
      <form className="container--auth__form" onSubmit={handleSubmit}>
        <h1 className="container--auth__heading">Login</h1>
        <div className="container--auth__field">
          <input
            name="email"
            onChange={handleChange}
            value={formState.email}
            className={`container--auth__input${errors.email ? " error" : ""}`}
            type="email"
            placeholder="Email"
            required
          />
          <div
            className={`container--auth__error${errors.email ? " active" : ""}`}
          >
            {errors.email}
          </div>
        </div>
        <div className="container--auth__field">
          <input
            name="password"
            onChange={handleChange}
            value={formState.password}
            className={`container--auth__input${
              errors.password ? " error" : ""
            }`}
            type="password"
            placeholder="Password"
            required
          />
          <div
            className={`container--auth__error${
              errors.password ? " active" : ""
            }`}
          >
            {errors.password}
          </div>
        </div>
        <span className="message">
          <p>If you don't have an account,</p>
          <p>
            you can register{" "}
            <a onClick={() => navigate("/register")} className="inline-link">
              here
            </a>
          </p>
        </span>
        <input
          type="submit"
          value="Login"
          className="button--primary button--auth"
        />
      </form>
    </div>
  );
};

export default Login;
