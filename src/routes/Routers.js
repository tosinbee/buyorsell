import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import {
  Cart,
  Checkout,
  Home,
  BuyerDashboard,
  SellerDashboard,
  Contact,
  Login,
  ProductDetails,
  Shop,
} from "../pages";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="login" />} />
      <Route path="home" element={<Home />} />
      <Route path="buyerdashboard" element={<BuyerDashboard />} />
      <Route path="sellerdashboard" element={<SellerDashboard />} />
      <Route path="cart" element={<Cart />} />
      <Route path="contact" element={<Contact />} />
      <Route path="checkout" element={<Checkout />} />
      <Route path="login" element={<Login />} />
      <Route path="shop/:id" element={<ProductDetails />} />
      <Route path="shop" element={<Shop />} />
    </Routes>
  );
};

export default Routers;
