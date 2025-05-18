import css from "./CarDetailsItem.module.css";
import sprite from "../../assets/icons/sprite.png";

const CarDetailsItem = ({ car }) => {
  if (!car) return null;

  const {
    name,
    address,
    mileage,
    price,
    description,
    rentalConditions,
    functionalities,
    type,
    fuelConsumption,
    engineSize,
    year,
    accessories,
    img,
  } = car;

  const location = address?.split(",").slice(-2).join(", ");

  return (
    <section className={css.details}>
      <h2 className={css.title}>{name}</h2>

      <div className={css.meta}>
        <div className={css.item}>
          <svg className={css.icon} width={16} height={16}>
            <use href={`${sprite}#map`} />
          </svg>
          <span>{location}</span>
        </div>
        <div className={css.item}>
          <svg className={css.icon} width={16} height={16}>
            <use href={`${sprite}#speed`} />
          </svg>
          <span>Mileage: {mileage.toLocaleString()} km</span>
        </div>
        <div className={css.item}>
          <svg className={css.icon} width={16} height={16}>
            <use href={`${sprite}#price`} />
          </svg>
          <span>${price}</span>
        </div>
      </div>

      <img src={img} alt={name} className={css.image} />

      <p className={css.description}>{description}</p>

      <div className={css.conditions}>
        <h3 className={css.subtitle}>Rental Conditions</h3>
        <ul className={css.list}>
          {rentalConditions?.split("\n").map((item, i) => (
            <li key={i} className={css.condition}>
              <svg className={css.icon} width={16} height={16}>
                <use href={`${sprite}#check`} />
              </svg>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className={css.specs}>
        <h3 className={css.subtitle}>Car Specifications</h3>
        <ul className={css.list}>
          <li>
            <strong>Year:</strong> {year}
          </li>
          <li>
            <strong>Type:</strong> {type}
          </li>
          <li>
            <strong>Fuel Consumption:</strong> {fuelConsumption} L/100km
          </li>
          <li>
            <strong>Engine Size:</strong> {engineSize}
          </li>
        </ul>
      </div>

      <div className={css.accessories}>
        <h3 className={css.subtitle}>Accessories and functionalities</h3>
        <ul className={css.list}>
          {[...(accessories || []), ...(functionalities || [])].map(
            (item, i) => (
              <li key={i}>
                <svg className={css.icon} width={16} height={16}>
                  <use href={`${sprite}#check`} />
                </svg>
                {item}
              </li>
            )
          )}
        </ul>
      </div>
    </section>
  );
};

export default CarDetailsItem;
