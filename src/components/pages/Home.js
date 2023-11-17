import React from "react";
import img1 from "../assets/HandlerBrandProImage1.jpg";
import img2 from "../assets/HandlerBrandProImage3.jpg";
import img3 from "../assets/HandlerBrandProImage4.jpg";
import img4 from "../assets/HandlerBrandProImage5.jpg";
import mbb1 from "../assets/Home-img1.jpg";
import mbb2 from "../assets/Home-img2.jpg";
import mbb3 from "../assets/Home-img3.jpg";
import mbb4 from "../assets/Home-img4.jpg";
import mbb5 from "../assets/Home-img5.jpg";
import mbb6 from "../assets/Home-img6.jpg";
import pc1 from "../assets/pc-g-1.jpg";
import pc2 from "../assets/pc-g-2.jpg";
import pc3 from "../assets/pc-nbb-1.jpg";
import pc4 from "../assets/pc-nbb-2.jpg";
import { useState } from "react";
import "../stylesheets/image-slider.css";
import "./home.css";
import { useEffect } from "react";
import BlogApi from "./blog/BlogApi";
import Card from "./blog/Card";
import Blog from "./blog/Blog";

import client1 from '../assets/client1.png'
import client2 from '../assets/client2.png'
import client3 from '../assets/member1.png'
import client4 from '../assets/member2.png'
import client5 from '../assets/client2.png'
import client6 from '../assets/client1.png'
const clientsData = [
  { id: 1, t:'Revitalized my work approach', p:'Lorem ipsum dolor sit amet consectetur eget maecenas sapien fusce egestas risus purus suspendisse turpis volutpat onare imperdiet bibendum eleifend quam.', name: 'Brian Clark', role: 'Founder & Director-1', image: client1 },
  { id: 2, t:'Transformed my work process', p:'Lorem ipsum dolor sit amet consectetur eget maecenas sapien fusce egestas risus purus suspendisse turpis volutpat onare imperdiet bibendum eleifend quam.', name: 'Stephanie Powell', role: 'Co-founder-2', image: client2 },
  { id: 3, t:'Revitalized my work approach', p:'Lorem ipsum dolor sit amet consectetur eget maecenas sapien fusce egestas risus purus suspendisse turpis volutpat onare imperdiet bibendum eleifend quam.', name: 'Christopher White', role: 'Director-3', image: client3 },
  { id: 4, t:'Transformed my work', p:'Lorem ipsum dolor sit amet consectetur eget maecenas sapien fusce egestas risus purus suspendisse turpis volutpat onare imperdiet bibendum eleifend quam.', name: 'Emily Miller', role: 'VP of HR-4', image: client4 },
  { id: 5, t:'Revitalized my work', p:'Lorem ipsum dolor sit amet consectetur eget maecenas sapien fusce egestas risus purus suspendisse turpis volutpat onare imperdiet bibendum eleifend quam.', name: 'Michael Davis', role: 'VP of Sales-5', image: client5 },
  { id: 6, t:'Revitalized my work approach', p:'Lorem ipsum dolor sit amet consectetur eget maecenas sapien fusce egestas risus purus suspendisse turpis volutpat onare imperdiet bibendum eleifend quam.', name: 'William Anderson', role: 'VP of Business-6', image: client6 },
];

