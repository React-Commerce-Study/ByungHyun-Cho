import React from "react";
import styled from "styled-components";

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
      <div>배너입니다</div>
    </StyledBanner>
  );
};

export default Banner;
