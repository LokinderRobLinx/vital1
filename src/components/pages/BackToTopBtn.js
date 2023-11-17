import React, { useEffect, useState } from "react";

const BackToTopBtn = () => {
  const [backToTopBtn, setBackToTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setBackToTopBtn(true);
      } else {
        setBackToTopBtn(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      {backToTopBtn && <button className="BackToTopBtn" onClick={scrollUp}>^</button>}
    </div>
  );
};

export default BackToTopBtn;
