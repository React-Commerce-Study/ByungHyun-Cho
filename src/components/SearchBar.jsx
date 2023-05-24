import React from "react";
import styled from "styled-components";
import SerchIcon from "./SerchIcon";

const StyleSerchBar = styled.input`
  width: 400px;
  height: 46px;
  border: 1px solid #21bf48;
  border-radius: 50px;
  padding-left: 22px;
  margin: 0;
  font-size: 16px;
`;
const StyleSerchBarContainer = styled.div`
  display: flex;
  margin-left: 15px;
`;

const SearchBar = () => {
  return (
    <StyleSerchBarContainer>
      <StyleSerchBar placeholder="상품을 검색해보세요!"></StyleSerchBar>
      <SerchIcon />
    </StyleSerchBarContainer>
  );
};

export default SearchBar;
