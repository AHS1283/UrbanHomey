import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

import {
  FaGlobe,
  FaUsers,
  FaSearch,
} from "react-icons/fa";

function ModernFooter() {
  return (
    <footer className="modern-footer">

      <div className="footer-top">

        <div className="footer-brand">
          <div className="logo">
            <img src="/mainlogo.jpeg" alt="UrbanHomey" className="logo-img" />
          </div>
          <p>
            Connecting urban spirits to create
            harmonious living spaces across
            the globe.
          </p>

          <div className="footer-socials">
            <div className="social-icon"><FaGlobe /></div>
            <div className="social-icon"><FaUsers /></div>
            <div className="social-icon"><FaSearch /></div>
          </div>
        </div>

        <div className="footer-links-wrapper">

          <div className="footer-links">
            <h2>Company</h2>
            <Link to="/about" target="_blank" rel="noopener noreferrer">About</Link>
            <Link to="/contact" target="_blank" rel="noopener noreferrer">Contact Us</Link> {/* ✅ Added */}
            <Link to="/press" target="_blank" rel="noopener noreferrer">Press</Link>
          </div>

          <div className="footer-links">
            <h2>Resources</h2>
            <Link to="/support" target="_blank" rel="noopener noreferrer">Support</Link>
            <Link to="/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</Link>
            <Link to="/terms" target="_blank" rel="noopener noreferrer">Terms & Conditions</Link>
          </div>

        </div>

      </div>

      <div className="footer-line"></div>

      <div className="footer-bottom">
        <div className="footer-bottom-links">
          <Link to="/privacy" target="_blank" rel="noopener noreferrer">Privacy</Link>
          <Link to="/terms" target="_blank" rel="noopener noreferrer">Terms</Link>
        </div>
        <p>
          © 2026 UrbanHomey Inc.
          <br />
          Modern Urban Living.
        </p>
      </div>

    </footer>
  );
}

export default ModernFooter;