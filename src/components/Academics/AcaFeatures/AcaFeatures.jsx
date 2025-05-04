import styles from "./AcaFeatures.module.css";

const AcaFeatures = (props) => {
  return (
    <div className={styles.benefits}>
      <div className={styles.head}>Our Features</div>
      <h3>Our Special Features</h3>
      <p>
        Our kinder garden school provides a nurturing and stimulating
        environment, fostering a love for learning that lasts a lifetime. Join
        us as we embark on an exciting educational journey together!
      </p>
      <div className={styles.feaSp}>
        {props.acaFea.map((item) => (
          <div className={styles.feaItem} key={item.id}>
            <div className={styles.feaIcon}>{item.icon}</div>
            <div className={styles.feaCon}>
              <h4>{item.title}</h4>
              <p>{item.par}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AcaFeatures;
