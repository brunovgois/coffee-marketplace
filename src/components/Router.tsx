import React from "react";
import { Route, Routes } from "react-router-dom";
import { ShoppingCart } from "../pages/ShoppingCart";
import { Home } from "../pages/Home";
import { DefaultLayout } from "../layouts/DefaultLayout";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<ShoppingCart />} />
      </Route>
    </Routes>
  );
}
