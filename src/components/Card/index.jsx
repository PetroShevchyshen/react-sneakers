import styles from "./Card.module.scss";

function Card(props) {
  const { title, price, url } = props;

  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img src="/img/heart.svg" alt="heart" />
      </div>
      <img width={133} height={133} src={url} alt="sneaker1" />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column ">
          <span>Ціна:</span>
          <b>{price}грн.</b>
        </div>
        <button className="button">
          <img width={11} height={11} src="/img/plus.svg" alt="plus" />
        </button>
      </div>
    </div>
  );
}

export default Card;
