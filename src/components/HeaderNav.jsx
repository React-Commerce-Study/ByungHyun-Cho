import React from "react";
import styled from "styled-components";
import SearchBar from "./SearchBar";
import Logo from "../assets/Logo-hodu.svg";
import Cart from "../assets/icon-shopping-cart.svg";
import UserInfo from "../assets/icon-user.svg";
import { useNavigate } from "react-router-dom";
import ShoppingBag from "../assets/icon-shopping-bag.svg";
import { useSelector } from "react-redux";
import DropDown from "./DropDown";

const HeaderNav = () => {
  const token = useSelector((state) => state.Auth.token);
  const logintype = useSelector((state) => state.Auth.loginType);

  console.log(token);
  console.log(logintype);
  const navigate = useNavigate();
  function goMain() {
    navigate("/product/1");
  }
  function goAddCart() {
    navigate("/addcart");
  }
  function goLogin() {
    navigate("/login");
  }

  return (
    <StyledHeaderWrapper>
      <StyledHeaderNav className="navbar">
        <StyledNavbarLeft className="navbar-left">
          <StyledNavImg onClick={goMain} src={Logo} alt="logo" />
          <SearchBar />
        </StyledNavbarLeft>
        <StyledNavbarRight className="navbar-right">
          {token === null ||
          logintype === null ||
          token === "" ||
          logintype === "" ||
          logintype === "BUYER" ? (
            <StyledCartBtn>
              <StyledNavImg onClick={goAddCart} src={Cart} alt="logo" />
              <div>장바구니</div>
            </StyledCartBtn>
          ) : (
            <StyledCartBtn>
              <StyledNavImg src={UserInfo} alt="logo" />
              <DropDown />
            </StyledCartBtn>
          )}

          {logintype === null || logintype === undefined || logintype === "" ? (
            <StyledCartBtn>
              <StyledNavImg onClick={goLogin} src={UserInfo} alt="logo" />
              <div>로그인</div>
            </StyledCartBtn>
          ) : token !== null && logintype === "SELLER" ? (
            <SSellerBtn>
              <SSellerImg src={ShoppingBag} alt="logo" />
              <div>판매자 센터</div>
            </SSellerBtn>
          ) : (
            <StyledCartBtn>
              <StyledNavImg src={UserInfo} alt="logo" />
              <DropDown />
            </StyledCartBtn>
          )}
        </StyledNavbarRight>
      </StyledHeaderNav>
    </StyledHeaderWrapper>
  );
};

export default HeaderNav;
const StyledHeaderWrapper = styled.div`
  width: 100%;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
`;

const StyledHeaderNav = styled.header`
  /* margin: 0 320px; */
  margin: 0 auto;
  max-width: 1280px;
  padding: 26px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const StyledNavbarLeft = styled.div`
  display: flex;
  gap: 15px;
`;
const StyledNavbarRight = styled.div`
  display: flex;
  gap: 15px;
`;
const StyledCartBtn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
  color: #767676;
`;
const StyledNavImg = styled.img`
  cursor: pointer;
`;
const SSellerImg = styled.img`
  color: black;
`;
const SSellerBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: #21bf48;
  min-width: 168px;
  border-radius: 5px;
  font-size: 18px;
  gap: 5px;
`;
