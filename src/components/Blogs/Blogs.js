import React from "react";
import "./Blogs.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const categoryColors = {
  Tips:    { bg: "rgba(99,102,241,0.08)",  color: "#4f46e5" },
  Guide:   { bg: "rgba(16,185,129,0.08)",  color: "#059669" },
  Finance: { bg: "rgba(245,158,11,0.08)",  color: "#d97706" },
  Safety:  { bg: "rgba(239,68,68,0.08)",   color: "#dc2626" },
};

const blogs = [
  {
    id: 1,
    title: "5 Things to Check Before Choosing a Flatmate",
    summary: "From sleep schedules to bill-splitting habits — here's what really matters before you sign.",
    category: "Tips",
    readTime: "3 min read",
    date: "June 2, 2025",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=220&fit=crop",
  },
  {
    id: 2,
    title: "Best Areas to Rent in Pune in 2025",
    summary: "Hinjawadi, Baner, Kothrud — top localities for young professionals and students.",
    category: "Guide",
    readTime: "5 min read",
    date: "May 18, 2025",
    image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=400&h=220&fit=crop",
  },
  {
    id: 3,
    title: "How to Split Rent Fairly With Your Flatmate",
    summary: "A practical guide to fair rent division without the awkwardness.",
    category: "Finance",
    readTime: "4 min read",
    date: "May 5, 2025",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=220&fit=crop",
  },
  {
    id: 4,
    title: "Red Flags to Watch Out for in Flatmate Profiles",
    summary: "Vague answers, no verified badge — learn to spot the warning signs early.",
    category: "Safety",
    readTime: "3 min read",
    date: "April 22, 2025",
    image: "https://images.unsplash.com/photo-1573497491765-dccce02b29df?w=400&h=220&fit=crop",
  },
  {
    id: 5,
    title: "Moving to Pune? Here's Your Starter Checklist",
    summary: "First time renting in Pune? We've covered everything from Aadhar to local grocery stores.",
    category: "Guide",
    readTime: "6 min read",
    date: "April 10, 2025",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=220&fit=crop",
  },
];

function Blogs() {
  return (
    <section className="blogs-section">

      <div className="blogs-header">
        <h2>Flatmate Tips & Guides</h2>
        <p>Everything you need to know about finding and living with the right flatmate.</p>
      </div>

      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={20}
        loop={true}
        autoplay={{
          delay: 2800,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1200: { slidesPerView: 3 },
        }}
      >
        {blogs.map((blog) => {
          const cat = categoryColors[blog.category] || categoryColors["Tips"];
          return (
            <SwiperSlide key={blog.id}>

              <div className="blog-card">

                <div className="blog-image">
                  <img src={blog.image} alt={blog.title} />
                  <span
                    className="blog-category"
                    style={{ background: cat.bg, color: cat.color }}
                  >
                    {blog.category}
                  </span>
                </div>

                <div className="blog-content">
                  <h3>{blog.title}</h3>
                  <p>{blog.summary}</p>
                  <div className="blog-meta">
                    <span>{blog.date}</span>
                    <span className="dot">·</span>
                    <span>{blog.readTime}</span>
                  </div>
                  <button className="read-btn">Read More →</button>
                </div>

              </div>

            </SwiperSlide>
          );
        })}
      </Swiper>

    </section>
  );
}

export default Blogs;