import React, { useState } from 'react';
import { 
  Sparkles, 
  CheckCircle, 
  Settings, 
  Users, 
  ArrowRight, 
  TrendingUp,
  Building,
  Factory,
  Briefcase,
  ChevronDown,
  ChevronUp,
  Zap,
  FileText,
  Shield
} from 'lucide-react';
import { Link } from 'react-router-dom';

const InteractiveMainSections = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [expandedCards, setExpandedCards] = useState({});

  const toggleCard = (index) => {
    setExpandedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  // Ursprüngliche ausklappbare Benefits
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

  // Die drei Hauptbereiche 
  const mainSections = [
    {
      id: 'herausforderung',
      title: 'Die Herausforderung',
      subtitle: 'Komplexe bAV-Verwaltung belastet HR-Teams',
      description: 'bAV ist verpflichtend, aber die Verwaltung ist komplex, zeitaufwendig und fehleranfällig',
      icon: <Shield className="w-8 h-8" />,
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50',
      iconBg: 'bg-red-100',
      content: {
        challenges: [
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
        ],
        solutions: [
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
        ]
      }
    },
    {
      id: 'prozess',
      title: 'Unser 3-Stufen-Prozess',
      subtitle: 'Wie wir Sie zum Erfolg führen',
      description: 'Von der rechtlichen Einrichtung bis zur vollständigen Digitalisierung',
      icon: <Settings className="w-8 h-8" />,
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      iconBg: 'bg-orange-100',
      content: {
        processSteps: [
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
        ]
      }
    },
    {
      id: 'loesung',
      title: 'Unsere Lösung',
      subtitle: 'Digitale bAV-Plattform für jede Unternehmensgröße',
      description: 'Maßgeschneiderte Lösungskonzepte für die digitale bAV-Verwaltung',
      icon: <TrendingUp className="w-8 h-8" />,
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      iconBg: 'bg-green-100',
      content: {
        keyFeatures: [
          {
            icon: <Users className="w-6 h-6 text-blue-600" />,
            title: "Entlastung der HR-Teams",
            description: "Vollautomatisierte Prozesse reduzieren zeitintensive manuelle Aufgaben und eliminieren Fehlerquellen.",
            highlight: "Bis zu 80% Zeitersparnis",
            bgColor: "bg-blue-100"
          },
          {
            icon: <Briefcase className="w-6 h-6 text-purple-600" />,
            title: "100% Digitale Transparenz",
            description: "Alle bAV-Dokumente digital verfügbar mit einfacher Suchfunktion und strukturierter Ablage.",
            highlight: "Papierlose Verwaltung",
            bgColor: "bg-purple-100"
          },
          {
            icon: <Factory className="w-6 h-6 text-green-600" />,
            title: "Skalierbare Architektur",
            description: "Flexibel einsetzbar für jede Unternehmensgröße und passt sich an das Wachstum Ihres Unternehmens an.",
            highlight: "Zukunftssicher",
            bgColor: "bg-green-100"
          }
        ]
      }
    }
  ];

  const toggleSection = (sectionId) => {
    setActiveSection(activeSection === sectionId ? null : sectionId);
  };

  return (
    <>
    <section className="bg-gradient-to-b from-slate-50 to-white py-24 relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-400 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
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
            komplex und zeitaufwendig sein. Klicken Sie auf die Bereiche, um mehr zu erfahren.
          </p>
        </div>

        {/* Ursprüngliche ausklappbare Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="group relative"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              {/* Compact card with click-to-expand */}
              <div className="bg-white rounded-2xl p-6 h-full shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-slate-200 relative overflow-hidden cursor-pointer"
                   onClick={() => toggleCard(index)}>
                
                {/* Animated background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-[0.02] transition-opacity duration-300`}></div>
                
                {/* Compact header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`${benefit.iconBg} rounded-xl p-3 inline-block group-hover:scale-105 transition-transform duration-300`}>
                    <div className="text-slate-700">
                      {benefit.icon}
                    </div>
                  </div>
                  
                  {/* Expand/Collapse indicator */}
                  <div className="text-slate-400 group-hover:text-slate-600 transition-colors">
                    {expandedCards[index] ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </div>
                </div>
                
                {/* Title and highlight */}
                <h3 className="text-lg font-bold text-slate-900 mb-2 leading-tight group-hover:text-slate-800 transition-colors duration-300">
                  {benefit.title}
                </h3>
                
                {/* Always visible highlight badge */}
                <div className="mb-4">
                  <span className={`${benefit.bgColor} text-slate-700 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase`}>
                    {benefit.highlight}
                  </span>
                </div>
                
                {/* Expandable description */}
                <div className={`overflow-hidden transition-all duration-300 ${
                  expandedCards[index] ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    {benefit.description}
                  </p>
                </div>
                
                {/* Show/Hide hint */}
                <div className="text-xs text-slate-500 font-medium">
                  {expandedCards[index] ? 'Klicken zum Einklappen' : 'Klicken für Details'}
                </div>

                {/* Bottom accent line */}
                <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${benefit.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Separate Section: Was können wir für Sie tun? */}
    <section className="bg-gradient-to-b from-white to-slate-50 py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-20 right-10 w-72 h-72 bg-orange-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* New section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-100 to-indigo-100 px-6 py-3 rounded-full mb-8 shadow-lg">
            <Users className="w-5 h-5 text-blue-600" />
            <span className="text-blue-800 font-semibold text-sm tracking-wide uppercase">Unser Service</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            <span className="text-slate-900">Was können wir </span>
            <span className="bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-500 bg-clip-text text-transparent">
              für Sie tun?
            </span>
          </h2>
          
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light">
            Von der Analyse Ihrer Herausforderungen bis zur maßgeschneiderten Lösung - 
            entdecken Sie unseren bewährten Ansatz.
          </p>
        </div>

        {/* Interactive Service Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {mainSections.map((section, index) => (
            <div key={section.id} className="relative">
              {/* Clickable Section Card */}
              <div 
                className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:-translate-y-1 ${
                  activeSection === section.id 
                    ? 'border-blue-500 ring-2 ring-blue-200' 
                    : 'border-slate-200 hover:border-blue-300'
                }`}
                onClick={() => toggleSection(section.id)}
              >
                <div className={`${section.iconBg} rounded-xl p-4 mb-6 inline-block transition-transform duration-300 ${
                  activeSection === section.id ? 'scale-110' : 'hover:scale-105'
                }`}>
                  <div className="text-gray-700">
                    {section.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight">
                  {section.title}
                </h3>
                
                <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                  {section.description}
                </p>

                {/* Click indicator */}
                <div className="flex items-center justify-between">
                  <span className="text-blue-600 font-medium text-sm">
                    {activeSection === section.id ? 'Details ausblenden' : 'Details anzeigen'}
                  </span>
                  <div className={`text-blue-600 transition-transform duration-300 ${
                    activeSection === section.id ? 'rotate-180' : ''
                  }`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Expanded Content */}
        {activeSection && (
          <div className="bg-slate-900 rounded-3xl p-12 mb-16 transition-all duration-500 animate-fadeIn">
            {activeSection === 'herausforderung' && (
              <div>
                <div className="text-center mb-12">
                  <h3 className="text-3xl font-bold text-white mb-4">
                    bAV-Verwaltung ist <span className="text-red-400">komplex, zeitaufwendig</span><br/>
                    und <span className="text-red-400">fehleranfällig</span>
                  </h3>
                  <p className="text-slate-300 max-w-3xl mx-auto">
                    Die betriebliche Altersvorsorge ist für Unternehmen verpflichtend, aber die Verwaltung 
                    stellt HR-Teams vor große Herausforderungen.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Challenges */}
                  <div>
                    <h4 className="text-xl font-bold text-white mb-6 flex items-center">
                      <span className="w-3 h-3 bg-red-500 rounded-full mr-3"></span>
                      Typische Probleme
                    </h4>
                    <div className="space-y-4">
                      {mainSections[0].content.challenges.map((challenge, index) => (
                        <div key={index} className="bg-red-900/30 border-l-4 border-red-400 p-4 rounded-r-lg">
                          <h5 className="font-semibold text-red-300 mb-1">{challenge.title}</h5>
                          <p className="text-red-200 text-sm">{challenge.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="flex items-center justify-center">
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mb-4 animate-pulse">
                        <ArrowRight className="w-8 h-8 text-white lg:rotate-0 rotate-90" />
                      </div>
                      <span className="text-orange-400 font-semibold text-center">
                        ACENCIA<br/>Lösung
                      </span>
                    </div>
                  </div>

                  {/* Solutions */}
                  <div>
                    <h4 className="text-xl font-bold text-white mb-6 flex items-center">
                      <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
                      Unsere Antworten
                    </h4>
                    <div className="space-y-4">
                      {mainSections[0].content.solutions.map((solution, index) => (
                        <div key={index} className="bg-green-900/30 border-l-4 border-green-400 p-4 rounded-r-lg">
                          <h5 className="font-semibold text-green-300 mb-1">{solution.title}</h5>
                          <p className="text-green-200 text-sm">{solution.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeSection === 'prozess' && (
              <div>
                <div className="text-center mb-12">
                  <h3 className="text-3xl font-bold text-white mb-4">
                    Als Partner begleiten wir Sie entlang des gesamten bAV-Prozesses
                  </h3>
                  <p className="text-slate-300 max-w-3xl mx-auto">
                    Von der rechtlichen Einrichtung bis zur vollständigen Digitalisierung - 
                    wir machen bAV einfach und effizient.
                  </p>
                </div>

                <div className="space-y-8">
                  {mainSections[1].content.processSteps.map((step, index) => (
                    <div key={index} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                      {/* Step number and icon */}
                      <div className="lg:col-span-2 flex flex-col items-center lg:items-start">
                        <div className="flex items-center space-x-4 mb-4">
                          <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                            {index + 1}
                          </div>
                          <div className="text-orange-400">
                            {step.icon}
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="lg:col-span-7">
                        <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
                          <h4 className="text-xl font-bold text-white mb-2">
                            {step.title}
                          </h4>
                          <p className="text-orange-400 font-medium mb-3">
                            {step.subtitle}
                          </p>
                          <p className="text-slate-300 leading-relaxed mb-4 text-sm">
                            {step.description}
                          </p>
                          
                          {/* Key points */}
                          <div className="space-y-1">
                            <h5 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                              Zentrale Vorteile:
                            </h5>
                            {step.keyPoints.map((point, pointIndex) => (
                              <div key={pointIndex} className="flex items-center space-x-2">
                                <CheckCircle className="w-3 h-3 text-orange-500 flex-shrink-0" />
                                <span className="text-slate-300 text-xs">{point}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Arrow */}
                      <div className="lg:col-span-3 flex justify-center">
                        {index < mainSections[1].content.processSteps.length - 1 && (
                          <div className="hidden lg:flex items-center justify-center">
                            <ArrowRight className="w-6 h-6 text-orange-500" />
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
                  <button 
                    className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
                    onClick={() => window.open('https://outlook.office365.com/owa/calendar/ACENCIAde@acencia.de/bookings/', '_blank')}
                  >
                    Jetzt starten
                  </button>
                  <button 
                    className="border-2 border-slate-600 text-slate-300 hover:bg-slate-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                    onClick={() => window.open('https://outlook.office365.com/owa/calendar/ACENCIAde@acencia.de/bookings/', '_blank')}
                  >
                    Demo buchen
                  </button>
                </div>
              </div>
            )}

            {activeSection === 'loesung' && (
              <div>
                <div className="text-center mb-12">
                  <h3 className="text-3xl font-bold text-white mb-4">
                    Die individuell passende <span className="text-orange-400">digitale Lösung</span><br/>
                    für Ihr Unternehmen
                  </h3>
                  <p className="text-slate-300 max-w-4xl mx-auto">
                    Egal ob Kleinunternehmen, Start-up, Mittelstand oder Konzern - ausgehend von Ihren individuellen 
                    Herausforderungen bieten wir maßgeschneiderte Lösungskonzepte für die digitale bAV-Verwaltung.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {mainSections[2].content.keyFeatures.map((feature, index) => (
                    <div key={index} className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
                      <div className={`w-12 h-12 ${feature.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                        {feature.icon}
                      </div>
                      <h4 className="text-lg font-bold text-white mb-3">
                        {feature.title}
                      </h4>
                      <p className="text-slate-300 mb-4 text-sm">
                        {feature.description}
                      </p>
                      <div className="flex items-center text-orange-400 font-medium text-sm">
                        <TrendingUp className="w-4 h-4 mr-2" />
                        {feature.highlight}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Button zu Vorteilen */}
                <div className="text-center mt-8">
                  <Link 
                    to="/der-service#vorteile"
                    className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
                  >
                    Mehr zu den Vorteilen
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
    </>
  );
};

export default InteractiveMainSections;