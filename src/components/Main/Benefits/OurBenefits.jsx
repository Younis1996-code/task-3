import styles from "./OurBenefits.module.css";
const OurBenefits = (props) => {
  return (
    <div className={styles.benefits}>
      <div className={styles.head}>Children Deserve Bright Future</div>
      <h3>Our Benefits</h3>
      <p>
        With a dedicated team of experienced educators, state-of-the-art
        facilities, and a comprehensive curriculum, we aim to lay a strong
        foundation for your child's future.
      </p>
      <div className={styles.ben}>
        {props.benCon.map((benefit) => {
          return (
            <div key={benefit.id} className={styles.benef}>
              <div className={styles.benefitIcon}>{benefit.icon}</div>
              <div className={styles.benefitText}>
                <h4>{benefit.title}</h4>
                <p>{benefit.par}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OurBenefits;
