import { ChangeEvent, FormEvent, useState } from "react";
import IconSearch from "../../images/icon-search";
import { PLACEHOLDER_SEARCH } from "../../utils/constants";
import { useAppDispatch, useAppSelector } from "../../services/hooks";
import {
  addSearch,
  getBooks,
  deleteBooks,
  addStartIndex,
} from "../../services/reducers";
import styles from "./search.module.css";

const Search = () => {
  const [search, setSearch] = useState("");
  const sorting = useAppSelector((store) => store.sorting);
  const dispatch = useAppDispatch();

  /** запрос к API */
  const handleSubmit = (e: FormEvent<HTMLElement>) => {
    e.preventDefault();
    dispatch(addSearch(search));
    dispatch(deleteBooks());
    dispatch(getBooks({ search, start: 0, sorting }));
    dispatch(addStartIndex(30));
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <fieldset className={styles.container}>
          <input
            type="text"
            name="search"
            placeholder={PLACEHOLDER_SEARCH}
            onChange={(e) => handleChange(e)}
            value={search}
            className={styles.input}
          />
          <IconSearch onClick={handleSubmit} />
          <span></span>
        </fieldset>
      </form>
    </>
  );
};

export default Search;
