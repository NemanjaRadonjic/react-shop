import { Link } from "react-router-dom";

import useForm from "@hooks/useForm";
import "@styles/common/index.scss";
import "@styles/routes/Profile.scss";

const Profile = () => {
  const { formState, handleFormChange } = useForm({ money: 0 });
  return (
    <div className="profile__container">
      <form className="profile__form">
        <input
          className="profile__input input--number"
          type="number"
          name="money"
          onChange={handleFormChange}
          value={formState.money}
        />
        <input
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

      <button className=" profile__button button--primary button--margin-block">
        Log out
      </button>
    </div>
  );
};

export default Profile;
