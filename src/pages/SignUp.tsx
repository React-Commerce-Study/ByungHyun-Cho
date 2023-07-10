import React from "react";
import SignForm from "../components/form/SignForm.tsx";
import Logo from "../assets/Logo-hodu.svg";
import styled from "styled-components";
import LogoCompoent from "../components/common/LogoCompoent.jsx";

const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const SignUp = () => {
  return (
    <Form>
      <LogoCompoent />
      <SignForm type={"signup"} />
    </Form>
  );
};

export default SignUp;
