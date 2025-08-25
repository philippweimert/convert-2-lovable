import React, { useState } from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  Building2, 
  Network, 
  Handshake, 
  Coffee,
  ArrowRight,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { Button } from './ui/button';

import React, { useState } from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  Building2, 
  Network, 
  Handshake, 
  Coffee,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Users,
  Shield,
  Clock,
  DollarSign,
  Heart,
  Briefcase,
  CheckCircle,
  PiggyBank
} from 'lucide-react';
import { Button } from './ui/button';

const BusinessBenefitsGrid = () => {
  const [expandedBenefit, setExpandedBenefit] = useState(null);
  const [activeTab, setActiveTab] = useState('unternehmen');

  const toggleBenefit = (index) => {
    setExpandedBenefit(expandedBenefit === index ? null : index);
  };

  // Vorteile für Unternehmen (erweitert um die aktuellen)
  const unternehmensvorteile = [
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Kostenreduktion",
      description: "Wir digitalisieren und vereinfachen Ihre laufenden Verwaltungsprozesse, auf Basis eines kostenneutralen Modells."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Effizienzsteigerung", 
      description: "Wir übernehmen das 'Daily Business' Ihrer bAV-Verwaltung, dadurch können Sie sich stärker auf Ihr Kerngeschäft fokussieren."
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Risikominimierung",
      description: "Wir übernehmen komplexe rechtliche Prüfprozesse und minimieren Haftungsrisiken - heute und in Zukunft."
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: "Schnellere Bearbeitung",
      description: "Wir automatisieren Ihre Workflows und übernehmen alle wichtigen Prozesse in der laufenden bAV-Verwaltung."
    },
    {
      icon: <Handshake className="w-8 h-8" />,
      title: "Mitarbeiterbindung",
      description: "Innovative Vorsorgemodelle sowie eine moderne Mitarbeiterkommunikation und -beratung bieten attraktive Benefits."
    },
    {
      icon: <Coffee className="w-8 h-8" />,
      title: "HR-Entlastung", 
      description: "Unser persönlicher Support unterstützt Sie als Partner proaktiv bei Anpassungs- oder Veränderungsmaßnahmen."
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Steuervorteile",
      description: "Erhebliche Einsparungen bei Lohnsteuer und Sozialversicherungsbeiträgen durch optimale Gestaltung der bAV."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Rechtssicherheit",
      description: "Vollständige Compliance-Sicherstellung und Schutz vor rechtlichen Risiken durch permanente Überwachung."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Zeitersparnis",
      description: "Bis zu 80% weniger Verwaltungsaufwand durch vollautomatisierte Prozesse und digitale Integration."
    }
  ];

  // Vorteile für Mitarbeitende
  const mitarbeitervorteile = [
    {
      icon: <PiggyBank className="w-8 h-8" />,
      title: "Zusätzliche Altersvorsorge",
      description: "Aufbau einer zusätzlichen Rente durch Entgeltumwandlung mit staatlicher Förderung und Arbeitgeberzuschuss."
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Steuer- und Sozialabgaben-Ersparnis",
      description: "Reduzierung der Steuerlast und Sozialversicherungsbeiträge durch steuerlich geförderte Beiträge zur bAV."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Arbeitgeberfinanzierung",
      description: "Mindestens 15% Zuschuss vom Arbeitgeber zusätzlich zur eigenen Entgeltumwandlung seit 2019/2022."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Versorgungssicherheit",
      description: "Garantierte Leistungen und Schutz der Anwartschaften durch gesetzliche Regelungen und Pensionssicherungsverein."
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Portabilität",
      description: "Mitnahme der bAV-Anwartschaften bei Arbeitgeberwechsel - die Vorsorge bleibt erhalten."
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Einfache Abwicklung",
      description: "Vollautomatische Verwaltung ohne Aufwand für den Mitarbeitenden - alles läuft über die Lohnabrechnung."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Persönliche Beratung",
      description: "Individuelle Beratung und Aufklärung über die optimale bAV-Gestaltung für die persönliche Situation."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Renditechancen",
      description: "Attraktive Renditemöglichkeiten durch professionelle Kapitalanlage und moderne Versorgungskonzepte."
    }
  ];

  const currentBenefits = activeTab === 'unternehmen' ? unternehmensvorteile : mitarbeitervorteile;

  return (
    <section className="bg-slate-900 py-20 relative overflow-hidden">
      {/* Background design similar to hero section */}
      <div className="absolute inset-0 opacity-[0.05]">
        <svg className="absolute top-20 right-0 w-96 h-96" viewBox="0 0 400 400">
          <polygon points="200,50 350,150 350,250 200,350 50,250 50,150" 
                   fill="none" stroke="white" strokeWidth="2"/>
        </svg>
        <svg className="absolute bottom-20 left-0 w-80 h-80" viewBox="0 0 400 400">
          <polygon points="200,30 320,120 320,200 200,290 80,200 80,120" 
                   fill="none" stroke="#f97316" strokeWidth="1"/>
        </svg>
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-orange-400 rounded-full animate-ping"></div>
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-orange-400 rounded-full animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Die konkreten <span className="text-orange-400">Vorteile für Sie</span>
          </h2>
          <p className="text-slate-300 max-w-3xl mx-auto text-lg mb-8">
            Entdecken Sie die Vorteile unserer digitalen bAV-Lösung
          </p>

          {/* Tab Navigation */}
          <div className="flex justify-center space-x-4 mb-8">
            <button
              onClick={() => {
                setActiveTab('unternehmen');
                setExpandedBenefit(null);
              }}
              className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === 'unternehmen'
                  ? 'bg-orange-500 text-white shadow-lg'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
              }`}
            >
              <Building2 className="w-5 h-5 inline-block mr-2" />
              Unternehmen
            </button>
            <button
              onClick={() => {
                setActiveTab('mitarbeitende');
                setExpandedBenefit(null);
              }}
              className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === 'mitarbeitende'
                  ? 'bg-orange-500 text-white shadow-lg'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
              }`}
            >
              <Users className="w-5 h-5 inline-block mr-2" />
              Mitarbeitende
            </button>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {currentBenefits.map((benefit, index) => (
            <div key={index} className="text-center group cursor-pointer" onClick={() => toggleBenefit(index)}>
              {/* Hexagon-inspired container */}
              <div className="relative mb-6">
                <div className="w-24 h-24 mx-auto bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl flex items-center justify-center group-hover:from-orange-600 group-hover:to-orange-700 transition-all duration-400 border border-slate-600 group-hover:border-orange-500 shadow-lg">
                  <div className="text-orange-400 group-hover:text-white transition-colors duration-400">
                    {benefit.icon}
                  </div>
                </div>
              </div>

              {/* Title and Chevron */}
              <div className="flex items-center justify-center space-x-2 mb-4">
                <h3 className="text-lg font-bold text-white group-hover:text-orange-400 transition-colors duration-300">
                  {benefit.title}
                </h3>
                <div className={`text-slate-400 transition-all duration-300 ${
                  expandedBenefit === index ? 'rotate-180 text-orange-400' : 'group-hover:text-orange-400'
                }`}>
                  <ChevronDown className="w-5 h-5" />
                </div>
              </div>

              {/* Expandable Description */}
              <div className={`overflow-hidden transition-all duration-500 ${
                expandedBenefit === index ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <p className="text-slate-300 text-sm leading-relaxed group-hover:text-slate-200 transition-colors duration-300 px-4">
                  {benefit.description}
                </p>
              </div>

              {/* Click hint */}
              <div className="mt-2">
                <p className="text-xs text-slate-500">
                  {expandedBenefit === index ? 'Klicken zum Einklappen' : 'Klicken für Details'}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Button 
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-400 hover:scale-105 shadow-lg"
            onClick={() => window.open('https://outlook.office365.com/owa/calendar/ACENCIAde@acencia.de/bookings/', '_blank')}
          >
            Jetzt Termin vereinbaren
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BusinessBenefitsGrid;