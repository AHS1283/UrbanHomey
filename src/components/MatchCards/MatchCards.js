import "./MatchCards.css";
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

function MatchCards() {

  const profiles = [
    { id: 1,  name: "Aarohi",  age: 26, location: "Kothrud, Pune",          match: "92%", tags: ["Designer", "Early Bird"],        image: Person1  },
    { id: 2,  name: "Arjun",   age: 28, location: "Hinjawadi, Pune",         match: "88%", tags: ["Remote Worker", "Foodie"],       image: Person2  },
    { id: 3,  name: "Priya",   age: 24, location: "Viman Nagar, Pune",       match: "95%", tags: ["Student", "Quiet"],              image: Person3  },
    { id: 4,  name: "Riya",    age: 27, location: "Wakad, Pune",             match: "91%", tags: ["Traveler", "Friendly"],          image: Person4  },
    { id: 5,  name: "Ananya",  age: 25, location: "Baner, Pune",             match: "96%", tags: ["Artist", "Creative"],            image: Person5  },
    { id: 6,  name: "Kabir",   age: 23, location: "Aundh, Pune",             match: "89%", tags: ["Fitness", "Music"],              image: Person6  },
    { id: 7,  name: "Ishita",  age: 29, location: "Kharadi, Pune",           match: "97%", tags: ["Tech", "Coffee"],                image: Person7  },
    { id: 8,  name: "Rahul",   age: 27, location: "Magarpatta, Pune",        match: "94%", tags: ["Software Engineer", "Gym"],      image: Person8  },
    { id: 9,  name: "Sneha",   age: 25, location: "Pimple Saudagar, Pune",   match: "93%", tags: ["Marketing", "Reader"],           image: Person9  },
    { id: 10, name: "Aditya",  age: 26, location: "Koregaon Park, Pune",     match: "98%", tags: ["Startup", "Traveler"],           image: Person10 },
  ];

  return (
    <div className="match-wrapper">
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

                {/* All overlay content stacked at the bottom */}
                <div className="card-content">

                  {/* 1. Name */}
                  <h1>{person.name}, {person.age}</h1>

                  {/* 2. Location */}
                  <p className="location">
  <FaMapMarkerAlt className="location-icon" />

  <span className="location-text">
    {person.location}
  </span>
</p>

                  {/* 3. Interest tags */}
                  <div className="interest-tags">
                    {person.tags.map((tag, i) => (
                      <span key={i}>{tag}</span>
                    ))}
                  </div>

                  {/* 4. View Profile button */}
                  <button className="view-btn">View Profile</button>

                  {/* 5. Verified — always last, always visible */}
                  <div className="verified-badge">✔ VERIFIED</div>

                </div>

              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default MatchCards;
