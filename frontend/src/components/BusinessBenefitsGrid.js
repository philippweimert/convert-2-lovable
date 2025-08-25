import React from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  Building2, 
  Network, 
  Handshake, 
  Coffee,
  ArrowRight
} from 'lucide-react';
import { Button } from './ui/button';

const BusinessBenefitsGrid = () => {
  const benefits = [
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Reduktion von Kosten und Aufwänden",
      description: "Wir digitalisieren und vereinfachen Ihre laufenden Verwaltungsprozesse, auf Basis eines kostenneutralen Modells."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Unternehmerische Effizienzsteigerung", 
      description: "Wir übernehmen das 'Daily Business' Ihrer bAV-Verwaltung, dadurch können Sie sich stärker auf Ihr Kerngeschäft fokussieren."
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Minimierung von Haftungsrisiken",
      description: "Wir übernehmen komplexe rechtliche Prüfprozesse und minimieren Haftungsrisiken - heute und in Zukunft."
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: "Erhöhte Bearbeitungsgeschwindigkeit",
      description: "Wir automatisieren Ihre Workflows und übernehmen alle wichtigen Prozesse in der laufenden bAV-Verwaltung."
    },
    {
      icon: <Handshake className="w-8 h-8" />,
      title: "Mitarbeiterbindung und -motivation",
      description: "Innovative Vorsorgemodelle sowie eine moderne Mitarbeiterkommunikation und -beratung bieten attraktive Benefits."
    },
    {
      icon: <Coffee className="w-8 h-8" />,
      title: "Entlastung der Personalabteilung", 
      description: "Unser persönlicher Support unterstützt Sie als Partner proaktiv bei Anpassungs- oder Veränderungsmaßnahmen."
    }
  ];

  return (
    <section className="bg-slate-900 py-20 relative overflow-hidden">
      {/* Background design similar to hero section */}
      <div className="absolute inset-0 opacity-[0.05]">
        <svg className="absolute top-20 right-0 w-96 h-96" viewBox="0 0 400 400">
          <polygon points="200,50 350,150 350,250 200,350 50,250 50,150" 
                   fill="none" stroke="white" strokeWidth="2"/>
        </svg>
        <svg className="absolute bottom-20 left-0 w-80 h-80" viewBox="0 0 400 400">
          <polygon points="200,30 320,120 320,200 200,290 80,200 80,120" 
                   fill="none" stroke="#f97316" strokeWidth="1"/>
        </svg>
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-orange-400 rounded-full animate-ping"></div>
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-orange-400 rounded-full animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ihre <span className="text-orange-400">Vorteile</span> auf einen Blick
          </h2>
          <p className="text-slate-300 max-w-3xl mx-auto text-lg">
            Warum sich Unternehmen für unsere digitale bAV-Lösung entscheiden
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center group">
              {/* Hexagon-inspired container */}
              <div className="relative mb-6">
                <div className="w-24 h-24 mx-auto bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl flex items-center justify-center group-hover:from-orange-600 group-hover:to-orange-700 transition-all duration-400 border border-slate-600 group-hover:border-orange-500 shadow-lg">
                  <div className="text-orange-400 group-hover:text-white transition-colors duration-400">
                    {benefit.icon}
                  </div>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-white mb-4 leading-tight group-hover:text-orange-400 transition-colors duration-300">
                {benefit.title}
              </h3>

              {/* Description */}
              <p className="text-slate-300 text-sm leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Button 
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-400 hover:scale-105 shadow-lg"
            onClick={() => window.open('https://outlook.office365.com/owa/calendar/ACENCIAde@acencia.de/bookings/', '_blank')}
          >
            Jetzt Termin vereinbaren
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BusinessBenefitsGrid;