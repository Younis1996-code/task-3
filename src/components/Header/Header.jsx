import { FaArrowRight } from "react-icons/fa6";
import leftDesign from "../../assets/images/Header/top-banner/leftDesign.png";
import rightDesign from "../../assets/images/Header/top-banner/rightDesign.png";
import rightBall from "../../assets/images/Header/top-banner/rightBall.svg";
import left from "../../assets/images/Header/top-banner/left.svg";
import styles from "./Header.module.css";
import logo from "../../assets/images/Header/nav/logo.png";
import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { Link, NavLink } from "react-router-dom";

const Header = (props) => {
  const [activeDiv, setActiveDiv] = useState(props.navLinks[0].name);
  const [mobileMenu, setMobileMenu] = useState(false);

  const clickHandler = (activeName) => {
    setActiveDiv(activeName);
    setMobileMenu(false);
  };
  const mobileMenuHandler = () => {
    setMobileMenu((prevState) => !prevState);
  };

  return (
    <header className={styles.header}>
      <div className={styles.banner}>
        <img className={styles.leftDesign} src={leftDesign} alt="leftDesign" />
        <img className={styles.leftBall} src={left} alt="leftBall" />
        <div className={styles.bannerText}>
          <p>Admission is Open, Grab your seat now</p>
          <FaArrowRight className={styles.arrow} />
        </div>
        <img className={styles.rightBall} src={rightBall} alt="rightBall" />
        <img
          className={styles.rightDesign}
          src={rightDesign}
          alt="rightDesign"
        />
      </div>

      <nav className={styles.nav}>
        <div className={styles.logo}>
          <img src={logo} alt="logo" />
          <Link to="/">Little Learners</Link>
        </div>

        <div className={styles.mobileIcon}>
          <HiMenuAlt3 className={styles.mobIco} onClick={mobileMenuHandler} />
        </div>

        {mobileMenu ? (
          <div className={styles.menu}>
            <div
              className={`${styles.linkss} ${
                mobileMenu ? styles.menuOpen : ""
              }`}
            >
              {props.navLinks.map((link) => (
                <div
                  className={`${styles.link} ${
                    activeDiv === link.name ? styles.active : ""
                  }`}
                  key={link.id}
                  onClick={() => clickHandler(link.name)}
                >
                  <NavLink
                    to={link.link}
                    className={({ isActive }) =>
                      isActive ? styles.active : ""
                    }
                  >
                    {link.name}
                  </NavLink>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className={styles.links}>
            {props.navLinks.map((link) => {
              return (
                <div
                  className={`${styles.link} ${
                    activeDiv === link.name ? styles.active : ""
                  }`}
                  key={link.id}
                  onClick={(e) => clickHandler(link.name)}
                >
                  <NavLink
                    key={link.id}
                    to={link.link}
                    className={({ isActive }) =>
                      isActive ? styles.active : ""
                    }
                  >
                    {link.name}
                  </NavLink>
                </div>
              );
            })}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
