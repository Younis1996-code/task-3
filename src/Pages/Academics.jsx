import React from "react";
import AcaHero from "../components/Academics/AcaHero/AcaHero";
import { FaBookOpen } from "react-icons/fa";
import { MdSignalCellularAlt } from "react-icons/md";
import { HiPuzzlePiece } from "react-icons/hi2";
import { IoSunny } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { HiPaintBrush } from "react-icons/hi2";
import AcaFeatures from "../components/Academics/AcaFeatures/AcaFeatures";
import ima1 from "../assets/images/Academics/StuLearn/Image (6).png";
import ima2 from "../assets/images/Academics/StuLearn/Image (7).png";
import ima3 from "../assets/images/Academics/StuLearn/Image (8).png";
import ima4 from "../assets/images/Academics/StuLearn/Image (9).png";
import ima5 from "../assets/images/Academics/StuLearn/Image (10).png";
import ima6 from "../assets/images/Academics/StuLearn/Image (11).png";
import StuLearn from "../components/Academics/StuLearn/StuLearn";
import ima_1 from "../assets/images/Academics/Gallery/ClassRooms/Image.png";
import ima_2 from "../assets/images/Academics/Gallery/ClassRooms/Image (1).png";
import ima_3 from "../assets/images/Academics/Gallery/ClassRooms/Image (2).png";
import ima_4 from "../assets/images/Academics/Gallery/ClassRooms/Image (3).png";
import ima_5 from "../assets/images/Academics/Gallery/GaLibrary/Image (4).png";
import ima_6 from "../assets/images/Academics/Gallery/GaLibrary/Image (5).png";
import ima_7 from "../assets/images/Academics/Gallery/GaLibrary/Image (6).png";
import ima_8 from "../assets/images/Academics/Gallery/GaLibrary/Image (7).png";
import ima_9 from "../assets/images/Academics/Gallery/SciLab/Image (8).png";
import ima_10 from "../assets/images/Academics/Gallery/SciLab/Image (9).png";
import ima_11 from "../assets/images/Academics/Gallery/SciLab/Image (10).png";
import ima_12 from "../assets/images/Academics/Gallery/SciLab/Image (11).png";
import ima_13 from "../assets/images/Academics/Gallery/ComLab/Image (12).png";
import ima_14 from "../assets/images/Academics/Gallery/ComLab/Image (13).png";
import ima_15 from "../assets/images/Academics/Gallery/ComLab/Image (14).png";
import ima_16 from "../assets/images/Academics/Gallery/ComLab/Image (15).png";
import ima_17 from "../assets/images/Academics/Gallery/Garden/Image (16).png";
import ima_18 from "../assets/images/Academics/Gallery/Garden/Image (17).png";
import ima_19 from "../assets/images/Academics/Gallery/Garden/Image (18).png";
import ima_20 from "../assets/images/Academics/Gallery/Garden/Image (19).png";
import AcaGallery from "../components/Academics/AcaGallery/AcaGallery";

