import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddCart from "./pages//AddCart";
import Login from "./pages//Login";
import SignUp from "./pages//SignUp";
import ProductList from "./pages//ProductList";
import OrderPay from "./pages/OrderPay";
import ProductInfo from "./pages/ProductInfo";
import HeaderNav from "./components/HeaderNav";
import WenivFooter from "./components/WenivFooter";
import "./App.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path={"/Login"} element={<Login />} />
        <Route path={"/SignUp"} element={<SignUp />} />
        <Route path={"/"} element={<ProductList />} />
        <Route path={"/product/:productId"} element={<ProductList />} />
        <Route path={"/AddCart"} element={<AddCart />} />
        <Route path={"/OrderPay"} element={<OrderPay />} />
        <Route path={"/ProductInfo"} element={<ProductInfo />} />
      </Routes>
    </div>
  );
}
export default App;
