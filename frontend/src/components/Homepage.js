import React from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import ThreeStepProcessSection from "./ThreeStepProcessSection";
import BusinessBenefitsGrid from "./BusinessBenefitsGrid";
import CustomerSegments from "./CustomerSegments";
import Footer from "./Footer";

const Homepage = () => {
  return (
    <div className="min-h-screen bg-acencia">
      <Header />
      {/* Doubled spacing from header to first section */}
      <div className="pt-32">
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