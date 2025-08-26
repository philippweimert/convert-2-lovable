import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";

const DieBavPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-acencia via-acencia to-acencia-light">
      <Header />
      
      {/* Doubled spacing from header */}
      <main className="pt-56">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-8">
              die bAV
            </h1>
            <p className="text-lg text-slate-200 leading-relaxed">
              Diese Seite ist in Entwicklung. Bitte wählen Sie eine der Unterkategorien aus dem Menü.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default DieBavPage;