import React, { useState, useEffect } from "react";
import { Link, Navigate, NavLink, useLocation } from "react-router-dom";
import logo from "../assets/Logo-vital.png";
import phoneImg from '../assets/Phone.png'
import EmailImg from '../assets/Email.png'

const Navbar = () => {
  const [currentPage, setCurrentPage] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();
  const currentPath = window.location.pathname;

  
  useEffect(() => {
    if (currentPath.includes('/about-us')) {
      setCurrentPage('About Us');
    } else if  (currentPath.includes('/brands')) {
      setCurrentPage('Brands');
    } else if  (currentPath.includes('/be-a-partner')) {
      setCurrentPage('Be A Partner');
    } else if  (currentPath.includes('/career')) {
      setCurrentPage('Career');
    } else if  (currentPath.includes('/blog')) {
      setCurrentPage('Blog');
    } else if  (currentPath.includes('/testimonials')) {
      setCurrentPage('Testimonials');
    } else if  (currentPath.includes('/contact-us')) {
      setCurrentPage('Contact Us');
    } else if  (currentPath.includes('/')) {
      setCurrentPage('Home');
    }
  }, [currentPath, setCurrentPage]);

  return (
    <>
      <section className="navbar-top">
        <div className="social-links"
          style={{ right: "10vh", display: "flex", position: "absolute" }}
        >
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            title="Facebook"
            style={{ backgroundColor: "#1877f2" }}
          >
            <i className="fab fa-facebook-f" />
          </a>
          {/* <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Twitter"
                >
                  <i className="fab fa-twitter" />
                </a> */}
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram"
            style={{ backgroundColor: "#f94867" }}
          >
            <i className="fab fa-instagram" />
          </a>
          <a
            href="https://www.linkedin.com/in/lokinder007/"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
            style={{ backgroundColor: "#0072b1" }}
          >
            <i className="fab fa-linkedin-in" />
          </a>
        </div>

        <div className="navbar-top-left">
          
            <ul className="breadcrumb1">
              <li style={{display:'flex', alignItems:'center', gap:'4px'}}>
                {/* <i
                  className="fa fa-envelope"
                  style={{
                    fontSize: "23px",
                    marginLeft: "7px",
                    marginRight: "7px",
                  }}
                /> */}
                <img src={EmailImg} alt="EmailImg"/>
                 info@vitalcreations.com
              </li>
              <li style={{display:'flex', alignItems:'center', gap:'4px'}}>
                {/* <i
                  className="fa fa-phone"
                  style={{ fontSize: "23px", marginRight: "7px" }}
                /> */}
                <img src={phoneImg} alt="PhoneImg"/>
                  +91 79 46006516
              </li>
            </ul>
          
        </div>
      </section>

      <section className="navbar-bg">
        <nav className="navbar">
          {/* <div className="navbar-container"> */}
            <Link
              // onClick={() => setCurrentPage("Home")}
              className="logo"
              to="/"
            >
              <h2>
                <img src={logo} alt="Vital Creations" className="logoImg" />
                {/* <img src="/App_Themes/Red/images/Logo.png" alt="Vital Creations" width="188" height="67"></img> */}
              </h2>
              {/* <h2>
                <span>R</span>eact
                <span>A</span>pp
              </h2> */}
            </Link>

            <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
             <span></span>
             <span></span>
             <span></span>
           </div>

            <ul className={`navbar-nav ${menuOpen ? "open" : ""}`}>
            {/* <ul className="navbar-nav"> */}
              <>
                <li className="nav-item">
                  <NavLink
                    // onClick={() => setCurrentPage("About Us")}
                    className="nav-link"
                    to="/about-us"
                  >
                    ABOUT US
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    // onClick={() => setCurrentPage("Brands")}
                    className="nav-link"
                    to="/brands"
                  >
                    BRANDS
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    // onClick={() => setCurrentPage("Be A Partner")}
                    className="nav-link"
                    to="/be-a-partner"
                  >
                    BE A PARTNER
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    // onClick={() => setCurrentPage("Career")}
                    className="nav-link"
                    to="/career"
                  >
                    CAREER
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    // onClick={() => setCurrentPage("Blog")}
                    className="nav-link"
                    to="/blog"
                  >
                    BLOG
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    // onClick={() => setCurrentPage("Testimonials")}
                    className="nav-link"
                    to="/testimonials"
                  >
                    TESTIMONIALS
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    // onClick={() => setCurrentPage("Contact Us")}
                    style={{background: '#4f97a3', color:'white', padding:'1vh', borderRadius:'1vh'}}
                    className="nav-link"
                    to="/contact-us"
                  >
                    CONTACT US
                  </NavLink>
                </li>
              </>
            </ul>
          {/* </div> */}
        </nav>
      </section>

      {currentPage === "Home" ? null : (
        <section className="navbar-bottom">
          {/* <div className="breadcrumb-container"> */}
          <ul className="breadcrumb">
            <li>
              {/* <a href="Home" title="Home Page">
                  Home
                </a> */}
              <NavLink
                onClick={() => setCurrentPage("Home")}
                title="Home Page"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <i
              style={{
                margin: "0 10px",
                display: "flex",
                alignItems: "center",
                fontSize: "smaller",
              }}
              className="fa fa-chevron-right"
              aria-hidden="true"
            />
            <li className="active">{currentPage}</li>
          </ul>
          {/* </div> */}
        </section>
      )}
      
    </>
  );
};

export default Navbar;
