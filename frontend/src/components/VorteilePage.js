import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import { 
  Building, 
  Users, 
  TrendingUp, 
  Shield, 
  Clock, 
  Star, 
  CheckCircle, 
  Award,
  Target,
  BarChart3,
  UserCheck,
  Briefcase,
  Heart,
  Headphones,
  Lock,
  Zap,
  Globe,
  ArrowRight,
  ChevronRight,
  Rocket,
  Building2,
  Sparkles,
  Settings
} from 'lucide-react';

const ServicePage = () => {
  const [activeTab, setActiveTab] = useState('unternehmen');

  // Die Herausforderung - Customer Segments Data (kompakte Version)
  const herausforderungen = [
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Start-up",
      subtitle: "5-50 Mitarbeiter",
      description: "Flexible und skalierbare bAV-Lösungen für junge Unternehmen mit schnellem Wachstum",
      features: [
        "Schnelle Implementierung",
        "Skalierbare Architektur",
        "Kostengünstige Einstiegslösung"
      ],
      highlight: "Flexibel & Skalierbar",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Building className="w-6 h-6" />,
      title: "Mittelstand",
      subtitle: "50-1000 Mitarbeiter",
      description: "Bewährte Konzepte für etablierte mittelständische Betriebe mit komplexeren Anforderungen",
      features: [
        "Umfassende Integration",
        "Erweiterte Automatisierung",
        "Multi-Standort-Fähigkeit"
      ],
      highlight: "Bewährt & Effizient",
      gradient: "from-orange-500 to-amber-500"
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Konzern",
      subtitle: "1000+ Mitarbeiter",
      description: "Komplexe Enterprise-Lösungen für große Unternehmensstrukturen mit höchsten Anforderungen",
      features: [
        "Enterprise-Integration",
        "Multi-Mandanten-Fähigkeit",
        "Erweiterte Compliance"
      ],
      highlight: "Enterprise & Komplex",
      gradient: "from-purple-500 to-violet-500"
    }
  ];

  // 3-Stufen-Prozess
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

  // Vorteile für Unternehmen
  const unternehmensVorteile = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Effizienzsteigerung",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      iconBg: "bg-blue-100",
      benefits: [
        "Automatisierte Prozesse reduzieren manuelle Tätigkeiten und damit Fehlerquellen",
        "Schnellere Bearbeitung von Anträgen, Änderungen und Auskünften",
        "Digitale Schnittstellen ermöglichen nahtlose Integration in bestehende HR- und Payroll-Systeme"
      ]
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Kostenersparnis",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      iconBg: "bg-green-100",
      benefits: [
        "Wegfall interner Ressourcen für Verwaltung, Schulung und IT-Support",
        "Skaleneffekte beim Dienstleister führen zu geringeren Stückkosten",
        "Minimierung von Fehlern und damit verbundenen Folgekosten"
      ]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Rechtssicherheit und Compliance",
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-50",
      iconBg: "bg-red-100",
      benefits: [
        "Externe Experten sind stets auf dem aktuellen Stand der Gesetzgebung",
        "Automatisierte Prüfmechanismen sorgen für korrekte Umsetzung gesetzlicher Vorgaben",
        "Minimierung von Haftungsrisiken für das Unternehmen"
      ]
    }
  ];

  // Vorteile für Mitarbeitende
  const mitarbeiterVorteile = [
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "Persönliche Beratung in allen Lebenslagen",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      iconBg: "bg-blue-100",
      benefits: [
        "Unterstützung bei Jobwechsel, Elternzeit, Teilzeit, Ruhestand, etc.",
        "Beratung auch zu Altverträgen, unabhängig vom Anbieter",
        "Individuelle Betreuung schafft Vertrauen und Sicherheit"
      ]
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Transparenz und Verständlichkeit",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      iconBg: "bg-green-100",
      benefits: [
        "Digitale Portale mit klaren Informationen zur eigenen bAV",
        "Self-Service-Funktionen für einfache Änderungen oder Anfragen",
        "Regelmäßige Updates und verständliche Kommunikation"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <Header />
      
      {/* Header Spacing */}
      <div className="pt-20"></div>
      
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Star className="w-8 h-8 text-orange-400" />
            <span className="text-orange-400 font-semibold text-lg tracking-wide">Was wir für Sie tun können</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Der{' '}
            <span className="text-orange-500">Service</span>
          </h1>
          <p className="text-xl text-gray-300 mb-12">
            Von der rechtlichen Einrichtung bis zur vollständigen Digitalisierung - 
            wir machen bAV einfach und effizient für jede Unternehmensgröße.
          </p>
        </div>
      </div>

      {/* Die Herausforderung Section */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-slate-100 to-slate-200 px-6 py-3 rounded-full mb-8 shadow-lg">
                <Users className="w-5 h-5 text-slate-600" />
                <span className="text-slate-700 font-semibold text-sm tracking-wide uppercase">Die Herausforderung</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">
                <span className="text-slate-900">Für jede </span>
                <span className="bg-gradient-to-r from-orange-500 via-orange-600 to-red-500 bg-clip-text text-transparent">
                  Unternehmensgröße
                </span>
                <span className="text-slate-900"> die passende Lösung</span>
              </h2>
              
              <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                Von Start-ups bis zu Konzernen - jede Unternehmensgröße bringt spezifische 
                Herausforderungen bei der betrieblichen Altersvorsorge mit sich.
              </p>
            </div>

            {/* Kompakte Herausforderungen Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {herausforderungen.map((challenge, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 hover:-translate-y-1"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className={`bg-gradient-to-br ${challenge.gradient} p-4 rounded-xl mb-4 inline-block`}>
                    <div className="text-white">
                      {challenge.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {challenge.title}
                  </h3>
                  <p className="text-orange-600 font-medium mb-3 text-sm">
                    {challenge.subtitle}
                  </p>
                  
                  <p className="text-slate-600 leading-relaxed mb-4 text-sm">
                    {challenge.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    {challenge.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-slate-600 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Überleitung zum 3-Stufen-Prozess */}
            <div className="text-center bg-slate-50 rounded-2xl p-8 mb-16">
              <ArrowRight className="w-8 h-8 text-orange-500 mx-auto mb-4" />
              <p className="text-lg text-slate-700">
                Genau hier setzen wir an: Mit unserem bewährten 3-Stufen-Prozess lösen wir 
                diese Herausforderungen systematisch und effizient.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 3-Stufen-Prozess Section */}
      <div className="bg-slate-900 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Section header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-orange-500/10 border border-orange-500/20 px-4 py-2 rounded-full mb-6">
                <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
                <span className="text-orange-400 font-medium text-sm">Unser bewährter 3-Stufen-Prozess</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Als Partner begleiten wir Sie entlang des gesamten bAV-Prozesses
              </h2>
              <p className="text-lg text-slate-300 max-w-3xl mx-auto">
                Von der rechtlichen Einrichtung bis zur vollständigen Digitalisierung - 
                wir machen bAV einfach und effizient.
              </p>
              <div className="w-24 h-1 bg-orange-500 mx-auto mt-6"></div>
            </div>

            {/* Process steps */}
            <div className="space-y-8">
              {processSteps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    {/* Step number and icon */}
                    <div className="lg:col-span-2 flex flex-col items-center lg:items-start">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                          {index + 1}
                        </div>
                        <div className="text-orange-500">
                          {step.icon}
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="lg:col-span-7">
                      <div className="bg-slate-800 rounded-2xl p-8 h-full hover:bg-slate-700 transition-colors duration-300 border border-slate-700 hover:border-orange-500/50">
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {step.title}
                        </h3>
                        <p className="text-orange-400 font-medium mb-4 text-lg">
                          {step.subtitle}
                        </p>
                        <p className="text-slate-300 leading-relaxed mb-6">
                          {step.description}
                        </p>
                        
                        {/* Key points */}
                        <div className="space-y-2">
                          <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">
                            Zentrale Vorteile:
                          </h4>
                          {step.keyPoints.map((point, pointIndex) => (
                            <div key={pointIndex} className="flex items-center space-x-2">
                              <CheckCircle className="w-4 h-4 text-orange-500 flex-shrink-0" />
                              <span className="text-slate-300 text-sm">{point}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Arrow or CTA */}
                    <div className="lg:col-span-3 flex justify-center">
                      {index < processSteps.length - 1 ? (
                        <div className="hidden lg:flex items-center justify-center">
                          <div className="flex flex-col items-center space-y-2">
                            <ArrowRight className="w-8 h-8 text-orange-500" />
                            <span className="text-xs text-slate-500 text-center">
                              Nächster<br/>Schritt
                            </span>
                          </div>
                        </div>
                      ) : (
                        <div className="flex flex-col space-y-4">
                          <button 
                            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
                            onClick={() => window.open('https://outlook.office365.com/owa/calendar/ACENCIAde@acencia.de/bookings/', '_blank')}
                          >
                            Jetzt starten
                          </button>
                          <button 
                            className="border-2 border-slate-600 text-slate-300 hover:bg-slate-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 text-sm"
                            onClick={() => window.open('https://outlook.office365.com/owa/calendar/ACENCIAde@acencia.de/bookings/', '_blank')}
                          >
                            Demo buchen
                          </button>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Mobile arrow */}
                  {index < processSteps.length - 1 && (
                    <div className="flex lg:hidden justify-center my-6">
                      <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                        <ArrowRight className="w-4 h-4 text-white rotate-90" />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Vorteile Section */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                Die konkreten Vorteile für Sie
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Erfahren Sie, welche spezifischen Vorteile unser Service für Ihr Unternehmen 
                und Ihre Mitarbeitenden bringt.
              </p>
            </div>

            {/* Tab Navigation */}
            <div className="mb-16">
              <div className="bg-slate-50 rounded-2xl p-2 border border-slate-200 max-w-md mx-auto">
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setActiveTab('unternehmen')}
                    className={`flex items-center justify-center space-x-2 px-4 py-3 rounded-xl font-semibold transition-all duration-300 ${
                      activeTab === 'unternehmen'
                        ? 'bg-orange-500 text-white shadow-lg'
                        : 'text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    <Building className="w-4 h-4" />
                    <span>Unternehmen</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('mitarbeiter')}
                    className={`flex items-center justify-center space-x-2 px-4 py-3 rounded-xl font-semibold transition-all duration-300 ${
                      activeTab === 'mitarbeiter'
                        ? 'bg-orange-500 text-white shadow-lg'
                        : 'text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    <Users className="w-4 h-4" />
                    <span>Mitarbeitende</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Vorteile Content */}
            {activeTab === 'unternehmen' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {unternehmensVorteile.map((vorteil, index) => (
                  <div 
                    key={index}
                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 hover:-translate-y-1"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className={`${vorteil.iconBg} rounded-xl p-3 mb-4 inline-block`}>
                      <div className="text-gray-700">
                        {vorteil.icon}
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-bold text-slate-900 mb-4 leading-tight">
                      {vorteil.title}
                    </h3>
                    
                    <ul className="space-y-2">
                      {vorteil.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-600 text-sm leading-relaxed">
                            {benefit}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'mitarbeiter' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {mitarbeiterVorteile.map((vorteil, index) => (
                  <div 
                    key={index}
                    className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 hover:-translate-y-1"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className={`${vorteil.iconBg} rounded-xl p-4 mb-6 inline-block`}>
                      <div className="text-gray-700">
                        {vorteil.icon}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-slate-900 mb-4 leading-tight">
                      {vorteil.title}
                    </h3>
                    
                    <ul className="space-y-3">
                      {vorteil.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-600 leading-relaxed">
                            {benefit}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl p-12 text-center">
            <h3 className="text-3xl font-bold text-white mb-6">
              Bereit für unseren Service?
            </h3>
            <p className="text-orange-100 text-lg mb-8 max-w-2xl mx-auto">
              Lassen Sie uns gemeinsam die optimale bAV-Lösung für Ihr Unternehmen entwickeln. 
              Kostenloses Beratungsgespräch vereinbaren.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="bg-white text-orange-600 px-8 py-3 rounded-xl font-semibold hover:bg-orange-50 transition-all duration-300 hover:scale-105"
                onClick={() => window.open('https://outlook.office365.com/owa/calendar/ACENCIAde@acencia.de/bookings/', '_blank')}
              >
                Kostenlose Beratung buchen
              </button>
              <button 
                className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-3 rounded-xl font-semibold transition-all duration-300"
                onClick={() => window.open('https://outlook.office365.com/owa/calendar/ACENCIAde@acencia.de/bookings/', '_blank')}
              >
                Demo anfordern
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ServicePage;