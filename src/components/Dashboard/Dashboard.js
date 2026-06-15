import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import MatchListingCards from "../MatchListingCards/MatchListingCards";
import RecentMatchesHeader from "../RecentMatchesHeader/RecentMatchesHeader";
import OptionCards from "../OptionCards/OptionCards";
import HeroSection from "../HeroSection/HeroSection";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <HeroSection/>
      <OptionCards/>
      <RecentMatchesHeader/>
      <MatchListingCards/>
      

      <Footer />
    </>
  );
};

export default Dashboard;