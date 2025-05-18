import { NavLink } from "react-router-dom";
import css from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={css.hero}>
      <div className={css.heroInfo}>
        <h1 className={css.title}>Find your perfect rental car</h1>
        <p className={css.heroText}>
          Reliable and budget-friendly rentals for any journey
        </p>
        <div className={css.btnBox}>
          <NavLink to="/catalog" className={css.button}>
            View Catalog
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
