import React from "react";
import "./Carousel.css";
const Carousel = () => {
  return (
    <div class="container">
      <div data-am-fadeshow="next-prev-navigation">
        <input type="radio" name="css-fadeshow" id="slide-1" />
        <input type="radio" name="css-fadeshow" id="slide-2" />
        <input type="radio" name="css-fadeshow" id="slide-3" />

        <div class="fs-slides">
          <div class="fs-slide"></div>
          <div class="fs-slide"></div>
          <div class="fs-slide"></div>
        </div>

        <div class="fs-quick-nav">
          <label class="fs-quick-btn" for="slide-1"></label>
          <label class="fs-quick-btn" for="slide-2"></label>
          <label class="fs-quick-btn" for="slide-3"></label>
        </div>

        <div class="fs-prev-nav">
          <label class="fs-prev-btn" for="slide-1"></label>
          <label class="fs-prev-btn" for="slide-2"></label>
          <label class="fs-prev-btn" for="slide-3"></label>
        </div>

        <div class="fs-next-nav">
          <label class="fs-next-btn" for="slide-1"></label>
          <label class="fs-next-btn" for="slide-2"></label>
          <label class="fs-next-btn" for="slide-3"></label>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
