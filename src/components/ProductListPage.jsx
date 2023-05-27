import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

const ProductPageNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin: 40px 0;
  border-top: 1px solid #121213;
  border-bottom: 1px solid #121213;
  a {
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
  const navigate = useNavigate();

  function ProductNav(num, index) {
    setPageSet(num.item);
    setClickedIndex(index);
    navigate(`/product/${num.item}`);
  }
  // function goBackToProductList() {
  //   setPageSet(1);
  //   setClickedIndex(0);
  //   navigate("/product/1"); // Adjust the route based on your actual first product list route
  // }

  return (
    <ProductPageNav>
      {/* <Link onClick={goBackToProductList}>Back to First Product List</Link> */}
      {productPage.map((item, index) => {
        return (
          <Link
            to={`/product/${item}`}
            onClick={() => ProductNav({ item }, index)}
            className={clickedIndex === index ? "toggleActive" : ""}
            key={item}
          >
            {item}
          </Link>
        );
      })}
    </ProductPageNav>
  );
};

export default ProductListPage;
