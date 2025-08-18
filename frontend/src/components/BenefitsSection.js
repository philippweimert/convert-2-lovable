import React from "react";
import { 
  Zap, 
  Shield, 
  Users, 
  FileText, 
  Settings, 
  TrendingUp,
  Clock,
  CheckCircle2
} from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Vollautomatisierte Abwicklung",
      description: "Automatisierung sämtlicher bAV-Prozesse über alle Durchführungswege hinweg - minimiert Fehleranfälligkeit und reduziert den administrativen Aufwand erheblich.",
      highlight: "Bis zu 80% Zeitersparnis"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "DSGVO-konform & Rechtssicher",
      description: "Einhaltung aller gesetzlichen Bestimmungen und Datenschutzrichtlinien. Rechtssichere Verwaltung ist besonders in sensiblen Bereichen wie der Altersvorsorge essenziell.",
      highlight: "100% Compliance"
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Nahtlose System-Integration",
      description: "Direkte Anbindung an bestehende HR- und Lohnbuchhaltungssysteme ermöglicht einen durchgängigen Informationsfluss ohne Medienbrüche.",
      highlight: "Plug & Play"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "100% Digitale Dokumentenverwaltung",
      description: "Vollständige Digitalisierung und strukturierte Ablage aller bAV-Dokumente sorgt für schnelle Zugänglichkeit und bessere Nachvollziehbarkeit.",
      highlight: "Papierlos"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Automatisierte Kommunikation",
      description: "Die Plattform übernimmt die Kommunikation mit Mitarbeitenden und Versorgungsträgern, was die Informationsweitergabe beschleunigt und standardisiert.",
      highlight: "24/7 verfügbar"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Skalierbar für jede Unternehmensgröße",
      description: "Flexibel einsetzbar von Start-ups bis Konzerne. Passt sich individuell an die Bedürfnisse und das Wachstum Ihres Unternehmens an.",
      highlight: "Zukunftssicher"
    }
  ];

  return (
    <section className="bg-slate-100 py-20 relative overflow-hidden">
      {/* Background geometric shapes */}
      <div className="absolute inset-0 opacity-5">
        <svg className="absolute top-0 left-0 w-96 h-96" viewBox="0 0 400 400">
          <polygon points="50,200 150,50 350,50 350,350 150,350" 
                   fill="none" stroke="rgb(15 23 42)" strokeWidth="2"/>
        </svg>
        <svg className="absolute bottom-0 right-0 w-64 h-64" viewBox="0 0 300 300">
          <circle cx="150" cy="150" r="100" fill="none" stroke="rgb(15 23 42)" strokeWidth="1"/>
          <circle cx="150" cy="150" r="50" fill="none" stroke="rgb(15 23 42)" strokeWidth="1"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-orange-100 px-4 py-2 rounded-full mb-6">
            <Clock className="w-4 h-4 text-orange-600" />
            <span className="text-orange-800 font-medium text-sm">Entlastung für HR-Teams</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6">
            Warum Arbeitgeber unsere <span className="text-orange-500">digitale Lösung</span> wählen
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Die betriebliche Altersvorsorge ist verpflichtend, aber ihre Verwaltung muss nicht 
            komplex und zeitaufwendig sein. Unsere Plattform löst die größten Herausforderungen.
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-2xl p-8 h-full shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-orange-200 relative overflow-hidden">
                {/* Highlight badge */}
                <div className="absolute top-4 right-4">
                  <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-semibold">
                    {benefit.highlight}
                  </span>
                </div>
                
                {/* Icon */}
                <div className="text-orange-500 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-slate-900 mb-4 leading-tight">
                  {benefit.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {benefit.description}
                </p>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-orange-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-slate-900 rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <CheckCircle2 className="w-6 h-6 text-orange-500" />
              <span className="text-orange-400 font-medium">Bereit für die Digitalisierung?</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Erleben Sie die Zukunft der bAV-Verwaltung
            </h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Lassen Sie sich in einer kostenlosen Demo zeigen, wie Sie Ihr HR-Team entlasten 
              und die bAV-Verwaltung vollständig digitalisieren können.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                onClick={() => window.open('https://outlook.office365.com/owa/calendar/ACENCIAde@acencia.de/bookings/', '_blank')}
              >
                Kostenlose Demo buchen
              </button>
              <button 
                className="border-2 border-slate-600 text-slate-300 hover:bg-slate-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                onClick={() => window.open('https://outlook.office365.com/owa/calendar/ACENCIAde@acencia.de/bookings/', '_blank')}
              >
                Beratung vereinbaren
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;