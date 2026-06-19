import React from "react";
import "./WorksSection.css";
import { FaUserPlus, FaShieldAlt, FaKey } from "react-icons/fa";
import { Sparkles } from "lucide-react";

function WorksSection() {
  const steps = [
    {
      icon: <FaUserPlus />,
      title: "Create Profile",
      text: "Tell us about your lifestyle, habits, and what you're looking for.",
    },
    {
      icon: <Sparkles size={28} />,
      title: "Smart Match",
      text: "Our algorithm surfaces the best matches based on compatibility.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Secure Chat",
      text: "Connect safely through our platform before sharing personal details.",
    },
    {
      icon: <FaKey />,
      title: "Move In",
      text: "Finalize the details and start your new urban living adventure.",
    },
  ];

  return (
    <div id="how-it-works" className="works-section">
      <h1>How UrbanHomey Works</h1>

      <div className="timeline">
        {steps.map((item, index) => (
          <div className="timeline-item" key={index}>

            <div className="timeline-left">
              <div className="icon-box">{item.icon}</div>
              {index !== steps.length - 1 && <div className="line"></div>}
            </div>

            <div className="timeline-content">
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default WorksSection;