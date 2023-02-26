import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout, addMoney } from "@store/reducers/currentUserReducer";
import useForm from "@hooks/useForm";

import "@styles/common/index.scss";
import "@styles/routes/Profile.scss";

const Profile = () => {
  const { formState, handleFormChange, resetForm } = useForm({ amount: 0 });
  const id = useSelector(state => state.currentUser?.id);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(addMoney({ amount: +formState.amount, id }));
    resetForm();
  };

  const onLogout = () => {
    dispatch(logout());
    window.localStorage.removeItem("currentUser");
    navigate("/");
  };

  return (
    <div className="profile__container">
      <form onSubmit={handleSubmit} className="profile__form">
        <input
          className="profile__input input--number"
          type="number"
          name="amount"
          onChange={handleFormChange}
          value={formState.amount}
        />
        <input
          disabled={formState.amount <= 0}
          className="profile__button button--primary"
          type="submit"
          value="Add money"
        />
      </form>
      <Link className="inline-link underline" to="username">
        Change username
      </Link>
      <Link className="inline-link underline" to="email">
        Change email
      </Link>
      <Link className="inline-link underline" to="password">
        Change password
      </Link>

      <button
        onClick={onLogout}
        className=" profile__button button--primary button--margin-block"
      >
        Log out
      </button>
    </div>
  );
};

export default Profile;
