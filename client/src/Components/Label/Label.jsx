import React from "react";
import styles  from "./Label.module.css";

const Label = ({heading,button_text,description}) => {
  return (
    <>
      <div className={styles.Label}>
        <h1>{heading}</h1>
        <p>{description}</p>
        <button>{button_text}</button>
      </div>
    </>
  );
};

export default Label;
