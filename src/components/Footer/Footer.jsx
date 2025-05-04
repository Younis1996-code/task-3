import styles from "./Footer.module.css";
import logo from "../../assets/images/Header/nav/logo.png";
import { IoMail } from "react-icons/io5";
import { FaFacebook, FaLinkedin, FaPhoneAlt, FaTwitter } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
const Footer = () => {
  return (
    <footer>
      <div className={styles.top}>
        <div className={styles.firstCol}>
          <div className={styles.logo}>
            <img src={logo} alt="logo" />
            <h4>Little Learners</h4>
          </div>
          <p>
            We believe in the power of play to foster creativity,
            problem-solving skills, and imagination.
          </p>
          <div className={styles.conDiv}>
            <div className={styles.iconDiv}>
              <div className={styles.icon}>
                <IoMail className={styles.iconn} />
              </div>
              <p>hello@littlelearners.com</p>
            </div>
            <div className={styles.iconDiv}>
              <div className={styles.icon}>
                <FaPhoneAlt className={styles.iconn} />
              </div>
              <p>+91 91813 23 2309</p>
            </div>
            <div className={styles.iconDiv}>
              <div className={styles.icon}>
                <IoLocation className={styles.iconn} />
              </div>
              <p>Somewhere in the World</p>
            </div>
          </div>
        </div>
        <div className={styles.FoCon}>
          <h5>Home</h5>
          <ul>
            <li>Features</li>
            <li>Our Testimonials</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div className={styles.FoCon}>
          <h5>About Us</h5>
          <ul>
            <li>Our Mission</li>
            <li>Our Vission</li>
            <li>Awards and Recognitions</li>
            <li>History</li>
            <li>Teachers</li>
          </ul>
        </div>
        <div className={styles.FoCon}>
          <h5>Academics</h5>
          <ul>
            <li>Special Features</li>
            <li>Gallery</li>
          </ul>
        </div>
        <div className={styles.FoCon}>
          <h5>Contact Us</h5>
          <ul>
            <li>Information</li>
            <li>Map & Direction</li>
          </ul>
        </div>
      </div>
      <div className={styles.mid}>
        <div className={styles.rightCon}>
          <div className={styles.rightText}>Terms of Service</div>
          <div className={styles.rightText}>Privacy Policy</div>
          <div className={styles.rightText}>Cookie Policy</div>
        </div>
        <div className={styles.leftCon}>
          <div className={styles.iconns}>
            <FaFacebook className={styles.foIcon} />
          </div>
          <div className={styles.iconns}>
            <FaTwitter className={styles.foIcon} />
          </div>
          <div className={styles.iconns}>
            <FaLinkedin className={styles.foIcon} />
          </div>
        </div>
      </div>
      <div className={styles.bot}>
        Copyright © [2023] Little Learners Academy. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
