import css from "./CarConditionsAndSpecs.module.css";
import sprite from "../../assets/icons/sprite.svg";

const CarConditionsAndSpecs = ({ year, type, fuelConsumption, engineSize }) => {
  const conditions = [
    { label: "Minimum age", value: "25", icon: "user" },
    { label: "Security deposit", value: "Required", icon: "shield" },
    { label: "Valid driver’s license", value: "", icon: "license" },
  ];

  const specs = [
    { label: "Year", value: year, icon: "calendar" },
    { label: "Type", value: type, icon: "car" },
    {
      label: "Fuel Consumption",
      value: `${fuelConsumption} L/100 km`,
      icon: "fuel",
    },
    { label: "Engine Size", value: engineSize, icon: "engine" },
  ];

  return (
    <div className={css.container}>
      <div className={css.section}>
        <h3 className={css.title}>Rental Conditions</h3>
        <ul className={css.list}>
          {conditions.map(({ label, value, icon }) => (
            <li key={label} className={css.item}>
              <svg className={css.icon} width={20} height={20}>
                <use href={`${sprite}#${icon}`} />
              </svg>
              <span className={css.label}>{label}:</span>
              <span className={css.value}>{value}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className={css.section}>
        <h3 className={css.title}>Car Specifications</h3>
        <ul className={css.list}>
          {specs.map(({ label, value, icon }) => (
            <li key={label} className={css.item}>
              <svg className={css.icon} width={20} height={20}>
                <use href={`${sprite}#${icon}`} />
              </svg>
              <span className={css.label}>{label}:</span>
              <span className={css.value}>{value}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CarConditionsAndSpecs;
