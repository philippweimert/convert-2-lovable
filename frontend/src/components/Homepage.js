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
        
        {/* Smooth transition gradient */}
        <div className="h-16 bg-gradient-to-b from-slate-100 via-slate-50 to-white"></div>
        
        <ThreeStepProcessSection />
        
        {/* Smooth transition from white to slate */}
        <div className="h-16 bg-gradient-to-b from-white via-slate-50 to-slate-900"></div>
        
        <BusinessBenefitsGrid />
        <ChallengesSolutionsSection />
        
        {/* Smooth transition from slate to white */}
        <div className="h-16 bg-gradient-to-b from-slate-900 via-slate-100 to-white"></div>
        
        <CustomerSegments />
        
        {/* Smooth transition to footer */}
        <div className="h-16 bg-gradient-to-b from-slate-50 via-slate-600 to-slate-900"></div>
        
        <Footer />
      </div>
    </div>
  );
};

export default Homepage;