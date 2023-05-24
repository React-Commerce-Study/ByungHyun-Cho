import React, { useEffect } from "react";
import Logo from "../assets/Logo-hodu.svg";
import SignForm from "./form/SignForm";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import LogoCompoent from "./common/LogoCompoent";
const Img = styled.img`
  width: 238px;
  cursor: pointer;
  margin-top: 100px;
`;
const SignNav = styled.div`
  display: flex;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const GoSignUp = styled.div`
  cursor: pointer;
`;
const LoginForm = () => {
  const navigate = useNavigate();
  function goMain() {
    navigate("/");
  }
  function goSignUp() {
    navigate("/SignUp");
  }
  return (
    <Form>
      <LogoCompoent />
      <SignForm type={"login"} />
      <SignNav>
        <GoSignUp onClick={goSignUp}>회원가입 |</GoSignUp>
        <div>비밀번호 찾기</div>
      </SignNav>
    </Form>
  );
};

export default LoginForm;
