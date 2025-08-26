import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";

const DieBavPageX = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-acencia via-acencia to-acencia-light">
      <Header />
      
      {/* Doubled spacing from header */}
      <main className="pt-56">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Unterkategorie X
              </h1>
              <p className="text-lg text-slate-200 leading-relaxed">
                Hier finden Sie Informationen zur Unterkategorie X der betrieblichen Altersvorsorge.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h2 className="text-2xl font-semibold text-white mb-4">
                Inhalt folgt
              </h2>
              <p className="text-slate-200 leading-relaxed">
                Diese Seite wird mit spezifischen Inhalten zur Unterkategorie X gefüllt.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default DieBavPageX;