import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";

import Home from "./pages/home";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Favorites from "./pages/Favorites";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [cardOpened, setCartOpened] = useState(false);
  const [items, setItems] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [favorite, setFavorite] = useState([]);

  const onAddToCart = (obj) => {
    axios.post("https://66a75cf353c13f22a3cf6c57.mockapi.io/cart", obj);
    setCartItems((prev) => [...prev, obj]);
  };

  const onFavorite = (obj) => {
    setFavorite((prev) => [...prev, obj]);
  };

  useEffect(() => {
    axios
      .get("https://66a75cf353c13f22a3cf6c57.mockapi.io/items")
      .then((response) => setItems(response.data));
  }, []);

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  useEffect(() => {
    axios
      .get("https://66a75cf353c13f22a3cf6c57.mockapi.io/items")
      .then((response) => setItems(response.data));

    axios
      .get("https://66a75cf353c13f22a3cf6c57.mockapi.io/cart")
      .then((response) => setCartItems(response.data));
  }, []);

  const onRemoveItem = (id) => {
    axios.delete(`https://66a75cf353c13f22a3cf6c57.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="wrapper clear">
      {cardOpened && (
        <Drawer
          onCloseCart={() => setCartOpened(false)}
          onRemove={onRemoveItem}
          items={cartItems}
        />
      )}
      <Header onClickCart={() => setCartOpened(true)} />
      <Routes>
        <Route
          path="/"
          exact
          element={
            <Home
              items={items}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              onChangeSearchInput={onChangeSearchInput}
              onAddToCart={onAddToCart}
              onFavorite={onFavorite}
            />
          }
        />
        <Route path="/favorites" element={<Favorites favorites={favorite} />} />
      </Routes>
    </div>
  );
}

export default App;
