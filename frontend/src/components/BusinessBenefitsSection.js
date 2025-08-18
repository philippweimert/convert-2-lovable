import React from "react";
import { 
  DollarSign, 
  Zap, 
  TrendingUp, 
  Users, 
  Shield, 
  UserCheck,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const BusinessBenefitsSection = () => {
  const benefits = [
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Reduktion von Kosten und Aufwänden",
      description: "Wir digitalisieren und vereinfachen Ihre laufenden Verwaltungsprozesse, auf Basis eines kostenneutralen Modells.",
      color: "green",
      gradient: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      borderColor: "border-green-200"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Erhöhte Bearbeitungsgeschwindigkeit",
      description: "Wir automatisieren Ihre Workflows und übernehmen alle wichtigen Prozesse in der laufenden bAV-Verwaltung.",
      color: "blue",
      gradient: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Unternehmerische Effizienzsteigerung",
      description: "Wir übernehmen das 'Daily Business' Ihrer bAV-Verwaltung, dadurch können Sie sich stärker auf Ihr Kerngeschäft fokussieren.",
      color: "purple",
      gradient: "from-purple-500 to-violet-500",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Mitarbeiterbindung und -motivation",
      description: "Innovative Vorsorgemodelle sowie eine moderne Mitarbeiterkommunikation und -beratung bieten attraktive Benefits.",
      color: "orange",
      gradient: "from-orange-500 to-amber-500",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Minimierung von Haftungsrisiken",
      description: "Wir übernehmen komplexe rechtliche Prüfprozesse und minimieren Haftungsrisiken - heute und in Zukunft.",
      color: "red",
      gradient: "from-red-500 to-rose-500",
      bgColor: "bg-red-50",
      borderColor: "border-red-200"
    },
    {
      icon: <UserCheck className="w-8 h-8" />,
      title: "Entlastung der Personalabteilung",
      description: "Unser persönlicher Support unterstützt Sie als Partner proaktiv bei Anpassungs- oder Veränderungsmaßnahmen.",
      color: "indigo",
      gradient: "from-indigo-500 to-blue-500",
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-200"
    }
  ];

  return (
    <section className="bg-white py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-20 left-20 w-80 h-80 bg-orange-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-slate-100 to-slate-200 px-6 py-3 rounded-full mb-8 shadow-lg">
            <TrendingUp className="w-5 h-5 text-slate-600" />
            <span className="text-slate-700 font-semibold text-sm tracking-wide uppercase">
              Unternehmensmehrwert
            </span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
            <span className="text-slate-900">Wir lösen Ihre individuellen </span>
            <span className="bg-gradient-to-r from-orange-500 via-orange-600 to-red-500 bg-clip-text text-transparent">
              Herausforderungen
            </span>
            <br />
            <span className="text-slate-900">und machen die bAV zum echten </span>
            <span className="bg-gradient-to-r from-orange-500 via-orange-600 to-red-500 bg-clip-text text-transparent">
              Unternehmensmehrwert
            </span>
          </h2>
          
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Wir entlasten die Personalabteilung und machen die betriebliche Vorsorge 
            zum echten Mitarbeiter-Benefit für Ihr Unternehmen.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="group"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <div className={`bg-white rounded-3xl p-8 h-full shadow-lg hover:shadow-2xl transition-all duration-500 border-2 ${benefit.borderColor} hover:border-opacity-100 border-opacity-50 group-hover:-translate-y-3`}>
                
                {/* Icon */}
                <div className={`${benefit.bgColor} rounded-2xl p-4 mb-6 inline-block group-hover:scale-110 transition-transform duration-300`}>
                  <div className={`text-${benefit.color}-600`}>
                    {benefit.icon}
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-slate-900 mb-4 leading-tight group-hover:text-slate-800 transition-colors duration-300">
                  {benefit.title}
                </h3>
                
                <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300 mb-6">
                  {benefit.description}
                </p>

                {/* Bottom accent */}
                <div className={`bg-gradient-to-r ${benefit.gradient} h-1 w-0 group-hover:w-full transition-all duration-500 rounded-full`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-12 max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-purple-500/5 to-blue-500/5"></div>
            <div className="absolute top-0 right-1/4 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center space-x-3 mb-6">
                <CheckCircle className="w-7 h-7 text-orange-400" />
                <span className="text-orange-400 font-semibold text-lg">
                  Bereit für mehr Effizienz?
                </span>
              </div>
              
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
                Lassen Sie uns Ihre bAV-Herausforderungen lösen
              </h3>
              
              <p className="text-slate-300 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
                Erfahren Sie in einem persönlichen Gespräch, wie ACENCIA Ihre 
                Personalabteilung entlastet und echten Unternehmensmehrwert schafft.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-10 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg text-lg group"
                  onClick={() => window.open('https://outlook.office365.com/owa/calendar/ACENCIAde@acencia.de/bookings/', '_blank')}
                >
                  <span>Kostenlose Analyse buchen</span>
                  <ArrowRight className="w-5 h-5 ml-2 inline group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  className="border-2 border-slate-600 text-slate-300 hover:bg-slate-600 hover:text-white hover:border-slate-500 px-10 py-4 rounded-xl font-semibold transition-all duration-300 text-lg"
                  onClick={() => window.open('https://outlook.office365.com/owa/calendar/ACENCIAde@acencia.de/bookings/', '_blank')}
                >
                  Unverbindlich informieren
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessBenefitsSection;