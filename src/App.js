import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="app">
      <div className="noise" />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Navbar />
      <Footer />
    </div>
  );
};

export default App;
