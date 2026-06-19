import React, { useState } from "react";
import "./Reviews.css";
import { FaStar, FaRegStar } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const initialReviews = [
  {
    id: 1,
    name: "Sneha Kulkarni",
    location: "Kothrud, Pune",
    rating: 5,
    review: "Found my perfect flatmate within a week! UrbanHomey made the whole process so easy and stress-free.",
    avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=80&h=80&fit=crop&crop=face",
  },
  {
    id: 2,
    name: "Rahul Deshmukh",
    location: "Hinjawadi, Pune",
    rating: 5,
    review: "The lifestyle matching is spot on. My flatmate and I have the same schedule and habits. Couldn't be happier!",
    avatar: "https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?w=80&h=80&fit=crop&crop=face",
  },
  {
    id: 3,
    name: "Ananya Joshi",
    location: "Viman Nagar, Pune",
    rating: 4,
    review: "Profiles are detailed and genuine. Finally a platform that understands what flatmate hunting is like.",
    avatar: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=80&h=80&fit=crop&crop=face",
  },
  {
    id: 4,
    name: "Kabir Shaikh",
    location: "Baner, Pune",
    rating: 5,
    review: "Loved the verified badges and the interest tags. Made it really easy to filter people who matched my vibe.",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&h=80&fit=crop&crop=face",
  },
  {
    id: 5,
    name: "Priya Mehta",
    location: "Wakad, Pune",
    rating: 5,
    review: "As a working woman, safety and compatibility were my top concerns. UrbanHomey nailed both!",
    avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=80&h=80&fit=crop&crop=face",
  },
];

const totalRatings = 1284;
const avgRating = 4.8;

function Reviews() {
  const [reviews, setReviews] = useState(initialReviews);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ name: "", location: "", rating: 0, review: "" });
  const [hovered, setHovered] = useState(0);

  const handleSubmit = () => {
    if (!form.name || !form.review || form.rating === 0) return;
    const newReview = {
      id: reviews.length + 1,
      name: form.name,
      location: form.location || "Pune",
      rating: form.rating,
      review: form.review,
      avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(form.name)}&background=6366f1&color=fff&size=80`,
    };
    setReviews([newReview, ...reviews]);
    setForm({ name: "", location: "", rating: 0, review: "" });
    setShowForm(false);
  };

  return (
    <section className="reviews-section" id="reviews">

      {/* ── HEADER ── */}
      <div className="reviews-header">
        <h2>What Our Users Say</h2>
        <p>Real stories from people who found their perfect flatmate on UrbanHomey.</p>
      </div>

      {/* ── TOP TEXT MESSAGE ── */}
      <div className="reviews-top-msg">
        <span>⭐</span>
        <p>Thousands of people have found their perfect flatmate on UrbanHomey — see what they're saying!</p>
      </div>

      {/* ── TOP SUMMARY CARD ── */}
      <div className="reviews-summary-card">
        <div className="summary-left">
          <div className="summary-score">{avgRating}</div>
          <div className="summary-stars">
            {[1,2,3,4,5].map((s) => (
              <FaStar key={s} className={s <= Math.round(avgRating) ? "star-filled" : "star-empty"} />
            ))}
          </div>
          <div className="summary-count">Based on {totalRatings.toLocaleString()} reviews</div>
        </div>
        <div className="summary-right">
          {[5,4,3,2,1].map((star) => {
            const pct = star === 5 ? 78 : star === 4 ? 14 : star === 3 ? 5 : star === 2 ? 2 : 1;
            return (
              <div className="rating-bar-row" key={star}>
                <span>{star}</span>
                <FaStar className="bar-star" />
                <div className="rating-bar-track">
                  <div className="rating-bar-fill" style={{ width: `${pct}%` }}></div>
                </div>
                <span className="bar-pct">{pct}%</span>
              </div>
            );
          })}
        </div>

        {/* ── ADD A REVIEW (inside summary card) ── */}
        <div className="summary-add-review">
          <p className="summary-add-label">Loved using UrbanHomey?</p>
          <button className="btn-write" onClick={() => setShowForm(!showForm)}>
            ✏️ Write a Review
          </button>
        </div>
      </div>

      {/* ── WRITE A REVIEW FORM ── */}
      {showForm && (
        <div className="review-form">
          <h3>Share Your Experience</h3>

          <div className="form-row">
            <input
              type="text"
              placeholder="Your name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <input
              type="text"
              placeholder="Your location (e.g. Baner, Pune)"
              value={form.location}
              onChange={(e) => setForm({ ...form, location: e.target.value })}
            />
          </div>

          <div className="form-stars">
            <span>Your Rating:</span>
            {[1,2,3,4,5].map((s) => (
              s <= (hovered || form.rating)
                ? <FaStar key={s} className="star-pick filled" onMouseEnter={() => setHovered(s)} onMouseLeave={() => setHovered(0)} onClick={() => setForm({ ...form, rating: s })} />
                : <FaRegStar key={s} className="star-pick" onMouseEnter={() => setHovered(s)} onMouseLeave={() => setHovered(0)} onClick={() => setForm({ ...form, rating: s })} />
            ))}
          </div>

          <textarea
            placeholder="Tell us about your experience..."
            value={form.review}
            onChange={(e) => setForm({ ...form, review: e.target.value })}
            rows={4}
          />

          <div className="form-btns">
            <button className="btn-cancel" onClick={() => setShowForm(false)}>Cancel</button>
            <button className="btn-submit" onClick={handleSubmit}>Submit Review</button>
          </div>
        </div>
      )}

      {/* ── SWIPER ── */}
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={20}
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1200: { slidesPerView: 3 },
        }}
      >
        {reviews.map((r) => (
          <SwiperSlide key={r.id}>
            <ReviewCard r={r} />
          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  );
}

function ReviewCard({ r }) {
  return (
    <div className="review-card">
      <div className="review-top">
        <img src={r.avatar} alt={r.name} />
        <div className="review-info">
          <h4>{r.name}</h4>
          <span>{r.location}</span>
        </div>
        <div className="verified-tag">✔ Verified</div>
      </div>
      <div className="stars">
        {Array.from({ length: r.rating }).map((_, i) => (
          <FaStar key={i} />
        ))}
      </div>
      <p className="review-text">"{r.review}"</p>
    </div>
  );
}

export default Reviews;