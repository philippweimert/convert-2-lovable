import React, { useState } from "react";
import { 
  Zap, 
  Shield, 
  Users, 
  FileText, 
  Settings, 
  TrendingUp,
  Clock,
  CheckCircle2,
  Sparkles,
  ChevronDown,
  ChevronUp
} from "lucide-react";

const BenefitsSection = () => {
  const [expandedCards, setExpandedCards] = useState({});
  const benefits = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Vollautomatisierte Abwicklung",
      description: "Automatisierung sämtlicher bAV-Prozesse über alle Durchführungswege hinweg - minimiert Fehleranfälligkeit und reduziert den administrativen Aufwand erheblich.",
      highlight: "Bis zu 80% Zeitersparnis",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      iconBg: "bg-blue-100"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "DSGVO-konform & Rechtssicher",
      description: "Einhaltung aller gesetzlichen Bestimmungen und Datenschutzrichtlinien. Rechtssichere Verwaltung ist besonders in sensiblen Bereichen wie der Altersvorsorge essenziell.",
      highlight: "100% Compliance",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      iconBg: "bg-green-100"
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Nahtlose System-Integration",
      description: "Direkte Anbindung an bestehende HR-Systeme ermöglicht einen durchgängigen Informationsfluss ohne Medienbrüche.",
      highlight: "Plug & Play",
      color: "from-purple-500 to-violet-500",
      bgColor: "bg-purple-50",
      iconBg: "bg-purple-100"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "100% Digitale Dokumentenverwaltung",
      description: "Vollständige Digitalisierung und strukturierte Ablage aller bAV-Dokumente sorgt für schnelle Zugänglichkeit und bessere Nachvollziehbarkeit.",
      highlight: "Papierlos",
      color: "from-amber-500 to-orange-500",
      bgColor: "bg-amber-50",
      iconBg: "bg-amber-100"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Automatisierte Kommunikation",
      description: "Die Plattform übernimmt die Kommunikation mit Mitarbeitenden und Versorgungsträgern, was die Informationsweitergabe beschleunigt und standardisiert.",
      highlight: "24/7 verfügbar",
      color: "from-rose-500 to-pink-500",
      bgColor: "bg-rose-50",
      iconBg: "bg-rose-100"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Skalierbar für jede Unternehmensgröße",
      description: "Flexibel einsetzbar von Start-ups bis Konzerne. Passt sich individuell an die Bedürfnisse und das Wachstum Ihres Unternehmens an.",
      highlight: "Zukunftssicher",
      color: "from-indigo-500 to-blue-500",
      bgColor: "bg-indigo-50",
      iconBg: "bg-indigo-100"
    }
  ];

  return (
    <section className="bg-gradient-to-b from-slate-50 to-white py-24 relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-400 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced section header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-orange-100 to-amber-100 px-6 py-3 rounded-full mb-8 shadow-lg">
            <Sparkles className="w-5 h-5 text-orange-600 animate-pulse" />
            <span className="text-orange-800 font-semibold text-sm tracking-wide uppercase">Entlastung für HR-Teams</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
            <span className="text-slate-900">Warum Arbeitgeber unsere </span>
            <span className="bg-gradient-to-r from-orange-500 via-orange-600 to-red-500 bg-clip-text text-transparent">
              digitale Lösung
            </span>
            <span className="text-slate-900"> wählen</span>
          </h2>
          
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light">
            Die betriebliche Altersvorsorge ist verpflichtend, aber ihre Verwaltung muss nicht 
            komplex und zeitaufwendig sein. Unsere Plattform löst die größten Herausforderungen.
          </p>
        </div>

        {/* Enhanced benefits grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="group relative"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              {/* Card with enhanced styling */}
              <div className="bg-white rounded-3xl p-8 h-full shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:border-slate-200 relative overflow-hidden group-hover:-translate-y-2 backdrop-blur-sm">
                
                {/* Animated background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`}></div>
                
                {/* Highlight badge with improved styling */}
                <div className="absolute top-6 right-6">
                  <span className={`${benefit.bgColor} text-slate-700 px-4 py-2 rounded-full text-xs font-bold tracking-wide uppercase shadow-sm`}>
                    {benefit.highlight}
                  </span>
                </div>
                
                {/* Enhanced icon */}
                <div className={`${benefit.iconBg} rounded-2xl p-4 mb-6 inline-block group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                  <div className="text-slate-700 group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-slate-900 mb-4 leading-tight group-hover:text-slate-800 transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                  {benefit.description}
                </p>

                {/* Animated bottom accent */}
                <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${benefit.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                
                {/* Corner decoration */}
                <div className="absolute top-4 left-4 w-2 h-2 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BenefitsSection;