import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Button } from "./ui/button";
import { 
  AlertTriangle, 
  CheckCircle, 
  FileText, 
  Scale, 
  Shield, 
  Users,
  Calculator,
  ArrowRight,
  ChevronDown,
  ExternalLink,
  Gavel,
  Euro,
  Clock,
  TrendingUp,
  Heart,
  Award,
  Building2,
  Network,
  Coffee
} from "lucide-react";

const EmployerObligationsPage = () => {
  const [expandedObligation, setExpandedObligation] = useState(null);
  const [expandedChance, setExpandedChance] = useState(null);

  const toggleObligation = (index) => {
    setExpandedObligation(expandedObligation === index ? null : index);
  };

  const toggleChance = (index) => {
    setExpandedChance(expandedChance === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      
      <div className="pt-20">
        {/* Hero Section - Visuell anspruchsvoller */}
        <section className="bg-slate-900 py-20 relative overflow-hidden">
          {/* Enhanced background design */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 opacity-[0.08]">
              <svg className="absolute top-10 right-10 w-96 h-96" viewBox="0 0 400 400">
                <polygon points="200,50 350,150 350,250 200,350 50,250 50,150" 
                         fill="none" stroke="white" strokeWidth="3"/>
              </svg>
              <svg className="absolute bottom-10 left-10 w-80 h-80" viewBox="0 0 400 400">
                <polygon points="200,30 320,120 320,200 200,290 80,200 80,120" 
                         fill="none" stroke="#f97316" strokeWidth="2"/>
              </svg>
              <svg className="absolute top-1/2 right-1/3 w-64 h-64" viewBox="0 0 400 400">
                <polygon points="200,60 300,120 300,180 200,240 100,180 100,120" 
                         fill="none" stroke="#3b82f6" strokeWidth="1"/>
              </svg>
            </div>
            
            {/* Enhanced animated elements */}
            <div className="absolute inset-0 opacity-40">
              <div className="absolute top-1/4 left-1/5 w-3 h-3 bg-orange-400 rounded-full animate-ping"></div>
              <div className="absolute top-2/3 right-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <div className="absolute top-1/3 right-1/6 w-2 h-2 bg-white rounded-full animate-ping"></div>
              <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-orange-300 rounded-full animate-pulse"></div>
              <div className="absolute top-1/6 left-2/3 w-1 h-1 bg-blue-300 rounded-full animate-ping"></div>
            </div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12">              
              <h1 className="text-3xl lg:text-4xl font-bold text-white mb-8 leading-tight">
                <span className="text-white">Rechtliche Grundlagen </span>
                <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
                  der bAV
                </span>
              </h1>
              
              <p className="text-lg text-slate-200 mb-12 max-w-4xl mx-auto leading-relaxed">
                Umfassender Überblick über Ihre gesetzlichen Verpflichtungen als Arbeitgeber
              </p>

              {/* Enhanced CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-10 py-4 text-lg font-semibold rounded-xl transition-all duration-400 hover:scale-105 shadow-xl hover:shadow-2xl"
                  onClick={() => window.open('https://outlook.office365.com/owa/calendar/ACENCIAde@acencia.de/bookings/', '_blank')}
                >
                  Kostenloses Erstgespräch
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button 
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 text-lg font-semibold rounded-xl transition-all duration-400 hover:scale-105 shadow-xl hover:shadow-2xl border border-blue-500"
                  onClick={() => window.open('https://www.gesetze-im-internet.de/betravg/', '_blank')}
                >
                  <FileText className="w-5 h-5 mr-2" />
                  Gesetzestext BetrAVG
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </div>

              {/* Kompakter rechtlicher Hinweis */}
              <div className="inline-flex items-center space-x-2 bg-slate-800 border border-slate-600 rounded-full px-6 py-3">
                <Gavel className="w-4 h-4 text-slate-400" />
                <p className="text-sm text-slate-400">
                  Information im Rahmen der Tätigkeit als Versicherungsmakler gemäß § 93 HGB
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Wichtiger Hinweis - In blauem Schema integriert */}
        <section className="bg-slate-800 py-12 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.04]">
            <svg className="absolute top-0 right-0 w-80 h-80" viewBox="0 0 400 400">
              <polygon points="200,50 300,100 300,200 200,250 100,200 100,100" 
                       fill="none" stroke="#f97316" strokeWidth="1"/>
            </svg>
            <div className="absolute bottom-0 left-0 w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
          </div>

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="bg-gradient-to-br from-slate-700 to-slate-600 rounded-2xl p-6 shadow-xl border border-slate-500">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-3">
                    Wichtiger Hinweis zur gesetzlichen Verpflichtung
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-4">
                    Seit dem <strong>1. Januar 2002</strong> haben alle Arbeitnehmer einen{' '}
                    <strong>Rechtsanspruch auf Entgeltumwandlung</strong> (§ 1a BetrAVG). Als Arbeitgeber sind{' '}
                    Sie <strong>gesetzlich verpflichtet</strong>, diese anzubieten. Seit 2019/2022 müssen Sie zusätzlich einen <strong>Zuschuss von mindestens 15%</strong> leisten.
                  </p>
                  
                  <Button 
                    size="sm"
                    className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-400 hover:scale-105 shadow-lg"
                    onClick={() => window.open('https://outlook.office365.com/owa/calendar/ACENCIAde@acencia.de/bookings/', '_blank')}
                  >
                    Jetzt Compliance-Check vereinbaren
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pflichten und Chancen - Komplett neu gestaltet */}
        <section className="bg-slate-800 py-20 relative overflow-hidden">
          {/* Enhanced background */}
          <div className="absolute inset-0 opacity-[0.06]">
            <svg className="absolute top-20 left-20 w-80 h-80" viewBox="0 0 400 400">
              <polygon points="200,30 330,130 330,230 200,330 70,230 70,130" 
                       fill="none" stroke="#f97316" strokeWidth="2"/>
            </svg>
            <svg className="absolute bottom-20 right-20 w-64 h-64" viewBox="0 0 400 400">
              <polygon points="200,50 300,100 300,200 200,250 100,200 100,100" 
                       fill="none" stroke="#3b82f6" strokeWidth="2"/>
            </svg>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
                Pflichten vs. <span className="text-green-400">Chancen</span>
              </h2>
              <p className="text-xl text-slate-300 max-w-4xl mx-auto">
                Vollständige Übersicht Ihrer rechtlichen Verpflichtungen und der sich daraus ergebenden 
                unternehmerischen Vorteile bei korrekter Umsetzung
              </p>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
              
              {/* Pflichten des Arbeitgebers - Eleganter */}
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-red-600 to-red-700 rounded-full px-6 py-3 mb-4">
                    <Scale className="w-6 h-6 text-white" />
                    <h3 className="text-xl font-bold text-white">Ihre rechtlichen Pflichten</h3>
                  </div>
                </div>

                {/* Ausklappbare Pflichten */}
                {[
                  {
                    icon: <FileText className="w-6 h-6" />,
                    title: "1. Rechtsanspruch auf Entgeltumwandlung",
                    description: "Gesetzliche Verpflichtung zur Bereitstellung mindestens einer Form der betrieblichen Altersvorsorge für alle Mitarbeiter.",
                    legal: "§ 1a BetrAVG",
                    detail: "Der Arbeitnehmer kann verlangen, dass von seinem Arbeitslohn bis zu 4 vom Hundert der Beitragsbemessungsgrenze [...] durch Entgeltumwandlung für seine betriebliche Altersversorgung verwendet werden.",
                    link: "https://www.gesetze-im-internet.de/betravg/__1a.html"
                  },
                  {
                    icon: <Euro className="w-6 h-6" />,
                    title: "2. Arbeitgeberzuschuss von 15%",
                    description: "Verpflichtende Bezuschussung von mindestens 15% des umgewandelten Betrags bei Sozialversicherungsersparnis.",
                    legal: "§ 1a Abs. 1a BetrAVG (seit 2019/2022)",
                    detail: "Der Arbeitgeber ist verpflichtet, [...] den umgewandelten Betrag um 15 vom Hundert zu erhöhen, soweit er durch die Entgeltumwandlung Sozialversicherungsbeiträge einspart.",
                    link: "https://www.gesetze-im-internet.de/betravg/__1a.html"
                  },
                  {
                    icon: <Users className="w-6 h-6" />,
                    title: "3. Informations- und Aufklärungspflicht",
                    description: "Umfassende Aufklärung der Mitarbeiter über bAV-Möglichkeiten, steuerliche Auswirkungen und Förderungen.",
                    legal: "§ 1 BetrAVG + Arbeitsrecht",
                    detail: "Arbeitgeber müssen über Durchführungswege, steuerliche Behandlung und Auswirkungen informieren.",
                    link: "https://www.gesetze-im-internet.de/betravg/__1.html"
                  },
                  {
                    icon: <Scale className="w-6 h-6" />,
                    title: "4. Gleichbehandlungsgrundsatz",
                    description: "Alle Mitarbeitergruppen müssen gleichen Zugang zu bAV-Angeboten erhalten - keine Benachteiligung.",
                    legal: "§ 1b BetrAVG",
                    detail: "Werden mehreren Arbeitnehmern Leistungen der betrieblichen Altersversorgung zugesagt, dürfen dabei einzelne Arbeitnehmer nicht ohne sachlichen Grund schlechter behandelt werden als andere.",
                    link: "https://www.gesetze-im-internet.de/betravg/__1b.html"
                  },
                  {
                    icon: <FileText className="w-6 h-6" />,
                    title: "5. Verwaltungs- und Dokumentationspflicht",
                    description: "Ordnungsgemäße Verwaltung, Meldungen an Versorgungsträger und lückenlose Dokumentation aller Prozesse.",
                    legal: "§ 8a BetrAVG + DRV-Richtlinien",
                    detail: "Führung von Versorgungsregistern, ordnungsgemäße Meldungen und Dokumentation von Anwartschaften.",
                    link: "https://www.deutsche-rentenversicherung.de/DRV/DE/Rente/Betriebsrente/betriebsrente.html"
                  }
                ].map((obligation, index) => (
                  <div key={index} className="bg-gradient-to-br from-slate-700 to-slate-600 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-400">
                    <div 
                      className="p-6 cursor-pointer"
                      onClick={() => toggleObligation(index)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center">
                            <div className="text-white">
                              {obligation.icon}
                            </div>
                          </div>
                          <div>
                            <h4 className="text-lg font-bold text-white mb-1">{obligation.title}</h4>
                            <p className="text-slate-300 text-sm">{obligation.description}</p>
                          </div>
                        </div>
                        <div className={`text-slate-400 transition-all duration-300 ${
                          expandedObligation === index ? 'rotate-180 text-orange-400' : 'hover:text-orange-400'
                        }`}>
                          <ChevronDown className="w-6 h-6" />
                        </div>
                      </div>
                    </div>

                    {/* Expandable Content */}
                    <div className={`overflow-hidden transition-all duration-500 ${
                      expandedObligation === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="px-6 pb-6 border-t border-slate-600">
                        <div className="pt-6">
                          <div className="bg-slate-800 rounded-lg p-4 mb-4">
                            <p className="text-xs text-slate-400 font-semibold mb-2">{obligation.legal}</p>
                            <p className="text-sm text-slate-300 italic">"{obligation.detail}"</p>
                          </div>
                          <a 
                            href={obligation.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-blue-400 hover:text-blue-300 text-sm transition-colors"
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Gesetzestext aufrufen
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Chancen und Vorteile - Eleganter */}
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-green-600 to-green-700 rounded-full px-6 py-3 mb-4">
                    <TrendingUp className="w-6 h-6 text-white" />
                    <h3 className="text-xl font-bold text-white">Ihre unternehmerischen Chancen</h3>
                  </div>
                </div>

                {/* Ausklappbare Chancen */}
                {[
                  {
                    icon: <Calculator className="w-6 h-6" />,
                    title: "Erhebliche Steuervorteile",
                    description: "Einsparungen bei Lohnsteuer und Sozialversicherungsbeiträgen für das Unternehmen.",
                    benefits: ["Bis zu 20% Ersparnis bei Sozialversicherung", "Reduzierte Lohnnebenkosten", "Steuerliche Absetzbarkeit der Zuschüsse"]
                  },
                  {
                    icon: <Heart className="w-6 h-6" />,
                    title: "Höhere Mitarbeiterzufriedenheit",
                    description: "Attraktive Zusatzleistung steigert Bindung und Motivation der Belegschaft.",
                    benefits: ["Reduktion der Personalfluktuation", "Höhere Motivation und Produktivität", "Geringere Rekrutierungskosten"]
                  },
                  {
                    icon: <Award className="w-6 h-6" />,
                    title: "Wettbewerbsvorteile im Arbeitsmarkt",
                    description: "Positionierung als attraktiver und verantwortungsvoller Arbeitgeber.",
                    benefits: ["Bessere Personalakquise", "Employer Branding Verbesserung", "Soziale Verantwortung demonstrieren"]
                  },
                  {
                    icon: <Shield className="w-6 h-6" />,
                    title: "Vollständige Rechtssicherheit",
                    description: "Schutz vor rechtlichen Risiken und Compliance-Problemen.",
                    benefits: ["Vermeidung von Haftungsrisiken", "Keine Nachzahlungen oder Bußgelder", "Automatische Gesetzeskonformität"]
                  },
                  {
                    icon: <Clock className="w-6 h-6" />,
                    title: "Operative Effizienzgewinne",
                    description: "Digitale Automatisierung reduziert Verwaltungsaufwand erheblich.",
                    benefits: ["Bis zu 80% weniger Verwaltungsaufwand", "Automatisierte Prozesse und Meldungen", "HR-Teams können sich auf Kernaufgaben fokussieren"]
                  }
                ].map((chance, index) => (
                  <div key={index} className="bg-gradient-to-br from-slate-700 to-slate-600 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-400">
                    <div 
                      className="p-6 cursor-pointer"
                      onClick={() => toggleChance(index)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                            <div className="text-white">
                              {chance.icon}
                            </div>
                          </div>
                          <div>
                            <h4 className="text-lg font-bold text-white mb-1">{chance.title}</h4>
                            <p className="text-slate-300 text-sm">{chance.description}</p>
                          </div>
                        </div>
                        <div className={`text-slate-400 transition-all duration-300 ${
                          expandedChance === index ? 'rotate-180 text-orange-400' : 'hover:text-orange-400'
                        }`}>
                          <ChevronDown className="w-6 h-6" />
                        </div>
                      </div>
                    </div>

                    {/* Expandable Content */}
                    <div className={`overflow-hidden transition-all duration-500 ${
                      expandedChance === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="px-6 pb-6 border-t border-slate-600">
                        <div className="pt-6 space-y-3">
                          {chance.benefits.map((benefit, benefitIndex) => (
                            <div key={benefitIndex} className="flex items-center space-x-3">
                              <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                              <span className="text-slate-300 text-sm">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Enhanced Call to Action */}
            <div className="text-center mt-20">
              <div className="bg-gradient-to-br from-slate-700 via-slate-600 to-slate-700 rounded-3xl p-12 shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <svg className="absolute top-0 right-0 w-64 h-64" viewBox="0 0 400 400">
                    <polygon points="200,50 300,100 300,200 200,250 100,200 100,100" 
                             fill="none" stroke="#f97316" strokeWidth="2"/>
                  </svg>
                </div>
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold text-white mb-6">
                    Verwandeln Sie Ihre Pflichten in <span className="text-green-400">Wettbewerbsvorteile</span>
                  </h3>
                  <p className="text-slate-300 mb-10 max-w-3xl mx-auto text-lg">
                    Mit der richtigen Umsetzung wird die gesetzliche Verpflichtung zur betrieblichen Altersvorsorge 
                    zu einem strategischen Vorteil für Ihr Unternehmen.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <Button 
                      className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-10 py-4 rounded-xl font-semibold transition-all duration-400 hover:scale-105 shadow-xl text-lg"
                      onClick={() => window.open('https://outlook.office365.com/owa/calendar/ACENCIAde@acencia.de/bookings/', '_blank')}
                    >
                      Kostenfreie Potenzialanalyse vereinbaren
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                    <Button 
                      variant="outline"
                      className="border-2 border-slate-400 text-slate-300 hover:bg-slate-600 hover:text-white px-10 py-4 rounded-xl font-semibold transition-all duration-400 text-lg"
                      onClick={() => window.open('https://www.bmas.de/DE/Arbeit/Rente-und-Altersvorsorge/Betriebsrente/betriebsrente.html', '_blank')}
                    >
                      <FileText className="w-5 h-5 mr-2" />
                      Mehr Informationen (BMAS)
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default EmployerObligationsPage;