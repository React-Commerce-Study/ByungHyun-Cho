import React from "react";
import "./Carousel.css";
const Carousel = () => {
  return (
    <div className="container">
      <div data-am-fadeshow="next-prev-navigation">
        <input type="radio" name="css-fadeshow" id="slide-1" />
        <input type="radio" name="css-fadeshow" id="slide-2" />
        <input type="radio" name="css-fadeshow" id="slide-3" />

        <div className="fs-slides">
          <div className="fs-slide"></div>
          <div className="fs-slide"></div>
          <div className="fs-slide"></div>
        </div>

        <div className="fs-quick-nav">
          <label className="fs-quick-btn" htmlFor="slide-1"></label>
          <label className="fs-quick-btn" htmlFor="slide-2"></label>
          <label className="fs-quick-btn" htmlFor="slide-3"></label>
        </div>

        <div className="fs-prev-nav">
          <label className="fs-prev-btn" htmlFor="slide-1"></label>
          <label className="fs-prev-btn" htmlFor="slide-2"></label>
          <label className="fs-prev-btn" htmlFor="slide-3"></label>
        </div>

        <div className="fs-next-nav">
          <label className="fs-next-btn" htmlFor="slide-1"></label>
          <label className="fs-next-btn" htmlFor="slide-2"></label>
          <label className="fs-next-btn" htmlFor="slide-3"></label>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
