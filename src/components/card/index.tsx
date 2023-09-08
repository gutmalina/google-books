import { FC, useEffect, useState } from "react";
import { ALT_BOOK_COVER } from "../../utils/constants";
import styles from "./card.module.css";
import { TBookInfo } from "../../utils/types";
import { useAppDispatch } from "../../services/hooks";
import { addCard } from "../../services/reducers";

type TProps = {
  card: TBookInfo;
};

const Card: FC<TProps> = ({ card }) => {
  const [authorList, setAuthorList] = useState("");
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(addCard(card))
  }

  useEffect(() => {
    card.authors && setAuthorList(card.authors.join(", "));
  }, [card]);

  return (
    <article className={styles.wrapper} onClick={handleClick}>
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
