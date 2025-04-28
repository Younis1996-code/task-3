import heroPhoto from "../../../assets/images/hero/hero.png";
import styles from "./Hero.module.css";
const Hero = () => {
  return (
    <div id="" className={styles.hero}>
      <div className={styles.heroImage}>
        <img className={styles.image} src={heroPhoto} alt="hero" />
      </div>
      <div className={styles.heroContent}>
        <p className={styles.firstP}>Welcome to Little Learners Academy</p>
        <h1>
          Where Young Minds Blossom and <span>Dreams Take Flight.</span>
        </h1>
        <p className={styles.secondP}>
          Our kinder garden school provides a nurturing and stimulating
          environment, fostering a love for learning that lasts a lifetime. Join
          us as we embark on an exciting educational journey together!
        </p>
        <div className={styles.results}>
          <div>
            <h2>+7000</h2>
            <p>Students Passed Out</p>
          </div>
          <div>
            <h2>+37</h2>
            <p>Awards & Recognitions</p>
          </div>
          <div>
            <h2>+15</h2>
            <p>Experience Educators</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
