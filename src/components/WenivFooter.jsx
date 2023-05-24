import React from "react";
import styled from "styled-components";
import LogoInsta from "../assets/icon-insta.svg";
import LogoYt from "../assets/icon-yt.svg";
import LogoFb from "../assets/icon-fb.svg";
const StyledFooter = styled.header`
  display: flex;
  flex-direction: column;
  padding: 22px 320px;
  box-sizing: border-box;
  height: 298px;
  background-color: #f2f2f2;
`;
const StyledTerms = styled.div`
  display: flex;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding-bottom: 20px;
  box-shadow: 0px 4px 0px #c4c4c4;
  justify-content: space-between;
`;
const StyledContact = styled.div`
  display: flex;
  flex-direction: column;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-top: 30px;
  font-size: 14px;
  line-height: 24px;
`;
const StyledTermsDiv = styled.div`
  display: flex;
`;
const StyledTermsLogo = styled.div`
  display: flex;
  gap: 14px;
`;
const WenivFooter = () => {
  return (
    <StyledFooter>
      <StyledTerms>
        <StyledTermsDiv>
          <div>호두샵 소개 |</div>
          <div>&nbsp;이용약관 |</div>
          <div>&nbsp;개인정보처리방침 |</div>
          <div>&nbsp;전자금융거래약관 |</div>
          <div>&nbsp;청소년보호정책 |</div>
          <div>&nbsp;제휴문의</div>
        </StyledTermsDiv>
        <StyledTermsLogo>
          <img src={LogoInsta} alt="" />
          <img src={LogoYt} alt="" />
          <img src={LogoFb} alt="" />
        </StyledTermsLogo>
      </StyledTerms>
      <StyledContact>
        <div>(주)HODU SHOP</div>
        <div>제주특별자치도 제주시 동광고 137 제주코딩베이스캠프</div>
        <div>사업자 번호 : 000-0000-0000 | 통신판매업</div>
        <div>대표 : 김호두</div>
      </StyledContact>
    </StyledFooter>
  );
};

export default WenivFooter;
