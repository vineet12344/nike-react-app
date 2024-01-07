import styles from "./TheUnknown.module.css";

const TheUnknown = ({ image_url, tag }) => {
  return (
    <>
      <div className={styles.big_card}>
        <div className={styles.heading}>
          <span>{tag}</span>
        </div>
        <div className={styles.img_div}>
          <img width={"500px"} src={image_url} alt="img" />
        </div>

        <div className={styles.card_Btn}>
          <button className={styles.black_btn}>shop now</button>
        </div>
      </div>
    </>
  );
};

export default TheUnknown;
