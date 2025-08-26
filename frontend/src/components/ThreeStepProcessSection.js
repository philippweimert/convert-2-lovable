import React, { useState } from 'react';
import { CheckCircle, Settings, Users, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from './ui/button';

const ThreeStepProcessSection = () => {
  const [expandedStep, setExpandedStep] = useState(null);

  const toggleStep = (index) => {
    setExpandedStep(expandedStep === index ? null : index);
  };
  const processSteps = [
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Rechtliche Prüfung",
      subtitle: "& Einrichtung bAV",
      description: "Unter Berücksichtigung aller rechtlichen Aspekte ermitteln wir unabhängig das optimale Vorsorgemodell für Unternehmen und Mitarbeitende - individuell zugeschnitten mit innovativen Produktoptionen.",
      keyPoints: [
        "Vollständige Compliance-Prüfung",
        "Individuelle Bedarfsanalyse", 
        "Rechtssichere Dokumentation"
      ]
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Digitale bAV-Verwaltung",
      subtitle: "& laufender Support",
      description: "Wir richten Ihre bAV-Verwaltung ein, digitalisieren und automatisieren Ihre Prozesse. Nahtlose Integration in bestehende HR-Systeme und vollautomatisierte Abwicklung aller Prozesse.",
      keyPoints: [
        "System-Integration (HR)",
        "Vollautomatisierte Prozesse",
        "24/7 digitaler Support"
      ]
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Mitarbeiterkommunikation",
      subtitle: "& (digitale) Beratung", 
      description: "Automatisierte Kommunikation mit Mitarbeitenden und Versorgungsträgern. Moderne Informationsmaßnahmen und auf Wunsch individuelle Beratung - digital oder vor Ort.",
      keyPoints: [
        "Automatisierte Kommunikation",
        "Digitale Mitarbeiter-Portale",
        "Persönliche Beratung verfügbar"
      ]
    }
  ];

  return (
    <section className="bg-gradient-to-b from-acencia-blue via-white to-acencia-blue-light py-12 relative overflow-hidden">
      {/* Geometrische Hintergrundmuster in Blau */}
      <div className="absolute inset-0 opacity-[0.08]">
        <svg className="absolute top-10 left-0 w-80 h-80" viewBox="0 0 400 400">
          <polygon points="200,30 330,130 330,230 200,330 70,230 70,130" 
                   fill="none" stroke="#98a9c3" strokeWidth="2"/>
        </svg>
        <svg className="absolute bottom-10 right-0 w-64 h-64 animate-pulse" viewBox="0 0 400 400" style={{animationDuration: '4s'}}>
          <polygon points="200,50 300,100 300,200 200,250 100,200 100,100" 
                   fill="none" stroke="#98a9c3" strokeWidth="2"/>
        </svg>
        <svg className="absolute top-1/2 left-1/2 w-48 h-48 transform -translate-x-1/2 -translate-y-1/2 animate-bounce" viewBox="0 0 400 400" style={{animationDuration: '5s'}}>
          <polygon points="200,80 280,140 280,220 200,280 120,220 120,140" 
                   fill="none" stroke="#e3ebf2" strokeWidth="1"/>
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header - kompakter */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4 font-heading">
            Wir begleiten Sie entlang des gesamten <span className="text-acencia-orange">bAV-Prozesses</span>
          </h2>
          <p className="text-slate-600 max-w-3xl mx-auto text-base leading-relaxed font-body">
            Von der rechtlichen Einrichtung bis zur vollständigen Digitalisierung - wir machen bAV einfach und effizient.
          </p>
        </div>

        {/* Flache Steps mit Schrittzahlen zwischen den Boxen */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-center">
          
          {/* Schritt 1 */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 h-full border border-slate-100">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-acencia to-acencia-blue rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2 font-heading">Rechtliche Prüfung</h3>
                <p className="text-sm text-acencia-orange font-medium mb-3">& Einrichtung bAV</p>
                <p className="text-slate-600 text-sm leading-relaxed font-body">
                  Vollständige rechtliche Analyse und compliant Einrichtung Ihrer betrieblichen Altersvorsorge.
                </p>
              </div>
            </div>
          </div>

          {/* Schrittzahl 1 */}
          <div className="lg:col-span-1 flex justify-center">
            <div className="w-12 h-12 bg-acencia-orange text-white rounded-full flex items-center justify-center font-bold text-lg font-heading">
              1
            </div>
          </div>

          {/* Schritt 2 */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 h-full border border-slate-100">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-acencia to-acencia-blue rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2 font-heading">Digitale bAV-Verwaltung</h3>
                <p className="text-sm text-acencia-orange font-medium mb-3">& laufender Support</p>
                <p className="text-slate-600 text-sm leading-relaxed font-body">
                  Vollautomatisierte Verwaltung mit unserer digitalen Plattform und kontinuierlicher Betreuung.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Zweite Reihe */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-center mt-6">
          
          {/* Schrittzahl 2 */}
          <div className="lg:col-span-1 lg:col-start-2 flex justify-center">
            <div className="w-12 h-12 bg-acencia-orange text-white rounded-full flex items-center justify-center font-bold text-lg font-heading">
              2
            </div>
          </div>

          {/* Schritt 3 */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 h-full border border-slate-100">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-acencia to-acencia-blue rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2 font-heading">Mitarbeiterkommunikation</h3>
                <p className="text-sm text-acencia-orange font-medium mb-3">& (digitale) Beratung</p>
                <p className="text-slate-600 text-sm leading-relaxed font-body">
                  Professionelle Kommunikation und individuelle Beratung für Ihre Mitarbeitenden.
                </p>
              </div>
            </div>
          </div>

          {/* Schrittzahl 3 */}
          <div className="lg:col-span-1 flex justify-center">
            <div className="w-12 h-12 bg-acencia-orange text-white rounded-full flex items-center justify-center font-bold text-lg font-heading">
              3
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ThreeStepProcessSection;