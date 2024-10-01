import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Button } from "../index.js";
import "./navbar.scss";
import { useSelector } from "react-redux";

const Navbar = () => {
  const auth = useSelector((state) => state.auth);
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-brand">
          <Link to="/" className="navbar-logo">
            ezyResume
          </Link>
        </div>
        <div className="navbar-menu">
          <NavLink
            to="/templates"
            className={({ isActive }) =>
              `${isActive ? "active" : "not-active"} navbar-item`
            }
          >
            Templates
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${isActive ? "active" : "not-active"} navbar-item`
            }
          >
            About Us
          </NavLink>
          <Button component={Link} to="/login" className="login-button">
            {auth.authStatus ? "Log out" : "Log in"}
          </Button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
