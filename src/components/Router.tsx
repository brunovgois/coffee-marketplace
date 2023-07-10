import React from "react";
import { Route, Routes } from "react-router-dom";
import { ShoppingCart } from "../pages/ShoppingCart";
import { Home } from "../pages/Home";
import { DefaultLayout } from "../layouts/DefaultLayout";
import { OrderCompleted } from "../pages/OrderCompleted";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/finished" element={<OrderCompleted />} />
      </Route>
    </Routes>
  );
}
