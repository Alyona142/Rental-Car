import CarsList from "../../components/CarsList/CarsList";
import Filters from "../../components/Filters/Filters";

import css from "./CatalogPage.module.css";

const CatalogPage = () => {
  const cars = [];

  return (
    <div className={css.container}>
      <Filters />
      <CarsList cars={cars} />
    </div>
  );
};

export default CatalogPage;
