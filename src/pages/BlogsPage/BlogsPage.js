import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

import PageLayout from "../../components/PageLayout/PageLayout";
import "./BlogsPage.css";

function BlogsPage() {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
      } catch (err) {
        console.error("Error fetching blogs:", err);
        setError("Unable to load blogs right now. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <PageLayout>
        <div className="blogs-page">
          <div className="blogs-page-header">
            <h1>UrbanHomey Blogs</h1>
          </div>
          <p>Loading blogs...</p>
        </div>
      </PageLayout>
    );
  }

  if (error) {
    return (
      <PageLayout>
        <div className="blogs-page">
          <div className="blogs-page-header">
            <h1>UrbanHomey Blogs</h1>
          </div>
          <p>{error}</p>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <div className="blogs-page">
        <div className="blogs-page-header">
          <h1>UrbanHomey Blogs</h1>
          <p>
            Discover flatmate stories, rental tips, safety guides,
            budgeting advice, and shared-living experiences from the
            UrbanHomey community.
          </p>
        </div>

        <div className="blogs-page-grid">
          {blogs.length === 0 ? (
            <p>No blogs available yet.</p>
          ) : (
            blogs.map((blog) => (
              <div className="blog-page-card" key={blog.id}>
                <div className="blog-page-image">
                  <img src={blog.image} alt={blog.title} />
                  <span className="blog-page-category">{blog.category}</span>
                </div>

                <div className="blog-page-content">
                  <h3>{blog.title}</h3>
                  <p>{blog.summary}</p>

                  <div className="blog-page-author">
                    <span className="author-name">{blog.author}</span>
                    <span className="author-location">
                      {blog.authorLocation}
                    </span>
                  </div>

                  <div className="blog-page-meta">
                    <span>{blog.date}</span>
                    <span>•</span>
                    <span>{blog.readTime}</span>
                  </div>

                  <button
                    className="blog-page-btn"
                    onClick={() => navigate(`/blog/${blog.slug}`)}
                  >
                    Read More →
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </PageLayout>
  );
}

export default BlogsPage;