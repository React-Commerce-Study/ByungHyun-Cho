import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/Logo-hodu.svg";
const Img = styled.img`
  width: 238px;
  cursor: pointer;
  margin-top: 100px;
`;
const LogoCompoent = () => {
  const navigate = useNavigate();
  function goMain() {
    navigate("/");
  }
  return <Img onClick={goMain} src={Logo}></Img>;
};

export default LogoCompoent;
