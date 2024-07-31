import { createContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";

import Home from "./pages/home";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Favorites from "./pages/Favorites";

export const AppContext = createContext({});

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cardOpened, setCartOpened] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [favorite, setFavorite] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const onAddToCart = async (obj) => {
    try {
      if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
        onRemoveItem(obj.id);
      } else {
        await axios.post(
          "https://66a75cf353c13f22a3cf6c57.mockapi.io/cart",
          obj
        );
        setCartItems((prev) => [...prev, obj]);
      }
    } catch (error) {
      alert("Помилка");
    }
  };

  const onFavorite = (obj) => {
    console.log(obj);
    if (favorite.find((item) => Number(item.id) === Number(obj.id))) {
      setFavorite((prev) =>
        prev.filter((item) => Number(obj.id) !== Number(item.id))
      );
    } else {
      setFavorite((prev) => [...prev, obj]);
    }
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  useEffect(() => {
    async function fetchDate() {
      const cartResponse = await axios.get(
        "https://66a75cf353c13f22a3cf6c57.mockapi.io/cart"
      );

      const itemsResponse = await axios.get(
        "https://66a75cf353c13f22a3cf6c57.mockapi.io/items"
      );

      setIsLoading(false);

      setCartItems(cartResponse.data);
      setItems(itemsResponse.data);
    }
    fetchDate();
  }, []);

  const onRemoveItem = (id) => {
    axios.delete(`https://66a75cf353c13f22a3cf6c57.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.id) === Number(id));
  };

  const orderSumPrice = () => {
    let sum = 0;
    for (const item of cartItems) {
      sum += item.price;
    }
    return sum;
  };

  console.log(items);
  return (
    <AppContext.Provider
      value={{
        items,
        cartItems,
        favorite,
        isItemAdded,
        onFavorite,
        setCartItems,
        setCartOpened,
        orderSumPrice,
      }}
    >
      <div className="wrapper clear">
        {cardOpened && (
          <Drawer
            onCloseCart={() => setCartOpened(false)}
            onRemove={onRemoveItem}
          />
        )}
        <Header onClickCart={() => setCartOpened(true)} />
        <Routes>
          <Route
            path="/"
            exact
            element={
              <Home
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                onChangeSearchInput={onChangeSearchInput}
                onAddToCart={onAddToCart}
                isLoading={isLoading}
              />
            }
          />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
