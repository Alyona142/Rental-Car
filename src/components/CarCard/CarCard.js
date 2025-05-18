import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorites, removeFromFavorites } from "./favoritesSlice";
import { Link } from "react-router-dom";

const CarCard = ({ car }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.favorites);

  const isFavorite = favorites.some((favCar) => favCar.id === car.id);

  const handleFavoriteToggle = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(car));
    } else {
      dispatch(addToFavorites(car));
    }
  };

  return (
    <div className="car-card">
      <img src={car.img} alt={car.model} />
      <h3>
        {car.brand} {car.model}
      </h3>
      <p>{car.description}</p>
      <button onClick={handleFavoriteToggle}>
        {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
      </button>
      <Link to={`/catalog/${car.id}`}>
        <button>Read more</button>
      </Link>
    </div>
  );
};

export default CarCard;
