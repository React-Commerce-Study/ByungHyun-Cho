import React, { useState, useEffect } from "react";
import Banner from "../components/Banner";
import HeaderNav from "../components/HeaderNav";
import WenivFooter from "../components/WenivFooter";
import ProductProcess from "../components/form/Process/ProductProcess";
import { useLocation } from "react-router-dom";
const ProductList = ({ user }) => {
  const location = useLocation();
  const [loginCheck, setLoginCheck] = useState(location.state);
  console.log(loginCheck);
  return (
    <div>
      <HeaderNav user={loginCheck} />
      <Banner />
      <ProductProcess />
      <WenivFooter />
    </div>
  );
};

export default ProductList;
