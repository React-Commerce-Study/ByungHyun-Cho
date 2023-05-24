import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import HeaderNav from "../components/HeaderNav";

const StyledProductInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 80px 320px;
`;
const StyledProductInfoImgContainer = styled.div`
  display: flex;
  /* margin-left: 50px; */
`;
const StyledProductInfoOrderContainer = styled.div`
  margin-left: 50px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  height: 600px;
`;
const StyledProductInfoTitle = styled.div`
  font-size: 36px;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const Price = styled.div`
  font-size: 36px;
  font-weight: bold;
`;
const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 100px;
`;
const ProductInfoImg = styled.img`
  width: 600px;
  height: 600px;
`;
const ProcudctInfoItems = styled.div`
  border-top: 1px solid #c4c4c4;
  border-bottom: 1px solid #c4c4c4;
  padding: 30px 0px;
`;
const ProductInfoPrice = styled.div`
  display: flex;
  align-items: center;
`;
const ProductInfoPriceDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: auto;
  align-items: center;
`;
const ProductInfoBtn = styled.div`
  display: flex;
  min-width: 670px;
  height: 60px;
  gap: 14px;
`;
const ProductBtnBuy = styled.button`
  flex-grow: 2;
  flex-shrink: 1;
  background-color: #21bf48;
  border: none;
  color: white;
  border-radius: 5px;
`;
const ProductBtnCart = styled.button`
  flex-grow: 1;
  flex-shrink: 1;
  background-color: #767676;
  border: none;
  color: white;
  border-radius: 5px;
`;
const ProductInfoTotalPrice = styled.div`
  font-size: 36px;
`;
const ProductInfoReview = styled.div`
  display: flex;
  justify-content: center;
`;

const ProductInfo = () => {
  const location = useLocation();
  const productInfo = location.state;
  console.log(productInfo);

  return (
    <>
      <HeaderNav />

      <StyledProductInfoContainer>
        <StyledProductInfoImgContainer>
          <ProductInfoImg src={productInfo.img} alt="img"></ProductInfoImg>
          <StyledProductInfoOrderContainer>
            <div>{productInfo.store}</div>
            <StyledProductInfoTitle>{productInfo.title}</StyledProductInfoTitle>
            <PriceContainer>
              <Price>{productInfo.price}</Price>
              <div>원</div>
            </PriceContainer>
            <div>택배배송 / 무료배송</div>
            <ProcudctInfoItems>+/-</ProcudctInfoItems>
            <ProductInfoPriceDiv>
              <div>총금액</div>
              <ProductInfoPrice>
                <div>총 수량 1개 |</div>
                <ProductInfoTotalPrice>10000원</ProductInfoTotalPrice>
              </ProductInfoPrice>
            </ProductInfoPriceDiv>
            <ProductInfoBtn>
              <ProductBtnBuy>바로구매</ProductBtnBuy>
              <ProductBtnCart>장바구니</ProductBtnCart>
            </ProductInfoBtn>
          </StyledProductInfoOrderContainer>
        </StyledProductInfoImgContainer>
        <ProductInfoReview>
          <div>버튼</div>
          <div>리뷰</div>
          <div>q&a</div>
          <div>반품</div>
        </ProductInfoReview>
      </StyledProductInfoContainer>
    </>
  );
};

export default ProductInfo;
