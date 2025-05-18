import { selectFilters, selectForm } from "../redux/filters/selectors";
import CategoriesItem from "../CategoriesItem/CategoriesItem";
import css from "./CategoriesList.module.css";
import { getCategories } from "./categories";
import { useSelector } from "react-redux";

const CategoriesList = ({ car }) => {
  const categories = getCategories(car);
  const equipment = useSelector(selectFilters);
  const type = useSelector(selectForm);

  return (
    <ul className={css.categoriesList}>
      {categories
        .filter((category) => category.condition)
        .map((category) => (
          <li
            key={`${car.id}-${category.id}`}
            className={`${css.categoriesListItem} ${
              equipment[category.id] || type === category.id ? css.active : ""
            }`}
          >
            <CategoriesItem text={category.text} icon={category.icon} />
          </li>
        ))}
    </ul>
  );
};

export default CategoriesList;
