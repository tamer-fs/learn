import React, { useState } from "react";
import "./imageScroll.css";
import { images } from "../../Images";
import { AnimatePresence, motion } from "framer-motion";
import { wrap } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function ImageScroll() {
  const [[page, direction], setPage] = useState([0, 0]);

  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <div className="image-scroller">
      <div className="btn-container">
        <button className="img-scroll-btn hidden animate-delay-500">
          <FontAwesomeIcon icon={faArrowLeft} color={"var(--golden)"} />
        </button>
      </div>
      <div className="images-container hidden animate-delay-200">
        <img id="img-0" src={images[0]}></img>
        <img id="img-1" src={images[2]}></img>
      </div>
      <div className="btn-container hidden animate-delay-200">
        <button className="img-scroll-btn">
          <FontAwesomeIcon icon={faArrowRight} color={"var(--golden)"} />
        </button>
      </div>
    </div>
  );
}

export default ImageScroll;
