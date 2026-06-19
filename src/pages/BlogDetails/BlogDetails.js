import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "../../firebase";
import PageLayout from "../../components/PageLayout/PageLayout";
import "./BlogDetails.css";

function BlogDetails() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      setLoading(true);
      try {
        const q = query(
          collection(db, "blogs"),
          where("slug", "==", slug)
        );

        const snapshot = await getDocs(q);

        if (snapshot.empty) {
          setBlog(null);
          setLoading(false);
          return;
        }

        const doc = snapshot.docs[0];
        const blogData = { id: doc.id, ...doc.data() };
        setBlog(blogData);

        const allSnapshot = await getDocs(collection(db, "blogs"));
        const allBlogs = allSnapshot.docs.map((d) => ({
          id: d.id,
          ...d.data(),
        }));

        const related = allBlogs
          .filter(
            (item) =>
              item.category === blogData.category &&
              item.id !== blogData.id
          )
          .slice(0, 3);

        setRelatedBlogs(related);
      } catch (error) {
        console.error("Error fetching blog:", error);
        setBlog(null);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug]);

  if (loading) {
    return (
      <PageLayout>
        <div className="blog-not-found">
          <h2>Loading blog...</h2>
        </div>
      </PageLayout>
    );
  }

  if (!blog) {
    return (
      <PageLayout>
        <div className="blog-not-found">
          <h2>Blog Not Found</h2>
          <button onClick={() => navigate("/blogs")}>
            Back to Blogs
          </button>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <div className="blog-details-page">

        {/* Hero */}
        <div className="blog-hero">
          <img src={blog.image} alt={blog.title} />

          <div className="blog-hero-overlay">
            <span className="blog-tag">
              {blog.category}
            </span>

            <h1>{blog.title}</h1>

            <div className="blog-info">
              <span>{blog.author}</span>
              <span>•</span>
              <span>{blog.authorLocation}</span>
              <span>•</span>
              <span>{blog.date}</span>
              <span>•</span>
              <span>{blog.readTime}</span>
            </div>
          </div>
        </div>

        {/* Article */}
        <div className="article-container">
          {(blog.content || blog.full || "")
            .split("\n")
            .map((line, index) => {

              const text = line.trim();

              if (!text) {
                return <br key={index} />;
              }

              // Highlight bullet points
              if (
                text.startsWith("✓") ||
                text.startsWith("✗") ||
                text.startsWith("•")
              ) {
                return (
                  <div
                    key={index}
                    className={`blog-point ${text.startsWith("✗")
                        ? "negative"
                        : "positive"
                      }`}
                  >
                    {text}
                  </div>
                );
              }

              // Headings
              if (
                text.endsWith(":") ||
                text.startsWith("Benefits") ||
                text.startsWith("Advantages") ||
                text.startsWith("Conclusion") ||
                text.startsWith("Why") ||
                text.startsWith("How") ||
                text.startsWith("Future") ||
                text.startsWith("Common") ||
                text.startsWith("Best") ||
                text.startsWith("Popular") ||
                text.startsWith("Checklist") ||
                text.startsWith("Mistake") ||
                text.startsWith("Area") ||
                text.startsWith("Location")
              ) {
                return (
                  <h3 key={index} className="blog-heading">
                    {text}
                  </h3>
                );
              }

              return (
                <p key={index}>
                  {text}
                </p>
              );
            })}
        </div>

        {/* Related Blogs */}
        {relatedBlogs.length > 0 && (
          <section className="related-blogs">

            <h2>Related Blogs</h2>

            <div className="related-grid">

              {relatedBlogs.map((item) => (
                <div
                  key={item.id}
                  className="related-card"
                  onClick={() =>
                    navigate(`/blog/${item.slug}`)
                  }
                >
                  <img
                    src={item.image}
                    alt={item.title}
                  />

                  <div className="related-card-content">
                    <span>{item.category}</span>

                    <h3>{item.title}</h3>

                    <p>{item.readTime}</p>
                  </div>
                </div>
              ))}

            </div>

          </section>
        )}

        {/* CTA */}
        <section className="blog-cta">

          <h2>Looking for a Flatmate?</h2>

          <p>
            Discover verified flatmates based on
            location, lifestyle, budget, and
            compatibility preferences.
          </p>

          <button
            onClick={() =>
              navigate("/find-flatmates")
            }
          >
            Find Flatmates
          </button>

        </section>

      </div>
    </PageLayout>
  );
}

export default BlogDetails;