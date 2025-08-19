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
  ChevronRight
} from 'lucide-react';

const VorteilePage = () => {
  const [activeTab, setActiveTab] = useState('unternehmen');

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
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Transparenz und Reporting",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      iconBg: "bg-purple-100",
      benefits: [
        "Digitale Plattformen bieten Echtzeit-Zugriff auf Daten und Auswertungen",
        "Standardisierte Reports erleichtern die interne Kontrolle und strategische Planung",
        "Mitarbeiter erhalten verständliche und transparente Informationen zu ihrer bAV"
      ]
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Mitarbeiterzufriedenheit und Arbeitgeberattraktivität",
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      iconBg: "bg-orange-100",
      benefits: [
        "Verbesserte Kommunikation und Self-Service-Portale stärken das Vertrauen der Mitarbeitenden",
        "Schnelle und kompetente Betreuung durch den Dienstleister erhöht die Zufriedenheit",
        "Professionelle bAV-Verwaltung wirkt positiv auf das Employer Branding"
      ]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Skalierbarkeit und Zukunftssicherheit",
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-50",
      iconBg: "bg-indigo-100",
      benefits: [
        "Der Dienstleister kann flexibel auf Unternehmenswachstum oder -veränderungen reagieren",
        "Digitale Lösungen sind zukunftsfähig und können leicht erweitert oder angepasst werden",
        "Innovationspotenzial durch KI-gestützte Analysen und Prognosen"
      ]
    }
  ];

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
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Erhöhte Sicherheit und Vertrauen",
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-50",
      iconBg: "bg-red-100",
      benefits: [
        "Professionelle Betreuung durch Experten",
        "Vermeidung von Fehlern oder Missverständnissen bei Vertragsdetails",
        "Verlässliche Ansprechpartner bei Fragen oder Problemen"
      ]
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Zeitersparnis und Komfort",
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      iconBg: "bg-orange-100",
      benefits: [
        "Kein Papierkram, keine langen Wartezeiten",
        "Digitale Tools ermöglichen schnellen Zugriff auf Informationen",
        "Beratung auch außerhalb klassischer Bürozeiten möglich"
      ]
    }
  ];

  const hrVorteile = [
    {
      icon: <UserCheck className="w-8 h-8" />,
      title: "Entlastung im Tagesgeschäft",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      iconBg: "bg-purple-100",
      benefits: [
        "Keine manuelle Verwaltung von Verträgen, Änderungen oder Rückfragen",
        "Fokus auf strategische HR-Themen statt operativer bAV-Verwaltung"
      ]
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Professionelle Kommunikation",
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-50",
      iconBg: "bg-indigo-100",
      benefits: [
        "Der Dienstleister übernimmt die Mitarbeiterkommunikation zur bAV",
        "Einheitliche und rechtssichere Informationsweitergabe"
      ]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Rechtssicherheit und Aktualität",
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-50",
      iconBg: "bg-red-100",
      benefits: [
        "Automatische Berücksichtigung gesetzlicher Änderungen",
        "Minimierung von Haftungsrisiken durch Expertenwissen"
      ]
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Reporting und Steuerung",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      iconBg: "bg-green-100",
      benefits: [
        "Zugriff auf digitale Dashboards und Auswertungen",
        "Unterstützung bei Audits, Jahresabschlüssen und internen Analysen"
      ]
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Employer Branding",
      color: "from-yellow-500 to-yellow-600",
      bgColor: "bg-yellow-50",
      iconBg: "bg-yellow-100",
      benefits: [
        "Hochwertige bAV-Beratung als Teil eines attraktiven Gesamtpakets",
        "Stärkung der Arbeitgebermarke durch moderne und mitarbeiterorientierte Services"
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
            <span className="text-orange-400 font-semibold text-lg tracking-wide">Win-Win für alle Beteiligten</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Vorteile der{' '}
            <span className="text-orange-500">betrieblichen Altersvorsorge</span>
          </h1>
          <p className="text-xl text-gray-300 mb-12">
            Entdecken Sie, wie unsere digitale bAV-Lösung Unternehmen und Mitarbeitende 
            gleichermaßen profitieren lässt.
          </p>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="container mx-auto px-6 mb-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-2 border border-white/20">
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => setActiveTab('unternehmen')}
                className={`flex items-center justify-center space-x-2 px-6 py-4 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === 'unternehmen'
                    ? 'bg-orange-500 text-white shadow-lg'
                    : 'text-gray-300 hover:bg-white/10'
                }`}
              >
                <Building className="w-5 h-5" />
                <span>Für Unternehmen</span>
              </button>
              <button
                onClick={() => setActiveTab('mitarbeiter')}
                className={`flex items-center justify-center space-x-2 px-6 py-4 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === 'mitarbeiter'
                    ? 'bg-orange-500 text-white shadow-lg'
                    : 'text-gray-300 hover:bg-white/10'
                }`}
              >
                <Users className="w-5 h-5" />
                <span>Für Mitarbeitende & HR</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content Based on Active Tab */}
      <div className="container mx-auto px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          
          {activeTab === 'unternehmen' && (
            <div>
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Warum Unternehmen auf externe bAV-Verwaltung setzen
                </h2>
                <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                  Durch die Auslagerung an einen hoch automatisierten und digital versierten Dienstleister 
                  profitieren Unternehmen von einer Vielzahl strategischer Vorteile.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {unternehmensVorteile.map((vorteil, index) => (
                  <div 
                    key={index}
                    className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
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
                          <span className="text-gray-600 text-sm leading-relaxed">
                            {benefit}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'mitarbeiter' && (
            <div>
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Vorteile für Mitarbeitende und HR-Abteilungen
                </h2>
                <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                  Die Partnerschaft mit einem externen, digital versierten Dienstleister bringt 
                  sowohl für Mitarbeitende als auch für HR-Teams zahlreiche Vorteile mit sich.
                </p>
              </div>

              {/* Mitarbeiter Vorteile */}
              <div className="mb-16">
                <div className="flex items-center space-x-3 mb-8">
                  <Users className="w-6 h-6 text-orange-400" />
                  <h3 className="text-2xl font-bold text-white">Vorteile für Mitarbeitende</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  {mitarbeiterVorteile.map((vorteil, index) => (
                    <div 
                      key={index}
                      className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className={`${vorteil.iconBg} rounded-xl p-4 mb-6 inline-block`}>
                        <div className="text-gray-700">
                          {vorteil.icon}
                        </div>
                      </div>
                      
                      <h4 className="text-lg font-bold text-slate-900 mb-4 leading-tight">
                        {vorteil.title}
                      </h4>
                      
                      <ul className="space-y-3">
                        {vorteil.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-start space-x-3">
                            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600 text-sm leading-relaxed">
                              {benefit}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* HR Vorteile */}
              <div>
                <div className="flex items-center space-x-3 mb-8">
                  <Briefcase className="w-6 h-6 text-orange-400" />
                  <h3 className="text-2xl font-bold text-white">Vorteile für die HR-Abteilung</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {hrVorteile.map((vorteil, index) => (
                    <div 
                      key={index}
                      className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className={`${vorteil.iconBg} rounded-xl p-3 mb-4 inline-block`}>
                        <div className="text-gray-700">
                          {vorteil.icon}
                        </div>
                      </div>
                      
                      <h4 className="text-lg font-bold text-slate-900 mb-3 leading-tight">
                        {vorteil.title}
                      </h4>
                      
                      <ul className="space-y-2">
                        {vorteil.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-start space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600 text-sm leading-relaxed">
                              {benefit}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl p-12 text-center">
            <h3 className="text-3xl font-bold text-white mb-6">
              Bereit für die Vorteile der digitalen bAV?
            </h3>
            <p className="text-orange-100 text-lg mb-8 max-w-2xl mx-auto">
              Lassen Sie sich in einem persönlichen Gespräch zeigen, wie Ihr Unternehmen und 
              Ihre Mitarbeitenden von unserer Lösung profitieren können.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="bg-white text-orange-600 px-8 py-3 rounded-xl font-semibold hover:bg-orange-50 transition-all duration-300 hover:scale-105"
                onClick={() => window.open('https://outlook.office365.com/owa/calendar/ACENCIAde@acencia.de/bookings/', '_blank')}
              >
                Kostenlose Demo buchen
              </button>
              <button 
                className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-3 rounded-xl font-semibold transition-all duration-300"
                onClick={() => window.open('https://outlook.office365.com/owa/calendar/ACENCIAde@acencia.de/bookings/', '_blank')}
              >
                Jetzt beraten lassen
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default VorteilePage;