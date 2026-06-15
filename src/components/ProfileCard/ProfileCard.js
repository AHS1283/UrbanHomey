import React from "react";
import "./ProfileCard.css";

import {
  FaHeart,
  FaTimes,
  FaCommentAlt,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaHome,
} from "react-icons/fa";

import PersonImg from "./profile.jpg";

function ProfileCard() {
  return (
    <div className="profilecard-container">

      <div className="profile-card">

        {/* IMAGE */}
        <img
          src={PersonImg}
          alt="Sarah"
          className="profile-image"
        />

        {/* BADGES */}
        <div className="profile-badges">

          <span className="match-pill">
            ❤ 98% Match
          </span>

          <span className="flat-pill">
            <FaHome />
            Has Flat
          </span>

          <span className="verify-pill">
            <FaCheckCircle />
            Verified
          </span>

        </div>

        {/* OVERLAY */}
        <div className="profile-overlay">

          <div className="profile-content">

            <h1>
              Sarah, 26
              <span>UX Designer</span>
            </h1>

            <p className="profile-location">
              <FaMapMarkerAlt />
              Brooklyn, New York
            </p>

            <p className="profile-description">
              Looking for a clean shared space with
              like-minded creatives in a quiet
              neighborhood. I'm respectful,
              organized, and enjoy a peaceful
              living environment.
            </p>

            <div className="profile-tags">
              <span>NON-SMOKER</span>
              <span>PET FRIENDLY</span>
              <span>EARLY BIRD</span>
              <span>VEGETARIAN</span>
            </div>

          </div>

        </div>

        {/* ACTIONS */}
        <div className="profile-actions">

          <button className="reject-action">
            <FaTimes />
          </button>

          <button className="heart-action">
            <FaHeart />
          </button>

          <button className="chat-action">
            <FaCommentAlt />
          </button>

        </div>

      </div>

    </div>
  );
}

export default ProfileCard;