import React from "react";

const LoginComponets = () => {
  return (
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
        <div id="buyer-login-tab-content" className="active">
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
            <input type="submit" className="button" value="구매 로그인" />
          </form>
        </div>

        <div id="seller-login-tab-content">
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
            <input type="submit" className="button" value="판매 로그인" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginComponets;
