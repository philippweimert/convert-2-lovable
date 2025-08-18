import React from "react";
import { Rocket, Building, Building2, Users, ArrowRight, CheckCircle } from "lucide-react";

const CustomerSegments = () => {
  const segments = [
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Start-up",
      subtitle: "5-50 Mitarbeiter",
      description: "Flexible und skalierbare bAV-Lösungen für junge Unternehmen mit schnellem Wachstum",
      features: [
        "Schnelle Implementierung",
        "Skalierbare Architektur",
        "Kostengünstige Einstiegslösung",
        "Wachstum mitdenken"
      ],
      highlight: "Flexibel & Skalierbar",
      color: "blue"
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Mittelstand",
      subtitle: "50-1000 Mitarbeiter",
      description: "Bewährte Konzepte für etablierte mittelständische Betriebe mit komplexeren Anforderungen",
      features: [
        "Umfassende Integration",
        "Erweiterte Automatisierung",
        "Multi-Standort-Fähigkeit",
        "Individuelle Anpassungen"
      ],
      highlight: "Bewährt & Effizient",
      color: "orange"
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Konzern",
      subtitle: "1000+ Mitarbeiter",
      description: "Komplexe Enterprise-Lösungen für große Unternehmensstrukturen mit höchsten Anforderungen",
      features: [
        "Enterprise-Integration",
        "Multi-Mandanten-Fähigkeit",
        "Erweiterte Compliance",
        "Dedizierter Support"
      ],
      highlight: "Enterprise & Komplex",
      color: "purple"
    }
  ];

  const getColorClasses = (color) => {
    switch(color) {
      case 'blue':
        return {
          bg: 'bg-blue-500',
          hoverBg: 'hover:bg-blue-600',
          accent: 'bg-blue-100',
          text: 'text-blue-700',
          border: 'border-blue-200'
        };
      case 'orange':
        return {
          bg: 'bg-orange-500',
          hoverBg: 'hover:bg-orange-600',
          accent: 'bg-orange-100',
          text: 'text-orange-700',
          border: 'border-orange-200'
        };
      case 'purple':
        return {
          bg: 'bg-purple-500',
          hoverBg: 'hover:bg-purple-600',
          accent: 'bg-purple-100',
          text: 'text-purple-700',
          border: 'border-purple-200'
        };
      default:
        return {
          bg: 'bg-slate-500',
          hoverBg: 'hover:bg-slate-600',
          accent: 'bg-slate-100',
          text: 'text-slate-700',
          border: 'border-slate-200'
        };
    }
  };

  return (
    <section className="bg-slate-100 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-slate-200 px-4 py-2 rounded-full mb-6">
            <Users className="w-4 h-4 text-slate-600" />
            <span className="text-slate-700 font-medium text-sm">Für jede Unternehmensgröße</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
            Unsere <span className="text-orange-500">Kunden</span> vertrauen uns
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Von Start-ups bis zu Konzernen - unsere digitale bAV-Plattform ist 
            skalierbar und passt sich flexibel an Ihre individuellen Bedürfnisse an.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {segments.map((segment, index) => {
            const colors = getColorClasses(segment.color);
            
            return (
              <div key={index} className="group relative">
                <div className={`bg-white rounded-2xl overflow-hidden shadow-sm border-2 ${colors.border} hover:shadow-xl transition-all duration-300 hover:scale-105 h-full`}>
                  {/* Header */}
                  <div className={`${colors.bg} p-6 relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-10 -mt-10"></div>
                    <div className="relative z-10">
                      <div className="text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                        {segment.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-1">{segment.title}</h3>
                      <p className="text-white/80 text-sm">{segment.subtitle}</p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className={`${colors.accent} rounded-lg px-3 py-1 inline-block mb-4`}>
                      <span className={`${colors.text} font-semibold text-sm`}>
                        {segment.highlight}
                      </span>
                    </div>
                    
                    <p className="text-slate-600 leading-relaxed mb-6">
                      {segment.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-3 mb-6">
                      <h4 className="font-semibold text-slate-800 text-sm uppercase tracking-wider">
                        Kernfunktionen:
                      </h4>
                      {segment.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className={`w-4 h-4 ${colors.bg.replace('bg-', 'text-')} flex-shrink-0`} />
                          <span className="text-slate-600 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <button 
                      className={`w-full ${colors.bg} ${colors.hoverBg} text-white py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2 group`}
                      onClick={() => window.open('https://outlook.office365.com/owa/calendar/ACENCIAde@acencia.de/bookings/', '_blank')}
                    >
                      <span>Lösungen erkunden</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom section */}
        <div className="mt-16 text-center">
          <div className="bg-slate-900 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Unsicher, welche Lösung für Sie die richtige ist?
            </h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Lassen Sie uns gemeinsam die optimale bAV-Lösung für Ihr Unternehmen finden. 
              In einem kostenlosen Beratungsgespräch analysieren wir Ihre Anforderungen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                onClick={() => window.open('https://outlook.office365.com/owa/calendar/ACENCIAde@acencia.de/bookings/', '_blank')}
              >
                Kostenlose Beratung
              </button>
              <button 
                className="border-2 border-slate-600 text-slate-300 hover:bg-slate-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                onClick={() => window.open('https://outlook.office365.com/owa/calendar/ACENCIAde@acencia.de/bookings/', '_blank')}
              >
                Demo anfordern
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerSegments;