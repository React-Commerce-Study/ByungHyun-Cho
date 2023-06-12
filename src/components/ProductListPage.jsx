import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useNavigate, useLocation } from "react-router-dom";

const ProductListPage = ({ productPage }) => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <ProductPageNav>
      {productPage.map((item, index) => {
        return (
          <Link
            to={`/product/${item}`}
            className={
              location.pathname === `/product/${item}` ? "toggleActive" : ""
            }
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
  margin: 20px;
  padding-top: 10px;
  border-top: 1px solid #121213;
  a {
    display: flex;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
  }
  .toggleActive {
    font-weight: bold;
    color: #121213;
  }
`;
