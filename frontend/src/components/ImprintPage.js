import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const ImprintPage = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-slate-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="absolute top-20 right-0 w-96 h-96" viewBox="0 0 400 400">
            <polygon points="200,50 350,150 350,250 200,350 50,250 50,150" 
                     fill="none" stroke="white" strokeWidth="2"/>
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              <span className="text-orange-500">Impressum</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Angaben gemäß § 5 TMG
            </p>
          </div>
        </div>
      </section>

      {/* Imprint Content */}
      <section className="bg-slate-100 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 shadow-sm space-y-8">
            
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Anbieter</h2>
              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">ACENCIA GmbH</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-slate-700 leading-relaxed">
                      <strong>Geschäftsführer:</strong><br/>
                      Uwe Weimert
                    </p>
                  </div>
                  <div>
                    <p className="text-slate-700 leading-relaxed">
                      <strong>Sitz der Gesellschaft:</strong><br/>
                      Hackenheim, Deutschland
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Kontaktdaten</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-slate-900 mb-2">Telefon</h3>
                  <p className="text-slate-700">+49 671 79 65 8 0</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-slate-900 mb-2">E-Mail</h3>
                  <p className="text-slate-700">info@acencia.de</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Unternehmensgegenstand</h2>
              <p className="text-slate-700 leading-relaxed">
                ACENCIA GmbH ist ein führender Anbieter von Dienstleistungen im Bereich der 
                betrieblichen Altersvorsorge (bAV). Wir bieten umfassende Lösungen für 
                Unternehmen jeder Größe – von der Einrichtung und rechtlichen Prüfung über 
                die digitale Verwaltung bis hin zur Mitarbeiterkommunikation und -beratung.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Rechtliche Hinweise</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Haftung für Inhalte</h3>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf 
                    diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG 
                    sind wir als Diensteanbieter jedoch nicht unter der Verpflichtung, übermittelte 
                    oder gespeicherte fremde Informationen zu überwachen.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Haftung für Links</h3>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte 
                    wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch 
                    keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der 
                    jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Urheberrecht</h3>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten 
                    unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, 
                    Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes 
                    bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Streitschlichtung</h2>
              <p className="text-slate-700 leading-relaxed">
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-orange-600 ml-1">
                  https://ec.europa.eu/consumers/odr
                </a>
              </p>
              <p className="text-slate-700 text-sm mt-2">
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </div>

            <div className="border-t pt-8">
              <p className="text-slate-600 text-sm">
                <strong>Stand:</strong> Januar 2025
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ImprintPage;