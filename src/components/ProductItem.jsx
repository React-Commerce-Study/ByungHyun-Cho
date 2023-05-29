import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const StyledImage = styled.img`
  width: 380px;
  height: 380px;
  object-fit: cover;
  border-radius: 10px;
`;
const StyledPrice = styled.div`
  font-weight: bold;
`;
const StyledStore = styled.div`
  color: #767676;
`;
const StyledProductContainer = styled.div`
  cursor: pointer;
`;
export default function ProductItem({ img, title, store, price, product_id }) {
  const navigate = useNavigate();

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
