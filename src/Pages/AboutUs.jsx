import React from "react";
import AboutHero from "../components/AboutUs/AboutHero/AboutHero";
import AboutMission from "../components/AboutUs/AboutMission/AboutMission";
import binoculars from "../assets/images/AboutU/AboutMission/binoculars.svg";
import mountain from "../assets/images/AboutU/AboutMission/mountain.svg";
import AboutReward from "../components/AboutUs/AboutReward/AboutReward";
import sliderIcon1 from "../assets/images/AboutU/AboutReward/Icon (3).svg";
import sliderIcon2 from "../assets/images/AboutU/AboutReward/Icon (2).svg";
import sliderIcon3 from "../assets/images/AboutU/AboutReward/Icon (4).svg";
import AboutHistory from "../components/AboutUs/AboutHistory/AboutHistory";
import AboutTeam from "../components/AboutUs/AboutTeam/AboutTeam";
import imag1 from "../assets/images/AboutU/AboutTeam/Image.png";
import imag2 from "../assets/images/AboutU/AboutTeam/Image (1).png";
import imag3 from "../assets/images/AboutU/AboutTeam/Image (2).png";
import imag4 from "../assets/images/AboutU/AboutTeam/Image (3).png";
import imag5 from "../assets/images/AboutU/AboutTeam/Image (4).png";
import imag6 from "../assets/images/AboutU/AboutTeam/Image (5).png";

const ABOUT_MISSION = [
  {
    id: "1",
    title: "Mission",
    icon: mountain,
    paragra:
      "At Little Learners Academy, our mission is to inspire a passion for learning and empower young minds to become confident, compassionate, and creative individuals. We strive to create a safe and inclusive space where children thrive academically, socially, and emotionally, setting the stage for a successful educational journey.",
  },
  {
    id: "2",
    title: "Vision",
    icon: binoculars,
    paragra:
      "Our vision is to be a beacon of educational excellence, where children are encouraged to explore, discover, and express their unique talents. We aim to foster a generation of lifelong learners equipped with critical thinking, empathy, and a deep appreciation for diversity.",
  },
];

const ABOUT_REWARD = [
  {
    id: "1",
    image: sliderIcon1,
    title: "Outstanding Early Childhood Education Awar",
    para: "Presented by the National Association for the Education of Young Children (NAEYC) in recognition of Little Learners Academy's commitment to delivering exceptional early childhood education and fostering a nurturing learning environment.",
  },
  {
    id: "2",
    image: sliderIcon2,
    title: "Innovative STEAM Education Award",
    para: "Awarded by the Education Excellence Association for our pioneering efforts in introducing innovative STEAM (Science, Technology, Engineering, Arts, and Mathematics) programs that ignite creativity and critical thinking in young learners.",
  },
  {
    id: "3",
    image: sliderIcon3,
    title: "Environmental Stewardship Award",
    para: "Received from the Green Earth Society for our dedication to environmental education, sustainable practices, and fostering a love for nature in our students.",
  },
  {
    id: "4",
    image: sliderIcon1,
    title: "Outstanding Early Childhood Education Awar",
    para: "Presented by the National Association for the Education of Young Children (NAEYC) in recognition of Little Learners Academy's commitment to delivering exceptional early childhood education and fostering a nurturing learning environment.",
  },
  {
    id: "5",
    image: sliderIcon2,
    title: "Innovative STEAM Education Award",
    para: "Awarded by the Education Excellence Association for our pioneering efforts in introducing innovative STEAM (Science, Technology, Engineering, Arts, and Mathematics) programs that ignite creativity and critical thinking in young learners.",
  },
  {
    id: "6",
    image: sliderIcon3,
    title: "Environmental Stewardship Award",
    para: "Received from the Green Earth Society for our dedication to environmental education, sustainable practices, and fostering a love for nature in our students.",
  },
  {
    id: "7",
    image: sliderIcon1,
    title: "Outstanding Early Childhood Education Awar",
    para: "Presented by the National Association for the Education of Young Children (NAEYC) in recognition of Little Learners Academy's commitment to delivering exceptional early childhood education and fostering a nurturing learning environment.",
  },
  {
    id: "8",
    image: sliderIcon2,
    title: "Innovative STEAM Education Award",
    para: "Awarded by the Education Excellence Association for our pioneering efforts in introducing innovative STEAM (Science, Technology, Engineering, Arts, and Mathematics) programs that ignite creativity and critical thinking in young learners.",
  },
  {
    id: "9",
    image: sliderIcon3,
    title: "Environmental Stewardship Award",
    para: "Received from the Green Earth Society for our dedication to environmental education, sustainable practices, and fostering a love for nature in our students.",
  },
];

