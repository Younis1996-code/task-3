import { IoIosNuclear } from "react-icons/io";
import "./App.css";
import Header from "./components/Header/Header";
import OurBenefits from "./components/Main/Benefits/OurBenefits";
import Hero from "./components/Main/HeroSection/Hero";
import { FaCrown } from "react-icons/fa";
import { FaFlag, FaGraduationCap } from "react-icons/fa6";
import { BsFillPeopleFill } from "react-icons/bs";
import { PiFaceMaskFill } from "react-icons/pi";
import image1 from "./assets/images/Testimonials/Icon (1).svg";
import image2 from "./assets/images/Testimonials/Icon (2).svg";
import image3 from "./assets/images/Testimonials/Icon.svg";
import OurTest from "./components/Main/OurTestimonials/OurTest";
import Faq from "./components/Main/FaqSec/Faq";
import PageNav from "./components/Main/PagesNav/PageNav";
import Footer from "./components/Footer/Footer";
import HomeCon from "./components/Main/HomeCon";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Academics from "./Pages/Academics";

const NAV_KINKS = [
  {
    id: "1",
    name: "Home",
    link: "/",
  },
  {
    id: "2",
    name: "About Us",
    link: "/about-us",
  },
  {
    id: "3",
    name: "Academics",
    link: "/academics",
  },
  {
    id: "4",
    name: "Admissions",
    link: "/admissions",
  },
  {
    id: "5",
    name: "Student Life",
    link: "/student-life",
  },
  {
    id: "6",
    name: "Contact",
    link: "/contact",
  },
];

function App() {
  return (
    <>
      <Header navLinks={NAV_KINKS} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about-us" element={<AboutUs />} />
        <Route exact path="/academics" element={<Academics />} />
      </Routes>
      {/* <Home /> */}
      <Footer />
    </>
  );
}

export default App;
