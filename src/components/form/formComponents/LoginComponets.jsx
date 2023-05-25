import React, { useState } from "react";
import LoginProcess from "../Process/LoginProcess";

const LoginComponets = () => {
  const [userCheck, setUserCheck] = useState(false);
  const [userInput, setUserInput] = useState({
    username: "",
    password: "",
    login_type: "",
  });

  function loginCheckfunc(type) {
    if (type === "buyer") {
      setUserInput({
        ...userInput,
        login_type: "BUYER",
      });
    } else {
      setUserInput({
        ...userInput,
        login_type: "SELLER",
      });
    }
    console.log(userInput);

    setUserCheck(true);
  }
  return (
    <>
      {userCheck === false ? (
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
              <form className="buyer-login-form">
                <input
                  type="text"
                  className="input"
                  id="sell-user-login"
                  autoComplete="off"
                  placeholder="아이디"
                  onChange={(e) => {
                    setUserInput({
                      ...userInput,
                      username: e.target.value,
                    });
                  }}
                />
                <input
                  type="password"
                  className="input"
                  id="sell-user-pass"
                  autoComplete="off"
                  placeholder="비밀번호"
                  onChange={(e) => {
                    setUserInput({
                      ...userInput,
                      password: e.target.value,
                    });
                  }}
                />
                <button
                  onClick={() => loginCheckfunc("buyer")}
                  className="button"
                >
                  구매 로그인
                </button>
              </form>
            </div>
            <div id="seller-login-tab-content">
              <form className="seller-login-form" action="" method="post">
                <input
                  type="text"
                  className="input"
                  id="buy-user_login"
                  autoComplete="off"
                  placeholder="아이디"
                />
                <input
                  type="password"
                  className="input"
                  id="buy-user_pass"
                  autoComplete="off"
                  placeholder="비밀번호"
                />
                <input type="submit" className="button" value="판매 로그인" />
              </form>
            </div>
          </div>
        </div>
      ) : (
        <LoginProcess userInput={userInput} />
      )}
    </>
  );
};

export default LoginComponets;
