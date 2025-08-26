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
        
        {/* Smooth transition from white to slate */}
        <div className="h-16 bg-gradient-to-b from-white via-slate-50 to-slate-900"></div>
        
        <BusinessBenefitsGrid />
        <ChallengesSolutionsSection />
        
        {/* Smooth transition from slate to white */}
        <div className="h-16 bg-gradient-to-b from-slate-900 via-slate-100 to-white"></div>
        
        <CustomerSegments />
        
        <Footer />
      </div>
    </div>
  );
};

export default Homepage;