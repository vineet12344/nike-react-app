import React from "react";
import styles from "./designPage.module.css";
import Data from "/src/data/shoes.json";
import Button from "../Button/Button";

const DesignsPage = () => {
  return (
    <>
      <div className={styles.container}>
        {Data &&
          Data.map((data) => {
            return (
              <div className={styles.card_box} key={data.id}>
                <div className={styles.card_img}>
                  <img src={data.img} width="230" alt="RedShoe" />
                </div>
                <h4>{data.title}</h4>
                <div className={styles.card_description}>
                  <p className={styles.card_description_info}>
                    {data.description}
                  </p>
                  <span>{data.price}/_</span>
                </div>
                <div className={styles.card_buttons}>
                  <Button text={"Buy"} />
                  <Button isSecondary={true} text={"Add to cart"} />
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default DesignsPage;
