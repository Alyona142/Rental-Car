import { NavLink, Link } from "react-router-dom";
import clsx from "clsx";
import { useDispatch } from "react-redux";
import { resetFilters } from "../../redux/filters/slice";
import css from "./Navigation.module.css";

const Navigation = () => {
  const dispatch = useDispatch();

  const handleCatalogClick = () => {
    dispatch(resetFilters());
  };

  const getLinkClass = ({ isActive }) => clsx(css.link, isActive && css.active);

  return (
    <header className={css.header}>
      <div className={css.logoWrapper}>
        <Link to="/" className={css.logoLink}>
          <svg className={css.logo} aria-label="Logo">
            <use href="/symbol-defs.svg#icon-logo"></use>
          </svg>
        </Link>
      </div>

      <nav className={css.nav}>
        <NavLink to="/" className={getLinkClass}>
          Home
        </NavLink>
        <NavLink
          to="/catalog"
          className={getLinkClass}
          onClick={handleCatalogClick}
        >
          Catalog
        </NavLink>
      </nav>
    </header>
  );
};

export default Navigation;
