import React from "react";
import './App.css';
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Screens/Home";
import Login from "./Screens/Login";
import Register from "./Screens/Register";
import NotFound from "./Screens/NotFound";
import Order from "./Screens/Order";
import Payment from "./Screens/Payment";
import Cart from "./Screens/Cart";
import PlaceOrder from "./Screens/PlaceOrder";
import Profile from "./Screens/Profile";
import Shipping from "./Screens/Shipping";
import SingleProduct from "./Screens/SingleProduct";

const App = () => {
  return (
    <div className="App">
    <>
    <Router>
      <Routes>
       <Route exact path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="/order/:id" element={<Order />} />
        <Route path="payment" element={<Payment />}/>
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/cart/:id" element={<Cart />} />
        <Route path="placeorder" element={<PlaceOrder />} />
        <Route path="profile" element={<Profile />} />
        <Route path="shipping" element={<Shipping />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
    </>
      </div>
    
  );
};

export default App;


