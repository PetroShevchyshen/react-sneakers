import "./App.scss";

function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center p-40">
        <div className="headerLeft d-flex align-center">
          <img width={40} height={40} src="/img/logo.png" alt="logo" />
          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p>Магазин найкращих кросівок</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30">
            <img width={18} height={18} src="/img/user.svg" alt="user" />
            <span>1205 грн.</span>
          </li>
          <li>
            <img width={18} height={18} src="/img/cart.svg" alt="cart" />
          </li>
        </ul>
      </header>
      <div className="content p-40">
        <h1>Всі кросівки</h1>
        <div className="card">
          <img src="" alt="" />
          <p></p>
          <div>
            <div>
              <span>Ціна:</span>
              <b>12 999 грн.</b>
            </div>
            <button>
              <img width={11} height={11} src="/img/plus.svg" alt="plus" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
