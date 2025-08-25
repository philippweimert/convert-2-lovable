import React, { useState } from "react";
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
  ArrowRight,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Gavel
} from "lucide-react";

const EmployerObligationsPage = () => {
  const [expandedObligation, setExpandedObligation] = useState(null);

  const toggleObligation = (index) => {
    setExpandedObligation(expandedObligation === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      
      <div className="pt-20">
        {/* Hero Section - using same background and animations as Homepage */}
        <section className="bg-slate-900 py-20 relative overflow-hidden">
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
            <div className="text-center mb-12">              
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-8 leading-tight">
                <span className="text-white">Rechtliche Grundlagen </span>
                <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
                  der bAV
                </span>
              </h1>
              
              <p className="text-xl text-slate-200 mb-12 max-w-4xl mx-auto leading-relaxed">
                Ein umfassender Überblick über Ihre gesetzlichen Verpflichtungen als Arbeitgeber in der
                betrieblichen Altersvorsorge
              </p>

              {/* Two main buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-10 py-4 text-lg font-semibold rounded-xl transition-all duration-400 hover:scale-105 shadow-lg"
                  onClick={() => window.open('https://outlook.office365.com/owa/calendar/ACENCIAde@acencia.de/bookings/', '_blank')}
                >
                  Kostenloses Erstgespräch
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button 
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 text-lg font-semibold rounded-xl transition-all duration-400 hover:scale-105 shadow-lg"
                  onClick={() => window.open('https://www.gesetze-im-internet.de/betravg/', '_blank')}
                >
                  <FileText className="w-5 h-5 mr-2" />
                  Gesetzestext BetrAVG
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Rechtlicher Hinweis Section */}
        <section className="bg-slate-800 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-slate-700 rounded-2xl p-8 border border-slate-600">
              <div className="flex items-center space-x-3 mb-6">
                <Gavel className="w-6 h-6 text-slate-300" />
                <h2 className="text-xl font-bold text-white">Rechtlicher Hinweis</h2>
              </div>
              <p className="text-slate-300 leading-relaxed">
                Die auf dieser Website bereitgestellten Inhalte und Leistungen dienen ausschließlich der Information im Rahmen der
                Tätigkeit als Versicherungsmakler gemäß § 93 HGB. Sie stellen keine Rechts- oder Steuerberatung dar.
              </p>
            </div>
          </div>
        </section>

        {/* Wichtiger Hinweis zur gesetzlichen Verpflichtung - Red Warning Section */}
        <section className="bg-red-50 py-16 border-l-4 border-red-500">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-8 border-red-500">
              <div className="flex items-start space-x-4">
                <AlertTriangle className="w-8 h-8 text-red-500 flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-red-800 mb-4">
                    Wichtiger Hinweis zur gesetzlichen Verpflichtung
                  </h3>
                  <div className="text-red-700 leading-relaxed space-y-4">
                    <p>
                      Seit dem <strong>1. Januar 2002</strong> haben alle Arbeitnehmer in Deutschland einen{' '}
                      <strong>Rechtsanspruch auf Entgeltumwandlung</strong> (§ 1a BetrAVG). Als Arbeitgeber sind{' '}
                      Sie <strong>gesetzlich verpflichtet</strong>, diese Möglichkeit anzubieten. Seit dem 1. Januar 2019 für neue Verträge und seit dem 1. Januar 2022 für alle bestehenden
                      Verträge müssen Sie zusätzlich einen <strong>Zuschuss von mindestens 15%</strong> leisten, wenn Sie durch die Entgeltumwandlung Sozialversicherungsbeiträge
                      einsparen (§ 1a Abs. 1a BetrAVG).
                    </p>
                  </div>
                  
                  <div className="mt-8">
                    <Button 
                      className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-400 hover:scale-105 shadow-lg"
                      onClick={() => window.open('https://outlook.office365.com/owa/calendar/ACENCIAde@acencia.de/bookings/', '_blank')}
                    >
                      Jetzt Compliance-Check vereinbaren
                      <ArrowRight className="w-5 h-5 ml-2" />
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
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Obligations Section */}
        <section id="obligations" className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6 text-display">
                Ihre <span className="text-emphasis">gesetzlichen Pflichten</span> im Überblick
              </h2>
              <p className="text-body-large text-slate-600 max-w-3xl mx-auto">
                Diese Verpflichtungen ergeben sich aus dem Betriebsrentengesetz (BetrAVG) 
                und weiteren arbeitsrechtlichen Bestimmungen. Klicken Sie auf eine Pflicht für Details.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {obligations.map((obligation, index) => (
                <div key={index} className="stagger-item" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden card-hover h-full">
                    
                    {/* Clickable Header */}
                    <div 
                      className="p-6 cursor-pointer hover:bg-slate-50 transition-colors duration-400 btn-hover-lift"
                      onClick={() => toggleObligation(index)}
                    >
                      {/* Icon */}
                      <div className={`bg-gradient-to-br ${obligation.gradient} rounded-xl p-4 mb-6 inline-block icon-hover transition-transform duration-400`}>
                        <div className="text-white">
                          {obligation.icon}
                        </div>
                      </div>
                      
                      {/* Title and Description */}
                      <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight text-headline">
                        {obligation.title}
                      </h3>
                      <p className="text-slate-600 mb-4 text-body">
                        {obligation.description}
                      </p>
                      
                      {/* Legal Reference and Expand Indicator */}
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-caption text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                          {obligation.legal}
                        </span>
                        <div className={`text-slate-400 transition-all duration-400 ease-bounce-in ${
                          expandedObligation === index ? 'rotate-180 text-orange-500' : 'hover:text-slate-600'
                        }`}>
                          <ChevronDown className="w-5 h-5" />
                        </div>
                      </div>
                      
                      {/* Click hint */}
                      <div className="text-xs text-slate-500 text-center text-caption">
                        {expandedObligation === index ? 'Klicken zum Einklappen' : 'Klicken für Details'}
                      </div>
                    </div>

                    {/* Expandable Content */}
                    <div className={`overflow-hidden accordion-content transition-all duration-600 ease-smooth ${
                      expandedObligation === index ? 'max-h-96 opacity-100 expanded' : 'max-h-0 opacity-0 collapsed'
                    }`}>
                      <div className="px-6 pb-6 bg-gradient-to-br from-slate-50 to-white">
                        <div className="border-t border-slate-200 pt-4">
                          <div className="bg-gradient-to-r from-slate-100 to-slate-50 rounded-xl p-4 mb-4">
                            <h4 className="text-sm font-semibold text-slate-900 mb-2 flex items-center text-headline">
                              <FileText className="w-4 h-4 mr-2 text-orange-500" />
                              Details zur gesetzlichen Verpflichtung
                            </h4>
                            <p className="text-slate-700 leading-relaxed text-body-small animate-fade-in">
                              {obligation.details}
                            </p>
                          </div>
                          
                          {/* Status Check and CTA */}
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <CheckCircle className={`w-4 h-4 text-${obligation.color}-500`} />
                              <span className="text-xs text-slate-600 font-medium">
                                Mit ACENCIA erfüllt
                              </span>
                            </div>
                            <button 
                              className="btn-primary bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 rounded-md font-medium transition-all duration-400 hover:scale-105 text-xs"
                              onClick={(e) => {
                                e.stopPropagation();
                                window.open('https://outlook.office365.com/owa/calendar/ACENCIAde@acencia.de/bookings/', '_blank');
                              }}
                            >
                              Beratung
                            </button>
                          </div>
                        </div>
                      </div>
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
                className="btn-primary bg-white text-red-600 hover:bg-red-50 px-8 py-3 font-semibold transition-all duration-400 hover:scale-105"
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
                  className="btn-primary bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-10 py-4 text-lg font-semibold rounded-xl transition-all duration-400 hover:scale-105"
                  onClick={() => window.open('https://outlook.office365.com/owa/calendar/ACENCIAde@acencia.de/bookings/', '_blank')}
                >
                  Kostenlose Beratung buchen
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-2 border-slate-600 text-slate-300 hover:bg-slate-600 hover:text-white px-10 py-4 text-lg font-semibold rounded-xl transition-all duration-400 micro-bounce"
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