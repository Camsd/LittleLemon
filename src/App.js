import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import About from "./components/About";
import Home from "./components/Home";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import Reservation from "./components/BookingPage";
import Login from './components/Login';
import Order from './components/Order';
import Confirmation from './components/Confirmations';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="menu" element={<Main />} />
        <Route path="footer" element={<Footer />} />
        <Route path="testimonials" element={<Testimonials />} />
        <Route path="reservations" element={<Reservation />} />
        <Route path="order" element={<Order />} />
        <Route path="login" element={<Login />} />
        <Route path="confirmation" element={<Confirmation />} />
      </Route>
      <Route path="*" element={<h1>Error 404 Not Found</h1>} />
    </Routes>
  );
}

export default App;
