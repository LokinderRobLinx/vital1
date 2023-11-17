import React, { useState, useEffect } from "react";
import img1 from "../../assets/HandlerBrandProImage1.jpg";
import img2 from "../../assets/HandlerBrandProImage3.jpg";
import img3 from "../../assets/HandlerBrandProImage4.jpg";
import img4 from "../../assets/HandlerBrandProImage5.jpg";
import img5 from "../../assets/HandlerBrandProImage2.jpg";
import car1 from "../../assets/car-1.jpg";
import car2 from "../../assets/car-2.jpg";
import car3 from "../../assets/car-3.jpg";
import car4 from "../../assets/car-4.jpg";
import car5 from "../../assets/car-5.jpg";
import anml1 from "../../assets/anml1.jpg";
import anml2 from "../../assets/anml2.jpg";
import anml3 from "../../assets/anml3.jpg";
import anml4 from "../../assets/anml4.jpg";
import anml5 from "../../assets/anml5.jpg";
import "./brands.css";


const Brands = () => {
  const SliderData = [img1, img2, img3, img4, img5];
  const SliderData1 = [car1, car2, car3, car4, car5];
  const SliderData2 = [anml1, anml2, anml3, anml4, anml5];

  const [modal, setModal] = useState(false);
  const [popupSlide, setPopupSlide] = useState([]);

  const [current, setCurrent] = useState(0);
  const [current1, setCurrent1] = useState(0);
  const length = SliderData.length;

  // Function to handle auto-play
  const autoPlay = () => {
    nextSlide();
  };

  useEffect(() => {
    const interval = setInterval(autoPlay, 4000); // Change slide every 3 seconds (adjust as needed)

    return () => {
      clearInterval(interval); // Clear the interval when the component unmounts
    };
  }, [current]);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const nextSlide1 = () => {
    setCurrent1(current1 === length - 1 ? 0 : current1 + 1);
  };

  const prevSlide1 = () => {
    setCurrent1(current1 === 0 ? length - 1 : current1 - 1);
  };

  if (!Array.isArray(SliderData) || SliderData.length <= 0) {
    return null;
  }

  const CircleIcon = ({ active }) => (
    <i
      className="fa fa-circle-thin"
      aria-hidden="true"
      style={{
        background: active ? "#4f97a3" : "white",
        borderRadius: "50%",
        width: "10px",
        height: "10px",
        display: "inline-block",
        marginRight: "3px",
      }}
    />
  );

  //   ----------PopUp---------

  const toggleModal = (slide) => {
    setModal(!modal);
    setPopupSlide(slide);
    console.log(slide);
    console.log(SliderData1);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
      <div className="brands-container">
        <div className="sliders">
          <section className="slider">
            {SliderData.map((slide, index) => (
              <img
                key={slide}
                src={slide}
                alt="slider-img"
                aria-hidden={current !== index}
                className="img-slider-img"
                style={{ translate: `${-100 * current}%` }}
                // onClick={toggleModal}
                onClick={() => toggleModal(SliderData)}
              />
            ))}
            <div
              style={{
                position: "absolute",
                bottom: ".5rem",
                left: "50%",
                translate: "-50%",
                display: "flex",
                gap: ".25rem",
              }}
            >
              {SliderData.map((_, index) => (
                <button
                  key={index}
                  style={{ all:'unset', height: "1rem", width: "1rem", cursor: 'pointer' }}
                  aria-label={`View Image ${index + 1}`}
                  onClick={() => setCurrent(index)}
                >
                 <CircleIcon active={index === current} />
                </button>
              ))}
            </div>
          </section>
          <section className="slider">
            {SliderData1.map((slide, index) => (
              <img
                key={slide}
                src={slide}
                alt="slider-img"
                aria-hidden={current !== index}
                className="img-slider-img"
                style={{ translate: `${-100 * current}%` }}
                // onClick={toggleModal}
                onClick={() => toggleModal(SliderData1)}
              />
            ))}
            <div
              style={{
                position: "absolute",
                bottom: ".5rem",
                left: "50%",
                translate: "-50%",
                display: "flex",
                gap: ".25rem",
              }}
            >
              {SliderData.map((_, index) => (
                <button
                  key={index}
                  style={{ all:'unset', height: "1rem", width: "1rem", cursor: 'pointer' }}
                  aria-label={`View Image ${index + 1}`}
                  onClick={() => setCurrent(index)}
                >
                 <CircleIcon active={index === current} />
                </button>
              ))}
            </div>
          </section>
          <section className="slider">
            {SliderData2.map((slide, index) => (
              <img
                key={slide}
                src={slide}
                alt="slider-img"
                aria-hidden={current !== index}
                className="img-slider-img"
                style={{ translate: `${-100 * current}%` }}
                // onClick={toggleModal}
                onClick={() => toggleModal(SliderData2)}
              />
            ))}
            <div
              style={{
                position: "absolute",
                bottom: ".5rem",
                left: "50%",
                translate: "-50%",
                display: "flex",
                gap: ".25rem",
              }}
            >
              {SliderData.map((_, index) => (
                <button
                  key={index}
                  style={{ all:'unset', height: "1rem", width: "1rem", cursor: 'pointer' }}
                  aria-label={`View Image ${index + 1}`}
                  onClick={() => setCurrent(index)}
                >
                 <CircleIcon active={index === current} />
                </button>
              ))}
            </div>
          </section>
        </div>

        {/* <div className="icons">
          <i
            className=" icon fa fa-chevron-left"
            title="Previous"
            onClick={prevSlide}
          />

          <i
            className=" icon fa fa-chevron-right"
            title="Next"
            onClick={nextSlide}
          />
        </div> */}
      </div>

      {/* Popup box */}
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content d_flex">
            <div className="modal-img left">
              <section className="popup-slider" style={{ width: "60vh" }}>
                {popupSlide.map((slide, index) => (
                  <img
                    key={slide}
                    src={slide}
                    alt="slider-img"
                    aria-hidden={current1 !== index}
                    className="img-slider-img"
                    style={{ translate: `${-100 * current1}%` }}
                  />
                ))}

                <div
                  style={{
                    position: "absolute",
                    bottom: ".5rem",
                    left: "50%",
                    translate: "-50%",
                    display: "flex",
                    gap: ".50rem",
                  }}
                >
                  {popupSlide.map((image, index) => (
                    <button
                      key={index}
                      // className="img-slider-dot-btn"
                      style={{ all:'unset', height: "2rem", width: "2rem", cursor: 'pointer' }}
                      aria-label={`View Image ${index + 1}`}
                      onClick={() => setCurrent1(index)}
                    >
                      {/* {index === current ? (
                        <CircleDot aria-hidden />
                      ) : (
                        <Circle aria-hidden />
                      )} */}
                      {index === current1 ? (
                        <img
                          src={image}
                          alt={`Image ${index + 1}`}
                          width="40" // Adjust width and height as needed
                          height="40"
                          style={{
                            borderRadius: "50%",
                            border: "2px solid #000",
                            cursor: "pointer",
                          }}
                        />
                      ) : (
                        <img
                          src={image}
                          alt={`Image ${index + 1}`}
                          width="30" // Adjust width and height as needed
                          height="30"
                          style={{
                            borderRadius: "50%",
                            //   border: "2px solid #000",
                            cursor: "pointer",
                          }}
                        />
                      )}
                    </button>
                  ))}
                </div>
              </section>
              {/* <button
                  onClick={prevSlide}
                  className="img-slider-btn"
                  style={{ left: 0 }}
                  aria-label="View Previous Image"
                >
                  <ArrowBigLeft aria-hidden />
                </button>
                <button
                  onClick={nextSlide}
                  className="img-slider-btn"
                  style={{ right: 0 }}
                  aria-label="View Next Image"
                >
                  <ArrowBigRight aria-hidden />
                </button> */}
              <div className="icons">
                <i
                  className=" icon fa fa-chevron-left"
                  style={{ left: 0, top: "30vh" }}
                  title="Previous"
                  onClick={prevSlide1}
                />

                <i
                  className=" icon fa fa-chevron-right"
                  style={{ right: 0, top: "30vh" }}
                  title="Next"
                  onClick={nextSlide1}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Brands;
