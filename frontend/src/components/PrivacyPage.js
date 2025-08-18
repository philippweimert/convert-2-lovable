import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const PrivacyPage = () => {
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
              <span className="text-orange-500">Datenschutzerklärung</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Informationen zur Erhebung und Verwendung personenbezogener Daten
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="bg-slate-100 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 shadow-sm space-y-8">
            
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Verantwortlicher</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:
              </p>
              <div className="bg-slate-50 p-4 rounded-lg">
                <p className="text-slate-700">
                  <strong>ACENCIA GmbH</strong><br/>
                  Geschäftsführer: Uwe Weimert<br/>
                  Hackenheim, Deutschland<br/>
                  Telefon: +49 671 79 65 8 0<br/>
                  E-Mail: info@acencia.de
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Erhebung personenbezogener Daten</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Wir erheben personenbezogene Daten, wenn Sie uns diese freiwillig zur Verfügung stellen, 
                beispielsweise bei:
              </p>
              <ul className="list-disc list-inside text-slate-700 space-y-2 mb-4">
                <li>Kontaktaufnahme über unser Kontaktformular</li>
                <li>Terminbuchungen über unser Buchungssystem</li>
                <li>Anmeldung zu unserem Newsletter</li>
                <li>Nutzung unserer Website (technische Daten)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Cookies</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Wir verwenden Cookies auf unserer Website, um Ihnen die bestmögliche Nutzererfahrung zu bieten. 
                Cookies sind kleine Textdateien, die auf Ihrem Endgerät gespeichert werden.
              </p>
              <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-r-lg">
                <h3 className="font-semibold text-slate-900 mb-2">Cookie-Kategorien</h3>
                <ul className="text-slate-700 text-sm space-y-1">
                  <li><strong>Notwendige Cookies:</strong> Erforderlich für die Grundfunktionen der Website</li>
                  <li><strong>Analytische Cookies:</strong> Helfen uns, die Website-Nutzung zu verstehen</li>
                  <li><strong>Marketing Cookies:</strong> Ermöglichen personalisierte Werbung</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Zweck der Datenverarbeitung</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Wir verwenden Ihre personenbezogenen Daten für folgende Zwecke:
              </p>
              <ul className="list-disc list-inside text-slate-700 space-y-2">
                <li>Beantwortung Ihrer Anfragen</li>
                <li>Terminkoordination und -verwaltung</li>
                <li>Bereitstellung unserer Dienstleistungen</li>
                <li>Verbesserung unserer Website und Services</li>
                <li>Rechtliche Verpflichtungen</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Ihre Rechte</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Sie haben folgende Rechte bezüglich Ihrer personenbezogenen Daten:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-slate-900 mb-2">Auskunftsrecht</h3>
                  <p className="text-slate-700 text-sm">Recht auf Auskunft über verarbeitete Daten</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-slate-900 mb-2">Berichtigungsrecht</h3>
                  <p className="text-slate-700 text-sm">Recht auf Korrektur falscher Daten</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-slate-900 mb-2">Löschungsrecht</h3>
                  <p className="text-slate-700 text-sm">Recht auf Löschung Ihrer Daten</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-slate-900 mb-2">Widerspruchsrecht</h3>
                  <p className="text-slate-700 text-sm">Recht auf Widerspruch gegen Datenverarbeitung</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Datensicherheit</h2>
              <p className="text-slate-700 leading-relaxed">
                Wir treffen angemessene technische und organisatorische Maßnahmen, um Ihre 
                personenbezogenen Daten vor Verlust, Missbrauch und unbefugtem Zugriff zu schützen. 
                Unsere Website verwendet SSL-Verschlüsselung für die sichere Datenübertragung.
              </p>
            </div>

            <div className="border-t pt-8">
              <p className="text-slate-600 text-sm">
                <strong>Stand:</strong> Januar 2025<br/>
                Bei Fragen zum Datenschutz kontaktieren Sie uns unter: 
                <a href="mailto:info@acencia.de" className="text-orange-500 hover:text-orange-600 ml-1">
                  info@acencia.de
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPage;