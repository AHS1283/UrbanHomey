import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import "./Blogs.css";

function Blogs() {
  const navigate = useNavigate();

  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const snapshot = await getDocs(collection(db, "blogs"));

        const blogsData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        // newest first
        blogsData.sort((a, b) => {
          if (!a.createdAt || !b.createdAt) return 0;
          return b.createdAt.seconds - a.createdAt.seconds;
        });

        setBlogs(blogsData);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const featuredBlogs = blogs.slice(0, 6);

  return (
    <section className="blogs-section" id="blogs">

      <div className="blogs-header">
        <h2>Flatmate Tips & Guides</h2>
        <p>
          Real stories, rental advice, safety tips and flatmate guides from
          the UrbanHomey community.
        </p>
      </div>

      {loading ? (
        <div className="blogs-loading">Loading blogs...</div>
      ) : featuredBlogs.length === 0 ? (
        <div className="blogs-loading">No blogs available.</div>
      ) : (
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={24}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="blogs-swiper"
        >
          {featuredBlogs.map((blog) => (
            <SwiperSlide key={blog.id}>
              <div className="blog-card">

                <div className="blog-image">
                  <img src={blog.image} alt={blog.title} />
                  <span className="blog-category">
                    {blog.category}
                  </span>
                </div>

                <div className="blog-content">

                  <h3>{blog.title}</h3>

                  <p>{blog.summary}</p>

                  <div className="blog-author">
                    <span className="author-name">
                      {blog.author}
                    </span>

                    <span className="author-location">
                      {blog.authorLocation}
                    </span>
                  </div>

                  <div className="blog-meta">
                    <span>{blog.date}</span>
                    <span>•</span>
                    <span>{blog.readTime}</span>
                  </div>

                  <button
                    className="read-btn"
                    onClick={() =>
                      navigate(`/blog/${blog.slug}`)
                    }
                  >
                    Read More →
                  </button>

                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      <div className="view-all-wrapper">
        <button
          className="view-all-btn"
          onClick={() => navigate("/blogs")}
        >
          View All Blogs →
        </button>
      </div>

    </section>
  );
}

export default Blogs;