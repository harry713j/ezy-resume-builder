import React from 'react';
import { Link,NavLink } from 'react-router-dom';
import { Button } from  '../index.js';
import './navbar.scss'

const Navbar = () => {
  return (
    <div>
        <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="navbar-logo">ezyResume</Link>
      </div>
      <div className="navbar-menu">
        <NavLink to="/templates" className={({ isActive }) =>`${
                isActive ? "active" : "not-active"
            } navbar-item` }>Templates</NavLink>
          
            <NavLink to="/my-resumes" className={({ isActive }) =>`${
                isActive ? "active" : "not-active"
            } navbar-item` }>My Resumes</NavLink>
          
            <NavLink to="/abouts" className={({ isActive }) =>`${
                isActive ? "active" : "not-active"
        } navbar-item`}>About Us</NavLink>

       
          <Button component={Link} to="/login" className="login-button">LoG IN</Button>
      </div>
    </nav>
    </div>
  )
}

export default Navbar
