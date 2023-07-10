import React, { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Router,
  useLocation,
} from "react-router-dom";
import AddCart from "./pages//AddCart";
import Login from "./pages//Login.tsx";
import SignUp from "./pages//SignUp";
import ProductList from "./pages//ProductList";
import OrderPay from "./pages/OrderPay";
import ProductInfo from "./pages/ProductInfo";
import { useSelector } from "react-redux";
import "./App.css";

function App() {
  const location = useLocation();

  useEffect(() => {
    if (window.location.pathname === "/") {
      window.location.href = "/product/1";
    }
  }, [location.pathname]);
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<Navigate to="/product" replace />} /> */}
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
