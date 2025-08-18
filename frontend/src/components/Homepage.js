import React from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import ProcessSection from "./ProcessSection";
import SolutionsSection from "./SolutionsSection";
import CustomerSegments from "./CustomerSegments";
import ExpertiseSection from "./ExpertiseSection";
import Footer from "./Footer";

const Homepage = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      <HeroSection />
      <ProcessSection />
      <SolutionsSection />
      <CustomerSegments />
      <ExpertiseSection />
      <Footer />
    </div>
  );
};

export default Homepage;