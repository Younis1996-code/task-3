import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import styles from "./AboutReward.module.css";
import { useEffect, useState } from "react";
const AboutReward = (props) => {
  const [currentReward, setCurrentReward] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 993) {
        setItemsToShow(1);
      } else {
        setItemsToShow(3);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextReward = () => {
    if (currentReward < props.aboutRew.length - itemsToShow) {
      setCurrentReward(currentReward + 1);
    }
  };

  const prevReward = () => {
    if (currentReward > 0) {
      setCurrentReward(currentReward - 1);
    }
  };

  return (
    <div className={styles.benefits}>
      <div className={styles.head}>Our Achievements</div>
      <h3>Our Awards and Recognitions</h3>
      <p>
        Little Learners Academy takes pride in our commitment to delivering
        high-quality education and outstanding student experiences. We are
        honored to have received various awards and recognitions for our
        dedication to early childhood education. These accolades reflect our
        team's relentless efforts in creating an exceptional learning
        environment for our students.
      </p>
      <div className={styles.AbReward}>
        <div className={styles.sliCon}>
          <div
            className={styles.AbRewardSlider}
            style={{
              transform: `translateX(-${currentReward * (100 / itemsToShow)}%)`,
            }}
          >
            {props.aboutRew.map((item) => (
              <div key={item.id} className={styles.rew}>
                <div className={styles.rewImg}>
                  <img src={item.image} alt="reward" />
                </div>
                <div className={styles.rewText}>
                  <h4>{item.title}</h4>
                  <p>{item.para}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.downBtnDiv}>
          <p>
            {props.aboutRew.length - (currentReward + itemsToShow)} More Awards
          </p>
          <div className={styles.btnDiv}>
            <button
              onClick={prevReward}
              disabled={currentReward === 0}
              className={styles.sliBtnDiv}
            >
              <FaArrowLeftLong className={styles.sliBtn} />
            </button>
            <button
              onClick={nextReward}
              disabled={currentReward === props.aboutRew.length - itemsToShow}
              className={styles.sliBtnDiv}
            >
              <FaArrowRightLong className={styles.sliBtn} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutReward;
