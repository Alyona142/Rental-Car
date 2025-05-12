import { NavLink } from "react-router-dom";
import css from "./Menu.module.css";
import clsx from "clsx";

const makeLinkClass = ({ isActive }) => {
  return clsx(css.navLink, isActive && css.isActive);
};
const Menu = ({ paths }) => {
  return (
    <ul className={css.menu}>
      {paths.map((path) => (
        <li key={path} className={css.menuItem}>
          <NavLink to={path} className={makeLinkClass}>
            {path.charAt(0).toUpperCase() + path.slice(1)}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Menu;
