import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import useForm from "@hooks/useForm";

import { changeEmail } from "@store/reducers/currentUserReducer";

import { validateOnChange, validateEmail } from "@helpers/validation/register";

import "@styles/routes/Profile.scss";
const initialState = { email: "" };

const validate = validateOnChange();

const ChangeEmail = () => {
  const { formState, handleFormChange } = useForm(initialState);

  const [errors, setErrors] = useState(initialState);

  const { users, currentUser } = useSelector(state => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = event => {
    handleFormChange(event);
    setErrors({ email: validate.email(event.target.value) });
  };

  const handleSubmit = event => {
    event.preventDefault();
    const error = validateEmail(users, formState.email);
    setErrors({ email: error });
    if (!error) {
      dispatch(changeEmail({ newEmail: formState.email, id: currentUser.id }));
      navigate("/");
    }
  };

  return (
    <div className="profile__container">
      <form className="profile__form" onSubmit={handleSubmit}>
        <div className="profile__input--container">
          <input
            name="email"
            onChange={handleChange}
            value={formState.email}
            className="profile__input"
            type="text"
            placeholder="Change email..."
          />
          <div
            className={`input__error absolute${errors.email ? " active" : ""}`}
          >
            {errors.email}
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

export default ChangeEmail;
