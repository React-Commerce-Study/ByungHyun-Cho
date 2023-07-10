import React from "react";
import Banner from "../components/Banner.tsx";
import HeaderNav from "../components/HeaderNav.tsx";
import WenivFooter from "../components/WenivFooter.tsx";
import ProductProcess from "../components/form/Process/ProductProcess.tsx";

const ProductList = () => {
  return (
    <div>
      <HeaderNav />
      <Banner />
      <ProductProcess />
      <WenivFooter />
    </div>
  );
};

export default ProductList;
