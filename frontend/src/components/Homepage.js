import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import CustomerSegments from "./CustomerSegments";
import GoogleReviews from "./GoogleReviews";
import Footer from "./Footer";
import { Award, Users, TrendingUp, ArrowRight, Sparkles, CheckCircle } from "lucide-react";

const Homepage = () => {
  const expertiseAreas = [
    {
      title: "bAV",
      subtitle: "Betriebliche Altersvorsorge",
      description: "Komplexe bAV-Herausforderungen einfach gelöst - mit über 30 Jahren Expertise",
      link: "/die-bav",
      color: "from-blue-500 to-blue-600",
      icon: <TrendingUp className="w-8 h-8" />
    },
    {
      title: "bKV", 
      subtitle: "Betriebliche Krankenversicherung",
      description: "Gesundheitsvorsorge als Mitarbeiterbenefit - professionell implementiert",
      link: "/bkv",
      color: "from-green-500 to-green-600", 
      icon: <Users className="w-8 h-8" />
    },
    {
      title: "bUV",
      subtitle: "Betriebliche Unfallversicherung", 
      description: "Umfassender Schutz für Ihre Mitarbeitenden - über das Gesetz hinaus",
      link: "/buv",
      color: "from-purple-500 to-purple-600",
      icon: <Award className="w-8 h-8" />
    }
  ];

  const benefits = [
    "Über 30 Jahre Marktexpertise",
    "Komplette Digitalisierung aller Prozesse", 
    "Individuelle Lösungen für jede Unternehmensgröße",
    "Rechtssichere Implementierung"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-acencia via-acencia to-acencia-light">
      <Header />
      
      {/* Moderne Interaktive Hero Section */}
      <div className="pt-40">
        <section className="min-h-[85vh] flex items-center relative overflow-hidden">
          {/* Erweiterte animierte Background Patterns */}
          <div className="absolute inset-0">
            {/* Floating animated shapes */}
            <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-r from-orange-500/10 to-orange-600/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-bounce" style={{animationDuration: '6s'}}></div>
            
            {/* Animated geometric patterns */}
            <div className="absolute inset-0 opacity-[0.08]">
              <svg className="absolute top-32 right-10 w-80 h-80 animate-spin" viewBox="0 0 400 400" style={{animationDuration: '20s'}}>
                <polygon points="200,40 350,120 350,280 200,360 50,280 50,120" 
                         fill="none" stroke="white" strokeWidth="1"/>
                <polygon points="150,80 250,80 300,150 250,220 150,220 100,150" 
                         fill="none" stroke="white" strokeWidth="0.5"/>
              </svg>
              <svg className="absolute bottom-32 left-10 w-64 h-64 animate-pulse" viewBox="0 0 300 300">
                <polygon points="150,20 270,80 270,180 150,240 30,180 30,80" 
                         fill="none" stroke="white" strokeWidth="1"/>
              </svg>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              
              {/* Left Content - Hero Text */}
              <div className="text-left">
                {/* Simplified Onboarding Offer Banner */}
                <div className="mb-8 group">
                  <div className="bg-gradient-to-r from-green-500/20 via-emerald-500/20 to-green-600/20 backdrop-blur-lg border-2 border-green-400/40 rounded-2xl p-6 relative overflow-hidden group-hover:scale-105 transition-all duration-300 shadow-2xl">
                    
                    {/* Animated background glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 to-emerald-400/10 animate-pulse"></div>
                    
                    {/* Floating sparkles */}
                    <div className="absolute top-2 right-2">
                      <Sparkles className="w-6 h-6 text-green-400 animate-bounce" style={{animationDelay: '0.5s'}} />
                    </div>
                    <div className="absolute bottom-2 left-2">
                      <Sparkles className="w-4 h-4 text-emerald-400 animate-pulse" style={{animationDelay: '1s'}} />
                    </div>
                    
                    <div className="relative z-10 text-center">
                      <div className="flex items-center justify-center mb-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                          <CheckCircle className="w-5 h-5 text-white" />
                        </div>
                      </div>
                      
                      <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                        <span className="text-green-400">0,00 €</span> Onboarding-Kosten
                      </h2>
                      
                      <p className="text-slate-200 font-medium">
                        Bis zum <span className="text-green-400 font-bold">01.01.2027</span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Main Headline */}
                <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  Digitale <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent animate-gradient-x">Verwaltungs-Lösungen</span>
                  <br />
                  <span className="text-3xl lg:text-5xl text-slate-200">für moderne Unternehmen</span>
                </h1>

                {/* Subtitle */}
                <p className="text-xl text-slate-300 mb-8 max-w-lg leading-relaxed">
                  Automatisieren Sie Ihre betriebliche Altersvorsorge komplett. 
                  <span className="text-orange-300 font-semibold"> DSGVO-konform, rechtssicher und vollständig digital.</span>
                </p>

                {/* Interactive Benefits */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                  {benefits.map((benefit, index) => (
                    <div 
                      key={index} 
                      className="group flex items-center space-x-3 p-3 rounded-lg hover:bg-white/10 transition-all duration-300 hover:scale-105"
                      style={{animationDelay: `${index * 150}ms`}}
                    >
                      <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-slate-200 font-medium group-hover:text-white transition-colors duration-300">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Enhanced CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={() => window.open('https://outlook.office365.com/owa/calendar/ACENCIAde@acencia.de/bookings/', '_blank')}
                    className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg flex items-center justify-center space-x-2 relative overflow-hidden"
                  >
                    {/* Subtle shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                    <span className="relative z-10">Jetzt kostenfrei starten</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
                  </button>
                  
                  <button 
                    onClick={() => window.open('https://www.youtube.com/embed/Dw1XYzzPTkY', '_blank')}
                    className="group bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                    <span>Video ansehen</span>
                  </button>
                </div>

                {/* Stats */}
                <div className="flex items-center space-x-8 mt-12 pt-8 border-t border-white/20">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-400">30+</div>
                    <div className="text-slate-400 text-sm">Jahre Erfahrung</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-400">100%</div>
                    <div className="text-slate-400 text-sm">Digital</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-400">DSGVO</div>
                    <div className="text-slate-400 text-sm">Konform</div>
                  </div>
                </div>
              </div>

              {/* Right Content - Interactive Service Cards (kompakter) */}
              <div className="flex justify-center lg:justify-end">
                <div className="grid grid-cols-1 gap-4 max-w-sm w-full">
                  {expertiseAreas.map((area, index) => (
                    <Link 
                      key={index}
                      to={area.link}
                      className="group block transform hover:scale-105 transition-all duration-300"
                      style={{animationDelay: `${index * 200}ms`}}
                    >
                      <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20 hover:bg-white/20 hover:border-orange-400/50 transition-all duration-300 hover:shadow-2xl relative overflow-hidden">
                        
                        {/* Gradient overlay on hover */}
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 to-orange-600/0 group-hover:from-orange-500/10 group-hover:to-orange-600/10 transition-all duration-500 rounded-xl"></div>
                        
                        <div className="relative z-10">
                          <div className="flex items-center justify-between mb-3">
                            <div className={`w-10 h-10 bg-gradient-to-r ${area.color} rounded-lg flex items-center justify-center text-white group-hover:rotate-12 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                              {area.icon}
                            </div>
                            <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-orange-400 group-hover:translate-x-1 transition-all duration-300" />
                          </div>
                          
                          <h3 className="text-lg font-bold text-white mb-1 group-hover:text-orange-300 transition-colors duration-300">
                            {area.title}
                          </h3>
                          
                          <h4 className="text-xs text-slate-400 mb-2 font-medium">
                            {area.subtitle}
                          </h4>
                          
                          <p className="text-slate-300 leading-relaxed text-xs group-hover:text-slate-200 transition-colors duration-300">
                            {area.description}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center animate-bounce">
            <div className="flex flex-col items-center text-slate-400 hover:text-orange-400 transition-colors duration-300 cursor-pointer">
              <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center mb-2">
                <div className="w-1 h-3 bg-slate-400 rounded-full mt-2 animate-pulse"></div>
              </div>
              <span className="text-xs font-medium">Mehr erfahren</span>
            </div>
          </div>
        </section>
        
        {/* Unsere Kunden vertrauen uns Sektion */}
        <CustomerSegments />
        
        {/* Google Bewertungen Section */}
        <GoogleReviews />
        
        <Footer />
      </div>
    </div>
  );
};

export default Homepage;