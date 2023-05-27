import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProductList from "../../../pages/ProductList";

const useLoginProcess = ({ userInput }) => {
  const [loginCheck, setloginCheck] = useState(false);
  const navigate = useNavigate();
  console.log(userInput);

  async function fetchLogin() {
    console.log(userInput);

    try {
      const response = await fetch(
        `https://openmarket.weniv.co.kr/accounts/login/`,
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
        // setUserCheck(false);
      } else {
        // const data = await response.json();
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
