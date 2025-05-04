import styles from "./AcaHero.module.css";
import shape from "../../../assets/images/AboutU/AboutHero/Abstract Design.png";
const AcaHero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.shape}>
        <img src={shape} alt="shape" />
      </div>
      <div className={styles.heroCon}>
        <div className={styles.heroHead}>
          <button>Academics</button>
          <h1 className={styles.heroTitle}>
            Nurturing Young Minds for Success
          </h1>
        </div>
        <div className={styles.heroDesc}>
          <p className={styles.heroPar}>
            Welcome to our Academics page, where we take pride in providing a
            comprehensive and stimulating educational experience for your child.
            Our kindergarten school's academic program is thoughtfully designed
            to foster a love for learning while building a strong foundation of
            essential skills and knowledge. From language arts and mathematics
            to science and social studies, our curriculum is carefully crafted
            to spark curiosity and encourage active exploration.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AcaHero;
