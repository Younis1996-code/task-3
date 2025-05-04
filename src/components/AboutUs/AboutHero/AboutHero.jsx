import styles from "./AboutHero.module.css";
import shape from "../../../assets/images/AboutU/AboutHero/Abstract Design.png";

const AboutHero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.shape}>
        <img src={shape} alt="shape" />
      </div>
      <div className={styles.heroCon}>
        <div className={styles.heroHead}>
          <button>Overview</button>
          <h1 className={styles.heroTitle}>
            Welcome to Little Learners Academy
          </h1>
        </div>
        <div className={styles.heroDesc}>
          <p className={styles.heroPar}>
            A leading kinder garden school dedicated to providing a nurturing
            and stimulating environment for young learners. With a commitment to
            excellence in early education, we believe in shaping curious minds
            and building a strong foundation for a lifelong love of learning.
            Our holistic approach fosters intellectual, social, emotional, and
            physical development, ensuring that each child reaches their full
            potential.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
