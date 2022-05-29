import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import HomePage from "./components/homePage/homePage";
import NavBar from "./components/navBar/navBar";

const LinkRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default LinkRoutes;
