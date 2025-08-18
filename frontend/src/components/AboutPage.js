import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Button } from "./ui/button";
import { Users, Award, Lightbulb, Shield } from "lucide-react";

const AboutPage = () => {
  const values = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Partnerschaft",
      description: "Wir verstehen uns als echter Partner unserer Kunden und begleiten sie langfristig."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Expertise",
      description: "Über 30 Jahre Erfahrung in der betrieblichen Altersvorsorge sprechen für sich."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation",
      description: "Wir digitalisieren und automatisieren Prozesse für maximale Effizienz."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Sicherheit",
      description: "Rechtssichere und compliance-konforme Abwicklung ist unser Standard."
    }
  ];

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
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Über <span className="text-orange-500">ACENCIA</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Seit über 30 Jahren Ihr verlässlicher Partner für betriebliche Altersvorsorge
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="bg-slate-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Über uns
              </h2>
              <p className="text-lg text-slate-700 mb-4 leading-relaxed">
                Mit über 30 Jahren Erfahrung sind wir einer der führenden Anbieter für 
                Dienstleistungen im Rahmen der betrieblichen (Alters-)Vorsorge. Für 
                Unternehmen übernehmen wir die gesamte Prozesskette der bAV – von der 
                Einrichtung, Optimierung & rechtlichen Prüfung über die komplette digitale 
                Verwaltung bis hin zur Mitarbeiterinformation und Beratung.
              </p>
              <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-r-lg mb-6">
                <h3 className="font-semibold text-slate-900 mb-2">Unsere Philosophie</h3>
                <p className="text-slate-700 text-sm leading-relaxed">
                  Wir machen betriebliche Vorsorge 'einfach'. Wir begleiten unsere Kunden 
                  als echter Partner entlang der gesamten 'bAV-Reise' und bieten alle zentralen 
                  Lösungen aus einer Hand, zugeschnitten auf die individuellen Unternehmensbedürfnisse.
                </p>
              </div>
              <Button 
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3"
                onClick={() => window.open('https://outlook.office365.com/owa/calendar/ACENCIAde@acencia.de/bookings/', '_blank')}
              >
                Jetzt Kontakt aufnehmen
              </Button>
            </div>
            <div className="flex justify-center">
              <div className="bg-slate-900 rounded-2xl p-8 max-w-md">
                <h3 className="text-xl font-bold text-white mb-4">Unsere Zahlen</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">Erfahrung</span>
                    <span className="text-2xl font-bold text-orange-500">30+ Jahre</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">Zufriedene Kunden</span>
                    <span className="text-2xl font-bold text-orange-500">500+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">Betreute Mitarbeiter</span>
                    <span className="text-2xl font-bold text-orange-500">50.000+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-slate-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Unsere Werte</h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Diese Prinzipien leiten uns in allem, was wir tun
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="bg-orange-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 hover:bg-orange-600 transition-colors duration-300">
                  <div className="text-white">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                <p className="text-slate-300 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Management Section */}
      <section className="bg-slate-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Unser Team</h2>
            <p className="text-lg text-slate-700 max-w-2xl mx-auto">
              Erfahrene Experten mit Leidenschaft für betriebliche Altersvorsorge
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-24 h-24 bg-slate-900 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-orange-500">UW</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Uwe Weimert</h3>
              <p className="text-orange-500 font-medium mb-4">Geschäftsführer</p>
              <p className="text-slate-700 leading-relaxed">
                Mit über 30 Jahren Erfahrung in der betrieblichen Altersvorsorge führt 
                Uwe Weimert ACENCIA mit Vision und Expertise. Seine Leidenschaft für 
                innovative Lösungen prägt unser Unternehmen bis heute.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;