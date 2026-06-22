import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId) => {
    if (location.pathname !== "/") {
      sessionStorage.setItem("scrollTo", sectionId);
      navigate("/");
    } else {
      const section = document.getElementById(sectionId);

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
        });
      }
    }

    setMenuOpen(false);
  };

  const goToDownloadPage = () => {
    navigate("/download-app");
    setMenuOpen(false);
  };

  return (
    <header className="header">
      {/* Logo */}
      <div
        className="logo"
        onClick={() => {
          navigate("/");
          setMenuOpen(false);
        }}
      >
        <img
          src="/mainlogo.png"
          alt="UrbanHomey"
          className="logo-img"
        />
      </div>

      {/* Mobile Menu Icon */}
      <div
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        &#9776;
      </div>

      {/* Navigation */}
      <nav className={menuOpen ? "nav-links active" : "nav-links"}>
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            navigate("/");
            setMenuOpen(false);
          }}
        >
          Home
        </a>

        <a
          href="#how-it-works"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("how-it-works");
          }}
        >
          How It Works
        </a>

        <a
          href="#matches"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("matches");
          }}
        >
          Matches
        </a>

        <a
          href="#reviews"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("reviews");
          }}
        >
          Reviews
        </a>

        <a
          href="#blogs"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("blogs");
          }}
        >
          Blogs
        </a>

        {/* Mobile Download Button */}
        <div className="mobile-menu-buttons">
          <button
            className="mobile-start-btn"
            onClick={goToDownloadPage}
          >
            Download App
          </button>
        </div>
      </nav>

      {/* Desktop Download Button */}
      <div className="header-buttons">
        <button
          className="start-btn"
          onClick={goToDownloadPage}
        >
          Download App
        </button>
      </div>
    </header>
  );
};

export default Header;