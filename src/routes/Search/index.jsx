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
        className="search__input"
        type="text"
        placeholder="What are you looking for..."
      />
      <input className="search__button" type="submit" value="Search" />
    </form>
  );
};

export default Search;
