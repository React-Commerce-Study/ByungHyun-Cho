import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProductList from "../../../pages/ProductList";

const useLoginProcess = () => {
  const [loginCheck, setloginCheck] = useState(false);
  const navigate = useNavigate();

  async function fetchLogin(userInput, loginType) {
    try {
      const response = await fetch(
        `https://openmarket.weniv.co.kr/accounts/login/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json; charset=utf-8",
          },
          body: JSON.stringify({ ...userInput, login_type: loginType }),
        }
      );
      console.log(response);
      if (!response.ok) {
        alert("아이디 비밀번호를 확인해주세요!");
      } else {
        setloginCheck(true);
        navigate("/", { state: { loginCheck } });
      }
    } catch (error) {
      console.error("데이터를 가져오는데 문제가 생겼습니다.", error);
    }
  }

  return fetchLogin;
};

export default useLoginProcess;
