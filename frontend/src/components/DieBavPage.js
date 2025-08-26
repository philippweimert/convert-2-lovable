import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Shield, Users, TrendingUp, ArrowRight, Scale, Building2, AlertTriangle, CheckCircle, ChevronDown, ChevronUp } from "lucide-react";

const DieBavPage = () => {
  const [isChallengesExpanded, setIsChallengesExpanded] = useState(false);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Check if URL has hash for challenges section
    if (window.location.hash === '#herausforderungen') {
      setTimeout(() => {
        setIsChallengesExpanded(true);
        // Scroll to challenges section after a short delay
        setTimeout(() => {
          const challengesElement = document.getElementById('herausforderungen');
          if (challengesElement) {
            challengesElement.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }, 500);
    }
  }, []);

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

  const moreInfoBoxes = [
    {
      title: "Für Unternehmen",
      description: "Alles Wichtige über Pflichten, Herausforderungen, Chancen und Vorteile der bAV für Arbeitgeber.",
      icon: <Building2 className="w-6 h-6" />,
      link: "/die-bav/x",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Für Arbeitnehmer", 
      description: "Erfahren Sie, wie Sie von steuerlichen Vorteilen profitieren und Ihre Altersvorsorge optimieren.",
      icon: <Users className="w-6 h-6" />,
      link: "/die-bav/y",
      color: "from-green-500 to-green-600"
    },
    {
      title: "Aktuelles",
      description: "Bleiben Sie informiert über die neuesten Entwicklungen, Gesetze und Trends in der bAV.",
      icon: <TrendingUp className="w-6 h-6" />,
      link: "/die-bav/aktuelles",
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-acencia via-acencia to-acencia-light">
      <Header />
      
      {/* Doubled spacing from header */}
      <main className="pt-56">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            
            {/* Hero Section - kompakter */}
            <div className="text-center mb-12">
              <h1 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                die <span className="text-acencia-orange">bAV</span>
              </h1>
              <p className="text-base text-slate-200 leading-relaxed max-w-3xl mx-auto">
                Umfassende Informationen zur betrieblichen Altersvorsorge
              </p>
            </div>

            {/* Kompakte 2-Spalten-Layout für Definition und Rechtsstellung */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
              {/* Definition der betrieblichen Altersvorsorge */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center mb-4">
                  <Shield className="w-6 h-6 text-acencia-orange mr-2" />
                  <h2 className="text-lg font-semibold text-white">
                    Was ist betriebliche Altersvorsorge?
                  </h2>
                </div>
                <p className="text-slate-200 leading-relaxed text-sm mb-3">
                  Die betriebliche Altersvorsorge (bAV) ist eine Form der privaten Altersvorsorge, die über den Arbeitgeber organisiert wird. 
                  Sie ergänzt die gesetzliche Rente und bietet Arbeitnehmern die Möglichkeit, zusätzliche Rentenansprüche aufzubauen.
                </p>
                <p className="text-slate-200 leading-relaxed text-sm">
                  Seit 2002 haben alle Arbeitnehmer einen Rechtsanspruch auf betriebliche Altersvorsorge durch Entgeltumwandlung.
                </p>
              </div>

              {/* Rechtliche Stellung des Versicherungsmaklers nach HGB §93 - kompakt */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
                  <Scale className="w-5 h-5 text-acencia-orange mr-2" />
                  Rechtliche Stellung (HGB §93)
                </h3>
                <p className="text-slate-200 leading-relaxed text-sm">
                  Nach § 93 HGB ist ein Versicherungsmakler ein gewerbsmäßiger Vermittler, der von dem Versicherungsnehmer beauftragt wird, 
                  für ihn einen Versicherungsvertrag zu vermitteln oder abzuschließen. Der Makler ist rechtlich dem Kunden verpflichtet 
                  und muss dessen Interessen vertreten.
                </p>
              </div>
            </div>

            {/* Herausforderungen Ausklapp-Element */}
            <div id="herausforderungen" className="mb-12">
              <div 
                className="cursor-pointer bg-gradient-to-br from-red-600/20 to-red-700/20 rounded-2xl p-6 border border-red-500/30 hover:border-red-400/50 transition-all duration-300"
                onClick={() => setIsChallengesExpanded(!isChallengesExpanded)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center">
                      <AlertTriangle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">
                        bAV-Verwaltung ist komplex, zeitaufwendig und fehleranfällig
                      </h3>
                      <p className="text-slate-300 text-sm">
                        Klicken Sie hier, um die Herausforderungen und unsere Lösungen zu sehen
                      </p>
                    </div>
                  </div>
                  <div className="text-white">
                    {isChallengesExpanded ? (
                      <ChevronUp className="w-6 h-6" />
                    ) : (
                      <ChevronDown className="w-6 h-6" />
                    )}
                  </div>
                </div>
              </div>

              {/* Ausklappbarer Inhalt */}
              <div className={`transition-all duration-500 overflow-hidden ${
                isChallengesExpanded ? 'max-h-[2000px] opacity-100 mt-6' : 'max-h-0 opacity-0'
              }`}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Herausforderungen */}
                  <div className="bg-gradient-to-br from-red-600/10 to-red-700/10 rounded-xl p-6 border border-red-500/20">
                    <h4 className="text-lg font-bold text-white mb-4 flex items-center">
                      <AlertTriangle className="w-5 h-5 text-red-400 mr-2" />
                      Herausforderungen
                    </h4>
                    <div className="space-y-4">
                      {challenges.map((challenge, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <h5 className="text-white font-semibold text-sm mb-1">{challenge.title}</h5>
                            <p className="text-slate-300 text-xs">{challenge.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Lösungen */}
                  <div className="bg-gradient-to-br from-green-600/10 to-green-700/10 rounded-xl p-6 border border-green-500/20">
                    <h4 className="text-lg font-bold text-white mb-4 flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                      Unsere Lösungen
                    </h4>
                    <div className="space-y-4">
                      {solutions.map((solution, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                          <div>
                            <h5 className="text-white font-semibold text-sm mb-1">{solution.title}</h5>
                            <p className="text-slate-300 text-xs">{solution.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mehr erfahren Boxen */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white text-center mb-12">
                Mehr erfahren
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {moreInfoBoxes.map((box, index) => (
                  <Link 
                    key={index}
                    to={box.link}
                    className="group block"
                  >
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-xl h-full">
                      <div className={`w-12 h-12 bg-gradient-to-r ${box.color} rounded-xl flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform duration-300`}>
                        {box.icon}
                      </div>
                      
                      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-acencia-orange transition-colors duration-300">
                        {box.title}
                      </h3>
                      
                      <p className="text-slate-200 leading-relaxed mb-4">
                        {box.description}
                      </p>
                      
                      <div className="flex items-center text-acencia-orange group-hover:text-orange-300 transition-colors duration-300">
                        <span className="text-sm font-medium">Mehr erfahren</span>
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default DieBavPage;