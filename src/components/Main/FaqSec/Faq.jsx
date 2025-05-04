import styles from "./Faq.module.css";
import { FiMinus } from "react-icons/fi";
import { FaPlus } from "react-icons/fa";
import { useState } from "react";

const Faq = (props) => {
  const [ansOpen, setAnsOpen] = useState(null);

  const toggle = (id) => {
    if (ansOpen === id) {
      setAnsOpen(null);
    } else {
      setAnsOpen(id);
    }
  };

  return (
    <div className={styles.benefits}>
      <div className={styles.head}>Solutions For The Doubts</div>
      <h3>Frequently Asked Questions</h3>
      <p>
        Find all the essential information you need in our FAQ section, designed
        to address the most frequently asked questions and help you make
        informed decisions for your child's education.
      </p>
      <div className={styles.faqQ}>
        {props.faqQue.map((que) => (
          <div
            className={`${styles.faqQue} ${
              ansOpen === que.id ? styles.open : ""
            }`}
            key={que.id}
          >
            <div className={styles.que}>
              <h5>{que.que}</h5>
              <button className={styles.iconBtn} onClick={() => toggle(que.id)}>
                {ansOpen === que.id ? (
                  <FiMinus className={styles.icon} />
                ) : (
                  <FaPlus className={styles.icon} />
                )}
              </button>
            </div>
            {ansOpen === que.id && <p>{que.ans}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
