import React from "react";

const SolutionsSection = () => {
  return (
    <section className="bg-slate-100 py-16 relative overflow-hidden">
      {/* Background geometric shapes */}
      <div className="absolute inset-0 opacity-5">
        <svg className="absolute top-0 left-0 w-96 h-96" viewBox="0 0 400 400">
          <polygon points="50,200 150,50 350,50 350,350 150,350" 
                   fill="none" stroke="rgb(15 23 42)" strokeWidth="2"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
            Die individuell passende Lösung für Ihr Unternehmen.
          </h2>
          <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Egal ob Kleinunternehmen, Start-up, Mittelstand oder Konzern, ausgehend von Ihren individuellen 
            Herausforderungen, bieten wir maßgeschneiderte Lösungskonzepte für die digitale bAV-Verwaltung.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;