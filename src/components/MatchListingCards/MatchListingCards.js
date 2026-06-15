import React from "react";
import "./MatchListingCards.css";

import { FaMapMarkerAlt } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import "swiper/css/autoplay";

import { Pagination, Autoplay } from "swiper/modules";

/* ROOM IMAGES */
import Room1 from "./room1.jpg";
import Room2 from "./room2.jpg";
import Room3 from "./room3.jpg";

/* USER IMAGES */
import User1 from "./user1.jpg";
import User2 from "./user2.jpg";
import User3 from "./user3.jpg";

function MatchListingCards() {
  const listings = [

    {
      image: Room1,
      location: "Kothrud, Pune",
      badge: "95% MATCH",
      type: "ROOM SHARE",
      title: "Kothrud Apartment",
      price: "₹8,500",
      users: "Priya & Sneha",
      avatar1: User1,
      avatar2: User2,
      tags: ["FEMALE ONLY", "WIFI"],
    },

    {
      image: Room2,
      location: "Wakad, Pune",
      badge: "NEW LISTING",
      type: "PRIVATE ROOM",
      title: "Wakad Premium Flat",
      price: "₹12,000",
      users: "Rahul & Aman",
      avatar1: User2,
      avatar2: User3,
      tags: ["METRO", "AC"],
    },

    {
      image: Room3,
      location: "Hinjewadi, Pune",
      badge: "98% MATCH",
      type: "CO-LIVING",
      title: "Hinjewadi Tech Park Stay",
      price: "₹15,000",
      users: "Neha & Riya",
      avatar1: User3,
      avatar2: User1,
      tags: ["POOL", "GYM"],
    },

    {
      image: Room1,
      location: "Baner, Pune",
      badge: "HOT",
      type: "ROOM SHARE",
      title: "Baner Shared Apartment",
      price: "₹10,000",
      users: "Karan & Vikram",
      avatar1: User1,
      avatar2: User3,
      tags: ["FOOD", "WIFI"],
    },

    {
      image: Room2,
      location: "Aundh, Pune",
      badge: "NEW",
      type: "PRIVATE ROOM",
      title: "Aundh Executive Room",
      price: "₹11,500",
      users: "Arjun & Naveen",
      avatar1: User2,
      avatar2: User1,
      tags: ["BALCONY", "PARKING"],
    },

    {
      image: Room3,
      location: "Viman Nagar, Pune",
      badge: "96% MATCH",
      type: "ROOM SHARE",
      title: "Viman Nagar Flat",
      price: "₹13,500",
      users: "Pooja & Nisha",
      avatar1: User3,
      avatar2: User2,
      tags: ["SECURITY", "AIRPORT NEARBY"],
    },

    {
      image: Room1,
      location: "Kharadi, Pune",
      badge: "TRENDING",
      type: "PRIVATE ROOM",
      title: "Kharadi IT Hub Flat",
      price: "₹14,000",
      users: "Aditya & Sahil",
      avatar1: User1,
      avatar2: User2,
      tags: ["WORKSPACE", "AC"],
    },

    {
      image: Room2,
      location: "Magarpatta, Pune",
      badge: "97% MATCH",
      type: "CO-LIVING",
      title: "Magarpatta Co-Living",
      price: "₹12,500",
      users: "Anjali & Meera",
      avatar1: User2,
      avatar2: User3,
      tags: ["GYM", "HOUSEKEEPING"],
    },

    {
      image: Room3,
      location: "Pimple Saudagar, Pune",
      badge: "POPULAR",
      type: "PRIVATE ROOM",
      title: "Pimple Saudagar Residency",
      price: "₹9,500",
      users: "Jay & Krunal",
      avatar1: User3,
      avatar2: User1,
      tags: ["WIFI", "PARKING"],
    },

    {
      image: Room1,
      location: "Hadapsar, Pune",
      badge: "94% MATCH",
      type: "ROOM SHARE",
      title: "Hadapsar Apartment",
      price: "₹8,000",
      users: "Rohit & Akash",
      avatar1: User1,
      avatar2: User2,
      tags: ["NON-SMOKER", "FOOD"],
    },
  ];

  return (
    <div className="listing-wrapper">
      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={3}
        spaceBetween={25}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 3,
          },
        }}
      >
        {listings.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="listing-card">
              {/* IMAGE */}

              <div className="listing-image-section">
                <img
                  src={item.image}
                  alt="room"
                  className="listing-image"
                />

                <div className="listing-badge">
                  {item.badge}
                </div>

                <div className="listing-location">
                  <FaMapMarkerAlt />

                  <span>
                    {item.location}
                  </span>
                </div>
              </div>

              {/* CONTENT */}

              <div className="listing-content">
                <span className="listing-type">
                  {item.type}
                </span>

                <div className="listing-title-row">
                  <h2>
                    {item.title}
                  </h2>

                  <h3>
                    {item.price}
                  </h3>
                </div>

                <div className="listing-user-row">
                  <div className="listing-avatars">
                    <img
                      src={item.avatar1}
                      alt="user"
                    />

                    <img
                      src={item.avatar2}
                      alt="user"
                    />
                  </div>

                  <p>
                    {item.users}
                  </p>
                </div>

                <div className="listing-tags">
                  {item.tags.map((tag, i) => (
                    <span key={i}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default MatchListingCards;