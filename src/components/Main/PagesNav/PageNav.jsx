import { Link } from "react-router-dom";
import styles from "./PageNav.module.css";
import { FaArrowRightLong } from "react-icons/fa6";
const PageNav = (props) => {
  return (
    <div className={styles.benefits}>
      <div className={styles.head}>Explore More</div>
      <h3>Navigate through our Pages</h3>
      <p>
        Your gateway to discovering a wealth of valuable information about our
        kindergarten school, Feel free to explore and learn more about the
        enriching experiences that await your child at our kindergarten school
      </p>
      <div className={styles.pageNav}>
        {props.pageNav.map((page) => (
          <div className={styles.page} key={page.id}>
            <div className={styles.label}>
              <h2>{page.name}</h2>
              <div className={styles.underLine}>
                <div className={styles.emptyDiv}></div>
                <div className={styles.spans}>
                  <div className={styles.oSpan}>
                    <div className={styles.iSpan}></div>
                  </div>
                  <div className={styles.oSpan}>
                    <div className={styles.iSpan}></div>
                  </div>
                  <div className={styles.oSpan}>
                    <div className={styles.iSpan}></div>
                  </div>
                  <div className={styles.oSpan}>
                    <div className={styles.iSpan}></div>
                  </div>
                  <div className={styles.oSpan}>
                    <div className={styles.iSpan}></div>
                  </div>
                  <div className={styles.oSpan}>
                    <div className={styles.iSpan}></div>
                  </div>
                </div>
                <div className={styles.emptyDiv}></div>
              </div>
            </div>
            <p>{page.parag}</p>
            <button>
              <Link to={page.link}>Learn More</Link>
              <FaArrowRightLong className={styles.icon} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PageNav;
