import styles from "./Video.module.css";

const Video = ({video_url}) => {
  return (
    <>
      <div className={styles.video}>
        <video autoPlay controls muted loop>
          <source src={video_url} />
        </video>
      </div>
    </>
  );
};

export default Video;
