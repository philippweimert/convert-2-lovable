import React from 'react';
import { Shield, ArrowRight } from 'lucide-react';

const ChallengesSolutionsSection = () => {
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
    <section className="bg-slate-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h4 className="text-2xl font-bold text-white mb-3">
            bAV-Verwaltung ist <span className="text-red-400">komplex, zeitaufwendig</span><br/>
            und <span className="text-red-400">fehleranfällig</span>
          </h4>
          <p className="text-slate-300">
            Die betriebliche Altersvorsorge ist für Unternehmen verpflichtend, aber die Verwaltung 
            stellt HR-Teams vor große Herausforderungen.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Challenges */}
          <div>
            <h5 className="text-lg font-bold text-white mb-4 flex items-center">
              <span className="w-3 h-3 bg-red-500 rounded-full mr-3"></span>
              Typische Probleme
            </h5>
            <div className="space-y-3">
              {challenges.map((challenge, index) => (
                <div key={index} className="bg-red-900/30 border-l-4 border-red-400 p-3 rounded-r-lg">
                  <h6 className="font-semibold text-red-300 mb-1 text-sm">{challenge.title}</h6>
                  <p className="text-red-200 text-xs">{challenge.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Arrow */}
          <div className="flex items-center justify-center">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mb-3">
                <ArrowRight className="w-6 h-6 text-white lg:rotate-0 rotate-90" />
              </div>
              <span className="text-orange-400 font-semibold text-center text-sm">
                ACENCIA<br/>Lösung
              </span>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h5 className="text-lg font-bold text-white mb-4 flex items-center">
              <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
              Unsere Antworten
            </h5>
            <div className="space-y-3">
              {solutions.map((solution, index) => (
                <div key={index} className="bg-green-900/30 border-l-4 border-green-400 p-3 rounded-r-lg">
                  <h6 className="font-semibold text-green-300 mb-1 text-sm">{solution.title}</h6>
                  <p className="text-green-200 text-xs">{solution.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChallengesSolutionsSection;