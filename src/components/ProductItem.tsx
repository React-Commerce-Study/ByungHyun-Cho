import React from "react";
import styled from "styled-components";
import { useNavigate, NavigateFunction } from "react-router-dom";

interface ProductItemProps {
  img: string;
  title: string;
  store: string;
  price: string;
  product_id: number;
  shipping_fee: boolean;
  stock: number;
}

const ProductItem: React.FC<ProductItemProps> = ({
  img,
  title,
  store,
  price,
  product_id,
  shipping_fee,
  stock,
}) => {
  const navigate: NavigateFunction = useNavigate();

  function goProductInfo() {
    navigate("/ProductInfo", {
      state: { img, title, store, price, product_id, shipping_fee, stock },
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
};

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

export default ProductItem;
