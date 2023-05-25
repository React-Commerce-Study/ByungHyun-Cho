import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProductList from "../../../pages/ProductList";

const LoginProcess = ({ userInput }) => {
  const [loginCheck, setloginCheck] = useState(false);
  // const [user, setUser] = useState({
  //   username: "buyer1",
  //   password: "hodu0910",
  //   login_type: "BUYER",
  // });
  console.log(userInput);
  const navigate = useNavigate();
  useEffect(() => {
    fetchLogin();
  }, []);
  async function fetchLogin() {
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
        throw new Error("네트워크에 문제가 있습니다.");
      } else {
        const data = await response.json();
        setloginCheck(true);
        navigate("/", { state: { loginCheck } });
      }
    } catch (error) {
      console.error("데이터를 가져오는데 문제가 생겼습니다.", error);
    }
  }
};

export default LoginProcess;
