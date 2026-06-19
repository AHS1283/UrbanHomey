import React from "react";
import "../Terms/Terms.css";

const sections = [
  {
    title: "Acceptance of Terms",
    content: [
      {
        subtitle: "Agreement to these terms",
        text: "By creating an account or using UrbanHomey in any way, you agree to be bound by these Terms & Conditions and our Privacy Policy. If you do not agree, please do not use the platform.",
      },
      {
        subtitle: "Changes to terms",
        text: "We may update these terms from time to time. We will notify you of material changes via email and in-app notification at least 7 days before they take effect. Continued use of UrbanHomey after changes take effect constitutes acceptance of the updated terms.",
      },
    ],
  },
  {
    title: "Eligibility",
    content: [
      {
        subtitle: "Age requirement",
        text: "You must be at least 18 years old to use UrbanHomey. By using the platform, you confirm that you meet this requirement.",
      },
      {
        subtitle: "Account responsibility",
        text: "You are responsible for maintaining the confidentiality of your login credentials and for all activity that occurs under your account. Notify us immediately at support@urbanhomey.com if you suspect unauthorised access.",
      },
    ],
  },
  {
    title: "Use of the Platform",
    content: [
      {
        subtitle: "Permitted use",
        text: "UrbanHomey is a platform for finding compatible flatmates and co-living arrangements. You may use it only for its intended purpose and in compliance with all applicable laws.",
      },
      {
        subtitle: "Prohibited conduct",
        text: "You may not use UrbanHomey to harass, threaten, or defraud other users; post false or misleading information; collect user data without consent; send unsolicited commercial messages; or attempt to circumvent our security measures.",
      },
      {
        subtitle: "Content you post",
        text: "You are solely responsible for any content you post on UrbanHomey, including profile information, photos, and messages. By posting content, you grant UrbanHomey a non-exclusive, royalty-free licence to use it solely for operating and improving the platform.",
      },
    ],
  },
  {
    title: "Listings & Matches",
    content: [
      {
        subtitle: "Accuracy of listings",
        text: "All room listings must be accurate, currently available, and genuinely offered for the stated price. Fake or fraudulent listings are prohibited and will result in immediate account termination.",
      },
      {
        subtitle: "No guarantee of matches",
        text: "While we work hard to surface compatible matches, UrbanHomey does not guarantee that you will find a flatmate or that any match will result in a successful living arrangement.",
      },
      {
        subtitle: "Transactions between users",
        text: "Any rental agreements, financial transactions, or legal arrangements made between users are solely between those users. UrbanHomey is not a party to such agreements and accepts no liability for them.",
      },
    ],
  },
  {
    title: "Payments & Subscriptions",
    content: [
      {
        subtitle: "Free tier",
        text: "Creating a profile and browsing matches is free. Certain features require an UrbanHomey Plus subscription.",
      },
      {
        subtitle: "Subscription billing",
        text: "Plus subscriptions are billed monthly or annually in advance. Prices are displayed in Indian Rupees (₹) and are inclusive of applicable taxes. Prices may change with 30 days' notice.",
      },
      {
        subtitle: "Refunds",
        text: "Subscription fees are non-refundable except where required by applicable law. If you cancel, your Plus access continues until the end of the current billing period.",
      },
    ],
  },
  {
    title: "Intellectual Property",
    content: [
      {
        subtitle: "UrbanHomey's IP",
        text: "The UrbanHomey name, logo, platform design, matching algorithm, and all associated intellectual property are owned by UrbanHomey Inc. You may not copy, modify, or distribute them without written permission.",
      },
      {
        subtitle: "Your content",
        text: "You retain ownership of content you post on UrbanHomey. You represent that you have the right to post it and that it does not infringe any third-party rights.",
      },
    ],
  },
  {
    title: "Disclaimers & Limitation of Liability",
    content: [
      {
        subtitle: "Platform provided as-is",
        text: "UrbanHomey is provided on an 'as is' and 'as available' basis. We do not warrant that the platform will be uninterrupted, error-free, or free of viruses or other harmful components.",
      },
      {
        subtitle: "Limitation of liability",
        text: "To the maximum extent permitted by law, UrbanHomey's total liability to you for any claim arising from your use of the platform shall not exceed the amount you paid to UrbanHomey in the 3 months preceding the claim.",
      },
      {
        subtitle: "User interactions",
        text: "UrbanHomey is not responsible for the conduct of any user on or off the platform. Exercise caution and good judgement when interacting with other users, especially when meeting in person.",
      },
    ],
  },
  {
    title: "Termination",
    content: [
      {
        subtitle: "By you",
        text: "You may delete your account at any time via Settings → Account → Delete Account. Deletion is permanent and cannot be undone.",
      },
      {
        subtitle: "By UrbanHomey",
        text: "We may suspend or terminate your account without notice if you violate these terms, our Community Guidelines, or if we are required to do so by law. We will notify you of the reason unless prohibited from doing so.",
      },
    ],
  },
  {
    title: "Governing Law",
    content: [
      {
        subtitle: "Jurisdiction",
        text: "These terms are governed by the laws of India. Any disputes arising from these terms or your use of UrbanHomey shall be subject to the exclusive jurisdiction of the courts in Pune, Maharashtra.",
      },
    ],
  },
];

function Terms() {
  return (
    <div className="info-page">
      <div className="info-hero">
        <span className="info-eyebrow">Terms & Conditions</span>
        <h1>Clear rules,<br /><span className="gradient-text">fairly applied</span></h1>
        <p>These terms govern your use of UrbanHomey. We've written them to be as clear and readable as possible — please read them carefully.</p>
        <p style={{ marginTop: "12px", fontSize: "0.85rem", color: "#94a3b8" }}>Last updated: June 2026 · Effective: June 2026</p>
      </div>

      <div className="info-content">

        <div className="info-cards">
          <div className="info-card">
            <div className="info-card-number">18+</div>
            <div className="info-card-label">Age requirement</div>
          </div>
          <div className="info-card">
            <div className="info-card-number">₹0</div>
            <div className="info-card-label">Free to join</div>
          </div>
          <div className="info-card">
            <div className="info-card-number">Pune</div>
            <div className="info-card-label">Governing jurisdiction</div>
          </div>
          <div className="info-card">
            <div className="info-card-number">7d</div>
            <div className="info-card-label">Notice for changes</div>
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
            <h2>Questions about these terms?</h2>
            <p>Email our legal team at <strong>legal@urbanhomey.com</strong>. We aim to respond within 5 business days.</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Terms;
