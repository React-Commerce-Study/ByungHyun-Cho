import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useNavigate, useLocation } from "react-router-dom";

const ProductListPage = ({ setPageSet, productPage, pageParams }) => {
  const [clickedIndex, setClickedIndex] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();
  function ProductNav(num, index) {
    setPageSet(num.item);
    setClickedIndex(index);
    navigate(`/product/${num.item}`);
  }
  function ProductUrlNav(index) {
    console.log(index.productId);
    console.log(clickedIndex);
    setClickedIndex(index.productId);
  }
  useEffect(() => {
    ProductUrlNav(pageParams);
  }, [pageParams]);

  // function goBackToProductList() {
  //   setPageSet(1);
  //   setClickedIndex(0);
  //   navigate("/product/1"); // Adjust the route based on your actual first product list route
  // }

  return (
    <ProductPageNav>
      {/* <Link onClick={goBackToProductList}>Back to First Product List</Link> */}
      {productPage.map((item, index) => {
        console.log(item);

        return (
          <Link
            to={`/product/${item}`}
            className={
              location.pathname === `/product/${item}` ? "toggleActive" : ""
            }
            onClick={() => ProductNav({ item }, index)}
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
