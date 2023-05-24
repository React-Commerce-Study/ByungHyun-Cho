import React from "react";
import ImageItem from "./ImageItem";
import styled from "styled-components";

const StyledImageList = styled.li`
  list-style: none;
`;
const StyledImageContainer = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 0;
  margin-top: 80px;
  gap: 70px;
`;

export default function ImageList({ imageList }) {
  return (
    <StyledImageContainer>
      {imageList.map((item) => {
        return (
          <StyledImageList key={item.product_id}>
            <ImageItem
              img={item.image}
              title={item.product_name}
              store={item.store_name}
              price={item.price}
              product_id={item.product_id}
            />
          </StyledImageList>
        );
      })}
    </StyledImageContainer>
  );
}
