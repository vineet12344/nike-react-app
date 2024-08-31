import React from "react";
import styles from "./Button.module.css";
import { useNavigate } from "react-router-dom";

const Button = ({key, isSecondary, text, redirectTo }) => {
  const Navigation = useNavigate();

  return (
    <>
      <button 
        key={key}
        onClick={() => Navigation(redirectTo)}
        className={isSecondary ? styles.secondary_button : styles.button}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
