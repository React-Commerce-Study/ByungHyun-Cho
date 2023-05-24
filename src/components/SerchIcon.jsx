import React from "react";
import styled from "styled-components";

const Styledreadingglasses = styled.span`
  display: flex;
  flex-direction: column;
  width: 30px;
  height: 30px;
  margin: auto;
  margin-left: -40px;
`;
const Styledglasses__circle = styled.span`
  width: 18px;
  height: 18px;
  border: 3px solid #21bf48;
  border-radius: 50%;
`;
const Styledglasses__line = styled.span`
  width: 7px;
  border: 2px solid #21bf48;
  border-radius: 30%;
  transform: translate3d(18px, -3px, 0) rotate(45deg);
  background-color: #21bf48;
`;

const SerchIcon = () => {
  return (
    <Styledreadingglasses>
      <Styledglasses__circle></Styledglasses__circle>
      <Styledglasses__line></Styledglasses__line>
    </Styledreadingglasses>
  );
};

export default SerchIcon;
