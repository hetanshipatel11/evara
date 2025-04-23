import React, { useState, useEffect } from "react";
import { FaArrowUpLong } from "react-icons/fa6";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show or hide the button based on scroll position
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll the page to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          style={styles.button}
        >
          <FaArrowUpLong />

        </button>
      )}
    </div>
  );
};

const styles = {
  button: {
    position: "fixed",
    bottom: "30px",
    right: "30px",
    backgroundColor: "#078078",
    color: "#fff",
    border: "none",
    width: "55px",
    height: "55px",
    fontSize: "25px",
    cursor: "pointer",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  },
};

export default ScrollToTop;
