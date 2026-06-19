import React from "react";
import { useNavigate } from "react-router-dom";
import "./HomeBanner.css";

function HomeBanner() {
  const navigate = useNavigate();

  return (
    <section className="home-banner">

      {/* LEFT CONTENT */}
      <div className="banner-content">
        <h1>
          Find Your Perfect Flatmate,
          <br />
          <span>Not Just a Room.</span>
        </h1>

        <p>
          UrbanHomey helps students and professionals across India
          discover compatible flatmates based on lifestyle,
          budget, location, and daily habits. Find a home
          where you truly belong.
        </p>

        <div className="banner-buttons">
          <button
            className="start-btn"
            onClick={() => navigate("/login")}
          >
            Get Started
          </button>

          <button className="explore-btn">
            Explore Matches
          </button>
        </div>

        <div className="banner-users">
          <div className="users">
            <img
              src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=200&h=200&fit=crop&crop=face"
              alt="Aarohi"
            />
            <img
              src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?w=200&h=200&fit=crop&crop=face"
              alt="Arjun"
            />
            <img
              src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=200&h=200&fit=crop&crop=face"
              alt="Priya"
            />
          </div>

          <p>
            Join <span>10,000+</span> verified users across Pune
            finding their ideal flatmates.
          </p>
        </div>
      </div>

      {/* RIGHT HERO VISUAL */}
      <div className="hero-visual">

        <div className="hero-glow"></div>

        <div className="connection-line line-1"></div>
        <div className="connection-line line-2"></div>

        {/* TOP OVERLAPPING CARDS */}
        <div className="profile-card top-card-1">
          <img
            src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=200&h=200&fit=crop&crop=face"
            alt="Priya"
          />
          <h4>Priya</h4>
          <span>Pet Friendly</span>
        </div>

        <div className="profile-card top-card-2">
          <img
            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&crop=face"
            alt="Kabir"
          />
          <h4>Kabir</h4>
          <span>Fitness Lover</span>
        </div>

        {/* MATCH CIRCLE */}
        <div className="match-circle">
          <span>100%</span>
          <small>Match</small>
        </div>

        {/* BOTTOM OVERLAPPING CARDS */}
        <div className="profile-card bottom-card-1">
          <img
            src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=200&h=200&fit=crop&crop=face"
            alt="Aarohi"
          />
          <h4>Aarohi</h4>
          <span>UI Designer</span>
        </div>

        <div className="profile-card bottom-card-2">
          <img
            src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?w=200&h=200&fit=crop&crop=face"
            alt="Arjun"
          />
          <h4>Arjun</h4>
          <span>Software Engineer</span>
        </div>

      </div>
    </section>
  );
}

export default HomeBanner;