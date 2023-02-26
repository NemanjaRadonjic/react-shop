import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import useForm from "@hooks/useForm";

import { changeUsername } from "@store/reducers/currentUserReducer";

import {
  validateOnChange,
  validateUsername,
} from "@helpers/validation/register";

import "@styles/routes/Profile.scss";

const validate = validateOnChange();

const initialState = { username: "" };

const ChangeUsername = () => {
  const { formState, handleFormChange } = useForm(initialState);
  const [errors, setErrors] = useState(initialState);

  const { users, currentUser } = useSelector(state => state);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = event => {
    handleFormChange(event);
    setErrors({ username: validate.username(event.target.value) });
  };

  const handleSubmit = event => {
    event.preventDefault();
    const error = validateUsername(users, formState.username);
    setErrors({ username: error });
    if (!error) {
      dispatch(
        changeUsername({ newUsername: formState.username, id: currentUser.id })
      );
      navigate("/profile");
    }
  };

  return (
    <div className="profile__container">
      <form className="profile__form" onSubmit={handleSubmit}>
        <div className="profile__input--container">
          <input
            name="username"
            onChange={handleChange}
            value={formState.username}
            className="profile__input"
            type="text"
            placeholder="Change username..."
          />
          <div
            className={`input__error absolute${
              errors.username ? " active" : ""
            }`}
          >
            {errors.username}
          </div>
        </div>
        <input
          className="profile__button button--primary"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
};

export default ChangeUsername;
