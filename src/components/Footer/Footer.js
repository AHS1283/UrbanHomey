import React from "react";
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

            <div className="social-icon">
              <FaGlobe />
            </div>

            <div className="social-icon">
              <FaUsers />
            </div>

            <div className="social-icon">
              <FaSearch />
            </div>

          </div>

        </div>

        <div className="footer-links-wrapper">

          <div className="footer-links">

            <h2>Company</h2>

            <a href="/">About</a>
            <a href="/">Careers</a>
            <a href="/">Press</a>

          </div>

          <div className="footer-links">

            <h2>Resources</h2>

            <a href="/">Support</a>
            <a href="/">Safety</a>
            <a href="/">Rules</a>

          </div>

        </div>

      </div>

      <div className="footer-line"></div>

      <div className="footer-bottom">

        <div className="footer-bottom-links">

          <a href="/">Privacy</a>

          <a href="/">Terms</a>

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