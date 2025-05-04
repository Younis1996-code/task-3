import styles from "./AboutHistory.module.css";
import yearDes from "../../../assets/images/AboutU/AboutHistory/Abstract Design.svg";

const AboutHistory = (props) => {
  return (
    <div className={styles.benefits}>
      <div className={styles.head}>Our Progressive Journey</div>
      <h3>Our History</h3>
      <p>
        Founded with a passion for early education in 2005, our kindergarten
        school boasts a rich history of empowering young learners to reach their
        potential through innovative teaching methods and a supportive learning
        environment
      </p>
      <div className={styles.aboHis}>
        <div className={styles.hisCon}>
          <div className={styles.verLine}>
            <div className={styles.verInnerLine}></div>
          </div>
          {props.aboutHis.map((item) => (
            <div key={item.id} className={styles.hisContent}>
              <div className={styles.horYear}>
                <div className={styles.horLine}>
                  <div className={styles.horInnerLine}></div>
                  <div className={styles.nodeF}></div>
                  <div className={styles.nodeS}></div>
                </div>
                <div className={styles.hisYear}>
                  <div className={styles.hisImage}>
                    <img src={yearDes} alt="design" />
                  </div>
                  <h3>{item.year}</h3>
                </div>
              </div>
              <div className={styles.hisText}>
                <h5>{item.title}</h5>
                <p>{item.para}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutHistory;
