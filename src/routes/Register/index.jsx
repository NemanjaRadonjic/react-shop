import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import useForm from "@hooks/useForm";

import { register } from "@store/usersReducer";

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
  const { formState, handleChange } = useForm(initialFormState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = event => {
    event.preventDefault();
    const { repeatPassword, ...userObject } = formState;
    dispatch(register(userObject));
    navigate("/login");
  };

  return (
    <div className="container--auth">
      <form className="container--auth__form" onSubmit={handleSubmit}>
        <h1 className="container--auth__heading">Register</h1>
        <input
          name="username"
          onChange={handleChange}
          value={formState.username}
          placeholder="Username"
          className="container--auth__input"
          type="text"
        />
        <input
          name="email"
          onChange={handleChange}
          value={formState.email}
          placeholder="Email"
          className="container--auth__input"
          type="email"
        />
        <input
          name="password"
          onChange={handleChange}
          value={formState.password}
          placeholder="Password"
          className="container--auth__input"
          type="password"
        />
        <input
          name="repeatPassword"
          onChange={handleChange}
          value={formState.repeatPassword}
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
        <input type="submit" value="Register" className="button--primary" />
      </form>
    </div>
  );
};

export default Register;
