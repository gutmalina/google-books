import { FC, useEffect, useState } from "react";
import { TInputList } from "../../utils/types";
import Arrow from "../../images/arrow";
import { CATEGORIES } from "../../utils/constants";
import styles from "./input-list.module.css";
import { useAppDispatch, useAppSelector } from "../../services/hooks";
import { addCategory, addSorting } from "../../services/reducers";

const InputList: FC<TInputList> = ({ list }) => {
  const [isShowList, setIsShowList] = useState(false);
  const [valueInput, setValueInput] = useState("");
  const dispatch = useAppDispatch();
  const category = useAppSelector((store) => store.category);
  const sorting = useAppSelector((store) => store.sorting);

  const handleShowList = () => {
    setIsShowList(!isShowList);
  };

  /** записать категории в хранилище */
  const handleClick = (item: string) => {
    list === CATEGORIES
      ? dispatch(addCategory(item))
      : dispatch(addSorting(item));
    setIsShowList(false);
  };

  useEffect(() => {
    list === CATEGORIES ? setValueInput(category) : setValueInput(sorting);
  }, [list, category, sorting]);

  return (
    <section className={styles.wrapper}>
      <div className={styles.container} onClick={handleShowList}>
        <input
          type="text"
          defaultValue={valueInput}
          className={styles.input}
          readOnly
        ></input>
        <Arrow />
      </div>
      {isShowList ? (
        <ul className={styles.list}>
          {list
            ? list.map((item) => (
                <li
                  key={item}
                  className={styles.li}
                  onClick={() => handleClick(item)}
                >
                  <p>{item}</p>
                </li>
              ))
            : null}
        </ul>
      ) : null}
    </section>
  );
};

export default InputList;
