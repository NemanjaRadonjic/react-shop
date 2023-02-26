import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import useForm from "@hooks/useForm";

import { changePassword } from "@store/reducers/currentUserReducer";

import {
  validateOnChange,
  validatePassword,
} from "@helpers/validation/register";

import "@styles/routes/Profile.scss";
const initialState = { oldPassword: "", newPassword: "" };

const validate = validateOnChange();

const ChangePassword = () => {
  const { formState, handleFormChange } = useForm(initialState);
  const [errors, setErrors] = useState(initialState);

  const currentUser = useSelector(state => state.currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = event => {
    handleFormChange(event);
    setErrors({ ...errors, [event.target.name]: "" });
    event.target.name === "newPassword" &&
      setErrors({
        ...errors,
        newPassword: validate.password(event.target.value),
      });
  };

  const handleSubmit = event => {
    event.preventDefault();
    const error = validatePassword(currentUser, formState.oldPassword);
    setErrors({ ...errors, oldPassword: error });
    if (!error) {
      dispatch(
        changePassword({
          newPassword: formState.newPassword,
          id: currentUser.id,
        })
      );
      navigate("/");
    }
  };
  return (
    <div className="profile__container">
      <form className="profile__form" onSubmit={handleSubmit}>
        <div className="profile__input--container">
          <input
            name="oldPassword"
            onChange={handleChange}
            value={formState.oldPassword}
            className="profile__input"
            type="password"
            placeholder="Old password..."
          />
          <div
            className={`input__error absolute${
              errors.oldPassword ? " active" : ""
            }`}
          >
            {errors.oldPassword}
          </div>
        </div>
        <div className="profile__input--container">
          <input
            name="newPassword"
            onChange={handleChange}
            value={formState.newPassword}
            className="profile__input"
            type="password"
            placeholder="New password..."
          />
          <div
            className={`input__error absolute${
              errors.newPassword ? " active" : ""
            }`}
          >
            {errors.newPassword}
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

export default ChangePassword;
