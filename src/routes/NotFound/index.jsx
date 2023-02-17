import { useNavigate } from "react-router-dom";

import "@styles/routes/NotFound.scss";
import "@styles/common/index.scss";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="not-found">
      <h1 className="not-found__message">Page not found.</h1>
      <button className="button--primary" onClick={() => navigate(-1)}>
        Go back
      </button>
    </div>
  );
};

export default NotFound;
