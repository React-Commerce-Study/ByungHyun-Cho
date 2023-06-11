import React from "react";
import Banner from "../components/Banner";
import HeaderNav from "../components/HeaderNav";
import WenivFooter from "../components/WenivFooter";
import ProductProcess from "../components/form/Process/ProductProcess";

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
