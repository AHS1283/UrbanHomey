import React from "react";
import "./OptionCards.css";
import { useNavigate } from "react-router-dom";

function OptionCards() {
  const navigate = useNavigate();

  return (
    <div className="option-section">

      {/* CARD 1 */}
      <div
        className="option-card"
        onClick={() => navigate("/list-room")}
      >
        <div className="option-icon">🏠</div>

        <div className="option-content">
          <div className="option-top">
            <h3>I have a space</h3>
            <span className="option-badge">POPULAR</span>
          </div>

          <p>
            List your room and find compatible roommates who fit your lifestyle.
          </p>
        </div>
      </div>

      {/* CARD 2 */}
      <div
        className="option-card"
        onClick={() => navigate("/find-room")}
      >
        <div className="option-icon">🔍</div>

        <div className="option-content">
          <div className="option-top">
            <h3>I need a room</h3>
            <span className="option-badge">MOST USED</span>
          </div>

          <p>
            Browse curated listings and match with homeowners based on shared values.
          </p>
        </div>
      </div>

    </div>
  );
}

export default OptionCards;