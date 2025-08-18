import React from "react";
import { Button } from "./ui/button";
import { CheckCircle, Clock, Shield } from "lucide-react";

const HeroSection = () => {
  const quickBenefits = [
    { icon: <CheckCircle className="w-5 h-5" />, text: "100% digitale Verwaltung" },
    { icon: <Clock className="w-5 h-5" />, text: "Vollautomatisierte Prozesse" },
    { icon: <Shield className="w-5 h-5" />, text: "DSGVO-konform & rechtssicher" }
  ];

  return (
    <section className="relative bg-slate-900 min-h-[75vh] flex items-center overflow-hidden">
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
            <div className="mb-6">
              <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                Digitale bAV-Lösung
              </span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Wir machen<br />
              <span className="text-orange-500">bAV einfach!</span>
            </h1>
            <p className="text-lg text-slate-300 mb-6 max-w-md leading-relaxed">
              Entlasten Sie Ihr HR-Team mit unserer vollautomatisierten, 
              digitalen All-in-One-Plattform für die betriebliche Altersvorsorge.
            </p>
            
            {/* Quick benefits */}
            <div className="space-y-3 mb-8">
              {quickBenefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="text-orange-500">
                    {benefit.icon}
                  </div>
                  <span className="text-slate-200">{benefit.text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg font-medium rounded-md transition-all duration-300 hover:scale-105"
                onClick={() => window.open('https://outlook.office365.com/owa/calendar/ACENCIAde@acencia.de/bookings/', '_blank')}
              >
                Kostenlose Demo buchen
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-slate-300 text-slate-300 hover:bg-slate-300 hover:text-slate-900 px-8 py-3 text-lg font-medium rounded-md transition-all duration-300"
                onClick={() => window.open('https://outlook.office365.com/owa/calendar/ACENCIAde@acencia.de/bookings/', '_blank')}
              >
                Jetzt beraten lassen
              </Button>
            </div>
          </div>

          {/* Right content - Video placeholder */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md aspect-video bg-black rounded-lg flex items-center justify-center border-2 border-slate-700 hover:border-orange-500 transition-colors duration-300 relative overflow-hidden">
              {/* Background pattern for video area */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900"></div>
              <div className="text-center relative z-10">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-orange-600 cursor-pointer transition-colors duration-200 group">
                  <svg className="w-6 h-6 text-white ml-1 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <p className="text-slate-400 text-sm font-medium">Produktdemo ansehen</p>
                <p className="text-slate-500 text-xs mt-1">2 Minuten Überblick</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;