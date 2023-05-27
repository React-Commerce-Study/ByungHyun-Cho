import React, { useState } from "react";
import styled from "styled-components";
const ProductPageNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin: 40px 0;
  border-top: 1px solid #121213;
  border-bottom: 1px solid #121213;
  div {
    display: flex;
    cursor: pointer;
    text-align: center;
    /* font-size: 14px; */
  }
  .toggleActive {
    font-weight: bold;
    color: #121213;
  }
`;

const ProductListPage = ({ setPageSet, productPage }) => {
  const [clickedIndex, setClickedIndex] = useState(0);

  function ProductNav(num, index) {
    setPageSet(num.item);
    setClickedIndex(index);
  }

  return (
    <ProductPageNav>
      {productPage.map((item, index) => {
        return (
          <div
            onClick={() => ProductNav({ item }, index)}
            className={clickedIndex === index ? "toggleActive" : ""}
            key={item}
          >
            {item}
          </div>
        );
      })}
    </ProductPageNav>
  );
};

export default ProductListPage;
