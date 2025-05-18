import css from "./CategoriesItem.module.css";

const CategoriesItem = ({ type, isActive, onClick }) => {
  return (
    <button
      className={`${css.button} ${isActive ? css.active : ""}`}
      onClick={() => onClick(type)}
    >
      {type}
    </button>
  );
};

export default CategoriesItem;
