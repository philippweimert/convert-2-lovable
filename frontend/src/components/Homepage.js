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
        
        {/* Sanfter Übergang von Hero zu Process Section */}
        <div className="h-20 bg-gradient-to-b from-acencia-blue via-acencia-blue-light to-white"></div>
        
        <ThreeStepProcessSection />
        
        {/* Sanfter Übergang von Process zu Benefits */}
        <div className="h-20 bg-gradient-to-b from-acencia-blue-light via-acencia-light to-acencia"></div>
        
        <BusinessBenefitsGrid />
        <ChallengesSolutionsSection />
        
        {/* Sanfter Übergang von Challenges zu Customer Segments */}
        <div className="h-20 bg-gradient-to-b from-acencia via-acencia-blue-light to-white"></div>
        
        <CustomerSegments />
        
        {/* Sanfter Übergang zu Footer */}
        <div className="h-16 bg-gradient-to-b from-white via-slate-200 to-acencia"></div>
        
        <Footer />
      </div>
    </div>
  );
};

export default Homepage;