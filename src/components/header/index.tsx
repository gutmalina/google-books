import styles from "./header.module.css";
import { TITLE, CATEGORIES, SORTING } from "../../utils/constants";
import InputList from "../input-list";
import Search from "../search";

const Header = () => {
  return (
    <header className={styles.wrapper}>
      <h1 className={styles.title}>{TITLE}</h1>
      <div className={styles.container}>
        <Search />
        <InputList list={SORTING} />
        <InputList list={CATEGORIES} />
      </div>
    </header>
  );
};

export default Header;