const ABOUT_HISTORY = [
  {
    id: "1",
    year: 2023,
    title: "Resilience and Future Horizons",
    para: "Adapting to new challenges, we remained committed to our mission of providing an exceptional early education. Looking ahead with optimism, we envision a future filled with boundless possibilities as we continue shaping the leaders and thinkers of tomorrow.",
  },
  {
    id: "2",
    year: 2017,
    title: "Innovation and Technology",
    para: "Innovation became the driving force behind our kindergarten's progress from 2016 to 2020. Embracing the latest educational technologies, we crafted engaging and interactive learning experiences for our students.",
  },
  {
    id: "3",
    year: 2012,
    title: "Expansion and Recognition",
    para: "These years marked as a period of expansion and recognition for our school. As we extended our facilities and enhanced our curriculum, we received accolades for our commitment to quality education and innovative teaching methodologies.",
  },
  {
    id: "4",
    year: 2005,
    title: "Inception and Growth",
    para: "Established in 2005, our kindergarten school began its journey with a vision to provide a nurturing space for young minds to explore, learn, and grow. Over the next five years, we witnessed significant growth.",
  },
];

const ABOUT_TEAM = [
  {
    id: "1",
    image: imag1,
    name: "Ms. Sarah Anderson",
    title: "Qualification:Bachelor's Degree in Early Childhood Education",
    para: "Ms. Sarah is a passionate educator with over 10 years of experience in guiding young minds. Her warm and nurturing approach creates a welcoming classroom environment where children feel comfortable to explore and learn.",
  },
  {
    id: "2",
    image: imag2,
    name: "Mr. David Roberts",
    title: "Qualification: Master's Degree in Elementary Education",
    para: "With a strong background in elementary education, Mr. David brings a creative and interactive teaching style to his classroom. His enthusiasm for learning inspires students to ask questions and think critically.",
  },
  {
    id: "3",
    image: imag3,
    name: "Ms. Emily Hernandez",
    title: "Qualification: Diploma in Child Psychology",
    para: "Ms. Emily's expertise in child psychology enables her to understand each child's unique needs and provide individualized support. Her caring nature fosters a strong sense of belonging and confidence in her students.",
  },
  {
    id: "4",
    image: imag4,
    name: "Mr. Michael Turner",
    title: "Qualification: Bachelor's Degree in Physical Education",
    para: "Mr. Michael's passion for physical fitness and sports shines through in his energetic classes. He encourages students to stay active, promoting teamwork and a healthy lifestyle.",
  },
  {
    id: "5",
    image: imag5,
    name: "Ms. Jessica Lee",
    title: "Qualification: Master's Degree in Special Education",
    para: "Ms. Jessica's specialization in special education allows her to create an inclusive and supportive learning environment for all students. She is dedicated to helping every child reach their full potential.",
  },
  {
    id: "6",
    image: imag6,
    name: "Mr. William Parker",
    title: "Qualification: Bachelor's Degree in Fine Arts",
    para: "Mr. William's background in fine arts brings creativity and imagination to his classroom. Through art projects and activities, he nurtures the artistic expression and self-confidence of his students.",
  },
];

const AboutUs = () => {
  return (
    <main>
      <AboutHero />
      <AboutMission aboutMis={ABOUT_MISSION} />
      <AboutReward aboutRew={ABOUT_REWARD} />
      <AboutHistory aboutHis={ABOUT_HISTORY} />
      <AboutTeam aboutTea={ABOUT_TEAM} />
    </main>
  );
};

export default AboutUs;
