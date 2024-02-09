import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import Mobile from "./pages/Mobile";
import Cart from "./pages/Cart/Cart";
import Footer from "./pages/Footer/Footer";
import Error from "./pages/Error/Error";
import { Toaster } from "react-hot-toast";
import Practice from "./pages/Practice";
import ProductDetails from "./pages/Products/ProductDetails";
import SearchProducts from "./pages/SearchPage/SearchProducts";
import SmallCart from "./components/SmaillCart";

const App = () => {
  return (
    <BrowserRouter>
      <Toaster position="top-center" reverseOrder={false} />
      <Navbar />
      <SmallCart />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mobiles" element={<Mobile />} />
        <Route path="/mobiles/:id" element={<ProductDetails />} />
        <Route path="/search/:query" element={<SearchProducts />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/pra" element={<Practice />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
