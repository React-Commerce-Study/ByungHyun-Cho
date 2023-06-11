import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import HeaderNav from "../components/HeaderNav";
import ItemAddButton from "../components/ItemAddButton";

const ProductInfo = () => {
  const location = useLocation();

  const productInfo = location.state;

  const [toggle, setToggle] = useState(0);

  const navigate = useNavigate();

  const [productItemNum, setProductItemNum] = useState(1);

  function uncomma(str) {
    return str.replace(/[^\d-/]+/g, "");
  }
  const productTotalPrice = (
    uncomma(productInfo.price) * productItemNum
  ).toLocaleString();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function goOrderPage() {
    navigate("/OrderPay");
  }
  function goAddCart() {
    navigate("/AddCart", { state: productInfo });
  }

  return (
    <>
      <HeaderNav />
      <StyledProductInfoContainer>
        <StyledProductInfoImgContainer>
          <ProductInfoImg src={productInfo.img} alt="img"></ProductInfoImg>
          <StyledProductInfoOrderContainer>
            <SGreenFont>{productInfo.store}</SGreenFont>
            <StyledProductInfoTitle>{productInfo.title}</StyledProductInfoTitle>
            <PriceContainer>
              <Price>{productInfo.price}</Price>
              <div>원</div>
            </PriceContainer>
            <SShippingFee>
              택배배송 /
              {productInfo.shipping_fee !== 0 ? (
                <div>{productInfo.shipping_fee.toLocaleString()}원</div>
              ) : (
                <div>무료배송</div>
              )}
            </SShippingFee>
            <ItemAddButton
              productItemNum={productItemNum}
              setProductItemNum={setProductItemNum}
              stock={productInfo.stock}
            />
            <ProductInfoPriceDiv>
              <div>총 상품 금액</div>
              <ProductInfoPrice>
                <ProductInfoPrice>
                  총 수량
                  <SGreenFont>{productItemNum}</SGreenFont>개 |
                </ProductInfoPrice>
                <ProductInfoTotalPrice>
                  <STotalPrice>{productTotalPrice}</STotalPrice>
                  <div>원</div>
                </ProductInfoTotalPrice>
              </ProductInfoPrice>
            </ProductInfoPriceDiv>
            <ProductInfoBtn>
              <ProductBtnBuy onClick={goOrderPage}>바로구매</ProductBtnBuy>
              <ProductBtnCart onClick={goAddCart}>장바구니</ProductBtnCart>
            </ProductInfoBtn>
          </StyledProductInfoOrderContainer>
        </StyledProductInfoImgContainer>
        <ProductInfoReview>
          <div
            className={toggle === 0 ? "active" : ""}
            onClick={() => {
              setToggle(0);
            }}
          >
            정보
          </div>
          <div
            className={toggle === 1 ? "active" : ""}
            onClick={() => {
              setToggle(1);
            }}
          >
            리뷰
          </div>
          <div
            className={toggle === 2 ? "active" : ""}
            onClick={() => {
              setToggle(2);
            }}
          >
            Q&A
          </div>
          <div
            className={toggle === 3 ? "active" : ""}
            onClick={() => {
              setToggle(3);
            }}
          >
            반품/교환정보
          </div>
        </ProductInfoReview>
      </StyledProductInfoContainer>
    </>
  );
};

export default ProductInfo;

const StyledProductInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 80px auto;
  /* max-width: 1280px; */
`;
const SShippingFee = styled.div`
  display: flex;
`;
const SGreenFont = styled.div`
  color: #21bf48;
  font-weight: bold;
`;
const STotalPrice = styled.div`
  color: #21bf48;
  font-size: 36px;
  font-weight: bold;
`;
const StyledProductInfoImgContainer = styled.div`
  display: flex;
  /* margin-left: 50px; */
  margin: 0 auto;
  width: 100%;
  max-width: 1280px;
`;
const StyledProductInfoOrderContainer = styled.div`
  flex-grow: 1;
  margin-left: 50px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  height: 600px;
  max-width: 1280px;
  width: 100%;
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
  align-items: end;
  margin-bottom: 100px;
`;
const ProductInfoImg = styled.img`
  width: 100%;
  height: 100%;
  max-width: 600px;
  max-height: 600px;
`;
const ProductInfoPrice = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const ProductInfoPriceDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: auto;
  align-items: center;
  div:first-child {
  }
`;
const ProductInfoBtn = styled.div`
  display: flex;
  max-width: 670px;
  width: 100%;
  height: 60px;
  gap: 14px;
  button {
    cursor: pointer;
  }
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
  display: flex;

  div:nth-child(2) {
    font-size: 18px;
    align-items: end;
    display: flex;
  }
`;
const ProductInfoReview = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 140px;

  div {
    font-size: 18px;
    color: #767676;
    width: 100%;
    max-width: 320px;
    max-height: 60px;
    text-align: center;
    border-bottom: 6px solid #e0e0e0;
    padding: 15px 0px;
    cursor: pointer;
  }
  div:hover {
    border-bottom: 6px solid #21bf48;
  }
  div.active {
    border-bottom: 6px solid #21bf48;
  }
`;
