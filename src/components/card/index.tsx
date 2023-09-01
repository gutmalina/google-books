import { FC, useEffect, useState } from "react";
import { ALT_BOOK_COVER } from "../../utils/constants";
import styles from "./card.module.css";
import { TPropsCard } from "../../utils/types";

const Card: FC<TPropsCard> = ({ card }) => {
  const [authorList, setAuthorList] = useState("");

  useEffect(() => {
    card.authors && setAuthorList(card.authors.join(", "));
  }, [card]);

  return (
    <article className={styles.wrapper}>
      {card.imageLinks ? (
        <img
          src={card.imageLinks?.smallThumbnail}
          alt={ALT_BOOK_COVER}
          className={styles.img}
        />
      ) : (
        <div className={styles.plug_img}></div>
      )}
      {card.categories ? (
        <p className={styles.subtitle}>{card.categories[0]}</p>
      ) : (
        <p>&nbsp;</p>
      )}
      <h3 className={styles.title}>{card.title}</h3>
      <p className={styles.subtitle_type_author}>{authorList}</p>
    </article>
  );
};

export default Card;
