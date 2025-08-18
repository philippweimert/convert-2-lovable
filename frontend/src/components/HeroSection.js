import React from "react";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <section className="relative bg-slate-900 min-h-[70vh] flex items-center overflow-hidden">
      {/* Geometric background patterns */}
      <div className="absolute inset-0 opacity-10">
        <svg className="absolute top-20 right-0 w-96 h-96" viewBox="0 0 400 400">
          <polygon points="200,50 350,150 350,250 200,350 50,250 50,150" 
                   fill="none" stroke="white" strokeWidth="2"/>
          <polygon points="150,100 250,100 300,173 250,247 150,247 100,173" 
                   fill="none" stroke="white" strokeWidth="1"/>
        </svg>
        <svg className="absolute bottom-20 left-0 w-64 h-64" viewBox="0 0 300 300">
          <polygon points="150,30 270,120 270,180 150,270 30,180 30,120" 
                   fill="none" stroke="white" strokeWidth="1"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-left">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Wir machen<br />
              <span className="text-orange-500">bAV einfach!</span>
            </h1>
            <p className="text-lg text-slate-300 mb-8 max-w-md leading-relaxed">
              Als echter Partner machen wir die betriebliche Vorsorge zum Highlight für Personalabteilung und Mitarbeitende.
            </p>
            <Button 
              size="lg"
              className="bg-slate-200 hover:bg-white text-slate-900 px-8 py-3 text-lg font-medium rounded-md transition-all duration-300 hover:scale-105"
              onClick={() => window.open('https://outlook.office365.com/owa/calendar/ACENCIAde@acencia.de/bookings/', '_blank')}
            >
              Jetzt Termin vereinbaren
            </Button>
          </div>

          {/* Right content - Video placeholder */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md aspect-video bg-black rounded-lg flex items-center justify-center border-2 border-slate-700 hover:border-orange-500 transition-colors duration-300">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-orange-600 cursor-pointer transition-colors duration-200">
                  <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <p className="text-slate-400 text-sm">Video abspielen</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;