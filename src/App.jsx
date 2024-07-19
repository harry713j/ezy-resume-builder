import "./styles/app.scss";
import React from "react";
import { Navbar, Footer } from "./components";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
