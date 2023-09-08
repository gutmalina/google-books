import { useAppSelector } from "../../services/hooks";
import { useState, useEffect, useCallback } from "react";
import Card from "../card";
import styles from "./main.module.css";
import { TBook } from "../../utils/types";
import { CATEGORY_ALL } from "../../utils/constants";
import Preloader from "../preloader";

const Main = () => {
  const books = useAppSelector((store) => store.books);
  const total = useAppSelector((store) => store.total);
  const category = useAppSelector((store) => store.category);
  const error = useAppSelector((store) => store.error);
  const preloader = useAppSelector((store) => store.preloader);
  const [title, setTitle] = useState("");
  const [renderBooks, setRenderBooks] = useState<TBook[]>([]);

  /** фильтр по выбранной категории из полученного массива */
  const filterBooks = useCallback(() => {
    const arr = books
      .filter((book: TBook) => {
        return book.volumeInfo.categories && book;
      })
      .filter((book) => {
        return (
          book.volumeInfo.categories[0]
            .toLocaleLowerCase()
            .includes(category) && book
        );
      });
    setRenderBooks(arr);
    setTitle(`Founds ${arr.length} results`)
  }, [category, books]);

  /** установка массива для отрисовки в зависимости от категории */
  useEffect(() => {
    if(category === CATEGORY_ALL){
      setRenderBooks(books)
      setTitle(`Founds ${total} results`);
    }else{
      filterBooks()}
  }, [category, filterBooks, books, total]);

  /** монтирование компонента */
  useEffect(() => {
    setRenderBooks(books);
  }, [books]);

  return (
    <main className={styles.wrapper}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.group_cards}>
        {renderBooks
          ? renderBooks.map((item: TBook) => (
              <Card key={item.etag} card={item.volumeInfo}></Card>
            ))
          : null}
      </div>
      {error ? <h2 className={styles.title_error}>ERROR: {error}</h2> : null}
      {preloader ? <Preloader/> : null}
    </main>
  );
};

export default Main;
