import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProductList from "../../../pages/ProductList";

const LoginProcess = () => {
  const [loginCheck, setloginCheck] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    fetchLogin();
  }, []);
  const [userInput, setUserInput] = useState({
    username: "pig0oo0",
    password: "asd12345",
    password2: "asd12345",
    phone_number: "01012341234",
    name: "pig",
  });

  async function fetchLogin() {
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
        alert("아이디 비밀번호를 확인해주세요!");
      } else {
        // navigate("/", { state: { loginCheck } });
        console.log("성공!");
      }
    } catch (error) {
      console.error("데이터를 가져오는데 문제가 생겼습니다.", error);
    }
  }
};

export default LoginProcess;