const SPECIAL_FEA = [
  {
    id: "1",
    title: "Thematic Learning",
    par: "Our curriculum is centered around engaging themes that capture children's imaginations. Each theme integrates multiple subjects, making learning enjoyable and relevant.",
    icon: (
      <FaBookOpen
        style={{
          width: "clamp(24px, 10vw, 34px)",
          height: "clamp(24px, 10vw, 34px)",
        }}
      />
    ),
  },
  {
    id: "2",
    title: "STEAM Education",
    par: "We offer innovative STEAM (Science, Technology, Engineering, Arts, and Mathematics) programs that promote hands-on exploration, critical thinking, and problem-solving skills.",
    icon: (
      <MdSignalCellularAlt
        style={{
          width: "clamp(24px, 10vw, 34px)",
          height: "clamp(24px, 10vw, 34px)",
        }}
      />
    ),
  },
  {
    id: "3",
    title: "Language Immersion",
    par: "Through language immersion programs, children have the opportunity to learn a second language, enhancing cognitive development and global awareness.",
    icon: (
      <HiPuzzlePiece
        style={{
          width: "clamp(24px, 10vw, 34px)",
          height: "clamp(24px, 10vw, 34px)",
        }}
      />
    ),
  },
  {
    id: "4",
    title: "Art and Creativity",
    par: "Art is celebrated at Little Learners Academy. Our art-focused activities encourage self-expression, creativity, and the appreciation of various art forms.",
    icon: (
      <HiPaintBrush
        style={{
          width: "clamp(24px, 10vw, 34px)",
          height: "clamp(24px, 10vw, 34px)",
        }}
      />
    ),
  },
  {
    id: "5",
    title: "Outdoor Education",
    par: "Our expansive outdoor learning spaces provide a stimulating environment for children to explore nature, fostering a connection with the environment.",
    icon: (
      <IoSunny
        style={{
          width: "clamp(24px, 0.85vw, 34px)",
          height: "clamp(24px, 0.85vw, 34px)",
        }}
      />
    ),
  },
  {
    id: "6",
    title: "Play-Based Learning",
    par: "Play is an integral part of early childhood education. Our play-based approach enhances social skills, emotional development, and imaginative thinking.",

    icon: (
      <FaStar
        style={{
          width: "clamp(24px, 10vw, 34px)",
          height: "clamp(24px, 10vw, 34px)",
        }}
      />
    ),
  },
];

const STU_LEARN = [
  {
    id: "1",
    image: ima1,
    title: "Language Arts",
    par: "Reading, writing, storytelling, and communication skills.",
  },
  {
    id: "2",
    image: ima2,
    title: "Mathematics",
    par: "Number sense, basic operations, problem-solving, and logic.",
  },
  {
    id: "3",
    image: ima3,
    title: "Science",
    par: "Exploring the natural world through hands-on experiments and investigations.",
  },
  {
    id: "4",
    image: ima4,
    title: "Social Studies",
    par: "Cultivating an understanding of diverse cultures and communities.",
  },
  {
    id: "5",
    image: ima5,
    title: "Arts and Crafts",
    par: "Encouraging creativity through various art forms and crafts.",
  },
  {
    id: "6",
    image: ima6,
    title: "Physical Education",
    par: "Promoting physical fitness, coordination, and teamwork.",
  },
];

const ACA_GALLERY = [
  {
    id: "1",
    image: [ima_1, ima_2, ima_3, ima_4, ima_1, ima_2, ima_3, ima_4],
    title: "Classrooms",
    par: "Our well-equipped classrooms are designed to provide a nurturing and stimulating learning environment. Each classroom is thoughtfully arranged to inspire creativity, curiosity, and engagement.",
  },
  {
    id: "2",
    image: [ima_5, ima_6, ima_7, ima_8, ima_5, ima_6, ima_7, ima_8],
    title: "Library",
    par: "Our expansive library is a treasure trove of books, fostering a love for reading and supporting students' literacy development.",
  },
  {
    id: "3",
    image: [ima_9, ima_10, ima_11, ima_12, ima_9, ima_10, ima_11, ima_12],
    title: "Science Lab",
    par: "Our hands-on science lab allows students to conduct experiments and explore scientific concepts in a fun and interactive way.",
  },
  {
    id: "4",
    image: [ima_13, ima_14, ima_15, ima_16, ima_13, ima_14, ima_15, ima_16],
    title: "Computer Lab",
    par: "Equipped with age-appropriate technology, the computer lab enhances students' digital literacy and computational skills",
  },
  {
    id: "5",
    image: [ima_17, ima_18, ima_19, ima_20, ima_17, ima_18, ima_19, ima_20],
    title: "Garden and Nature Area",
    par: "Our garden and nature area offer an opportunity for children to connect with nature and learn about plants and the environment.",
  },
];

const Academics = () => {
  return (
    <main>
      <AcaHero />
      <AcaFeatures acaFea={SPECIAL_FEA} />
      <StuLearn acaStu={STU_LEARN} />
      <AcaGallery acaGal={ACA_GALLERY} />
    </main>
  );
};

export default Academics;
