import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Button } from "./ui/button";
import { 
  AlertTriangle, 
  FileText, 
  ArrowRight,
  ExternalLink,
  Gavel
} from "lucide-react";

const EmployerObligationsPage = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="bg-slate-900 py-20 relative overflow-hidden">
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

        {/* Wichtiger Hinweis zur gesetzlichen Verpflichtung */}
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

export default EmployerObligationsPage;