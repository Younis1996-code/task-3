import styles from "./AboutMission.module.css";
const AboutMission = (props) => {
  return (
    <div className={styles.benefits}>
      <div className={styles.head}>Mission & Visions</div>
      <h3>Our Mission & Visions</h3>
      <p>
        We are here to provide a nurturing and inclusive environment where young
        minds can thrive, fostering a love for learning and personal growth.
      </p>
      <div className={styles.misCard}>
        {props.aboutMis.map((item) => (
          <div className={styles.cardItem} key={item.id}>
            <div className={styles.cardMisHea}>
              <h3 className={styles.cardTit}>{item.title}</h3>
              <div className={styles.cardImage}>
                <img src={item.icon} alt={item.title} />
              </div>
            </div>
            <div className={styles.cardCon}>
              <p>{item.paragra}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutMission;
