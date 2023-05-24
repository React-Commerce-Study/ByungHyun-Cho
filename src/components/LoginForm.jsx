import React, { useEffect } from "react";
import Logo from "../assets/Logo-hodu.svg";
import SignForm from "./form/SignForm";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
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
const LoginForm = () => {
  const navigate = useNavigate();
  function goMain() {
    navigate("/");
  }
  return (
    <Form>
      <Img onClick={goMain} src={Logo} alt="" />
      <SignForm />
      <SignNav>
        <div>회원가입 |</div>
        <div>비밀번호 찾기</div>
      </SignNav>
    </Form>
  );
};

export default LoginForm;
