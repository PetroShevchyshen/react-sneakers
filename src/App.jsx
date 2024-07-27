import "./App.scss";
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

const data = [
  {
    title: "Чоловічі кросівки Nike Blazer Mid Suede",
    price: 12999,
    imgUrl: "../img/sneakers/1.jpg",
  },
  {
    title: "Чоловічі кросівки Nike Max 270",
    price: 15600,
    imgUrl: "../img/sneakers/2.jpg",
  },
  {
    title: "Чоловічі кросівки Nike Max 270",
    price: 8990,
    imgUrl: "../img/sneakers/3.jpg",
  },
  {
    title: "Чоловічі кросівки Nike Max 270",
    price: 12390,
    imgUrl: "../img/sneakers/4.jpg",
  },
];

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Всі кросівки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="search" />
            <input type="text" placeholder="Пошук..." />
          </div>
        </div>
        <div className="d-flex">
          {data.map((item) => (
            <Card
              key={item.imgUrl}
              title={item.title}
              price={item.price}
              url={item.imgUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
