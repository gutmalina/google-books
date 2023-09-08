import { useAppSelector } from "../../services/hooks";
import styles from "./card-details.module.css";
import { ALT_BOOK_COVER } from "../../utils/constants";
import { useEffect, useState } from "react";

const CardDetails = () => {
  const card = useAppSelector((store) => store.card);
  const [authorList, setAuthorList] = useState("");

  useEffect(() => {
    card.authors && setAuthorList(card.authors.join(", "));
  }, [card]);

  return (
    <>
      <article className={styles.container}>
        <div className={styles.container_img}>
          {card.imageLinks ? (
            <img
              src={card.imageLinks?.smallThumbnail}
              alt={ALT_BOOK_COVER}
              className={styles.img}
            />
          ) : (
            <div className={styles.plug_img}></div>
          )}
        </div>
        <div className={styles.container_text}>
          {card.categories ? (
            <p className={styles.subtitle}>{card.categories[0]}</p>
          ) : (
            <p>&nbsp;</p>
          )}
          <h3 className={styles.title}>{card.title}</h3>
          {authorList ? (
            <p className={styles.subtitle_type_author}>{authorList}</p>
          ) : (
            <p>&nbsp;</p>
          )}

          <div className={styles.content}>
            {card.description ? <p>{card.description}</p> : null}
          </div>
        </div>
      </article>
    </>
  );
};

export default CardDetails;
