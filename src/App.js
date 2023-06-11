import React, { useContext, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddCart from "./pages//AddCart";
import Login from "./pages//Login";
import SignUp from "./pages//SignUp";
import ProductList from "./pages//ProductList";
import OrderPay from "./pages/OrderPay";
import ProductInfo from "./pages/ProductInfo";
import { useSelector } from "react-redux";
import "./App.css";

function App() {
  const token = useSelector((state) => state.Auth.token);
  console.log(token);
  return (
    <div>
      <Routes>
        <Route path={"/"} element={<ProductList />} />
        <Route path={"/Login"} element={<Login />} />
        <Route path={"/SignUp"} element={<SignUp />} />
        <Route path={"/product/:productId"} element={<ProductList />} />
        <Route path={"/AddCart"} element={<AddCart />} />
        <Route path={"/OrderPay"} element={<OrderPay />} />
        <Route path={"/ProductInfo"} element={<ProductInfo />} />
      </Routes>
    </div>
  );
}
export default App;
