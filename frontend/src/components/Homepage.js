import React from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import ThreeStepProcessSection from "./ThreeStepProcessSection";
import BusinessBenefitsGrid from "./BusinessBenefitsGrid";
import ChallengesSolutionsSection from "./ChallengesSolutionsSection";
import CustomerSegments from "./CustomerSegments";
import Footer from "./Footer";

const Homepage = () => {
  return (
    <div className="min-h-screen bg-acencia">
      <Header />
      {/* Reduced padding-top for smaller gap to navigation */}
      <div className="pt-28">
        <HeroSection />
        <ThreeStepProcessSection />
        <BusinessBenefitsGrid />
        <ChallengesSolutionsSection />
        <CustomerSegments />
        <Footer />
      </div>
    </div>
  );
};

export default Homepage;