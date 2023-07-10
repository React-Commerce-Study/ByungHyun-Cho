import React, { useEffect } from "react";
import SignForm from "./form/SignForm.tsx";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import LogoCompoent from "./common/LogoCompoent";

const LoginForm = () => {
  const navigate = useNavigate();
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
const SignNav = styled.div`
  display: flex;
`;
const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const GoSignUp = styled.div`
  cursor: pointer;
`;
