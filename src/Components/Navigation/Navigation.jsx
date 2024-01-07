import React from "react";
import styles from "./Navigation.module.css";
import { NavLink } from "react-router-dom";
import Button from "../Button/Button";


const Navigation = () => {
  const imageWidth = "100px";

  return (
    <header>
      <nav className={styles.nav_bar}>
        <div className={styles.logo}>
          <NavLink to="/">
            <img
              src="./public/images/Nike.png"
              width={imageWidth}
              alt="logo"
            ></img>
          </NavLink>
        </div>
        <ul>
          <NavLink to="/">Home</NavLink>
          <NavLink to="DesignsPage">Designs</NavLink>
          <NavLink to="/Contact">Contact</NavLink>
        </ul>
        <Button text={"Sign Up"}  redirectTo={"/LoginPage"}/>
      </nav>
    </header>
  );
};

export default Navigation;
