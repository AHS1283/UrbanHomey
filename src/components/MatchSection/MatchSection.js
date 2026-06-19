import React, { useRef } from "react";
import "./MatchSection.css";

import { ChevronRight } from "lucide-react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import Person1 from "./person1.jpg";
import Person2 from "./person2.jpg";
import Person3 from "./person3.jpg";
import Person4 from "./person4.jpg";
import Person5 from "./person5.jpg";
import Person6 from "./person6.jpg";
import Person7 from "./person7.jpg";
import Person8 from "./person8.jpg";
import Person9 from "./person9.jpg";
import Person10 from "./person10.jpg";

const profiles = [
  { id: 1,  name: "Aarohi",  age: 26, location: "Wakad, Pune",            match: "92%", tags: ["Designer", "Early Bird"],        image: Person1  },
  { id: 2,  name: "Arjun",   age: 28, location: "Koramangala, Bengaluru",   match: "88%", tags: ["Remote Worker", "Foodie"],      image: Person2  },
  { id: 3,  name: "Priya",   age: 24, location: "Salt Lake, Kolkata",       match: "95%", tags: ["Student", "Quiet"],             image: Person3  },
  { id: 4,  name: "Riya",    age: 27, location: "Gachibowli, Hyderabad",    match: "91%", tags: ["Traveler", "Friendly"],         image: Person4  },
  { id: 5,  name: "Ananya",  age: 25, location: "Anna Nagar, Chennai",      match: "96%", tags: ["Artist", "Creative"],           image: Person5  },
  { id: 6,  name: "Kabir",   age: 23, location: "Satellite, Ahmedabad",     match: "89%", tags: ["Fitness", "Music"],             image: Person6  },
  { id: 7,  name: "Ishita",  age: 29, location: "Connaught Place, Delhi",   match: "97%", tags: ["Tech", "Coffee"],               image: Person7  },
  { id: 8,  name: "Rahul",   age: 27, location: "Civil Lines, Jaipur",      match: "94%", tags: ["Software Engineer", "Gym"],     image: Person8  },
  { id: 9,  name: "Sneha",   age: 25, location: "Hazratganj, Lucknow",      match: "93%", tags: ["Marketing", "Reader"],          image: Person9  },
  { id: 10, name: "Aditya",  age: 26, location: "MG Road, Kochi",           match: "98%", tags: ["Startup", "Traveler"],          image: Person10 },
];

function MatchSection() {
  const cardsRef = useRef(null);

  const scrollToCards = () => {
    cardsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="match-section" id="matches">

      {/* ── Header ── */}
      <section className="match-header-section">

        {/* Left Side */}
        <div className="match-text">
          <h2>Meet Your Potential Matches</h2>
          <p>Real people, real connections in your city.</p>
        </div>

        {/* Right Side */}
        <button className="matches-btn" onClick={scrollToCards}>
          View all matches
          <ChevronRight size={22} />
        </button>

      </section>

      {/* ── Cards ── */}
      <div className="match-wrapper" ref={cardsRef}>
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={25}
          loop={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            320:  { slidesPerView: 1 },
            768:  { slidesPerView: 2 },
            1200: { slidesPerView: 3 },
          }}
        >
          {profiles.map((person) => (
            <SwiperSlide key={person.id}>
              <div className="main-card">
                <div className="profile-image-section">

                  <img src={person.image} alt={person.name} />

                  {/* Match % — top right */}
                  <div className="top-badges">
                    <span className="match-badge">{person.match} Match</span>
                  </div>

                  {/* Overlay content */}
                  <div className="card-content">
                    <h1>{person.name}, {person.age}</h1>

                    <p className="location">
                      <FaMapMarkerAlt className="location-icon" />
                      <span className="location-text">{person.location}</span>
                    </p>

                    <div className="interest-tags">
                      {person.tags.map((tag, i) => (
                        <span key={i}>{tag}</span>
                      ))}
                    </div>

                    <button className="view-btn">View Profile</button>

                    <div className="verified-badge">✔ VERIFIED</div>
                  </div>

                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    </div>
  );
}

export default MatchSection;
