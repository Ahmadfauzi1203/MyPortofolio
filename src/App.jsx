import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./assets/pages/Home";
import Header from "./assets/components/Header";
import Wellcome from "./assets/pages/Wellcome";
import Footer from "./assets/components/Footer";
import Project from "./assets/pages/Project";
import Contact from "./assets/pages/Contact";

function App() {
  const location = useLocation();

  const isWellcomePage = location.pathname === "/";

  return (
    <div
      className="container-fluid"
      style={{
        backgroundColor: "#141C31",
        color: "#ffff",
        minHeight: "100vh",
      }}
      id="app"
    >
      {!isWellcomePage && <Header />}
      <Routes>
        <Route path="/" Component={Wellcome}></Route>
        <Route path="/home" Component={Home}></Route>
        <Route path="/project" Component={Project}></Route>
        <Route path="/contact" Component={Contact}></Route>
      </Routes>
      {!isWellcomePage && <Footer />}
    </div>
  );
}

export default App;
