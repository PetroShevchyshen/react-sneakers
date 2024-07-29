import Card from "../components/Card";

function Favorites({ favorites }) {
  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>Favorite</h1>
      </div>
      <div className="d-flex flex-wrap">
        {favorites.map((item) => (
          <Card
            key={item.imgUrl}
            title={item.title}
            price={item.price}
            url={item.url}
          />
        ))}
      </div>
    </div>
  );
}

export default Favorites;
