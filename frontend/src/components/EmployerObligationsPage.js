import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Button } from "./ui/button";
import { 
  AlertTriangle, 
  CheckCircle, 
  Clock, 
  Euro, 
  FileText, 
  Scale, 
  Shield, 
  Users,
  Calendar,
  Calculator,
  Lightbulb,
  ArrowRight
} from "lucide-react";

const EmployerObligationsPage = () => {
  const obligations = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Angebotspflicht für Entgeltumwandlung",
      description: "Gesetzliche Verpflichtung zur Bereitstellung der Möglichkeit zur Entgeltumwandlung für alle Mitarbeiter.",
      details: "Seit 2002 haben alle Arbeitnehmer einen Rechtsanspruch auf Entgeltumwandlung. Arbeitgeber müssen mindestens eine Form der betrieblichen Altersvorsorge anbieten.",
      legal: "§ 1a BetrAVG",
      color: "blue",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Euro className="w-8 h-8" />,
      title: "Arbeitgeberzuschuss von 15%",
      description: "Verpflichtende Bezuschussung bei Sozialversicherungsersparnis durch Entgeltumwandlung.",
      details: "Seit 2019 für neue Verträge, seit 2022 für alle bestehenden Verträge. Mindestens 15% der umgewandelten Beträge müssen bezuschusst werden.",
      legal: "§ 1a Abs. 1a BetrAVG",
      color: "green", 
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Informationspflicht",
      description: "Umfassende Aufklärung der Mitarbeiter über bAV-Möglichkeiten und deren Auswirkungen.",
      details: "Arbeitgeber müssen über Durchführungswege, steuerliche Auswirkungen, Förderungen und Risiken informieren.",
      legal: "§ 1 Abs. 1a BetrAVG",
      color: "purple",
      gradient: "from-purple-500 to-violet-500"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Direktversicherung als Mindeststandard",
      description: "Angebot mindestens einer Direktversicherung als einfachste Form der betrieblichen Altersvorsorge.",
      details: "Wenn kein anderer Durchführungsweg angeboten wird, muss eine Direktversicherung zur Verfügung gestellt werden.",
      legal: "§ 1a BetrAVG",
      color: "orange",
      gradient: "from-orange-500 to-amber-500"
    },
    {
      icon: <Scale className="w-8 h-8" />,
      title: "Gleichbehandlungsgrundsatz",
      description: "Alle Mitarbeiter müssen gleichen Zugang zu bAV-Angeboten erhalten.",
      details: "Keine Benachteiligung einzelner Mitarbeitergruppen bei der Gewährung betrieblicher Altersversorgung.",
      legal: "§ 1b BetrAVG",
      color: "red",
      gradient: "from-red-500 to-rose-500"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Verwaltungs- und Dokumentationspflicht",
      description: "Ordnungsgemäße Verwaltung und Dokumentation aller bAV-bezogenen Prozesse.",
      details: "Führung von Versorgungsregistern, Meldungen an Versorgungsträger und Dokumentation von Anwartschaften.",
      legal: "§ 8a BetrAVG",
      color: "indigo",
      gradient: "from-indigo-500 to-blue-500"
    }
  ];

  const consequences = [
    {
      icon: <AlertTriangle className="w-6 h-6 text-red-500" />,
      title: "Rechtliche Konsequenzen",
      description: "Unterlassungsklagen, Schadenersatzforderungen und arbeitsrechtliche Streitigkeiten"
    },
    {
      icon: <Euro className="w-6 h-6 text-red-500" />,
      title: "Finanzielle Nachteile",
      description: "Nachzahlungen von Zuschüssen, Zinsen und mögliche Bußgelder"
    },
    {
      icon: <Users className="w-6 h-6 text-red-500" />,
      title: "Mitarbeiterbindung",
      description: "Verlust der Attraktivität als Arbeitgeber und Schwierigkeiten bei der Personalgewinnung"
    }
  ];

  const acenciaAdvantages = [
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: "Vollständige Compliance-Sicherstellung",
      description: "Automatische Einhaltung aller gesetzlichen Vorgaben"
    },
    {
      icon: <Calculator className="w-6 h-6 text-green-500" />,
      title: "Automatische Zuschussberechnung",
      description: "Korrekte Berechnung und Überweisung der 15% Arbeitgeberzuschüsse"
    },
    {
      icon: <FileText className="w-6 h-6 text-green-500" />,
      title: "Digitale Dokumentation",
      description: "Lückenlose und rechtssichere Dokumentation aller Prozesse"
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-green-500" />,
      title: "Mitarbeiterinformation",
      description: "Automatisierte Aufklärung und Information der Mitarbeiter"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.05]">
            <svg className="absolute top-20 right-0 w-96 h-96" viewBox="0 0 400 400">
              <polygon points="200,50 350,150 350,250 200,350 50,250 50,150" 
                       fill="none" stroke="white" strokeWidth="2"/>
            </svg>
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-orange-400 rounded-full animate-ping"></div>
            <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-white rounded-full animate-pulse"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-3 bg-red-100 px-6 py-3 rounded-full mb-8">
                <Scale className="w-5 h-5 text-red-600" />
                <span className="text-red-800 font-semibold text-sm">Rechtliche Verpflichtungen</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-8 leading-tight">
                <span className="text-white">Pflichten des </span>
                <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
                  Arbeitgebers
                </span>
                <br />
                <span className="text-white">bei der bAV</span>
              </h1>
              
              <p className="text-xl text-slate-200 mb-8 max-w-4xl mx-auto leading-relaxed">
                Als Arbeitgeber in Deutschland sind Sie gesetzlich verpflichtet, Ihren Mitarbeitern 
                eine betriebliche Altersvorsorge anzubieten. Wir zeigen Ihnen, was das bedeutet und 
                wie ACENCIA Ihnen dabei hilft, alle Pflichten rechtssicher zu erfüllen.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-10 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
                  onClick={() => window.open('https://outlook.office365.com/owa/calendar/ACENCIAde@acencia.de/bookings/', '_blank')}
                >
                  Kostenlose Beratung
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-2 border-slate-300/50 text-slate-200 hover:bg-white/10 hover:text-white hover:border-white/50 px-10 py-4 text-lg font-semibold rounded-xl transition-all duration-300"
                  onClick={() => document.getElementById('obligations').scrollIntoView({behavior: 'smooth'})}
                >
                  Pflichten verstehen
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Legal Alert */}
        <section className="bg-red-50 py-12 border-l-4 border-red-500">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-start space-x-4">
              <AlertTriangle className="w-8 h-8 text-red-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-red-800 mb-2">
                  Wichtiger rechtlicher Hinweis
                </h3>
                <p className="text-red-700 leading-relaxed">
                  <strong>Seit dem 1. Januar 2002</strong> haben alle Arbeitnehmer in Deutschland einen 
                  <strong> Rechtsanspruch auf Entgeltumwandlung</strong>. Als Arbeitgeber sind Sie 
                  <strong> gesetzlich verpflichtet</strong>, diese Möglichkeit anzubieten. Seit 2019 
                  müssen Sie zusätzlich einen <strong>Zuschuss von mindestens 15%</strong> leisten, 
                  wenn Sie durch die Entgeltumwandlung Sozialversicherungsbeiträge einsparen.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Obligations Section */}
        <section id="obligations" className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6">
                Ihre <span className="text-orange-500">gesetzlichen Pflichten</span> im Überblick
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Diese Verpflichtungen ergeben sich aus dem Betriebsrentengesetz (BetrAVG) 
                und weiteren arbeitsrechtlichen Bestimmungen.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {obligations.map((obligation, index) => (
                <div key={index} className="group">
                  <div className="bg-white rounded-2xl p-8 h-full shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 hover:border-slate-300 group-hover:-translate-y-2">
                    
                    {/* Header */}
                    <div className={`bg-gradient-to-br ${obligation.gradient} rounded-xl p-4 mb-6 inline-block`}>
                      <div className="text-white">
                        {obligation.icon}
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight">
                      {obligation.title}
                    </h3>
                    
                    <p className="text-slate-600 mb-4 leading-relaxed">
                      {obligation.description}
                    </p>

                    <div className="bg-slate-50 rounded-lg p-4 mb-4">
                      <p className="text-slate-700 text-sm leading-relaxed">
                        {obligation.details}
                      </p>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                        {obligation.legal}
                      </span>
                      <CheckCircle className={`w-5 h-5 text-${obligation.color}-500`} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Consequences Section */}
        <section className="bg-slate-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                Konsequenzen bei <span className="text-red-500">Nicht-Einhaltung</span>
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Die Missachtung Ihrer Pflichten kann schwerwiegende rechtliche und 
                finanzielle Folgen haben.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {consequences.map((consequence, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-red-500">
                  <div className="flex items-start space-x-4">
                    {consequence.icon}
                    <div>
                      <h3 className="font-bold text-slate-900 mb-2">{consequence.title}</h3>
                      <p className="text-slate-600 text-sm">{consequence.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Warning */}
            <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-3xl p-8 text-center text-white">
              <h3 className="text-2xl font-bold mb-4">
                Schützen Sie sich vor rechtlichen Risiken!
              </h3>
              <p className="text-red-100 mb-6 max-w-2xl mx-auto">
                Lassen Sie nicht zu, dass Unwissen über Ihre Pflichten zu kostspieligen 
                Problemen führt. ACENCIA sorgt für vollständige Rechtssicherheit.
              </p>
              <Button 
                size="lg"
                className="bg-white text-red-600 hover:bg-red-50 px-8 py-3 font-semibold"
                onClick={() => window.open('https://outlook.office365.com/owa/calendar/ACENCIAde@acencia.de/bookings/', '_blank')}
              >
                Jetzt Compliance sicherstellen
              </Button>
            </div>
          </div>
        </section>

        {/* ACENCIA Solution */}
        <section className="bg-slate-900 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Wie <span className="text-orange-500">ACENCIA</span> Ihnen hilft
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Wir übernehmen den gesamten Aufwand und stellen sicher, dass Sie 
                alle gesetzlichen Pflichten automatisch und rechtssicher erfüllen.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {acenciaAdvantages.map((advantage, index) => (
                <div key={index} className="flex items-start space-x-4 bg-slate-800 rounded-2xl p-6 hover:bg-slate-700 transition-colors duration-300">
                  {advantage.icon}
                  <div>
                    <h3 className="font-bold text-white mb-2">{advantage.title}</h3>
                    <p className="text-slate-300">{advantage.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Final CTA */}
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-6">
                Bereit für rechtssichere bAV-Verwaltung?
              </h3>
              <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
                Vereinbaren Sie jetzt ein kostenloses Beratungsgespräch und erfahren Sie, 
                wie ACENCIA Ihnen alle Pflichten abnimmt.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-10 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105"
                  onClick={() => window.open('https://outlook.office365.com/owa/calendar/ACENCIAde@acencia.de/bookings/', '_blank')}
                >
                  Kostenlose Beratung buchen
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-2 border-slate-600 text-slate-300 hover:bg-slate-600 hover:text-white px-10 py-4 text-lg font-semibold rounded-xl transition-all duration-300"
                  onClick={() => window.open('tel:+4967179658O', '_self')}
                >
                  +49 671 79 65 8 0
                </Button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default EmployerObligationsPage;