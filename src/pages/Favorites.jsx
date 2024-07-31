import { useContext } from "react";
import Card from "../components/Card";
import { AppContext } from "../App";

function Favorites() {
  const { favorite } = useContext(AppContext);

  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>Favorite</h1>
      </div>
      <div className="d-flex flex-wrap">
        {favorite.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            price={item.price}
            imgUrl={item.imgUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default Favorites;
