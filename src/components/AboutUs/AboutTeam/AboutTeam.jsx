import styles from "./AboutTeam.module.css";
import { FaEnvelope } from "react-icons/fa";

const AboutTeam = (props) => {
  return (
    <div className={styles.benefits}>
      <div className={styles.head}>Our Teachers With Experties</div>
      <h3>Our Team Members</h3>
      <p>
        At Little Learners Academy, our teaching team is the heart of our
        educational journey. We take great pride in employing highly qualified
        and passionate educators who possess a deep understanding of early
        childhood development. Our teachers create a warm and engaging
        atmosphere, encouraging curiosity, instilling confidence, and fostering
        a love for learning.
      </p>
      <div className={styles.aboTeam}>
        {props.aboutTea.map((item) => (
          <div key={item.id} className={styles.teamUnit}>
            <div className={styles.TeamUp}>
              <div className={styles.leftCon}>
                <div className={styles.teamImage}>
                  <img src={item.image} alt="team image" />
                </div>
                <h3>{item.name}</h3>
              </div>
              <div className={styles.rightCon}>
                <FaEnvelope className={styles.teamIcon} />
              </div>
            </div>
            <div className={styles.TeamDown}>
              <h5>{item.title}</h5>
              <p>{item.para}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutTeam;
