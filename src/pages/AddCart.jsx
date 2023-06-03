import React from "react";
import { useLocation } from "react-router-dom";
import HeaderNav from "../components/HeaderNav";

const AddCart = () => {
  const location = useLocation();
  console.log(location.state);
  return (
    <div>
      <HeaderNav />
      <div>
        <div>장바구니</div>
        <img src={location.state.img} alt="" />
        <div>{location.state.store}</div>
        <div>{location.state.title}</div>
        <div>{location.state.price}</div>
      </div>
    </div>
  );
};

export default AddCart;
