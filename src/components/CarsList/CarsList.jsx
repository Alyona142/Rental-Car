import css from "./CarsList.module.css";
import CarItem from "../CarItem/CarItem";

const CarsList = ({ cars = [] }) => {
  return (
    <ul className={css.list}>
      {cars.map((car) => (
        <CarItem key={car.id} car={car} />
      ))}
    </ul>
  );
};

export default CarsList;
