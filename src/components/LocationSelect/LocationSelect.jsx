import css from "./LocationSelect.module.css";
import sprite from "../../assets/icons/sprite.png";
import { useDispatch, useSelector } from "react-redux";

import { setLocation, selectLocation } from "../../redux/filters/slice";
import { optionsList } from "./options";

const LocationSelect = () => {
  const dispatch = useDispatch();
  const selectedLocation = useSelector(selectLocation);

  const handleChange = (e) => {
    dispatch(setLocation(e.target.value));
  };

  return (
    <div className={css.selectContainer}>
      <label className={css.label} htmlFor="location-select">
        Location
      </label>
      <div className={css.selectWrapper}>
        <svg className={css.icon} width={20} height={20}>
          <use href={`${sprite}#map`} />
        </svg>
        <select
          className={css.customSelect}
          id="location-select"
          value={selectedLocation}
          onChange={handleChange}
        >
          <option value="">City</option>
          {optionsList.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default LocationSelect;
