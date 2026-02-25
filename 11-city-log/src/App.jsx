import React from "react";
void React;
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Homepage";
import Login from "./pages/Login";
import Products from "./pages/Product";
import Pricing from "./pages/Pricing";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route /* path="/"  */ index element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/products" element={<Products />} />
          <Route path="/price" element={<Pricing />} />
          <Route path="/app" element={<AppLayout />}>
            <Route index element={<h1>Default</h1>} />
            <Route path="/app/cities" element={<h1>My City</h1>} />
            <Route path="/app/countries" element={<h1>My Country</h1>} />
            <Route path="/app/form" element={<h1>My Form</h1>} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
