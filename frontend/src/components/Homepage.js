import React from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import BenefitsSection from "./BenefitsSection";
import ProcessSection from "./ProcessSection";
import SolutionsSection from "./SolutionsSection";
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
        <BenefitsSection />
        <ProcessSection />
        <SolutionsSection />
        <CustomerSegments />
        <ExpertiseSection />
        <Footer />
      </div>
    </div>
  );
};

export default Homepage;