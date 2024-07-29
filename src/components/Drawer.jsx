function Drawer({ onCloseCart, onRemove, items = [] }) {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between mb-30">
          Корзина
          <img
            onClick={onCloseCart}
            className="removeBtn cu-p"
            src="/img/btn-remove.svg"
            alt="Close"
          />
        </h2>

        <div className="items">
          {items.map((item) => (
            <div className="cartItem d-flex align-center mb-20">
              <div
                style={{ backgroundImage: `url(${item.url})` }}
                className="cardItemImg"
              ></div>
              <div className="mr-20 flex">
                <p className="mb-5">{item.title}</p>
                <b>{item.price} грн.</b>
              </div>
              <img
                onClick={() => onRemove(item.id)}
                className="removeBtn"
                src="/img/btn-remove.svg"
                alt="removeBtn"
              />
            </div>
          ))}
        </div>

        <div className="cardTotalBlock">
          <ul>
            <li className="d-flex">
              <span>Загальна ціна:</span>
              <div></div>
              <b>21 498 грн.</b>
            </li>
            <li className="d-flex">
              <span>Податок 5%:</span>
              <div></div>
              <b>1074 грн.</b>
            </li>
          </ul>
          <button className="greenButton">
            Оформити замовлення <img src="/img/arrow.svg" alt="arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
