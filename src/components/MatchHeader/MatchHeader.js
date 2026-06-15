import React from "react";
import "./MatchHeader.css";

import { ChevronRight } from "lucide-react";

const MatchHeader = () => {
  return (
    <section className="match-header-section">

      {/* Left Side */}

      <div className="match-text">
        <h2>Meet Your Potential Matches</h2>

        <p>
          Real people, real connections in your city.
        </p>
      </div>

      {/* Right Side */}

      <button className="matches-btn">
        View all matches
        <ChevronRight size={22} />
      </button>

    </section>
  );
};

export default MatchHeader;