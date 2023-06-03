import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function ProductItem({ img, title, store, price, product_id }) {
  const navigate = useNavigate();
  console.log(img, title, store, price, product_id);
  function goProductInfo() {
    navigate("/ProductInfo", {
      state: { img, title, store, price, product_id },
    });
  }
  return (
    <StyledProductContainer onClick={() => goProductInfo()}>
      <StyledImage src={img} alt="" />
      <StyledStore>{store}</StyledStore>
      <div>{title}</div>
      <StyledPrice>{price}원</StyledPrice>
    </StyledProductContainer>
  );
}
const StyledImage = styled.img`
  width: 380px;
  height: 380px;
  object-fit: cover;
  border-radius: 10px;

  &:hover {
    transition: all 0.3s;
    scale: 1.05;
  }
`;
const StyledPrice = styled.div`
  font-weight: bold;
`;
const StyledStore = styled.div`
  color: #21bf48;
`;
const StyledProductContainer = styled.div`
  cursor: pointer;
`;
