import React, { useState } from "react";
import "./Downloadpage.css";
import urbanHomeyHomeScreen from "../../assets/urbanhomey-home-screen.png";
import urbanHomeyExploreScreen from "../../assets/urbanhomey-explore-screen.png";

const Downloadpage = () => {
  const [search, setSearch] = useState("");

  const topCities = ["Bangalore", "Hyderabad", "Pune"];

  return (
    <div className="downloadpage-page">
      {/* =========================
          APP DOWNLOAD SECTION
      ========================= */}
      <section className="app-download-section">
        <div className="app-download-copy">
          <span className="app-download-eyebrow">Available on mobile</span>
          <h2 className="app-download-heading">
            Connect with us from anywhere
          </h2>
          <p className="app-download-subtext">
            Download the mobile app and enjoy the smoothest experience.
          </p>

          <div className="store-badges">
            <a
              href="https://play.google.com/store/apps"
              target="_blank"
              rel="noopener noreferrer"
              className="store-badge"
              aria-label="Get it on Google Play"
            >
              <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true">
                <path d="M3 2.5 L17 12 L3 21.5 Z" fill="#fff" />
              </svg>
              <span className="store-badge-text">
                <small>Get it on</small>
                Google Play
              </span>
            </a>

            <a
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noopener noreferrer"
              className="store-badge"
              aria-label="Download on the App Store"
            >
              <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
                <path
                  d="M16.2 1.7c.1 1-.3 2-.9 2.7-.6.7-1.6 1.3-2.5 1.2-.1-1 .4-2 1-2.7.6-.7 1.6-1.2 2.4-1.2zM19.6 17c-.5 1.1-.8 1.6-1.4 2.6-.9 1.3-2.2 3-3.8 3-1.4 0-1.8-.9-3.4-.9-1.6 0-2 .9-3.4.9-1.6 0-2.8-1.6-3.7-2.9C1.5 16.8.8 12.6 2.6 9.8c.9-1.4 2.5-2.3 4-2.3 1.4 0 2.3.9 3.4.9 1.1 0 1.8-.9 3.4-.9 1.3 0 2.7.7 3.6 1.9-3.2 1.8-2.7 6.3.6 7.6z"
                  fill="#fff"
                />
              </svg>
              <span className="store-badge-text">
                <small>Download on the</small>
                App Store
              </span>
            </a>
          </div>
        </div>

        <div className="app-download-illustration" aria-hidden="true">
          <div className="phone phone-back">
            <div className="phone-notch" />
            <div className="phone-screen">
              <img
                src={urbanHomeyExploreScreen}
                alt=""
                className="phone-screenshot"
              />
            </div>
          </div>

          <div className="phone phone-front">
            <div className="phone-notch" />
            <div className="phone-screen">
              <img
                src={urbanHomeyHomeScreen}
                alt=""
                className="phone-screenshot"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="downloadpage-hero">
        <span className="hero-badge">Trusted &amp; loved by million users</span>

        <h1 className="hero-heading">
          Find compatible flatmates &amp;
          <br />
          Rooms
        </h1>

        <p className="hero-subtext">Share your room with right roommates</p>

        <div className="search-bar">
          <span className="search-icon" aria-hidden="true">
            📍
          </span>
          <input
            type="text"
            placeholder="Search Places..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="top-cities">
          <span className="top-cities-label">Top Cities:</span>
          {topCities.map((city, index) => (
            <a key={city} href={`/city/${city.toLowerCase()}`}>
              {city}
              {index < topCities.length - 1 ? "," : ""}
            </a>
          ))}
          <a href="/cities" className="cities-arrow" aria-label="View all cities">
            &rsaquo;
          </a>
        </div>

        {/* Flatmate / room themed illustration row */}
        <div className="hero-illustration" aria-hidden="true">
          <svg viewBox="0 0 640 150" xmlns="http://www.w3.org/2000/svg">
            {/* House with key - represents finding a room */}
            <g transform="translate(20,30)">
              <path d="M0 55 L55 10 L110 55 V100 H0 Z" fill="#FDE68A" />
              <rect x="40" y="65" width="30" height="35" fill="#1B2A41" opacity="0.85" />
              <circle cx="55" cy="82" r="3" fill="#FDE68A" />
              <rect x="0" y="100" width="110" height="6" fill="#1B2A41" opacity="0.15" />
            </g>

            {/* Handshake - represents flatmate matching */}
            <g transform="translate(180,50)">
              <circle cx="25" cy="20" r="20" fill="#8B6FE8" />
              <circle cx="95" cy="20" r="20" fill="#F472B6" />
              <rect x="40" y="35" width="40" height="14" rx="7" fill="#FBBF24" />
            </g>

            {/* Sofa - represents a furnished shared room */}
            <g transform="translate(330,55)">
              <rect x="0" y="20" width="100" height="35" rx="10" fill="#43B981" />
              <rect x="0" y="0" width="100" height="22" rx="10" fill="#34A06B" />
              <rect x="-8" y="35" width="14" height="25" rx="6" fill="#2F8F5E" />
              <rect x="94" y="35" width="14" height="25" rx="6" fill="#2F8F5E" />
            </g>

            {/* Moving box - represents moving in */}
            <g transform="translate(470,55)">
              <rect x="0" y="0" width="60" height="50" rx="4" fill="#FB923C" />
              <line x1="0" y1="25" x2="60" y2="25" stroke="#C2570F" strokeWidth="4" />
              <line x1="30" y1="0" x2="30" y2="50" stroke="#C2570F" strokeWidth="4" />
            </g>

            {/* Potted plant - represents a cozy home */}
            <g transform="translate(560,40)">
              <ellipse cx="25" cy="35" rx="24" ry="22" fill="#22C55E" />
              <path d="M10 70 L18 45 H32 L40 70 Z" fill="#D97706" />
            </g>
          </svg>
        </div>
      </section>

      {/* =========================
          RENTAL AGREEMENT CTA
      ========================= */}
      <section className="agreement-section">
        <div className="agreement-copy">
          <span className="agreement-eyebrow">Lowest price guaranteed</span>
          <h2 className="agreement-heading">
            Getting your rental agreement made easy, quick and affordable
          </h2>
          <p className="agreement-subtext">
            Create a legally valid rental agreement online in minutes — no
            paperwork, no waiting rooms.
          </p>
          <a href="/rental-agreement" className="agreement-cta">
            Create Now <span aria-hidden="true">&rsaquo;</span>
          </a>
        </div>

        <div className="agreement-illustration" aria-hidden="true">
          <svg viewBox="0 0 420 360" xmlns="http://www.w3.org/2000/svg">
            {/* Document card */}
            <rect x="70" y="20" width="230" height="300" rx="18" fill="#E9F9EF" />
            <path d="M250 20 H300 V70 Z" fill="#22C55E" opacity="0.25" />
            <rect x="100" y="55" width="140" height="16" rx="8" fill="#BBF0D2" />
            <rect x="100" y="95" width="20" height="20" rx="5" fill="#D9D6FE" />
            <rect x="130" y="100" width="120" height="10" rx="5" fill="#D9D6FE" />
            <rect x="100" y="135" width="20" height="20" rx="5" fill="#D9D6FE" />
            <rect x="130" y="140" width="120" height="10" rx="5" fill="#D9D6FE" />
            <rect x="100" y="175" width="20" height="20" rx="5" fill="#D9D6FE" />
            <rect x="130" y="180" width="90" height="10" rx="5" fill="#D9D6FE" />
            {/* signature flourish */}
            <path
              d="M100 250 Q120 230 140 250 T180 250 T220 250"
              stroke="#1B2A41"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            />

            {/* Person A */}
            <g transform="translate(20,190)">
              <circle cx="40" cy="20" r="22" fill="#F24BA5" />
              <rect x="14" y="42" width="52" height="90" rx="22" fill="#F472B6" />
            </g>

            {/* Person B */}
            <g transform="translate(300,170)">
              <circle cx="40" cy="20" r="22" fill="#7B3FF2" />
              <rect x="14" y="42" width="52" height="90" rx="22" fill="#A13FEA" />
              <rect x="60" y="78" width="26" height="20" rx="4" fill="#F24BA5" />
            </g>

            {/* handshake connector */}
            <rect x="86" y="248" width="60" height="14" rx="7" fill="#FBBF24" />
          </svg>
        </div>
      </section>
    </div>
  );
};

export default Downloadpage;
