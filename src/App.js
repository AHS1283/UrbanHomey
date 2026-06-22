import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Header from "./components/Header/Header";
import HomeBanner from "./components/HomeBanner/HomeBanner";

import Footer from "./components/Footer/Footer";

import OptionCards from "./components/OptionCards/OptionCards";
import ModernMatchUI from "./components/ModernMatchUI/ModernMatchUI";
import WorksSection from "./components/WorksSection/WorksSection";
import ModernLivingCards from "./components/ModernLivingCards/ModernLivingCards";


import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminRoute from "./components/AdminRoute";

import Dashboard from "./components/Dashboard/Dashboard";
import BasicInfo from "./components/ListRoom/BasicInfo/BasicInfo";
import RoomListingForm from "./components/ListRoom/RoomListingForm/RoomListingForm";

import Reviews from "./components/Reviews/Reviews";
import Blogs from "./components/Blogs/Blogs";

import { HelmetProvider } from "react-helmet-async";
import SEO from "./components/SEO/SEO";

import ProfilePage from "./components/Profilepage/Profilepage";
import ListingQuestionnaire from "./components/ListingQuestionnaire/ListingQuestionnaire";
import EditProfile from "./components/Editprofile/Editprofile";

import MatchSection from "./components/MatchSection/MatchSection";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import BlogsPage from "./pages/BlogsPage/BlogsPage";
import BlogDetails from "./pages/BlogDetails/BlogDetails";
import AddBlog from "./pages/AddBlog/AddBlog";

// Footer pages
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Press from "./pages/Press/Press";
import Support from "./pages/Support/Support";
import Privacy from "./pages/Privacy/Privacy";
import Terms from "./pages/Terms/Terms";

// Social Sidebar
import SocialSidebar from "./components/SocialSidebar/SocialSidebar";
//import DownloadApp from "./components/DownloadApp/DownloadApp";
import Downloadpage from "./components/Downloadpage/Downloadpage";


function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

// ✅ NEW — handles scroll to section from any page
function ScrollToSection() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      const sectionId = sessionStorage.getItem("scrollTo");

      if (sectionId) {
        sessionStorage.removeItem("scrollTo");

        let attempts = 0;
        const interval = setInterval(() => {
          const section = document.getElementById(sectionId);
          if (section) {
            section.scrollIntoView({ behavior: "smooth" });
            clearInterval(interval);
          }
          attempts++;
          if (attempts >= 20) clearInterval(interval); // stop after 2 seconds
        }, 100);

        return () => clearInterval(interval);
      }
    }
  }, [location.pathname]);

  return null;
}

/* =========================
   COMMON LAYOUT
========================= */

function PageLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

/* =========================
   HOME PAGE
========================= */

function HomePage() {
  return (
    <>
      <SEO
        title="UrbanHomey — Find Your Perfect Flatmate in Pune"
        description="Find verified flatmates in Pune based on lifestyle, habits and location."
        keywords="flatmate finder pune, roommate pune"
        url="https://www.urbanhomey.in/"
        image="https://www.urbanhomey.in/og-image.jpg"
      />

      <Header />
      <HomeBanner />

      <OptionCards />

      <WorksSection />
      <MatchSection />

      <Reviews />
      <Blogs />

      <Footer />
    </>
  );
}

/* =========================
   MATCHES PAGE
========================= */

function MatchesPage() {
  return (
    <PageLayout>
      <ModernMatchUI />
      <ModernLivingCards />
    </PageLayout>
  );
}

/* =========================
   APP
========================= */






function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <ScrollToSection /> {/* ✅ Added here — works on every route change */}
        <SocialSidebar />

        <Routes>

          {/* AUTH */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* HOME */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            }
          />

          {/* DASHBOARD */}
          <Route path="/dashboard" element={<Dashboard />} />

          {/* MATCHES */}
          <Route path="/matches" element={<MatchesPage />} />

          {/* BASIC INFO */}
          <Route
            path="/list-room"
            element={
              <PageLayout>
                <BasicInfo />
              </PageLayout>
            }
          />

          {/* FIND ROOM */}
          <Route
            path="/find-room"
            element={
              <PageLayout>
                <RoomListingForm />
              </PageLayout>
            }
          />

          {/* PROFILE */}
          <Route
            path="/profile"
            element={
              <PageLayout>
                <ProfilePage />
              </PageLayout>
            }
          />

          {/* QUESTIONNAIRE */}
          <Route
            path="/profile/:type"
            element={
              <PageLayout>
                <ListingQuestionnaire />
              </PageLayout>
            }
          />

          {/* EDIT PROFILE */}
          <Route
            path="/profile/edit"
            element={
              <PageLayout>
                <EditProfile />
              </PageLayout>
            }
          />

          {/* BLOGS */}
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/blog/:slug" element={<BlogDetails />} />

          {/* ADD BLOG (admin only) */}
          <Route
            path="/add-blog"
            element={
              <AdminRoute>
                <AddBlog />
              </AdminRoute>
            }
          />

          {/* FOOTER PAGES */}
          <Route
            path="/about"
            element={
              <PageLayout>
                <About />
              </PageLayout>
            }
          />
          <Route
            path="/press"
            element={
              <PageLayout>
                <Press />
              </PageLayout>
            }
          />
          <Route
            path="/Contact"
            element={
              <PageLayout>
                <Contact />
              </PageLayout>
            }
          />
          <Route
            path="/support"
            element={
              <PageLayout>
                <Support />
              </PageLayout>
            }
          />
          <Route
            path="/privacy"
            element={
              <PageLayout>
                <Privacy />
              </PageLayout>
            }
          />
          <Route
            path="/terms"
            element={
              <PageLayout>
                <Terms />
              </PageLayout>
            }
          />
         <Route path="/download-app" element={<PageLayout><Downloadpage /></PageLayout>} />

        </Routes>


      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;