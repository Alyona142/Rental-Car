import css from "./Equipment.module.css";
import sprite from "../../assets/icons/sprite.png";
import { useDispatch, useSelector } from "react-redux";
import { toggleEquipment } from "../../redux/filters/slice";
import { selectEquipment } from "../../redux/filters/selectors";

const equipmentOptions = [
  { label: "Leather seats", icon: "leather" },
  { label: "Panoramic sunroof", icon: "sunroof" },
  { label: "Remote start", icon: "remote" },
  { label: "Blind-spot monitoring", icon: "blind-spot" },
  { label: "Power liftgate", icon: "liftgate" },
  { label: "Premium audio system", icon: "audio" },
];

const Equipment = () => {
  const dispatch = useDispatch();
  const selected = useSelector(selectEquipment);

  const handleChange = (label) => {
    dispatch(toggleEquipment(label));
  };

  return (
    <div className={css.container}>
      <h4 className={css.title}>Accessories and functionalities</h4>
      <ul className={css.list}>
        {equipmentOptions.map(({ label, icon }) => (
          <li key={label} className={css.item}>
            <input
              type="checkbox"
              id={label}
              checked={selected.includes(label)}
              onChange={() => handleChange(label)}
              className={css.checkbox}
            />
            <label htmlFor={label} className={css.label}>
              <svg className={css.icon}>
                <use href={`${sprite}#${icon}`} />
              </svg>
              {label}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Equipment;
