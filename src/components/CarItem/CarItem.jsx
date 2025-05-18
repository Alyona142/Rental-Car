import css from "./CarItem.module.css";
import sprite from "../../assets/icons/sprite.png";
import { Link } from "react-router-dom";

const CarItem = ({ car }) => {
  const {
    id,
    img,
    name,
    price,
    location,
    type,
    engineSize,
    fuelConsumption,
    functionalities,
  } = car;

  return (
    <li className={css.card}>
      <img src={img} alt={name} className={css.image} />
      <div className={css.top}>
        <h3 className={css.name}>{name}</h3>
        <p className={css.price}>${price}</p>
      </div>
      <p className={css.info}>
        <svg width={16} height={16}>
          <use href={`${sprite}#map`} />
        </svg>
        {location}
      </p>
      <ul className={css.features}>
        <li>{type}</li>
        <li>{engineSize}</li>
        <li>{fuelConsumption} L/100 km</li>
        <li>{functionalities[0]}</li>
      </ul>
      <Link to={`/cars/${id}`} className={css.btn}>
        Learn more
      </Link>
    </li>
  );
};

export default CarItem;
