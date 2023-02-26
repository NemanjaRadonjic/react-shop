import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { login } from "@store/reducers/currentUserReducer";
import useLoginForm from "@hooks/useLoginForm";

import localStorage from "@helpers/localStorage";

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
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = event => {
    event.preventDefault();
    const user = isLoginFormValid(users);
    user &&
      (dispatch(login(user)),
      localStorage.set("currentUser", user),
      navigate("/"));
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
          <div className={`input__error${errors.email ? " active" : ""}`}>
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
          <div className={`input__error${errors.password ? " active" : ""}`}>
            {errors.password}
          </div>
        </div>
        <span className="message">
          <p>If you don't have an account,</p>
          <p>
            you can register{" "}
            <a onClick={() => navigate("/auth/register")} className="auth-link">
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
