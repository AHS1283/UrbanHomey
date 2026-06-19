import React from "react";
import "../Privacy/Privacy.css";

const sections = [
  {
    title: "Information We Collect",
    content: [
      {
        subtitle: "Information you provide",
        text: "When you create an UrbanHomey account, we collect your name, email address, mobile number, date of birth, and government-issued ID for verification. When you build your profile, we collect lifestyle preferences, habits, budget, preferred locations, and any other information you choose to share.",
      },
      {
        subtitle: "Information collected automatically",
        text: "We automatically collect device information, IP address, browser type, pages visited, and time spent on the platform. We use cookies and similar technologies to remember your preferences and improve your experience.",
      },
      {
        subtitle: "Information from third parties",
        text: "If you sign in with Google or another third-party service, we receive basic profile information such as your name and email address from that service.",
      },
    ],
  },
  {
    title: "How We Use Your Information",
    content: [
      {
        subtitle: "To provide our service",
        text: "We use your profile and lifestyle data to power our compatibility matching algorithm and surface the most relevant flatmate matches for you.",
      },
      {
        subtitle: "To keep you safe",
        text: "We use your ID and contact information to verify your identity, detect fraud, and enforce our community guidelines.",
      },
      {
        subtitle: "To improve UrbanHomey",
        text: "We analyse usage patterns and feedback to improve our matching algorithm, fix bugs, and build new features.",
      },
      {
        subtitle: "To communicate with you",
        text: "We send you match notifications, platform updates, and occasional promotional messages. You can opt out of marketing emails at any time.",
      },
    ],
  },
  {
    title: "How We Share Your Information",
    content: [
      {
        subtitle: "With other users",
        text: "Your public profile — including name, photo, lifestyle preferences, and bio — is visible to other verified UrbanHomey users. Your contact details (phone, email) are never shared without your explicit consent.",
      },
      {
        subtitle: "With service providers",
        text: "We share data with trusted third-party providers who help us operate the platform, including cloud hosting, payment processing, and analytics services. All providers are bound by strict data protection agreements.",
      },
      {
        subtitle: "We never sell your data",
        text: "UrbanHomey does not sell, rent, or trade your personal information to advertisers or data brokers. Ever.",
      },
    ],
  },
  {
    title: "Data Storage & Security",
    content: [
      {
        subtitle: "Where your data is stored",
        text: "Your data is stored on secure servers located in India, in compliance with applicable data localisation requirements.",
      },
      {
        subtitle: "How we protect it",
        text: "We use industry-standard encryption (TLS/SSL) for data in transit and AES-256 encryption for data at rest. Access to personal data is restricted to authorised team members on a need-to-know basis.",
      },
      {
        subtitle: "How long we keep it",
        text: "We retain your data for as long as your account is active. If you delete your account, we remove your personal data within 30 days, except where we are required to retain it by law.",
      },
    ],
  },
  {
    title: "Your Rights",
    content: [
      {
        subtitle: "Access & correction",
        text: "You can view and update your personal information at any time through your profile settings.",
      },
      {
        subtitle: "Data deletion",
        text: "You can request deletion of your account and all associated personal data by going to Settings → Account → Delete Account, or by emailing privacy@urbanhomey.com.",
      },
      {
        subtitle: "Data portability",
        text: "You can request a copy of your personal data in a machine-readable format by contacting privacy@urbanhomey.com.",
      },
      {
        subtitle: "Opt-out",
        text: "You can opt out of marketing communications at any time via the unsubscribe link in any email, or through notification settings in the app.",
      },
    ],
  },
  {
    title: "Cookies",
    content: [
      {
        subtitle: "What we use cookies for",
        text: "We use essential cookies to keep you logged in and remember your preferences. We also use analytics cookies to understand how people use UrbanHomey so we can improve it.",
      },
      {
        subtitle: "Managing cookies",
        text: "You can control cookies through your browser settings. Disabling essential cookies may affect platform functionality.",
      },
    ],
  },
  {
    title: "Children's Privacy",
    content: [
      {
        subtitle: "Age requirement",
        text: "UrbanHomey is intended for users aged 18 and above. We do not knowingly collect personal information from anyone under 18. If we become aware that a minor has created an account, we will delete it immediately.",
      },
    ],
  },
  {
    title: "Changes to This Policy",
    content: [
      {
        subtitle: "How we notify you",
        text: "We may update this Privacy Policy from time to time. When we make material changes, we will notify you via email and an in-app notification at least 7 days before the changes take effect.",
      },
    ],
  },
];

function Privacy() {
  return (
    <div className="info-page">
      <div className="info-hero">
        <span className="info-eyebrow">Privacy Policy</span>
        <h1>Your data, your <br /><span className="gradient-text">rights</span></h1>
        <p>We believe privacy is a right, not a feature. This policy explains exactly what data we collect, how we use it, and the controls you have over it.</p>
        <p style={{ marginTop: "12px", fontSize: "0.85rem", color: "#94a3b8" }}>Last updated: June 2026</p>
      </div>

      <div className="info-content">

        <div className="info-cards">
          <div className="info-card">
            <div className="info-card-number">🔒</div>
            <div className="info-card-label">Never sold</div>
          </div>
          <div className="info-card">
            <div className="info-card-number">AES-256</div>
            <div className="info-card-label">Encryption</div>
          </div>
          <div className="info-card">
            <div className="info-card-number">30d</div>
            <div className="info-card-label">Deletion window</div>
          </div>
          <div className="info-card">
            <div className="info-card-number">🇮🇳</div>
            <div className="info-card-label">India-hosted data</div>
          </div>
        </div>

        {sections.map((section, i) => (
          <div className="info-section" key={i}>
            <div className="info-section-label">{String(i + 1).padStart(2, "0")}</div>
            <div className="info-section-body">
              <h2>{section.title}</h2>
              <div className="policy-items">
                {section.content.map((item, j) => (
                  <div className="policy-item" key={j}>
                    <h3>{item.subtitle}</h3>
                    <p>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}

        <div className="info-section">
          <div className="info-section-label">Contact</div>
          <div className="info-section-body">
            <h2>Questions about your privacy?</h2>
            <p>Reach our Data Protection team at <strong>privacy@urbanhomey.com</strong>. We respond to all privacy-related queries within 72 hours.</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Privacy;
