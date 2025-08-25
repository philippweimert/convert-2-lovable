import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Button } from "./ui/button";
import { 
  AlertTriangle, 
  FileText, 
  ArrowRight,
  ExternalLink,
  Gavel,
  CheckCircle,
  Users,
  Euro,
  Shield,
  Scale,
  Clock,
  TrendingUp,
  Heart,
  Award,
  Calculator
} from "lucide-react";

const EmployerObligationsPage = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      
      <div className="pt-20">
        {/* Hero Section - Kompakt */}
        <section className="bg-slate-900 py-12 relative overflow-hidden">
          {/* Same background animations as Hero Section */}
          <div className="absolute inset-0 opacity-[0.05]">
            <svg className="absolute top-20 right-0 w-96 h-96" viewBox="0 0 400 400">
              <polygon points="200,50 350,150 350,250 200,350 50,250 50,150" 
                       fill="none" stroke="white" strokeWidth="2"/>
            </svg>
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-orange-400 rounded-full animate-ping"></div>
            <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-white rounded-full animate-pulse"></div>
            <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-orange-400 rounded-full animate-pulse"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">              
              <h1 className="text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                <span className="text-white">Rechtliche Grundlagen </span>
                <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
                  der bAV
                </span>
              </h1>
              
              <p className="text-lg text-slate-200 mb-8 max-w-3xl mx-auto">
                Überblick über Ihre gesetzlichen Verpflichtungen als Arbeitgeber
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 text-base font-semibold rounded-xl transition-all duration-400 hover:scale-105 shadow-lg"
                  onClick={() => window.open('https://outlook.office365.com/owa/calendar/ACENCIAde@acencia.de/bookings/', '_blank')}
                >
                  Kostenloses Erstgespräch
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button 
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-base font-semibold rounded-xl transition-all duration-400 hover:scale-105 shadow-lg"
                  onClick={() => window.open('https://www.gesetze-im-internet.de/betravg/', '_blank')}
                >
                  <FileText className="w-4 h-4 mr-2" />
                  Gesetzestext BetrAVG
                  <ExternalLink className="w-3 h-3 ml-2" />
                </Button>
              </div>

              {/* Rechtlicher Hinweis direkt unter den Buttons */}
              <div className="flex items-center justify-center space-x-2 text-slate-400">
                <Gavel className="w-4 h-4" />
                <p className="text-sm">
                  Information im Rahmen der Tätigkeit als Versicherungsmakler gemäß § 93 HGB
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Wichtiger Hinweis zur gesetzlichen Verpflichtung - Kompakt */}
        <section className="bg-red-50 py-10 border-l-4 border-red-500">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-red-500">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-red-800 mb-3">
                    Wichtiger Hinweis zur gesetzlichen Verpflichtung
                  </h3>
                  <p className="text-red-700 text-sm leading-relaxed mb-4">
                    Seit dem <strong>1. Januar 2002</strong> haben alle Arbeitnehmer einen{' '}
                    <strong>Rechtsanspruch auf Entgeltumwandlung</strong> (§ 1a BetrAVG). Als Arbeitgeber sind{' '}
                    Sie <strong>gesetzlich verpflichtet</strong>, diese anzubieten. Seit 2019/2022 müssen Sie zusätzlich einen <strong>Zuschuss von mindestens 15%</strong> leisten.
                  </p>
                  
                  <Button 
                    size="sm"
                    className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-400 hover:scale-105 shadow-lg"
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

        {/* Pflichten und Chancen Section */}
        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                Pflichten vs. <span className="text-green-600">Chancen</span>
              </h2>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto">
                Eine vollständige Übersicht Ihrer rechtlichen Verpflichtungen und der sich daraus ergebenden 
                unternehmerischen Vorteile bei korrekter Umsetzung
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              {/* Pflichten des Arbeitgebers */}
              <div>
                <div className="bg-red-50 rounded-2xl p-8 h-full">
                  <div className="flex items-center space-x-3 mb-8">
                    <Scale className="w-8 h-8 text-red-600" />
                    <h3 className="text-2xl font-bold text-red-800">Ihre rechtlichen Pflichten</h3>
                  </div>

                  <div className="space-y-6">
                    {/* Angebotspflicht */}
                    <div className="bg-white rounded-xl p-6 border-l-4 border-red-500">
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="text-lg font-bold text-slate-900">1. Angebotspflicht für Entgeltumwandlung</h4>
                        <a 
                          href="https://www.gesetze-im-internet.de/betravg/__1a.html"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                      <p className="text-slate-600 text-sm mb-3">
                        Gesetzliche Verpflichtung zur Bereitstellung mindestens einer Form der betrieblichen Altersvorsorge für alle Mitarbeiter.
                      </p>
                      <div className="bg-slate-100 rounded-lg p-3">
                        <p className="text-xs text-slate-500 font-semibold">§ 1a BetrAVG</p>
                        <p className="text-xs text-slate-700">"Der Arbeitnehmer kann verlangen, dass von seinem Arbeitslohn bis zu 4 vom Hundert der Beitragsbemessungsgrenze [...] durch Entgeltumwandlung für seine betriebliche Altersversorgung verwendet werden."</p>
                      </div>
                    </div>

                    {/* Arbeitgeberzuschuss */}
                    <div className="bg-white rounded-xl p-6 border-l-4 border-red-500">
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="text-lg font-bold text-slate-900">2. Arbeitgeberzuschuss von 15%</h4>
                        <a 
                          href="https://www.gesetze-im-internet.de/betravg/__1a.html"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                      <p className="text-slate-600 text-sm mb-3">
                        Verpflichtende Bezuschussung von mindestens 15% des umgewandelten Betrags bei Sozialversicherungsersparnis.
                      </p>
                      <div className="bg-slate-100 rounded-lg p-3">
                        <p className="text-xs text-slate-500 font-semibold">§ 1a Abs. 1a BetrAVG (seit 2019/2022)</p>
                        <p className="text-xs text-slate-700">"Der Arbeitgeber ist verpflichtet, [...] den umgewandelten Betrag um 15 vom Hundert zu erhöhen, soweit er durch die Entgeltumwandlung Sozialversicherungsbeiträge einspart."</p>
                      </div>
                    </div>

                    {/* Informationspflicht */}
                    <div className="bg-white rounded-xl p-6 border-l-4 border-red-500">
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="text-lg font-bold text-slate-900">3. Informations- und Aufklärungspflicht</h4>
                        <a 
                          href="https://www.gesetze-im-internet.de/betravg/__1.html"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                      <p className="text-slate-600 text-sm mb-3">
                        Umfassende Aufklärung der Mitarbeiter über bAV-Möglichkeiten, steuerliche Auswirkungen und Förderungen.
                      </p>
                      <div className="bg-slate-100 rounded-lg p-3">
                        <p className="text-xs text-slate-500 font-semibold">§ 1 BetrAVG + Arbeitsrecht</p>
                        <p className="text-xs text-slate-700">Arbeitgeber müssen über Durchführungswege, steuerliche Behandlung und Auswirkungen informieren.</p>
                      </div>
                    </div>

                    {/* Gleichbehandlung */}
                    <div className="bg-white rounded-xl p-6 border-l-4 border-red-500">
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="text-lg font-bold text-slate-900">4. Gleichbehandlungsgrundsatz</h4>
                        <a 
                          href="https://www.gesetze-im-internet.de/betravg/__1b.html"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                      <p className="text-slate-600 text-sm mb-3">
                        Alle Mitarbeitergruppen müssen gleichen Zugang zu bAV-Angeboten erhalten - keine Benachteiligung.
                      </p>
                      <div className="bg-slate-100 rounded-lg p-3">
                        <p className="text-xs text-slate-500 font-semibold">§ 1b BetrAVG</p>
                        <p className="text-xs text-slate-700">"Werden mehreren Arbeitnehmern Leistungen der betrieblichen Altersversorgung zugesagt, dürfen dabei einzelne Arbeitnehmer nicht ohne sachlichen Grund schlechter behandelt werden als andere."</p>
                      </div>
                    </div>

                    {/* Dokumentationspflicht */}
                    <div className="bg-white rounded-xl p-6 border-l-4 border-red-500">
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="text-lg font-bold text-slate-900">5. Verwaltungs- und Dokumentationspflicht</h4>
                        <a 
                          href="https://www.deutsche-rentenversicherung.de/DRV/DE/Rente/Betriebsrente/betriebsrente.html"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                      <p className="text-slate-600 text-sm mb-3">
                        Ordnungsgemäße Verwaltung, Meldungen an Versorgungsträger und lückenlose Dokumentation aller Prozesse.
                      </p>
                      <div className="bg-slate-100 rounded-lg p-3">
                        <p className="text-xs text-slate-500 font-semibold">§ 8a BetrAVG + DRV-Richtlinien</p>
                        <p className="text-xs text-slate-700">Führung von Versorgungsregistern, ordnungsgemäße Meldungen und Dokumentation von Anwartschaften.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Chancen und Vorteile */}
              <div>
                <div className="bg-green-50 rounded-2xl p-8 h-full">
                  <div className="flex items-center space-x-3 mb-8">
                    <TrendingUp className="w-8 h-8 text-green-600" />
                    <h3 className="text-2xl font-bold text-green-800">Ihre unternehmerischen Chancen</h3>
                  </div>

                  <div className="space-y-6">
                    {/* Steuerliche Vorteile */}
                    <div className="bg-white rounded-xl p-6 border-l-4 border-green-500">
                      <div className="flex items-start space-x-3 mb-3">
                        <Calculator className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="text-lg font-bold text-slate-900">Erhebliche Steuervorteile</h4>
                          <p className="text-slate-600 text-sm mb-3">
                            Einsparungen bei Lohnsteuer und Sozialversicherungsbeiträgen für das Unternehmen.
                          </p>
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                              <CheckCircle className="w-4 h-4 text-green-500" />
                              <span className="text-sm text-slate-700">Bis zu 20% Ersparnis bei Sozialversicherung</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <CheckCircle className="w-4 h-4 text-green-500" />
                              <span className="text-sm text-slate-700">Reduzierte Lohnnebenkosten</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <CheckCircle className="w-4 h-4 text-green-500" />
                              <span className="text-sm text-slate-700">Steuerliche Absetzbarkeit der Zuschüsse</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Mitarbeiterzufriedenheit */}
                    <div className="bg-white rounded-xl p-6 border-l-4 border-green-500">
                      <div className="flex items-start space-x-3 mb-3">
                        <Heart className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="text-lg font-bold text-slate-900">Höhere Mitarbeiterzufriedenheit</h4>
                          <p className="text-slate-600 text-sm mb-3">
                            Attraktive Zusatzleistung steigert Bindung und Motivation der Belegschaft.
                          </p>
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                              <CheckCircle className="w-4 h-4 text-green-500" />
                              <span className="text-sm text-slate-700">Reduktion der Personalfluktuation</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <CheckCircle className="w-4 h-4 text-green-500" />
                              <span className="text-sm text-slate-700">Höhere Motivation und Produktivität</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <CheckCircle className="w-4 h-4 text-green-500" />
                              <span className="text-sm text-slate-700">Geringere Rekrutierungskosten</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Wettbewerbsvorteile */}
                    <div className="bg-white rounded-xl p-6 border-l-4 border-green-500">
                      <div className="flex items-start space-x-3 mb-3">
                        <Award className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="text-lg font-bold text-slate-900">Wettbewerbsvorteile im Arbeitsmarkt</h4>
                          <p className="text-slate-600 text-sm mb-3">
                            Positionierung als attraktiver und verantwortungsvoller Arbeitgeber.
                          </p>
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                              <CheckCircle className="w-4 h-4 text-green-500" />
                              <span className="text-sm text-slate-700">Bessere Personalakquise</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <CheckCircle className="w-4 h-4 text-green-500" />
                              <span className="text-sm text-slate-700">Employer Branding Verbesserung</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <CheckCircle className="w-4 h-4 text-green-500" />
                              <span className="text-sm text-slate-700">Soziale Verantwortung demonstrieren</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Rechtssicherheit */}
                    <div className="bg-white rounded-xl p-6 border-l-4 border-green-500">
                      <div className="flex items-start space-x-3 mb-3">
                        <Shield className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="text-lg font-bold text-slate-900">Vollständige Rechtssicherheit</h4>
                          <p className="text-slate-600 text-sm mb-3">
                            Schutz vor rechtlichen Risiken und Compliance-Problemen.
                          </p>
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                              <CheckCircle className="w-4 h-4 text-green-500" />
                              <span className="text-sm text-slate-700">Vermeidung von Haftungsrisiken</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <CheckCircle className="w-4 h-4 text-green-500" />
                              <span className="text-sm text-slate-700">Keine Nachzahlungen oder Bußgelder</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <CheckCircle className="w-4 h-4 text-green-500" />
                              <span className="text-sm text-slate-700">Automatische Gesetzeskonformität</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Effizienzgewinne */}
                    <div className="bg-white rounded-xl p-6 border-l-4 border-green-500">
                      <div className="flex items-start space-x-3 mb-3">
                        <Clock className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="text-lg font-bold text-slate-900">Operative Effizienzgewinne</h4>
                          <p className="text-slate-600 text-sm mb-3">
                            Digitale Automatisierung reduziert Verwaltungsaufwand erheblich.
                          </p>
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                              <CheckCircle className="w-4 h-4 text-green-500" />
                              <span className="text-sm text-slate-700">Bis zu 80% weniger Verwaltungsaufwand</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <CheckCircle className="w-4 h-4 text-green-500" />
                              <span className="text-sm text-slate-700">Automatisierte Prozesse und Meldungen</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <CheckCircle className="w-4 h-4 text-green-500" />
                              <span className="text-sm text-slate-700">HR-Teams können sich auf Kernaufgaben fokussieren</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-16">
              <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Verwandeln Sie Ihre Pflichten in <span className="text-green-600">Wettbewerbsvorteile</span>
                </h3>
                <p className="text-slate-600 mb-8 max-w-3xl mx-auto">
                  Mit der richtigen Umsetzung wird die gesetzliche Verpflichtung zur betrieblichen Altersvorsorge 
                  zu einem strategischen Vorteil für Ihr Unternehmen.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-400 hover:scale-105 shadow-lg"
                    onClick={() => window.open('https://outlook.office365.com/owa/calendar/ACENCIAde@acencia.de/bookings/', '_blank')}
                  >
                    Kostenfreie Potenzialanalyse vereinbaren
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  <Button 
                    variant="outline"
                    className="border-2 border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-3 rounded-xl font-semibold transition-all duration-400"
                    onClick={() => window.open('https://www.bmas.de/DE/Arbeit/Rente-und-Altersvorsorge/Betriebsrente/betriebsrente.html', '_blank')}
                  >
                    <FileText className="w-5 h-5 mr-2" />
                    Mehr Informationen (BMAS)
                  </Button>
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