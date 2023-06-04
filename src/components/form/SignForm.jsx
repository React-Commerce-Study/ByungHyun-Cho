import "./SignForm.css";
import React, { useEffect, useState } from "react";
import LoginComponets from "./formComponents/LoginComponets";
import SignUpComponents from "./formComponents/SignUpComponents";

const SignForm = ({ type }) => {
  return (
    <div>{type === "login" ? <LoginComponets /> : <SignUpComponents />}</div>
  );
};

export default SignForm;
