import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import About from "./components/About";
import Home from "./components/Home";
import Main from './components/Main';
import BookingPage from "./components/BookingPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="menu" element={< Main/>} />
        <Route path="reservations" element={< BookingPage/>} />
      </Route>
      <Route path="*" element={<h1>Error 404 Not Found</h1>} />
    </Routes>
  );
}

export default App;
