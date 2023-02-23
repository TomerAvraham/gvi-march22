import { useEffect, useState } from "react";
import Fab from "@mui/material/Fab";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

import "./ButtonReturnTopStyle.css";

const ButtonReturnTop = () => {
  // The back-to-top button is hidden at the beginning
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 250) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  /* &#8679; is used to create the upward arrow */
  return (
    <>
      {showButton && (
        <Fab onClick={scrollToTop} color="primary" className="back-to-top">
          <ArrowUpwardIcon />
        </Fab>
      )}
    </>
  );
};

export default ButtonReturnTop;
