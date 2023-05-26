import "./SignForm.css";
import React, { useEffect, useState } from "react";
import LoginComponets from "./formComponents/LoginComponets";
import SignUpComponents from "./formComponents/SignUpComponents";

const SignForm = ({ type }) => {
  // const [reRender, setReRender] = useState(false);

  // useEffect(() => {
  //   changeTab();
  // }, [reRender]);

  // function changeTab() {
  //   if (!reRender) {
  //     const sellerTab = document.querySelector(".tabs .seller-login-tab a");
  //     const buyerTab = document.querySelector(".tabs .buyer-login-tab a");
  //     const buyerTabContent = document.querySelector(
  //       "#buyer-login-tab-content"
  //     );
  //     const sellerTabContent = document.querySelector(
  //       "#seller-login-tab-content"
  //     );
  //     sellerTab.addEventListener("click", function () {
  //       sellerTab.classList.add("active");
  //       buyerTab.classList.remove("active");
  //       sellerTabContent.classList.add("active");
  //       buyerTabContent.classList.remove("active");
  //     });
  //     buyerTab.addEventListener("click", function () {
  //       buyerTab.classList.add("active");
  //       sellerTab.classList.remove("active");
  //       buyerTabContent.classList.add("active");
  //       sellerTabContent.classList.remove("active");
  //     });
  //   } else {
  //     return;
  //   }
  // }

  return (
    <div>{type === "login" ? <LoginComponets /> : <SignUpComponents />}</div>
  );
};

export default SignForm;
