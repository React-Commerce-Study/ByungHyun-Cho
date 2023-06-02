import React from "react";
import ProductItem from "./ProductItem";
import styled from "styled-components";

export default function ImageList({ productList }) {
  return (
    <StyledImageContainer>
      {productList.map((item) => {
        return (
          <StyledImageList key={item.product_id}>
            <ProductItem
              img={item.image}
              title={item.product_name}
              store={item.store_name}
              price={item.price.toLocaleString()}
              product_id={item.product_id}
            />
          </StyledImageList>
        );
      })}
    </StyledImageContainer>
  );
}
const StyledImageList = styled.li`
  list-style: none;
`;
const StyledImageContainer = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0;
  gap: 70px;
  width: 100%;
  margin: 0 auto;
  margin-top: 80px;
  max-width: 1280px;
`;
