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
    <div className="min-h-screen bg-slate-900">
      <Header />
      {/* Add padding-top to account for fixed header */}
      <div className="pt-20">
        <HeroSection />
        <ThreeStepProcessSection />
        <BusinessBenefitsGrid />
        <ChallengesSolutionsSection />
        <CustomerSegments />
        <ExpertiseSection />
        <Footer />
      </div>
    </div>
  );
};

export default Homepage;