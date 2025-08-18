import React from "react";
import { Button } from "./ui/button";

const ExpertiseSection = () => {
  return (
    <section className="bg-orange-500 py-16 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute bottom-0 left-0 w-full h-2 bg-orange-600"></div>
        <svg className="absolute bottom-0 right-0 w-64 h-32" viewBox="0 0 300 150">
          <polygon points="0,150 300,150 300,75 150,0 0,75" 
                   fill="rgba(255,255,255,0.1)"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ihre Experten für betriebliche Altersvorsorge
          </h2>
          <p className="text-lg text-orange-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Mit über 30 Jahren Erfahrung unterstützen wir Unternehmen dabei, 
            die betriebliche Altersvorsorge effizient und rechtssicher zu verwalten.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="text-left">
              <h3 className="text-xl font-bold text-white mb-4">Unsere Expertise zeichnet uns aus.</h3>
              <ul className="space-y-3 text-orange-100">
                <li className="flex items-start">
                  <span className="text-white mr-3">•</span>
                  Über 30 Jahre Erfahrung in der betrieblichen Altersvorsorge
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-3">•</span>
                  Digitale Lösungen für moderne Unternehmen
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-3">•</span>
                  Persönliche Betreuung und Support
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-3">•</span>
                  Rechtssichere und compliance-konforme Abwicklung
                </li>
              </ul>
            </div>
            
            <div className="flex items-center justify-center">
              <Button 
                size="lg"
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-orange-500 px-8 py-3 text-lg font-medium rounded-md transition-all duration-300 hover:scale-105"
                onClick={() => window.open('https://outlook.office365.com/owa/calendar/ACENCIAde@acencia.de/bookings/', '_blank')}
              >
                Jetzt beraten lassen
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;