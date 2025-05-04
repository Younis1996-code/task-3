import styles from "./StuLearn.module.css";

const StuLearn = (props) => {
  return (
    <div className={styles.benefits}>
      <div className={styles.head}>Our Features</div>
      <h3>What Students Learn</h3>
      <p>
        At Little Learners Academy, we strive to cultivate a love for learning
        and equip children with essential skills for their future success. Our
        academic programs cover a wide range of subjects, allowing students to
        develop a strong foundation and discover their interests. Some key areas
        of learning include
      </p>
      <div className={styles.acaStud}>
        {props.acaStu.map((item) => (
          <div className={styles.acaStudItem} key={item.id}>
            <div className={styles.studUp}>
              <div className={styles.empDiv}></div>
              <div className={styles.imaDiv}>
                <img src={item.image} alt={item.title} />
              </div>
            </div>
            <div className={styles.studDown}>
              <h4>{item.title}</h4>
              <p>{item.par}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StuLearn;
