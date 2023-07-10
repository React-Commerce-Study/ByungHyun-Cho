import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CartItemProcess from "./CartItemProcess";

interface CartItemProps {
  cartData: {
    count: number;
    results: {
      product_id: number;
      quantity: number;
    }[];
  };
}

const CartItem: React.FC<CartItemProps> = ({ cartData }) => {
  const basicURL = "https://openmarket.weniv.co.kr/";
  const CartURL = `products/`;
  const fetchURL = basicURL + CartURL;
  const [productData, setProductCartData] = useState<any[]>([]);
  const [fetchCheck, setFetchCheck] = useState(false);
  const cartItemIDArr: number[] = [];
  const cartItemQuantityArr: number[] = [];
  const cartCount = cartData.count;

  useEffect(() => {
    setProductCartData([]);
    const cartList = cartData.results;
    cartList.forEach((element) => {
      cartItemIDArr.push(element.product_id);
      cartItemQuantityArr.push(element.quantity);
    });
    console.log(cartItemQuantityArr);
    for (let i = 0; i < cartCount; i++) {
      fetchProducts(cartItemIDArr[i], cartItemQuantityArr[i]);
    }
    setFetchCheck(true);
  }, []);

  async function fetchProducts(product_id: number, quantity: number) {
    try {
      const response = await fetch(fetchURL + product_id, {
        method: "GET",
      });
      if (!response.ok) {
        throw new Error("네트워크에 문제가 있습니다.");
      } else {
        const data = await response.json();
        setProductCartData((prevData) => [...prevData, { ...data, quantity }]);
      }
    } catch (error) {
      console.error("데이터를 가져오는데 문제가 생겼습니다.", error);
    }
  }
  console.log(productData);

  return (
    <>
      <SCardLayout>
        {fetchCheck ? (
          productData.map((item) => {
            return (
              <SCartList key={item.product_id}>
                <CartItemProcess
                  img={item.image}
                  title={item.product_name}
                  store={item.store_name}
                  price={item.price}
                  shipping_fee={item.shipping_fee}
                  stock={item.stock}
                  quantity={item.quantity}
                />
              </SCartList>
            );
          })
        ) : (
          <div></div>
        )}
      </SCardLayout>
    </>
  );
};

export default CartItem;

const SCartList = styled.li`
  list-style: none;
  width: 100%;
`;

const SCardLayout = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
