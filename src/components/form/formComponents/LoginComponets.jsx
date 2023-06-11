import React, { useEffect, useState } from "react";
import useLoginProcess from "../Process/useLoginProcess";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
const LoginComponets = () => {
  const [toggle, setToggle] = useState(true);

  const [loginCheckToggle, setLoginCheckToggle] = useState(true);

  const token = useSelector((state) => state.Auth.token);

  const logintype = useSelector((state) => state.Auth.loginType);

  const [userInput, setUserInput] = useState({
    username: "",
    password: "",
    login_type: "",
  });

  const fetchLogin = useLoginProcess();

  const navigete = useNavigate();

  function loginCheckfunc(type) {
    const loginType = type === "buyer" ? "BUYER" : "SELLER";
    setUserInput({
      ...userInput,
      login_type: loginType,
    });
    fetchLogin(userInput, loginType, setLoginCheckToggle);
  }

  useEffect(() => {
    if (token && logintype !== "") {
      navigete("/");
    }
  }, []);

  const handleOnKeyPress = (e) => {
    if (e.key === "Enter") {
      if (toggle) {
        loginCheckfunc("buyer");
      } else {
        loginCheckfunc("seller");
      }
    }
  };
  return (
    <>
      <div className="form-wrap">
        <div className="tabs">
          <h3 className="buyer-login-tab">
            <div
              className={toggle ? "active" : ""}
              onClick={() => {
                setToggle(true);
                setLoginCheckToggle(true);
              }}
            >
              구매회원 로그인
            </div>
          </h3>
          <h3 className="seller-login-tab">
            <div
              className={toggle ? "" : "active"}
              onClick={() => {
                setToggle(false);
                setLoginCheckToggle(true);
              }}
            >
              판매회원 로그인
            </div>
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
                onKeyDown={handleOnKeyPress}
                onChange={(e) => {
                  setUserInput({
                    ...userInput,
                    username: e.target.value,
                  });
                  setLoginCheckToggle(true);
                }}
              />
              <input
                type="password"
                className="input"
                id="sell-user-pass"
                autoComplete="on"
                placeholder="비밀번호"
                onKeyDown={handleOnKeyPress}
                onChange={(e) => {
                  setUserInput({
                    ...userInput,
                    password: e.target.value,
                  });
                  setLoginCheckToggle(true);
                }}
              />
              <SAlert className={loginCheckToggle ? "" : "active"}>
                아이디 또는 비번번호가 일치하지 않습니다!
              </SAlert>
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
                onKeyDown={handleOnKeyPress}
                onChange={(e) => {
                  setUserInput({
                    ...userInput,
                    username: e.target.value,
                  });
                  setLoginCheckToggle(true);
                }}
              />
              <input
                type="password"
                className="input"
                id="buy-user_pass"
                autoComplete="off"
                placeholder="비밀번호"
                onKeyDown={handleOnKeyPress}
                onChange={(e) => {
                  setUserInput({
                    ...userInput,
                    password: e.target.value,
                  });
                  setLoginCheckToggle(true);
                }}
              />
              <SAlert className={loginCheckToggle ? "" : "active"}>
                아이디 또는 비번번호가 일치하지 않습니다!
              </SAlert>
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
    </>
  );
};

export default LoginComponets;
const SAlert = styled.div`
  color: red;
  margin-top: 15px;
  display: none;
  .active {
    display: block;
  }
`;
