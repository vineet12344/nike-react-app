import React from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  const imgWidth = "30px";
  const shoeWidth = "550px";
  
  return (
    <>
      <div className={styles.hero}>
        <div className={styles.hero_container}>
          <div className={styles.hero_content}>
            <h1>
              YOUR <span className={styles.feet}>FEET</span> DESERVES THE
              <span className={styles.best}> BEST</span>
            </h1>
            <p>
              YOUR FEET DESERVES THE BEST AND WE ARE HERE TO HELP YOU WITH OUR
              SHOES.YOUR FEET DESERVES THE BEST AND WE ARE HERE TO HELP YOU WITH
              OUR SHOES.
            </p>
          </div>

          <div className={styles.hero_btn}>
            <button>Shop Now</button>
            <button className={styles.secondary_btn}>Category</button>
          </div>

          <div className={styles.shopping}>
            <p>Also Available on: </p>
          </div>

          <div className={styles.brand_icons}>
            <img
              src="/images/Flipkart.png"
              alt="flipkart-logo"
              width={imgWidth}
            />
          </div>
        </div>

        <div className={styles.hero_image_container}>
          <div className={styles.Hero_image}>
            <img
              src="public/images/BlueShoe.png"
              alt="shoe"
              className="shoe"
              width={shoeWidth}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
