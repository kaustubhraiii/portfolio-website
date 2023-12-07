import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Navbar.css";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <button className="mobile-toggle" onClick={toggleMobileMenu}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      <ul className={`navbar-list ${isMobileMenuOpen ? "active" : ""}`}>
        <li className="navbar-item">
          <Link to="/" className="navbar-link">
            Home
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/experience" className="navbar-link">
            Experience
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/projects" className="navbar-link">
            Projects
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
