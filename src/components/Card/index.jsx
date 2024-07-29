import { useState } from "react";
import styles from "./Card.module.scss";

function Card({ title, price, url, onPlus, onFavorite }) {
  const [isAdded, setIsAdded] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const onClickPlus = () => {
    onPlus({ title, price, url });
    setIsAdded(!isAdded);
  };

  const onClickLike = () => {
    onFavorite({ title, price, url });
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img
          onClick={onClickLike}
          src={isFavorite ? "/img/liked.svg" : "/img/heart.svg"}
          alt="heart"
        />
      </div>
      <img width={133} height={133} src={url} alt="sneaker1" />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column ">
          <span>Ціна:</span>
          <b>{price}грн.</b>
        </div>
        <img
          className={styles.plus}
          onClick={onClickPlus}
          src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"}
          alt="plus"
        />
      </div>
    </div>
  );
}

export default Card;
