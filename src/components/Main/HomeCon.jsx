import Hero from "./HeroSection/Hero";
import OurBenefits from "./Benefits/OurBenefits";
import OurTest from "./OurTestimonials/OurTest";
import Faq from "./FaqSec/Faq";
import PageNav from "./PagesNav/PageNav";
import { FaCrown } from "react-icons/fa";
import { FaFlag, FaGraduationCap } from "react-icons/fa6";
import { BsFillPeopleFill } from "react-icons/bs";
import { PiFaceMaskFill } from "react-icons/pi";
import { IoIosNuclear } from "react-icons/io";
import image1 from "../../assets/images/Testimonials/Icon (1).svg";
import image2 from "../../assets/images/Testimonials/Icon (2).svg";
import image3 from "../../assets/images/Testimonials/Icon.svg";
import { Outlet } from "react-router-dom";

const BENEFITS_SEC = [
  {
    id: "1",
    title: "Holistic Learning Approach",
    par: "Our curriculum focuses on nurturing cognitive, social, emotional, and physical development, ensuring a well-rounded education.",
    icon: <FaGraduationCap style={{ width: "32px", height: "26px" }} />,
  },
  {
    id: "2",
    title: "Experienced Educators",
    par: "Our passionate and qualified teachers create a supportive and stimulating learning environment.",
    icon: <FaCrown style={{ width: "32px", height: "26px" }} />,
  },
  {
    id: "3",
    title: "Nurturing Environment",
    par: "We prioritize safety and provide a warm and caring atmosphere for every child.",
    icon: <PiFaceMaskFill style={{ width: "32px", height: "26px" }} />,
  },
  {
    id: "4",
    title: "Play-Based Learning",
    par: "We believe in the power of play to foster creativity, problem-solving skills, and imagination.",
    icon: <FaFlag style={{ width: "32px", height: "26px" }} />,
  },
  {
    id: "5",
    title: "Individualized Attention",
    par: "Our small class sizes enable personalized attention, catering to each child's unique needs.",
    icon: <IoIosNuclear style={{ width: "32px", height: "26px" }} />,
  },
  {
    id: "6",
    title: "Parent Involvement",
    par: "We foster a strong parent-school partnership to ensure seamless communication and collaboration.",
    icon: <BsFillPeopleFill style={{ width: "32px", height: "26px" }} />,
  },
];

const TESTIMONIALS_SEC = [
  {
    id: "1",
    image: image1,
    name: "Jennifer B",
    rating: "⭐⭐⭐⭐⭐",
    para: "Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!",
  },
  {
    id: "2",
    image: image2,
    name: "David K",
    rating: "⭐⭐⭐⭐⭐",
    para: "Choosing Little Learners Academy for my daughter was the best decision. She has thrived in their nurturing and stimulating environment.",
  },
  {
    id: "3",
    image: image3,
    name: "Emily L",
    rating: "⭐⭐⭐⭐⭐",
    para: "My son's social and academic growth has been remarkable since joining Little Learners Academy. I am grateful for the supportive and dedicated teachers.",
  },
  {
    id: "4",
    image: image2,
    name: "David K",
    rating: "⭐⭐⭐⭐⭐",
    para: "Choosing Little Learners Academy for my daughter was the best decision. She has thrived in their nurturing and stimulating environment.",
  },
  {
    id: "5",
    image: image3,
    name: "Emily L",
    rating: "⭐⭐⭐⭐⭐",
    para: "My son's social and academic growth has been remarkable since joining Little Learners Academy. I am grateful for the supportive and dedicated teachers.",
  },
  {
    id: "6",
    image: image1,
    name: "Jennifer B",
    rating: "⭐⭐⭐⭐⭐",
    para: "Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!",
  },
];

const FAQ_SEC = [
  {
    id: "1",
    que: "What are the school hours at Little Learners Academy?",
    ans: "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.",
  },
  {
    id: "2",
    que: "How do you handle food allergies and dietary restrictions?",
    ans: "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.",
  },
  {
    id: "3",
    que: "Is there a uniform policy for students?",
    ans: "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.",
  },
  {
    id: "4",
    que: "What is the teacher-to-student ratio at Little Learners Academy?",
    ans: "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.",
  },
  {
    id: "5",
    que: "What extracurricular activities are available for students?",
    ans: "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.",
  },
  {
    id: "6",
    que: "How do you handle discipline and behavior management?",
    ans: "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.",
  },
  {
    id: "7",
    que: "What extracurricular activities are available for students?",
    ans: "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.",
  },
  {
    id: "8",
    que: "How do I apply for admission to Little Learners Academy?",
    ans: "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.",
  },
];

const PAGE_NAV = [
  {
    id: "1",
    name: "About Us",
    link: "/about-us",
    parag:
      "Discover our Mission, Values, and our unwavering commitment to providing the best learning experience for your child. Learn about our passionate educators and our engaging approach to early education.",
  },
  {
    id: "2",
    name: "Academics",
    link: "/academics",
    parag:
      "Delve into our comprehensive academic programs designed to stimulate young minds, foster creativity, and encourage a love for learning. Explore our well-rounded curriculum that nurtures both intellectual and social development.",
  },
  {
    id: "3",
    name: "Student Life",
    link: "/student-life",
    parag:
      "Peek into the vibrant and enriching world of Student Life at Little Learners Academy. Discover the array of extracurricular activities, arts and crafts, sports, and social events that make our school experience truly memorable.",
  },
  {
    id: "4",
    name: "Admissions",
    link: "/admissions",
    parag:
      "Learn about our Enrollment Process and how to secure your child's place at Little Learners Academy. Find information about our admission requirements, application deadlines, and available spaces.",
  },
];

const HomeCon = () => {
  return (
    <main>
      <Hero />
      <OurBenefits benCon={BENEFITS_SEC} />
      <OurTest ourTestimonials={TESTIMONIALS_SEC} />
      <Faq faqQue={FAQ_SEC} />
      <PageNav pageNav={PAGE_NAV} />
      {/* <Outlet /> */}
    </main>
  );
};

export default HomeCon;
