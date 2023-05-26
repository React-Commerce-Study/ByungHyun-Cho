import React, { useState } from "react";
import styled from "styled-components";

const FormWrap = styled.form`
  display: flex;
  flex-direction: column;
  label {
  }
  input {
  }
  div {
    display: flex;
    input {
      flex-grow: 1;
    }
  }
`;
const SignUpComponents = () => {
  const [toggle, setToggle] = useState(true);

  const [userInput, setUserInput] = useState({
    username: "zzz1234zzz",
    password: "zaq1234567",
    password2: "zaq1234567",
    phone_number: "01026587994",
    name: "조병현",
  });

  async function fetchLogin() {
    console.log(userInput);
    try {
      const response = await fetch(
        `https://openmarket.weniv.co.kr/accounts/signup/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json; charset=utf-8",
          },
          body: JSON.stringify(userInput),
        }
      );
      console.log(response);
      if (!response.ok) {
        console.log("틀림");
        // alert("아이디 비밀번호를 확인해주세요!");
      } else {
        // navigate("/", { state: { loginCheck } });
        console.log("성공!");
      }
    } catch (error) {
      console.error("데이터를 가져오는데 문제가 생겼습니다.", error);
    }
  }

  return (
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
            구매회원가입
          </a>
        </h3>
        <h3 className="seller-login-tab">
          <a
            href="#seller-login-tab-content"
            className={toggle ? "" : "active"}
            onClick={() => {
              setToggle(false);
            }}
          >
            {" "}
            판매회원가입
          </a>
        </h3>
      </div>
      <div className="tabs-content">
        <div id="seller-login-tab-content" className={toggle ? "" : "active"}>
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
            <input type="submit" className="button" value="회원가입" />
          </form>
        </div>

        <div id="buyer-login-tab-content" className={toggle ? "active" : ""}>
          <FormWrap className="buyer-signup-form">
            <label htmlFor="buyer-signup-id">아이디</label>
            <div>
              <input type="text" id="buyer-signup-id" />
              <button>중복확인</button>
            </div>
            <label htmlFor="buyer-signup-pw">비밀번호</label>
            <input type="password" id="buyer-signup-pw" />
            <label htmlFor="buyer-signup-pw-check">비밀번호 재확인</label>
            <input type="password" id="buyer-signup-pw-check" />
            <label htmlFor="buyer-signup-name">이름</label>
            <input type="text" id="buyer-signup-name" />
            <label htmlFor="buyer-signup-name">휴대폰번호</label>
            <input type="number" id="buyer-signup-phone" />
            <button onClick={() => fetchLogin()} className="button">
              구매 회원가입
            </button>
          </FormWrap>
        </div>
      </div>
    </div>
  );
};

export default SignUpComponents;
