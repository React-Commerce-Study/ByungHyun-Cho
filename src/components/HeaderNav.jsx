import React from "react";
import styled from "styled-components";
import SearchBar from "./SearchBar";
import AddCart from "../pages/AddCart";
import Login from "../pages/Login";
import Logo from "../assets/Logo-hodu.svg";
import Cart from "../assets/icon-shopping-cart.svg";
import UserInfo from "../assets/icon-user.svg";
import { useNavigate } from "react-router-dom";

const StyledHeaderNav = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 22px 320px;
  box-sizing: border-box;
  height: 90px;
  align-items: center;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);
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

const HeaderNav = ({ user }) => {
  const navigate = useNavigate();
  function goMain() {
    navigate("/");
  }
  function goAddCart() {
    navigate("/addcart");
  }

  function goLogin() {
    navigate("/login");
  }
  console.log(user);

  return (
    <StyledHeaderNav className="navbar">
      <StyledNavbarLeft className="navbar-left">
        <StyledNavImg onClick={goMain} src={Logo} alt="logo" />
        <SearchBar />
      </StyledNavbarLeft>
      <StyledNavbarRight className="navbar-right">
        <StyledCartBtn>
          <StyledNavImg onClick={goAddCart} src={Cart} alt="logo" />
          <div>장바구니</div>
        </StyledCartBtn>
        {user === null || user === undefined ? (
          <StyledCartBtn>
            <StyledNavImg onClick={goLogin} src={UserInfo} alt="logo" />
            <div>로그인</div>
          </StyledCartBtn>
        ) : (
          <StyledCartBtn>
            <StyledNavImg src={UserInfo} alt="logo" />
            <div>마이페이지</div>
          </StyledCartBtn>
        )}
      </StyledNavbarRight>
    </StyledHeaderNav>
  );
};

export default HeaderNav;