const Home = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const [suppliersCount, setSuppliersCount] = useState(0);
  const [clientSatisfaction, setClientSatisfaction] = useState(0);
  const [experienceCount, setExperienceCount] = useState(0);
  const [dealersCount, setDealersCount] = useState(0);
  const [currentIndex1, setCurrentIndex1] = useState(0);

  const handleNext = () => {
    setCurrentIndex1((prevIndex) => (prevIndex + 2 < clientsData.length ? prevIndex + 2 : 0));
  };

  const handlePrev = () => {
    setCurrentIndex1((prevIndex) => (prevIndex - 2 >= 0 ? prevIndex - 2 : clientsData.length - (clientsData.length % 2 === 0 ? 2 : 1)));
  };

  const handleDotClick = (index) => {
    setCurrentIndex1(index);
  };

  // useEffect(() => {
  //   // Increment the count from 0 to 37
  //   const interval = setInterval(() => {
  //     if (suppliersCount < 37) {
  //       setSuppliersCount(suppliersCount + 1);
  //     } else {
  //       clearInterval(interval);
  //     }
  //   }, 20); // Adjust the interval duration as needed

  //   return () => {
  //     clearInterval(interval); // Clean up the interval when the component unmounts
  //   };
  // }, [suppliersCount]);
  useEffect(() => {
    const interval = setInterval(() => {
      // Increment the counts based on your desired criteria
      if (suppliersCount < 40) {
        setSuppliersCount(suppliersCount + 1);
      }
      if (clientSatisfaction < 97) {
        setClientSatisfaction(clientSatisfaction + 1);
      }
      if (experienceCount < 15) {
        setExperienceCount(experienceCount + 1);
      }
      if (dealersCount < 500) {
        setDealersCount(dealersCount + 1);
      }
      if (
        suppliersCount >= 37 &&
        clientSatisfaction >= 16 &&
        experienceCount >= 62 &&
        dealersCount >= 4
      ) {
        clearInterval(interval);
      }
    }, 50); // Adjust the interval duration as needed

    return () => {
      clearInterval(interval); // Clean up the interval when the component unmounts
    };
  }, [suppliersCount, clientSatisfaction, experienceCount, dealersCount]);

  // const SliderData = [img1, img2, img3, img4];
  const images = [
    { url: img1, alt: "img One" },
    { url: img2, alt: "img Two" },
    { url: img3, alt: "img Three" },
    { url: img4, alt: "img Four" },
    { url: pc1, alt: "New Born Boy" },
    { url: pc2, alt: "img Four" },
    { url: pc3, alt: "img Four" },
    { url: pc4, alt: "img Four" },
  ];

  // Function to handle auto-play
  const autoPlay = () => {
    showNextImage();
  };

  useEffect(() => {
    const interval = setInterval(autoPlay, 4000); // Change slide every 3 seconds (adjust as needed)

    return () => {
      clearInterval(interval); // Clear the interval when the component unmounts
    };
  }, [imageIndex]);

  function showNextImage() {
    setImageIndex((index) => {
      if (index === images.length - 1) return 0;
      return index + 1;
    });
  }

  function showPrevImage() {
    setImageIndex((index) => {
      if (index === 0) return images.length - 1;
      return index - 1;
    });
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

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % 3);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + 3) % 3);
  };

  return (
    <>
      <section
        style={{
          // maxWidth: "1200px",
          // width: "100%",
          aspectRatio: "10 / 6",
          // margin: "0 auto",
        }}
      >
        <section
          id="topSlider"
          aria-label="Image Slider"
          style={{ width: "100%", height: "40%", position: "relative" }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              overflow: "hidden",
            }}
          >
            {images.map(({ url, alt }, index) => (
              <img
                key={url}
                src={url}
                alt={alt}
                aria-hidden={imageIndex !== index}
                className="img-slider-img"
                style={{ translate: `${-100 * imageIndex}%` }}
              />
            ))}
            <div className="icons">
              <i
                className=" icon fa fa-chevron-left"
                style={{ left: '10vh', color:'white' }}
                title="Previous"
                onClick={showPrevImage}
              />

              <i
                className=" icon fa fa-chevron-right"
                style={{ right: '10vh', color:'white' }}
                title="Next"
                onClick={showNextImage}
              />
            </div>
          </div>
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
            {images.map((_, index) => (
              <button
                key={index}
                style={{
                  all: "unset",
                  height: "1rem",
                  width: "1rem",
                  cursor: "pointer",
                }}
                aria-label={`View Image ${index + 1}`}
                onClick={() => setImageIndex(index)}
              >
                <CircleIcon active={index === imageIndex} />
              </button>
            ))}
          </div>
        </section>
        {/* <div class="colorful-line"></div> */}
        <br />
        {/* <hr style={{ background: "#4f97a3", height: "3px" }} /> */}
        <br />
        <section style={{background:'#AECFD51A', padding:'3vh 7vh'}} id="successMetrics" className="container">
          <div className="row">
            <div className="col-md-12 col-lg-6">
              <div className="about_content">
                <div className="about_heading">
                  <h2>
                    Success <span>Metrics : </span>
                  </h2>
                </div>
                <div className="about_tagline">
                  <h3>Statistics That Showcase Our Success</h3>
                </div>
                <div className="about_desc">
                  <p>
                    Our statistics serve as a testament to our dedication, hard
                    work, and the satisfaction of our clients. These figures
                    provide a comprehensive overview of our performance,
                    demonstrating that we not only meet but exceed expectations
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-6">
              <div className="about_statistic_wrapper">
                <div className="row">
                  <div
                    style={{ marginTop: "40px", marginRight: "20px" }}
                    className="col-md-6"
                  >
                    <div
                      style={{ width: "300px" }}
                      className="statistic_container"
                    >
                      <div style={{background:'#4f97a3'}} className="about_statistic">
                        <span>
                          <span>{suppliersCount}</span>
                          <span className="symbol">+</span>
                        </span>
                        <h4>Suppliers / Manufacturers</h4>
                        <p style={{ width: "220px" }}>
                          Trusted sources of high-quality products and services.
                        </p>
                      </div>
                    </div>
                    <div className="statistic_container">
                      <div className="about_statistic">
                        <span>
                          <span>{experienceCount}</span>
                          <span className="symbol">+</span>
                        </span>
                        <h4>Years Experience</h4>
                        <p style={{ width: "220px" }}>
                          Benefit from our extensive expertise in the industry.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="statistic_container right">
                      <div className="about_statistic right">
                        <span>
                          <span>{clientSatisfaction}</span>
                          <span className="symbol">%</span>
                        </span>
                        <h4>Client satisfaction</h4>
                        <p style={{ width: "220px" }}>
                          Our priority is ensuring your complete contentment
                          with our offerings.
                        </p>
                      </div>
                    </div>
                    <div className="statistic_container">
                      <div className="about_statistic">
                        <span>
                          <span>{dealersCount}</span>
                          <span className="symbol">+</span>
                        </span>
                        <h4>Dealers / Retailers</h4>
                        <p style={{ width: "220px" }}>
                          Your go-to destinations for top-notch products and
                          exceptional service.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="makingBusiness" style={{padding:'3vh 7vh'}} className="container">
          <div   className="row">
            <div style={{overflow:'hidden', height:'55vh'}} className="col-md-12 col-lg-6">
              <div className="about_statistic_wrapper">
                <div className="row">
                  <div className="col-md-6">
                    <div className="statistic_container">
                      <img
                        className="Image"
                        style={{
                          width: 216,
                          height: 200,
                          position: "relative",
                          background:
                            "linear-gradient(0deg, #F1F3F7 0%, #F1F3F7 100%)",
                        }}
                        src={mbb1}
                      />
                    </div>
                    <div className="statistic_container">
                      <img
                        className="Image"
                        style={{
                          width: 216,
                          height: 200,
                          position: "relative",
                          background:
                            "linear-gradient(0deg, #F1F3F7 0%, #F1F3F7 100%)",
                        }}
                        src={mbb2}
                      />
                    </div>
                    <div className="statistic_container">
                      <img
                        className="Image"
                        style={{
                          width: 216,
                          height: 200,
                          position: "relative",
                          background:
                            "linear-gradient(0deg, #F1F3F7 0%, #F1F3F7 100%)",
                        }}
                        src={mbb3}
                      />
                    </div>
                  </div>
                  <div
                    className="col-md-6"
                    style={{ marginTop: "40px", marginLeft: "20px" }}
                  >
                    <div className="statistic_container">
                      <img
                        className="Image"
                        style={{
                          width: 216,
                          height: 200,
                          position: "relative",
                          background:
                            "linear-gradient(0deg, #F1F3F7 0%, #F1F3F7 100%)",
                        }}
                        src={mbb4}
                      />
                    </div>
                    <div className="statistic_container">
                      <img
                        className="Image"
                        style={{
                          width: 216,
                          height: 200,
                          position: "relative",
                          background:
                            "linear-gradient(0deg, #F1F3F7 0%, #F1F3F7 100%)",
                        }}
                        src={mbb5}
                      />
                    </div>
                    <div className="statistic_container">
                      <img
                        className="Image"
                        style={{
                          width: 216,
                          height: 200,
                          position: "relative",
                          background:
                            "linear-gradient(0deg, #F1F3F7 0%, #F1F3F7 100%)",
                        }}
                        src={mbb6}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-6">
              <div className="about_content">
                <div className="about_heading">
                  <h2>
                    Making Business <span>BETTER</span>
                  </h2>
                </div>
                <div className="about_tagline">
                  <p>
                    With over 15 years of experience connecting the right
                    garment manufacturers to the right retailers, Vital
                    Creations is Gujarat’s only organized, fast-growing garment
                    distribution company. On any given day, all leading
                    children's spaces in Gujarat sell the garments finely
                    distributed by Vital Creations giving them a unique
                    opportunity to make kids look smartly elegant.
                  </p>
                  {/* </div> */}
                  {/* <div className="about_desc"> */}
                  <p>
                    At present, Vital Creations is not only limited to
                    distribution but also acts as a business consultant for
                    garment manufacturers from across India and retailers based
                    in Gujarat. Their family has helped them hold their roots;
                    their well-experienced team helps them keep a tap into the
                    current market.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section style={{background:'#AECFD51A', padding:'3vh 7vh'}} id="productCategories" className="container">
          <div className="row">
            <div
              //  style={{width:'70%', display:'flex'}}
              className="col-1"
            >
              <div className="about_content">
                <div className="about_heading">
                  <h2>
                    Product <span>Categories</span>
                  </h2>
                </div>
                <div className="about_tagline">
                  <p>
                    With over 15 years of experience connecting the right
                    garment manufacturers to the right retailers.
                  </p>
                </div>
              </div>
            </div>
            <div style={{ width: "30%" }} className="col-2">
              <div className="icons1 about_content">
                <i
                  className=" icon1 fa fa-chevron-left"
                  title="Previous"
                  onClick={showPrevImage}
                />

                <i
                  className=" icon1 fa fa-chevron-right"
                  title="Next"
                  onClick={showNextImage}
                />
              </div>
            </div>
          </div>
          <div style={{ overflow: "hidden"}} className="row">
            <div
              style={{
                width: "20vh",
                height: "20vh",
                display: "flex",
                // overflow: "hidden",
              }}
            >
              {images.map(({ url, alt }, index) => (
                <img
                  key={url}
                  src={url}
                  alt={alt}
                  aria-hidden={imageIndex !== index}
                  className="img-slider-img"
                  style={{ translate: `${-100 * imageIndex}%` }}
                />
              ))}
            </div>
          </div>
        </section>
        <section style={{background:'#4f97a3', padding:'3vh 7vh', height:'60vh'}} id="whatOur" className="container">
          <div
            style={{ display: "flex", justifyContent: "start"}}
            className="row"
          >
            <div className="about_content">
              <div className="about_heading">
                <h2 style={{color: 'white'}}>
                  What our clients have to <span>say</span>
                </h2>
              </div>
              <div className="about_tagline">
                <p style={{color: 'white'}}>
                  With over 15 years of experience connecting the right garment
                  manufacturers to the right retailers.
                </p>
              </div>
            </div>
          </div>
         
           <div style={{ overflow: "hidden", gap:'7vh', justifyContent:'center' }} className="row">
            {clientsData.slice(currentIndex1, currentIndex1 + 2).map((client) => (
           <div key={client.id} className="Client" style={{ width: 'calc(33% - 20px)', background:'white', padding: '3vh', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex', position:'relative', left:'7vh' }}>
            <img className="Client" style={{ width: 48, height: 48, position: 'relative', background: 'linear-gradient(0deg, #F1F3F7 0%, #F1F3F7 100%)' }} src={client.image} alt={client.name} />
             <h3>{client.t}</h3>
              <p>{client.p}</p>
              <h3>{client.name}</h3>
              <h4 style={{ color: '#B4B9C9' }}>{client.role}</h4>
            </div>
              ))}
           <div className="icons">
              <i
                className=" icon fa fa-chevron-left"
                style={{ left: '10vh', color:'white' }}
                title="Previous"
                onClick={handlePrev}
              />

              <i
                className=" icon fa fa-chevron-right"
                style={{ right: '10vh', color:'white' }}
                title="Next"
                onClick={handleNext}
              />
            </div>
         </div>
            <div className="dots">
             {clientsData.map((_, index) => (
              <span key={index} className={`dot ${currentIndex1 === index ? 'active' : ''}`} onClick={() => handleDotClick(index)}></span>
              ))}
            </div>
        </section>

        <section style={{background:'#AECFD51A', padding:'3vh 7vh'}} id="hotProducts" className="container">
          <div className="row">
            <div
              //  style={{width:'70%', display:'flex'}}
              className="col-1"
            >
              <div className="about_content">
                <div className="about_heading">
                  <h2>
                    Hot <span>Products</span>
                  </h2>
                </div>
                <div className="about_tagline">
                  <p>
                    With over 15 years of experience connecting the right
                    garment manufacturers to the right retailers.
                  </p>
                </div>
              </div>
            </div>
            <div style={{ width: "30%" }} className="col-2">
              <div className="icons1 about_content">
                <i
                  className=" icon1 fa fa-chevron-left"
                  title="Previous"
                  onClick={showPrevImage}
                />

                <i
                  className=" icon1 fa fa-chevron-right"
                  title="Next"
                  onClick={showNextImage}
                />
              </div>
            </div>
          </div>
          <div style={{ overflow: "hidden" }} className="row">
            <div
              style={{
                width: "20vh",
                height: "30vh",
                display: "flex",
                // overflow: "hidden",
              }}
            >
              {images.map(({ url, alt }, index) => (
                <img
                  key={url}
                  src={url}
                  alt={alt}
                  aria-hidden={imageIndex !== index}
                  className="img-slider-img"
                  style={{ translate: `${-100 * imageIndex}%` }}
                />
              ))}
            </div>
          </div>
        </section>
        <section id="latestBlogs" style={{padding:'5vh 7vh'}} className="container">
          <div
            style={{ display: "flex", justifyContent: "start"}}
            className="row"
          >
            <div className="about_content">
              <div className="about_heading">
                <h2>
                  Latest <span>Blogs</span>
                </h2>
              </div>
            </div>
          </div>
          <div style={{ overflow: "hidden", paddingBottom:'3vh'}} className="row">
           <Blog/>
          </div>
        </section>
      </section>
    </>
  );
};

export default Home;
