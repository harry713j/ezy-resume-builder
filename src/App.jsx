import "./styles/app.scss";
import React from "react";
import { Navbar, Footer} from "./components";
import LandingPage from './components/LandingPage/LandingPage';

import { Outlet } from "react-router-dom";


function App() {
  return (
    <>
      <div className="app">
        <Navbar />
        <div className="main">
          <Outlet />
          { <LandingPage />}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;