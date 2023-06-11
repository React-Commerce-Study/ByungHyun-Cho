import React, { useState } from "react";
import styled from "styled-components";
import ItemAddButton from "./ItemAddButton";
function CartItemProcess({
  img,
  title,
  store,
  price,
  product_id,
  shipping_fee,
  stock,
  cartData,
  quantity,
}) {
  console.log(quantity);
  const [productItemNum, setProductItemNum] = useState(quantity);

  return (
    <StyledProductContainer>
      <input type="radio" />
      <StyledImage src={img} alt="" />
      <SProductContainer>
        <StyledStore>{store}</StyledStore>
        <div>{title}</div>
        <StyledPrice>{price.toLocaleString()}원</StyledPrice>
        택배배송 /
        {shipping_fee !== 0 ? (
          <div>{shipping_fee.toLocaleString()}원</div>
        ) : (
          <div>무료배송</div>
        )}
      </SProductContainer>
      <div>
        <ItemAddButton
          productItemNum={productItemNum}
          setProductItemNum={setProductItemNum}
          stock={stock}
        />
      </div>

      <div>
        총금액:
        <div>{(price * productItemNum + shipping_fee).toLocaleString()}</div>
        <div>주문하기</div>
      </div>
    </StyledProductContainer>
  );
}

export default CartItemProcess;
const SProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 2;
`;
const StyledImage = styled.img`
  width: 160px;
  height: 160px;
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
  width: 100%;
  display: flex;

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
`;
