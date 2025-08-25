import React from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import ThreeStepProcessSection from "./ThreeStepProcessSection";
import ChallengesSolutionsSection from "./ChallengesSolutionsSection";
import CustomerSegments from "./CustomerSegments";
import ExpertiseSection from "./ExpertiseSection";
import Footer from "./Footer";

const Homepage = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      {/* Add padding-top to account for fixed header */}
      <div className="pt-20">
        <HeroSection />
        <ProcessSectionHomepage />
        <InteractiveMainSections />
        <CustomerSegments />
        <ExpertiseSection />
        <Footer />
      </div>
    </div>
  );
};

export default Homepage;