import React from "react";
import styled from "styled-components";
// import Carousel from "./Carousel";
import Carousel from "./Carousel";
const StyledBanner = styled.div`
  height: 500px;
  width: 100%;
  text-align: center;
  background-color: #f2f2f2;
  margin-top: 5px;
`;

const Banner = () => {
  return (
    <StyledBanner>
      <Carousel />
    </StyledBanner>
  );
};

export default Banner;
