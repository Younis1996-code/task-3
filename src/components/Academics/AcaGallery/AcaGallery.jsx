import { useEffect, useState } from "react";
import "./AcaGallery.css";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const AcaGallery = ({ acaGal }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [itemsToShow, setItemsToShow] = useState(3);

  const [slidePositions, setSlidePositions] = useState({});

  const categories = [
    "All",
    "Classrooms",
    "Library",
    "Science Lab",
    "Computer Lab",
    "Garden and Nature Area",
  ];

  const filteredGallery =
    selectedCategory === "All"
      ? acaGal
      : acaGal.filter((item) => item.title === selectedCategory);

  useEffect(() => {
    const handleResize = () => {
      setItemsToShow(window.innerWidth < 993 ? 1 : 4);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const initialPositions = {};
    acaGal.forEach((item) => {
      initialPositions[item.id] = 0;
    });
    setSlidePositions(initialPositions);
  }, []);

  function handlePrevSlide(itemId) {
    setSlidePositions((prev) => ({
      ...prev,
      [itemId]: Math.max(0, prev[itemId] - 1),
    }));
  }

  function handleNextSlide(itemId, maxImages) {
    setSlidePositions((prev) => ({
      ...prev,
      [itemId]: Math.min(maxImages - itemsToShow, prev[itemId] + 1),
    }));
  }

  return (
    <div className="benefits">
      <div className="head">Our Gallery</div>
      <h3>Our Rooms Gallery</h3>
      <p>
        Step into our Gallery and immerse yourself in a visual journey of
        cherished moments and unforgettable experiences at our kindergarten
        school.
      </p>

      <div className="acGale">
        <div className="catbtn">
          {categories.map((category) => (
            <button
              key={category}
              className={`catDivBtn ${
                selectedCategory === category ? "active" : ""
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="sliCon">
          {filteredGallery.length > 0 &&
            filteredGallery.map((item) => {
              const currentPosition = slidePositions[item.id] || 0;
              const maxImages = item.image.length;

              const isPrevDisabled = currentPosition === 0;
              const isNextDisabled = currentPosition >= maxImages - itemsToShow;

              return (
                <div className="sli" key={item.id}>
                  <div className="conDiv">
                    <div className="cateUp">
                      <div
                        className="sliImg"
                        style={{
                          transform: `translateX(-${
                            currentPosition * (100 / itemsToShow)
                          }%)`,
                        }}
                      >
                        {item.image.map((img, index) => (
                          <div key={index} className="imgDiv">
                            <img
                              src={img}
                              alt={`${item.title} image ${index + 1}`}
                            />
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="cateDown">
                      <div className="sliTxt">
                        <h3>{item.title}</h3>
                        <div className="sliBtns">
                          <button
                            className={`divBtn ${
                              isPrevDisabled ? "disabled" : ""
                            }`}
                            onClick={
                              !isPrevDisabled
                                ? () => handlePrevSlide(item.id)
                                : undefined
                            }
                          >
                            <FaArrowLeftLong className="sliBtn" />
                          </button>
                          <button
                            className={`divBtn ${
                              isNextDisabled ? "disabled" : ""
                            }`}
                            onClick={
                              !isNextDisabled
                                ? () => handleNextSlide(item.id, maxImages)
                                : undefined
                            }
                          >
                            <FaArrowRightLong className="sliBtn" />
                          </button>
                        </div>
                      </div>
                      <div className="parag">
                        <p>{item.par}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default AcaGallery;
