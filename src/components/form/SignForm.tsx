import "./SignForm.css";
import React from "react";
import LoginComponents from "./formComponents/LoginComponents";
import SignUpComponents from "./formComponents/SignUpComponents";

interface SignFormProps {
  type: string;
}

function SignForm({ type }: SignFormProps) {
  return (
    <div>{type === "login" ? <LoginComponents /> : <SignUpComponents />}</div>
  );
}

export default SignForm;
