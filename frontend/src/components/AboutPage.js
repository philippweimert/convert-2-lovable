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
      
      <div className="pt-20">
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

      {/* Our Approach */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Unser Ansatz
            </h2>
            <div className="bg-slate-50 rounded-2xl p-8 mb-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                Lassen Sie uns gemeinsam die bAV auf das nächste Level heben
              </h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-4">
                bAV muss nicht kompliziert sein!
              </p>
              <blockquote className="border-l-4 border-orange-500 pl-6 italic text-slate-600">
                "Die bAV ist einer der wichtigsten Säulen der Vorsorge in Deutschland und ein 
                starkes Benefit für die Mitarbeitenden. Jedoch geht die bAV auch mit komplexen 
                rechtlichen Pflichten und einem undurchsichtigen Verwaltungsapparat einher der 
                enorme Kapazitäten bindet. Unser Ziel ist es diese Prozesse für Sie zu übernehmen 
                und zu vereinfachen, damit Sie sich voll und ganz auf Ihr Kerngeschäft fokussieren können."
              </blockquote>
            </div>
            
            <div className="bg-orange-50 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                Warum ACENCIA?
              </h3>
              <p className="text-slate-700 leading-relaxed">
                Unser übergreifendes Ziel ist es, Unternehmern und Personalabteilungen die 'Last' 
                der bAV von den Schultern zu nehmen. Dabei bieten wir nicht nur rechtliche Sicherheit, 
                sondern begeistern durch die einfachsten digitalen Verwaltungslösungen am Markt und 
                innovative Zusatz-Services für Unternehmen und Mitarbeitende.
              </p>
            </div>

            <div className="mt-8">
              <Button 
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 mr-4"
                onClick={() => window.open('https://outlook.office365.com/owa/calendar/ACENCIAde@acencia.de/bookings/', '_blank')}
              >
                Beratungstermin buchen
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-slate-300 text-slate-700 hover:bg-slate-100 px-8 py-3"
                onClick={() => window.open('tel:+4967179658O', '_self')}
              >
                +49 671 79 65 8 0
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="bg-slate-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-8">
            Kontaktieren Sie uns
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Telefon</h3>
              <a href="tel:+4967179658O" className="text-slate-300 hover:text-orange-400 transition-colors">
                +49 671 79 65 8 0
              </a>
            </div>
            
            <div>
              <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">E-Mail</h3>
              <a href="mailto:info@acencia.de" className="text-slate-300 hover:text-orange-400 transition-colors">
                info@acencia.de
              </a>
            </div>

            <div>
              <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">LinkedIn</h3>
              <a 
                href="https://www.linkedin.com/company/acencia/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-orange-400 transition-colors"
              >
                Folgen Sie uns
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;