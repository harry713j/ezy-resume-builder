import "./styles/app.scss";
import React from "react";
import { Navbar, Footer, SideTab } from "./components";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <main className="main">
        <SideTab />
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
