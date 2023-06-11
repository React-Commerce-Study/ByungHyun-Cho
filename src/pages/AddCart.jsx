import React from "react";
import { useLocation } from "react-router-dom";
import HeaderNav from "../components/HeaderNav";
import styled from "styled-components";
import ProductCartProcess from "../components/form/Process/ProductCartProcess";
import CartItem from "../components/CartItem";
const AddCart = () => {
  const location = useLocation();
  return (
    <>
      <HeaderNav />
      <SCartLayout>
        <SCartTitle>장바구니</SCartTitle>
        <SCartTab>
          <div>
            <input type="radio" />
          </div>
          <div>상품정보</div>
          <div>수량</div>
          <div>상품금액</div>
        </SCartTab>
        <SCartItemLayout>
          <ProductCartProcess />
        </SCartItemLayout>
      </SCartLayout>
    </>
  );
};

export default AddCart;
const SCartLayout = styled.div`
  width: 100%;
  height: 100vh;
`;
const SCartTitle = styled.div`
  font-size: 36px;
  font-weight: bold;
  text-align: center;

  padding: 40px;
  box-sizing: border-box;
`;
const SCartTab = styled.div`
  display: flex;
  max-width: 1280px;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;

  font-size: 18px;

  background-color: #f2f2f2;
  padding: 18px;
  border-radius: 10px;

  box-sizing: border-box;
  div:nth-child(1) {
    display: flex;
    flex-grow: 2;

    input {
      appearance: none;
      border: 2px solid #21bf48;
      background-color: #f2f2f2;

      border-radius: 50%;
      width: 1.25em;
      height: 1.25em;
    }
    [type="radio"]:hover {
      box-shadow: 0 0 0 max(4px, 0.2em) lightgray;
      cursor: pointer;
    }
  }
  div:nth-child(2) {
    display: flex;
    flex-grow: 2;
  }
  div:nth-child(3) {
    display: flex;
    flex-grow: 1;
  }
  div:nth-child(4) {
    display: flex;
    flex-grow: 1;
  }
`;
const SCartItemLayout = styled.div`
  display: flex;
  min-height: 50%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1280px;
  margin: 0 auto;
  /* div:nth-child(1) {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 20px;
  } */
`;
