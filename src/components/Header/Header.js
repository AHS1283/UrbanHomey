import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="header">

      {/* Logo */}
      <div className="logo">
        <img src="/mainlogo.jpeg" alt="UrbanHomey" className="logo-img" />
      </div>

      {/* Hamburger */}
      <div
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      {/* Navigation */}
      <nav className={menuOpen ? "nav-links active" : "nav-links"}>

        <a href="/" className="active" onClick={() => setMenuOpen(false)}>
          Home
        </a>

        <a href="/" onClick={() => setMenuOpen(false)}>
          How It Works
        </a>

        <a href="/" onClick={() => setMenuOpen(false)}>
          Features
        </a>

        <a href="/" onClick={() => setMenuOpen(false)}>
          Matches
        </a>

        {/* Mobile Buttons */}
        <div className="mobile-menu-buttons">
          <button
            className="mobile-start-btn"
            onClick={() => {
              navigate("/login");
              setMenuOpen(false);
            }}
          >
            Get Started
          </button>
        </div>

      </nav>

      {/* Desktop Buttons */}
      <div className="header-buttons">
        <button
          className="start-btn"
          onClick={() => navigate("/login")}
        >
          Get Started
        </button>
      </div>

    </header>
  );
};

export default Header;
