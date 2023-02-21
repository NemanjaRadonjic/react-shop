import "@styles/common/index.scss";
import "@styles/routes/Search.scss";

import useForm from "@hooks/useForm";

const Search = () => {
  const { formState, handleFormChange } = useForm({ search: "" });

  return (
    <form className="search">
      <input
        name="search"
        onChange={handleFormChange}
        value={formState.search}
        className="input--primary"
        type="text"
        placeholder="What are you looking for..."
      />
      <input className="input--primary" type="submit" value="Search" />
    </form>
  );
};

export default Search;
