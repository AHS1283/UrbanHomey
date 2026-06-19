import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom"; // ✅ useLocation add kiya
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); // ✅ add kiya

  const scrollToSection = (sectionId) => {
    if (location.pathname !== "/") {
      // ✅ Dusre page se aaye ho toh sessionStorage mein save karo
      console.log("Saving to sessionStorage →", sectionId); // debug
      sessionStorage.setItem("scrollTo", sectionId);
      navigate("/");
    } else {
      // ✅ Already home page par ho toh seedha scroll karo
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="logo">
        <img src="/mainlogo.jpeg" alt="UrbanHomey" className="logo-img" />
      </div>

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        &#9776;
      </div>

      <nav className={menuOpen ? "nav-links active" : "nav-links"}>
        <a href="/" onClick={() => setMenuOpen(false)}>Home</a>

        <a href="#how-it-works" onClick={(e) => { e.preventDefault(); scrollToSection("how-it-works"); }}>
          How It Works
        </a>

        <a href="#matches" onClick={(e) => { e.preventDefault(); scrollToSection("matches"); }}>
          Matches
        </a>

        <a href="#reviews" onClick={(e) => { e.preventDefault(); scrollToSection("reviews"); }}>
          Reviews
        </a>

        <a href="#blogs" onClick={(e) => { e.preventDefault(); scrollToSection("blogs"); }}>
          Blogs
        </a>

        <div className="mobile-menu-buttons">
          <button className="mobile-start-btn" onClick={() => { navigate("/login"); setMenuOpen(false); }}>
            Get Started
          </button>
        </div>
      </nav>

      <div className="header-buttons">
        <button className="start-btn" onClick={() => navigate("/login")}>
          Get Started
        </button>
      </div>
    </header>
  );
};

export default Header;