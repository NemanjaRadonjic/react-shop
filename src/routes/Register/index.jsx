import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import uniqueId from "lodash.uniqueid";

import { register } from "@store/usersReducer";
import useRegisterForm from "@hooks/useRegisterForm";

import localStorage from "@helpers/localStorage";

import "@styles/routes/Register.scss";
import "@styles/common/login-register.scss";
import "@styles/common/index.scss";

const initialFormState = {
  username: "",
  email: "",
  password: "",
  repeatPassword: "",
};

const Register = () => {
  const { formState, handleChange, errors, isFormValid, isValid } =
    useRegisterForm(initialFormState);

  const users = useSelector(state => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = event => {
    event.preventDefault();
    if (isFormValid(users)) {
      const { repeatPassword, ...credentials } = formState;
      const user = { id: uniqueId(), ...credentials, money: 1000, cart: [] };
      dispatch(register(user));
      localStorage.set("users", [...users, user]);
      navigate("/auth/login");
    }
  };

  return (
    <div className="container--auth">
      <form className="container--auth__form" onSubmit={handleSubmit}>
        <h1 className="container--auth__heading">Register</h1>
        <div className="container--auth__field">
          <input
            name="username"
            onChange={handleChange}
            value={formState.username}
            placeholder="Username"
            className={`container--auth__input${
              errors.username ? " error" : ""
            }`}
            type="text"
            required
          />
          <div
            className={`container--auth__error${
              errors.username ? " active" : ""
            }`}
          >
            {errors.username}
          </div>
        </div>
        <div className="container--auth__field">
          <input
            name="email"
            onChange={handleChange}
            value={formState.email}
            placeholder="Email"
            className={`container--auth__input${errors.email ? " error" : ""}`}
            type="email"
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
            placeholder="Password"
            className={`container--auth__input${
              errors.password ? " error" : ""
            }`}
            type="password"
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
        <div className="container--auth__field">
          <input
            name="repeatPassword"
            onChange={handleChange}
            value={formState.repeatPassword}
            placeholder="Repeat password"
            className={`container--auth__input${
              errors.repeatPassword ? " error" : ""
            }`}
            type="password"
            required
          />
          <div
            className={`container--auth__error${
              errors.repeatPassword ? " active" : ""
            }`}
          >
            {errors.repeatPassword}
          </div>
        </div>
        <span className="message">
          <p>If you already have an account,</p>
          <p>
            you can login{" "}
            <a onClick={() => navigate("/auth/login")} className="auth-link">
              here
            </a>
          </p>
        </span>
        <input
          disabled={!isValid(errors)}
          type="submit"
          value="Register"
          className="button--primary button--auth"
        />
      </form>
    </div>
  );
};

export default Register;
