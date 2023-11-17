import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './components/stylesheets/layout.css';

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer1";

import Home from "./components/pages/Home";
import AboutUs from "./components/pages/aboutUs/AboutUs";
import ContactUs from "./components/pages/ContactUs";
import Errorpage from "./components/pages/Errorpage";

import Brands from "./components/pages/brands/Brands";
import BeAPartner from "./components/pages/beAPartner/BeAPartner";
import Career from "./components/pages/Career";
import Blog from "./components/pages/blog/Blog";
import Testimonials from "./components/pages/Testimonials";
import BackToTopBtn from "./components/pages/BackToTopBtn";


function App() {


  return (
    <Router>
    <>
      <Navbar />
      <div className="main">
     
      <Routes>
        {/* <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/register" element={<Register />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/brands" element={<Brands />} />
      
        <Route path="/blog" element={<Blog />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/be-a-partner" element={<BeAPartner />} />
        <Route path="/career" element={<Career />} />
        
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />

        <Route path="*" element={<Errorpage />} />
      </Routes>
   
      </div>
      <BackToTopBtn />
      <Footer />
    </>
  </Router>
  );
}

export default App;
