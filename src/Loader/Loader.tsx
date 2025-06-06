import React from "react";
import css from "./Loader.module.css";

const Loader: React.FC = () => {
  return (
    <div
      className={css.loader}
      role="status"
      aria-live="polite"
      aria-label="Loading"
    >
      <div className={css.spinner}></div>
    </div>
  );
};

export default Loader;
