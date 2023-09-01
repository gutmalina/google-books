import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../services/hooks";
import { addStartIndex, getBooks } from "../../services/reducers";
import { BTN_LOAD_MORE } from "../../utils/constants";
import styles from './footer.module.css';

const Footer = () => {
  const dispatch = useAppDispatch();
  const books = useAppSelector((store) => store.books);
  const search = useAppSelector((store) => store.search);
  const start = useAppSelector((store) => store.startIndex);
  const sorting = useAppSelector((store) => store.sorting);
  const [isDisabled, setIsDisabled] = useState(true)

  const handleClick = () => {
    dispatch(getBooks({search, start, sorting}))
    dispatch(addStartIndex(start + 30));
  }

  useEffect(()=> {
    books.length ? setIsDisabled(false): setIsDisabled(true)
  }, [books])

  return (
    <footer className={styles.wrapper}>
      <button className={styles.btn} onClick={handleClick} disabled={isDisabled}>{BTN_LOAD_MORE}</button>
    </footer>
  );
};

export default Footer;
