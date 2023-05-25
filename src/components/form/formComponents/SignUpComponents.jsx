import React from "react";
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
  return (
    <div className="form-wrap">
      <div className="tabs">
        <h3 className="buyer-login-tab">
          <a className="active" href="#buyer-login-tab-content">
            구매회원가입
          </a>
        </h3>
        <h3 className="seller-login-tab">
          <a href="#seller-login-tab-content"> 판매회원가입</a>
        </h3>
      </div>
      <div className="tabs-content">
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
            <input type="submit" className="button" value="회원가입" />
          </form>
        </div>

        <div id="buyer-login-tab-content" className="active">
          <FormWrap className="buyer-signup-form" action="" method="post">
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
            <input type="submit" className="button" value="구매 회원가입" />
          </FormWrap>
        </div>
      </div>
    </div>
  );
};

export default SignUpComponents;
