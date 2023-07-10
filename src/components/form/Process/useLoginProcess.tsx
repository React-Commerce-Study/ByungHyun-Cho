import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  setToken,
  setLoginType,
} from "../../../module/redux/reducers/AuthReducer";

const useLoginProcess = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const fetchLogin = async (
    userInput: object,
    loginType: string,
    setLoginCheckToggle: (toggle: boolean) => void
  ): Promise<void> => {
    try {
      console.log(userInput);
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
      const responseData = await response.json();
      if (!response.ok) {
        setLoginCheckToggle(false);
      } else {
        const token = responseData.token;
        dispatch(setToken(token));
        dispatch(setLoginType(responseData.user_type));
        navigate("/");
      }
    } catch (error) {
      console.error("데이터를 가져오는데 문제가 생겼습니다.", error);
    }
  };

  return fetchLogin;
};

export default useLoginProcess;
