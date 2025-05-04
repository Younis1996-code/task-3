import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import styles from "./OurTest.module.css";
import { useState, useEffect } from "react";

const OurTest = (props) => {
  const [currentTest, setCurrentTest] = useState(0);
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

  const nextTest = () => {
    if (currentTest < props.ourTestimonials.length - itemsToShow) {
      setCurrentTest(currentTest + 1);
    }
  };

  const prevTest = () => {
    if (currentTest > 0) {
      setCurrentTest(currentTest - 1);
    }
  };

  return (
    <div className={styles.benefits}>
      <div className={styles.head}>Their Happy Words 🤗</div>
      <h3>Our Testimonials</h3>
      <p>
        Our testimonials are heartfelt reflections of the nurturing environment
        we provide, where children flourish both academically and emotionally.
      </p>
      <div className={styles.tes}>
        <div className={styles.testContainer}>
          <div
            className={styles.testSlider}
            style={{
              transform: `translateX(-${currentTest * (100 / itemsToShow)}%)`,
            }}
          >
            {props.ourTestimonials.map((testimonial) => (
              <div key={testimonial.id} className={styles.test}>
                <div className={styles.testImg}>
                  <img src={testimonial.image} alt="testimonial" />
                </div>
                <div className={styles.testText}>
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.rating}</p>
                  <p>{testimonial.para}</p>
                </div>
              </div>
            ))}
          </div>
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
          disabled={currentTest === props.ourTestimonials.length - itemsToShow}
        >
          <FaArrowRightLong className={styles.icon} />
        </button>
      </div>
    </div>
  );
};

export default OurTest;
