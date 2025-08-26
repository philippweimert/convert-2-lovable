import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Shield, Users, TrendingUp, ArrowRight, Scale, Building2 } from "lucide-react";

const DieBavPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const moreInfoBoxes = [
    {
      title: "Für Unternehmen",
      description: "Alles Wichtige über Pflichten, Herausforderungen, Chancen und Vorteile der bAV für Arbeitgeber.",
      icon: <Building2 className="w-6 h-6" />,
      link: "/die-bav/x",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Für Arbeitnehmer", 
      description: "Erfahren Sie, wie Sie von steuerlichen Vorteilen profitieren und Ihre Altersvorsorge optimieren.",
      icon: <Users className="w-6 h-6" />,
      link: "/die-bav/y",
      color: "from-green-500 to-green-600"
    },
    {
      title: "Aktuelles",
      description: "Bleiben Sie informiert über die neuesten Entwicklungen, Gesetze und Trends in der bAV.",
      icon: <TrendingUp className="w-6 h-6" />,
      link: "/die-bav/aktuelles",
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-acencia via-acencia to-acencia-light">
      <Header />
      
      {/* Doubled spacing from header */}
      <main className="pt-56">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            
            {/* Hero Section */}
            <div className="text-center mb-16">
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-8">
                die <span className="text-acencia-orange">bAV</span>
              </h1>
              <p className="text-lg text-slate-200 leading-relaxed max-w-4xl mx-auto">
                Umfassende Informationen zur betrieblichen Altersvorsorge
              </p>
            </div>

            {/* Definition der betrieblichen Altersvorsorge */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-12">
              <div className="flex items-center mb-6">
                <Shield className="w-8 h-8 text-acencia-orange mr-3" />
                <h2 className="text-2xl font-semibold text-white">
                  Was ist betriebliche Altersvorsorge?
                </h2>
              </div>
              <p className="text-slate-200 leading-relaxed mb-4">
                Die betriebliche Altersvorsorge (bAV) ist eine Form der privaten Altersvorsorge, die über den Arbeitgeber organisiert wird. 
                Sie ergänzt die gesetzliche Rente und bietet Arbeitnehmern die Möglichkeit, zusätzliche Rentenansprüche aufzubauen.
              </p>
              <p className="text-slate-200 leading-relaxed">
                Seit 2002 haben alle Arbeitnehmer einen Rechtsanspruch auf betriebliche Altersvorsorge durch Entgeltumwandlung. 
                Dabei wird ein Teil des Bruttogehalts für die Altersvorsorge verwendet, wodurch sich die Steuer- und Sozialabgabenlast reduziert.
              </p>
            </div>

            {/* Rechtliche Stellung des Versicherungsmaklers nach HGB §93 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-16">
              <div className="flex items-center mb-6">
                <Scale className="w-8 h-8 text-acencia-orange mr-3" />
                <h2 className="text-2xl font-semibold text-white">
                  Rechtliche Stellung des Versicherungsmaklers (HGB §93)
                </h2>
              </div>
              <p className="text-slate-200 leading-relaxed mb-4">
                Nach § 93 HGB ist ein Versicherungsmakler ein gewerbsmäßiger Vermittler, der von dem Versicherungsnehmer beauftragt wird, 
                für ihn einen Versicherungsvertrag zu vermitteln oder abzuschließen.
              </p>
              <p className="text-slate-200 leading-relaxed">
                <strong className="text-white">Wichtig:</strong> Der Makler ist rechtlich dem Kunden verpflichtet und muss dessen Interessen vertreten. 
                Dies unterscheidet ihn vom Versicherungsvertreter, der im Auftrag der Versicherungsgesellschaft handelt.
              </p>
            </div>

            {/* Mehr erfahren Boxen */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white text-center mb-12">
                Mehr erfahren
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {moreInfoBoxes.map((box, index) => (
                  <Link 
                    key={index}
                    to={box.link}
                    className="group block"
                  >
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-xl h-full">
                      <div className={`w-12 h-12 bg-gradient-to-r ${box.color} rounded-xl flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform duration-300`}>
                        {box.icon}
                      </div>
                      
                      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-acencia-orange transition-colors duration-300">
                        {box.title}
                      </h3>
                      
                      <p className="text-slate-200 leading-relaxed mb-4">
                        {box.description}
                      </p>
                      
                      <div className="flex items-center text-acencia-orange group-hover:text-orange-300 transition-colors duration-300">
                        <span className="text-sm font-medium">Mehr erfahren</span>
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default DieBavPage;