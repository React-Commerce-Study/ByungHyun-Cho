import React, { useState } from "react";
import styled from "styled-components";
import Plus from "../assets/icon-plus-line.svg";
import Minus from "../assets/icon-minus-line.svg";

interface ItemAddButtonProps {
  productItemNum: number;
  setProductItemNum: React.Dispatch<React.SetStateAction<number>>;
  stock: number;
}

const ItemAddButton: React.FC<ItemAddButtonProps> = ({
  productItemNum,
  setProductItemNum,
  stock,
}) => {
  function productItemNumHandler(type: "plus" | "minus") {
    if (type === "plus") {
      setProductItemNum(productItemNum + 1);
    } else {
      if (productItemNum === 1) {
        return;
      }
      setProductItemNum(productItemNum - 1);
      return;
    }
    if (stock <= productItemNum) {
      alert(`재고가 부족합니다. 최대 구매 가능 수량은 ${stock}개 입니다.`);
      setProductItemNum(productItemNum);
      return;
    }
  }
  return (
    <>
      {stock === 0 ? (
        <ProductInfoItems>현재 품절입니다.</ProductInfoItems>
      ) : (
        <ProductInfoItems>
          <div>
            <div
              onClick={() => {
                productItemNumHandler("minus");
              }}
            >
              <img src={Minus} alt="minus" />
            </div>
            <div>{productItemNum}</div>
            <div
              onClick={() => {
                productItemNumHandler("plus");
              }}
            >
              <img src={Plus} alt="plus" />
            </div>
          </div>
        </ProductInfoItems>
      )}
    </>
  );
};

export default ItemAddButton;

const ProductInfoItems = styled.div`
  border-top: 2px solid #c4c4c4;
  border-bottom: 2px solid #c4c4c4;
  padding: 30px 0px;
  div {
    display: flex;
    div {
      border: 1px solid #c4c4c4;
      width: 50px;
      height: 50px;
      font-size: 20px;
      align-items: center;
      justify-content: center;
    }
    div:nth-child(1),
    div:nth-child(3) {
      cursor: pointer;
    }
  }
`;
