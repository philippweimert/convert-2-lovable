import React from "react";
import Header from "./Header";
import CustomerSegments from "./CustomerSegments";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-acencia via-acencia to-acencia-light">
      <Header />
      
      {/* Doubled spacing from header */}
      <div className="pt-32">
        {/* Hero Section - Platzhalter für zukünftigen Content */}
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-8">
              Willkommen bei <span className="text-acencia-orange">ACENCIA</span>
            </h1>
            <p className="text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed">
              Ihre Experten für betriebliche Altersvorsorge
            </p>
          </div>
        </div>
        
        {/* Unsere Kunden vertrauen uns Sektion */}
        <CustomerSegments />
        
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;