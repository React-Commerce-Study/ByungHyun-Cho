import "./SignForm.css";
import React, { useEffect } from "react";

const SignForm = () => {
  useEffect(() => {
    changeTab();
  }, []);

  function changeTab() {
    const sellerTab = document.querySelector(".tabs .seller-login-tab a");
    const buyerTab = document.querySelector(".tabs .buyer-login-tab a");
    const buyerTabContent = document.querySelector("#buyer-login-tab-content");
    const sellerTabContent = document.querySelector(
      "#seller-login-tab-content"
    );
    sellerTab.addEventListener("click", function () {
      sellerTab.classList.add("active");
      buyerTab.classList.remove("active");
      sellerTabContent.classList.add("active");
      buyerTabContent.classList.remove("active");
    });
    buyerTab.addEventListener("click", function () {
      buyerTab.classList.add("active");
      sellerTab.classList.remove("active");
      buyerTabContent.classList.add("active");
      sellerTabContent.classList.remove("active");
    });
  }

  return (
    <div>
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
    </div>
  );
};

export default SignForm;
