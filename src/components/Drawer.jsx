import { useContext, useState } from "react";
import { AppContext } from "../App";

import Info from "../components/Info";

function Drawer({ onCloseCart, onRemove }) {
  const { cartItems, setCartItems, orderSumPrice } = useContext(AppContext);

  const [isOrderComplete, setIsOrderComplete] = useState(false);

  const onClickOrder = () => {
    setIsOrderComplete(true);
    setCartItems([]);
  };

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

        {cartItems.length > 0 ? (
          <>
            <div className="items">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="cartItem d-flex align-center mb-20"
                >
                  <div
                    style={{ backgroundImage: `url(${item.imgUrl})` }}
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
                  <b>{orderSumPrice()} грн.</b>
                </li>
                <li className="d-flex">
                  <span>Податок 5%:</span>
                  <div></div>
                  <b>1074 грн.</b>
                </li>
              </ul>
              <button onClick={onClickOrder} className="greenButton">
                Оформити замовлення <img src="/img/arrow.svg" alt="arrow" />
              </button>
            </div>
          </>
        ) : (
          <Info
            title={isOrderComplete ? "Замовлення оформлено" : "Корзина пуста"}
            description={
              isOrderComplete
                ? "Ваше замовлення скоро буде"
                : "Додай хоча б щось"
            }
            image={
              isOrderComplete
                ? "/img/complete-order.jpg"
                : "/img/empty-cart.jpg"
            }
          />
        )}
      </div>
    </div>
  );
}

export default Drawer;
