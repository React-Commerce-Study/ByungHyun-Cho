import React, { useEffect, useState } from "react";
import useLoginProcess from "../Process/useLoginProcess";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const LoginComponets = () => {
  const [toggle, setToggle] = useState(true);

  const [userInput, setUserInput] = useState({
    username: "",
    password: "",
    login_type: "",
  });

  const fetchLogin = useLoginProcess();

  function loginCheckfunc(type) {
    const loginType = type === "buyer" ? "BUYER" : "SELLER";
    setUserInput({
      ...userInput,
      login_type: loginType,
    });
    fetchLogin(userInput, loginType);
  }
  const token = useSelector((state) => state.Auth.token);
  const logintype = useSelector((state) => state.Auth.loginType);
  const navigete = useNavigate();
  useEffect(() => {
    if (token && logintype !== "") {
      navigete("/");
    }
  });

  return (
    <>
      <div className="form-wrap">
        <div className="tabs">
          <h3 className="buyer-login-tab">
            <a
              className={toggle ? "active" : ""}
              href="#buyer-login-tab-content"
              onClick={() => {
                setToggle(true);
              }}
            >
              구매회원 로그인
            </a>
          </h3>
          <h3 className="seller-login-tab">
            <a
              className={toggle ? "" : "active"}
              href="#seller-login-tab-content"
              onClick={() => {
                setToggle(false);
              }}
            >
              판매회원 로그인
            </a>
          </h3>
        </div>
        <div className="tabs-content">
          <div id="buyer-login-tab-content" className={toggle ? "active" : ""}>
            <form className="buyer-login-form">
              <input
                type="text"
                className="input"
                id="sell-user-login"
                autoComplete="on"
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
                autoComplete="on"
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
                type="button"
              >
                구매 로그인
              </button>
            </form>
          </div>
          <div id="seller-login-tab-content" className={toggle ? "" : "active"}>
            <form className="seller-login-form" action="" method="post">
              <input
                type="text"
                className="input"
                id="buy-user_login"
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
                id="buy-user_pass"
                autoComplete="off"
                placeholder="비밀번호"
                onChange={(e) => {
                  setUserInput({
                    ...userInput,
                    password: e.target.value,
                  });
                }}
              />
              <input
                type="button"
                className="button"
                value="판매 로그인"
                onClick={() => loginCheckfunc("seller")}
              />
            </form>
          </div>
        </div>
      </div>
      {/* <LoginProcess userInput={userInput} setUserCheck={setUserCheck} /> */}
    </>
  );
};

export default LoginComponets;
