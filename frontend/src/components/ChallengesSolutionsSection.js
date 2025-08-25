import React, { useState } from 'react';
import { Shield, ArrowRight, ChevronDown, ChevronUp, AlertTriangle, CheckCircle } from 'lucide-react';

const ChallengesSolutionsSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  // Data from InteractiveMainSections herausforderung content
  const challenges = [
    {
      title: "Komplexe Verwaltung",
      description: "bAV-Verwaltung ist administrativ sehr komplex und fehleranfällig"
    },
    {
      title: "Zeitaufwand", 
      description: "Manuelle Prozesse binden wertvolle HR-Ressourcen"
    },
    {
      title: "Rechtsunsicherheit",
      description: "Ständige Gesetzesänderungen erfordern permanente Überwachung"
    },
    {
      title: "Systembrüche",
      description: "Fehlende Integration führt zu Medienbrüchen und Doppelerfassung"
    }
  ];

  const solutions = [
    {
      title: "Digitale Automatisierung",
      description: "Vollautomatisierte Abwicklung eliminiert Fehlerquellen"
    },
    {
      title: "HR-Entlastung",
      description: "Bis zu 80% Zeitersparnis durch intelligente Automatisierung" 
    },
    {
      title: "Compliance-Sicherheit",
      description: "Immer aktuell und rechtssicher durch permanente Updates"
    },
    {
      title: "Nahtlose Integration", 
      description: "Durchgängiger Datenfluss in bestehende HR-Systeme"
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

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Compact Expandable Header */}
        <div 
          className="cursor-pointer bg-gradient-to-br from-slate-800 to-slate-700 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-400 border border-slate-600 hover:border-orange-500"
          onClick={toggleExpanded}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-2xl flex items-center justify-center">
                <AlertTriangle className="w-8 h-8 text-white" />
              </div>

              {/* Title */}
              <div>
                <h2 className="text-xl lg:text-2xl font-bold text-white mb-2">
                  bAV-Verwaltung ist <span className="text-red-400">komplex, zeitaufwendig</span><br/>
                  und <span className="text-red-400">fehleranfällig</span>
                </h2>
                <p className="text-slate-300 text-base">
                  Die betriebliche Altersvorsorge ist für Unternehmen verpflichtend, aber die Verwaltung 
                  stellt HR-Teams vor große Herausforderungen.
                </p>
              </div>
            </div>

            {/* Expand/Collapse indicator */}
            <div className={`text-slate-400 transition-all duration-300 ${
              isExpanded ? 'rotate-180 text-orange-400' : 'hover:text-orange-400'
            }`}>
              <ChevronDown className="w-8 h-8" />
            </div>
          </div>

          {/* Click hint */}
          <div className="mt-4 text-center">
            <p className="text-sm text-slate-500">
              {isExpanded ? 'Klicken zum Einklappen' : 'Klicken um Herausforderungen vs. Lösungen zu sehen'}
            </p>
          </div>
        </div>

        {/* Expandable Content */}
        <div className={`overflow-hidden transition-all duration-700 ${
          isExpanded ? 'max-h-[800px] opacity-100 mt-8' : 'max-h-0 opacity-0'
        }`}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Challenges */}
            <div>
              <h5 className="text-lg font-bold text-white mb-6 flex items-center">
                <span className="w-3 h-3 bg-red-500 rounded-full mr-3"></span>
                Typische Probleme
              </h5>
              <div className="space-y-4">
                {challenges.map((challenge, index) => (
                  <div key={index} className="bg-red-900/30 border-l-4 border-red-400 p-4 rounded-r-xl backdrop-blur-sm">
                    <h6 className="font-semibold text-red-300 mb-2 text-base">{challenge.title}</h6>
                    <p className="text-red-200 text-sm">{challenge.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Arrow */}
            <div className="flex items-center justify-center">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mb-4 shadow-lg">
                  <ArrowRight className="w-8 h-8 text-white lg:rotate-0 rotate-90" />
                </div>
                <span className="text-orange-400 font-bold text-center text-base">
                  ACENCIA<br/>Lösung
                </span>
              </div>
            </div>

            {/* Solutions */}
            <div>
              <h5 className="text-lg font-bold text-white mb-6 flex items-center">
                <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
                Unsere Antworten
              </h5>
              <div className="space-y-4">
                {solutions.map((solution, index) => (
                  <div key={index} className="bg-green-900/30 border-l-4 border-green-400 p-4 rounded-r-xl backdrop-blur-sm">
                    <h6 className="font-semibold text-green-300 mb-2 text-base">{solution.title}</h6>
                    <p className="text-green-200 text-sm">{solution.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChallengesSolutionsSection;