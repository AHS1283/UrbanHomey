import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

/* HOME COMPONENTS */

 import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import HomeBanner from "./components/HomeBanner/HomeBanner";




 import MatchHeader from "./components/MatchHeader/MatchHeader";
import Footer from "./components/Footer/Footer";

/* SEARCH COMPONENTS */


import MatchCards from "./components/MatchCards/MatchCards";

 import OptionCards from "./components/OptionCards/OptionCards";

/* MATCHES COMPONENTS */

 import ModernMatchUI from "./components/ModernMatchUI/ModernMatchUI";
 import MatchFooter from "./components/MatchFooter/MatchFooter";
import HeroSection from "./components/HeroSection/HeroSection";

import WorksSection from "./components/WorksSection/WorksSection";
 import ModernLivingCards from "./components/ModernLivingCards/ModernLivingCards";
import RecentMatchesHeader from "./components/RecentMatchesHeader/RecentMatchesHeader";
 import MatchListingCards from "./components/MatchListingCards/MatchListingCards";
 import BottomNavbar from "./components/BottomNavbar/BottomNavbar";


import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";

import ProtectedRoute from "./components/ProtectedRoute";

import Dashboard from "./components/Dashboard/Dashboard";
import BasicInfo from "./components/ListRoom/BasicInfo/BasicInfo";
import RoomListingForm from "./components/ListRoom/RoomListingForm/RoomListingForm";
import Reviews from "./components/Reviews/Reviews";
import Blogs from "./components/Blogs/Blogs";

import { HelmetProvider } from "react-helmet-async";
import SEO from "./components/SEO/SEO";

/* =========================
   HOME PAGE
========================= */

function HomePage() {
  return (
    <>
      <SEO
        title="UrbanHomey — Find Your Perfect Flatmate in Pune"
        description="Find verified flatmates in Pune based on lifestyle, habits and location. Connect with compatible people in Kothrud, Hinjawadi, Baner, Wakad and more."
        keywords="flatmate finder pune, roommate pune, pg in pune, flatmate hinjawadi, flatmate baner, shared flat pune"
        url="https://www.urbanhomey.in/"
        image="https://www.urbanhomey.in/og-image.jpg"
      />

      <Header />
      <HomeBanner />
       
      <OptionCards/>
      
      <WorksSection />
      <MatchHeader />
      <MatchCards />
      <Reviews />
      <Blogs />
      <Footer />
    </>
  );
}

/* =========================
   SEARCH PAGE
========================= */


/* =========================
   MATCHES PAGE
========================= */

function MatchesPage() {
  return (
    <>
      <Navbar />
      <ModernMatchUI />
      <MatchFooter />
      <HeroSection />
      
      
      <OptionCards />
      <WorksSection />
      <ModernLivingCards />
      <RecentMatchesHeader />
      <MatchListingCards />
      <Footer />
      <BottomNavbar />
    </>
  );
}

/* =========================
   CHAT PAGE
========================= */


/* =========================
   PROFILE PAGE
========================= */


/* =========================
   APP
========================= */

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>

          {/* AUTH */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* PROTECTED HOME */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            }
          />

          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<OptionCards />} />

          
       
          <Route path="/matches" element={<MatchesPage />} />
          
          <Route path="/list-room" element={<BasicInfo />} />

          {/* I need a room */}
          <Route path="/find-room" element={<RoomListingForm />} />

        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
