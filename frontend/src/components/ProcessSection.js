import React from "react";
import { CheckCircle, Settings, Users } from "lucide-react";

const ProcessSection = () => {
  const processSteps = [
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Rechtliche Prüfung",
      subtitle: "& Einrichtung bAV",
      description: "Unter Berücksichtigung aller rechtlichen Aspekte ermitteln wir unabhängig das optimale Vorsorgemodell für Unternehmen und Mitarbeitende - individuell zugeschnitten mit innovativen Produktoptionen."
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Digitale bAV-Verwaltung",
      subtitle: "& laufender Support",
      description: "Wir richten Ihre bAV-Verwaltung ein, digitalisieren und automatisieren Ihre Prozesse, unabhängig davon ob Sie bereits eine bAV eingerichtet haben oder dies erst planen. Sie unser persönlicher Support proaktiv."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Mitarbeiterkommunikation",
      subtitle: "& (digitale) Beratung",
      description: "Wir unterstützen Sie bei der bAV-Kommunikation an Ihre Mitarbeitenden durch moderne Informationsmaßnahmen. Auf Wunsch bieten wir individuelle Beratung - digital oder vor Ort."
    }
  ];

  return (
    <section className="bg-slate-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Als Partner begleiten wir Sie entlang des gesamten bAV-Prozesses.
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
        </div>

        {/* Process steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {processSteps.map((step, index) => (
            <div key={index} className="relative">
              {/* Card */}
              <div className="bg-slate-800 rounded-lg p-8 h-full hover:bg-slate-700 transition-colors duration-300 border border-slate-700 hover:border-orange-500">
                <div className="text-orange-500 mb-6">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-orange-400 font-medium mb-4">
                  {step.subtitle}
                </p>
                <p className="text-slate-300 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Arrow connector (not on mobile, not on last item) */}
              {index < processSteps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
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

export default ProcessSection;