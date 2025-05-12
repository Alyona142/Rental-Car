import { Link } from "react-router-dom";
import sprite from "../../assets/icons/sprite.png";
import css from "./Logo.module.css";

const Logo = () => {
  return (
    <Link to="/" className={css.logo} aria-label="Go to RentalCar home page">
      <svg className={css.logoIcon} width={104} height={16} aria-hidden="true">
        <use href={`${sprite}#logo`}></use>
      </svg>
    </Link>
  );
};

export default Logo;
