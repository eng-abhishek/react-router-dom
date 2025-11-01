import React from "react";
// import {Link} from 'react-router-dom';
import { NavLink } from "react-router-dom";

// Link not provide any active class
// NavLink Provide one active class

function Navbar() {
  const NavLinkCSS = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      fontSize: isActive ? "15px" : "14px",
    };
  };

  return (
    <>
      <nav>
        {/* <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link> */}

        {/* NavLink Provide active class */}

        <NavLink to="/" style={NavLinkCSS}>
          Home
        </NavLink>
        <NavLink to="/about" style={NavLinkCSS}>
          About
        </NavLink>
        <NavLink to="/contact" style={NavLinkCSS}>
          Contact
        </NavLink>
        <NavLink to="/products" style={NavLinkCSS}>
          Products
        </NavLink>
        <NavLink to="/lazy-loading" style={NavLinkCSS}>
          Lazy Loading
        </NavLink>
        <NavLink to="/form-validation" style={NavLinkCSS}>Form Validation</NavLink>
      </nav>
    </>
  );
}

export default Navbar;
