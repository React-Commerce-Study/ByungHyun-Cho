import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartItem from "../../CartItem";
const ProductCartProcess = () => {
  const basicURL = "https://openmarket.weniv.co.kr/";
  const CartURL = "cart/";
  const fetchURL = basicURL + CartURL;
  const [cartData, setCartData] = useState({});
  const token = useSelector((state) => state.Auth.token);
  const [fetchLoading, setFetchLoading] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    try {
      const response = await fetch(fetchURL, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "JWT " + token,
        },
      });
      if (!response.ok) {
        throw new Error("네트워크에 문제가 있습니다.");
      } else {
        const data = await response.json();
        setCartData(data);
        setFetchLoading(true);
      }
    } catch (error) {
      console.error("데이터를 가져오는데 문제가 생겼습니다.", error);
    }
  }

  return (
    <>
      {fetchLoading ? (
        <CartItem cartData={cartData} />
      ) : (
        <div>
          <div>장바구니에 담긴 상품이 없습니다.</div>
          <div>원하는 상품을 장바구니에 담아보세요!</div>
        </div>
      )}
    </>
  );
};

export default ProductCartProcess;
