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
    <section className="bg-gradient-to-br from-acencia-blue-light via-white to-acencia-blue-light py-20 relative overflow-hidden">
      {/* Subtle geometric background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <svg className="absolute top-10 right-10 w-80 h-80" viewBox="0 0 400 400">
          <defs>
            <pattern id="processPattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="15" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-acencia" />
            </pattern>
          </defs>
          <rect width="400" height="400" fill="url(#processPattern)" />
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-6 font-heading">
            Wir begleiten Sie entlang des gesamten 
            <span className="text-emphasis"> bAV-Prozesses</span>
          </h2>
          <p className="text-body-large text-slate-600 max-w-3xl mx-auto">
            Von der rechtlichen Einrichtung bis zur vollständigen Digitalisierung - 
            wir machen bAV einfach und effizient.
          </p>
        </div>

        {/* 3-Step Process - Horizontal Expandable */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          {processSteps.map((step, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-400 border border-slate-200 hover:border-orange-300">
              {/* Compact Header - Always visible */}
              <div 
                className="p-6 cursor-pointer"
                onClick={() => toggleStep(index)}
              >
                <div className="flex flex-col items-center text-center">
                  {/* Step Number */}
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg mb-4">
                    {index + 1}
                  </div>
                  
                  {/* Icon */}
                  <div className="bg-gradient-to-br from-orange-100 to-amber-100 rounded-xl p-3 mb-4">
                    <div className="text-orange-600">
                      {step.icon}
                    </div>
                  </div>

                  {/* Title */}
                  <div className="mb-4">
                    <h3 className="text-lg font-bold text-slate-900 text-headline mb-2">
                      {step.title}
                    </h3>
                    <p className="text-orange-600 font-medium text-body text-sm">
                      {step.subtitle}
                    </p>
                  </div>

                  {/* Expand/Collapse indicator */}
                  <div className={`text-slate-400 transition-all duration-300 ${
                    expandedStep === index ? 'rotate-180 text-orange-500' : 'hover:text-slate-600'
                  }`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Expandable Content */}
              <div className={`overflow-hidden transition-all duration-500 ${
                expandedStep === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-6 pb-6 border-t border-slate-100">
                  <div className="pt-6">
                    <p className="text-slate-600 text-body-small leading-relaxed mb-6">
                      {step.description}
                    </p>

                    {/* Key Points */}
                    <div className="space-y-2">
                      <h4 className="text-caption text-slate-500 font-semibold uppercase tracking-wider mb-3">
                        Zentrale Vorteile:
                      </h4>
                      {step.keyPoints.map((point, pointIndex) => (
                        <div key={pointIndex} className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-700 text-body-small">{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Arrow connecting to next step (only for first two steps) */}
              {index < processSteps.length - 1 && (
                <div className="absolute -right-3 top-1/3 transform -translate-y-1/2 hidden lg:block z-20">
                  <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ThreeStepProcessSection;