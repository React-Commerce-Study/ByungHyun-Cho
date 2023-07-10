import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { setLoginType } from "../module/redux/reducers/AuthReducer";
import { setToken } from "../module/redux/reducers/AuthReducer";
import { useNavigate } from "react-router-dom";

const DropDown = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logout = async () => {
    await dispatch(setToken(""));
    await dispatch(setLoginType(""));
    alert("로그아웃 되었습니다😎");
    navigate("/");
  };
  return (
    <SDropBox>
      <nav id="primary_nav_wrap">
        <ul>
          <li>
            <div>마이페이지</div>
            <ul>
              <li>
                <div>마이페이지</div>
              </li>
              <li>
                <div onClick={logout}>로그아웃</div>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </SDropBox>
  );
};

export default DropDown;
const SDropBox = styled.div`
  #primary_nav_wrap {
  }

  #primary_nav_wrap ul {
    list-style: none;
    position: relative;
    margin: 0;
    padding: 0;
  }

  #primary_nav_wrap ul div {
    display: block;
    color: #333;
    text-decoration: none;
    font-size: 12px;
  }

  #primary_nav_wrap ul li:hover {
    background: #f6f6f6;
  }

  #primary_nav_wrap ul ul {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    background: #fff;
    padding: 0;
  }

  #primary_nav_wrap ul ul div {
    padding: 10px 15px;
    width: 130px;
  }

  #primary_nav_wrap ul li:hover > ul {
    display: block;
    z-index: 2;
  }
`;
