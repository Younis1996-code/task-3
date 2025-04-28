import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import styles from "./OurTest.module.css";
import { useState } from "react";
const OurTest = (props) => {
  const [currentTest, setCurrentTest] = useState(0);

  const nextTest = () => {
    if (currentTest < props.ourTestimonials.length - 1) {
      setCurrentTest(currentTest + 1);
    }
  };

  const prevTest = () => {
    if (currentTest > 0) {
      setCurrentTest(currentTest - 1);
    }
  };
  return (
    <div id="academics" className={styles.benefits}>
      <div className={styles.head}>Their Happy Words 🤗</div>
      <h3>Our Testimonials</h3>
      <p>
        Our testimonials are heartfelt reflections of the nurturing environment
        we provide, where children flourish both academically and emotionally.
      </p>
      <div className={styles.tes}>
        <div
          className={styles.testContainer}
          style={{ "--current-test": currentTest }}
        >
          {props.ourTestimonials.map((testimonial) => {
            return (
              <div
                key={testimonial.id}
                className={`${styles.test} ${
                  testimonial.id === currentTest ? styles.active : ""
                }`}
              >
                <div className={styles.testImg}>
                  <img src={testimonial.image} alt="testimonial" />
                </div>
                <div className={styles.testText}>
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.rating}</p>
                  <p>{testimonial.para}</p>
                </div>
              </div>
            );
          })}
        </div>
        <button
          className={styles.btnLeft}
          onClick={prevTest}
          disabled={currentTest === 0}
        >
          <FaArrowLeftLong className={styles.icon} />
        </button>

        <button
          className={styles.btnRight}
          onClick={nextTest}
          disabled={currentTest === props.ourTestimonials.length - 1}
        >
          <FaArrowRightLong className={styles.icon} />
        </button>
      </div>
    </div>
  );
};

export default OurTest;
