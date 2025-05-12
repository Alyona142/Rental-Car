import { MoonLoader } from "react-spinners";
import css from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={css.wrapperLoader}>
      <MoonLoader color="#e44848" size={60} />
    </div>
  );
};

export default Loader;
