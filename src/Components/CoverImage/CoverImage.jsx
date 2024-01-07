import React from "react";
import styles from "./CoverImage.module.css"

const CoverImage = ({image_url}) => {
  return (
    <>
      <div className={styles.cover_image}>
        <img src={image_url} alt="img" />
      </div>
    </>
  );
};

export default CoverImage;
