import React, { useEffect } from "react";
import Logo from "../assets/Logo-hodu.svg";
import "./LoginForm.css";

const LoginForm = () => {
  useEffect(() => {
    changeTab();
  }, []);

  function changeTab() {
    const loginTab = document.querySelector(".tabs .seller-login-tab a");
    const signUpTab = document.querySelector(".tabs .buyer-login-tab a");
    const signUpTabContent = document.querySelector("#buyer-login-tab-content");
    const loginTabContent = document.querySelector("#seller-login-tab-content");
    loginTab.addEventListener("click", function () {
      loginTab.classList.add("active");
      signUpTab.classList.remove("active");
      loginTabContent.classList.add("active");
      signUpTabContent.classList.remove("active");
    });
    signUpTab.addEventListener("click", function () {
      signUpTab.classList.add("active");
      loginTab.classList.remove("active");
      signUpTabContent.classList.add("active");
      loginTabContent.classList.remove("active");
    });
  }

  return (
    <>
      <img src={Logo} alt="" />
      <div className="form-wrap">
        <div className="tabs">
          <h3 className="buyer-login-tab">
            <a className="active" href="#buyer-login-tab-content">
              구매회원 로그인
            </a>
          </h3>
          <h3 className="seller-login-tab">
            <a href="#seller-login-tab-content"> 판매회원 로그인</a>
          </h3>
        </div>
        <div className="tabs-content">
          <div id="seller-login-tab-content" className="active">
            <form className="seller-login-form" action="" method="post">
              <input
                type="text"
                className="input"
                id="user_login"
                autoComplete="off"
                placeholder="아이디"
              />
              <input
                type="password"
                className="input"
                id="user_pass"
                autoComplete="off"
                placeholder="비밀번호"
              />
              <input type="submit" className="button" value="로그인" />
            </form>
          </div>

          <div id="buyer-login-tab-content">
            <form className="buyer-login-form" action="" method="post">
              <input
                type="text"
                className="input"
                id="user_login"
                autoComplete="off"
                placeholder="아이디"
              />
              <input
                type="password"
                className="input"
                id="user_pass"
                autoComplete="off"
                placeholder="비밀번호"
              />
              <input type="submit" className="button" value="로그인" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
