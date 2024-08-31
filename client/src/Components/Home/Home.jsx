import styles from "./Home.module.css";
import Label from "../Label/Label";
import Video from "../Video/Video";
import CoverImage from "../CoverImage/CoverImage";
import Hero from "../Hero/Hero";
import TheUnknown from "../TheUnknown/TheUnknown";

const HeroSection = () => {
  return (
    <main>
      <Hero />

      <CoverImage image_url="\images\nike-just-do-it.jpg" />
      <Label
        heading="Latest from NIKE"
        button_text="Shop Now"
        description=" inventore at vero culpa doloribus nam iste ut? Impedit magni corrupti adipisci fuga libero!"
      />

      <Video video_url="/videos/Nike_Air_Jordan.mp4" />

      <Label
        button_text="Explore"
        heading="Featured from NIKE"
        description=" inventore at vero culpa doloribus nam iste ut? Impedit magni corrupti adipisci fuga libero!"
      />

      <Video video_url="/videos/Nike_3d_Animation.mp4" />

      <div className={styles.unknown_container}>
        <TheUnknown tag="Trending" image_url="\images\RedShoe.png" />
        <TheUnknown tag="Trending" image_url="\images\BlueShoe.png" />
      </div>

      <Label
        button_text="Explore"
        heading="NIKE Tech"
        description=" inventore at vero culpa doloribus nam iste ut? Impedit magni corrupti adipisci fuga libero!"
      />

      <div className={styles.unknown_container}>
        <TheUnknown
          tag="Trending"
          image_url="\images\nike_colorful.png"
        />
        <TheUnknown
          tag="Trending"
          image_url="\images\nike_purple_voilet.png"
        />
      </div>

      <CoverImage image_url={"/images/nike-just-do-it.jpg"} />

      <div className={styles.unknown_container}>
        <TheUnknown
          tag="Featured"
          image_url="\images\nike_sneaker_basketball.png"
        />
        <TheUnknown
          tag="Trending"
          image_url="\images\nike_skate_green.png"
        />
        
      </div>
    </main>
  );
};

export default HeroSection;
