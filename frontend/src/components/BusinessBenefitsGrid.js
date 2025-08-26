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

  // Vorteile für Unternehmen (zusammengefasst)
  const unternehmensvorteile = [
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Kostenreduktion & Steuervorteile",
      description: "Erhebliche Einsparungen bei Lohnsteuer und Sozialversicherungsbeiträgen durch digitalisierte Verwaltungsprozesse und optimale bAV-Gestaltung auf kostenneutraler Basis."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Effizienzsteigerung & Zeitersparnis", 
      description: "Bis zu 80% weniger Verwaltungsaufwand durch vollautomatisierte Prozesse. Wir übernehmen das 'Daily Business' Ihrer bAV-Verwaltung für maximale Fokussierung auf Ihr Kerngeschäft."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Risikominimierung & Rechtssicherheit",
      description: "Vollständige Compliance-Sicherstellung und Schutz vor rechtlichen Risiken durch komplexe rechtliche Prüfprozesse und permanente Überwachung aller Gesetzesänderungen."
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
    <section className="bg-gradient-to-br from-acencia via-acencia-blue to-acencia py-20 relative overflow-hidden">
      {/* Subtle geometric background - refined */}
      <div className="absolute inset-0 opacity-[0.04]">
        <svg className="absolute top-20 right-0 w-96 h-96" viewBox="0 0 400 400">
          <defs>
            <pattern id="benefitsPattern" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
              <polygon points="25,8 42,18 42,32 25,42 8,32 8,18" 
                       fill="none" stroke="currentColor" strokeWidth="0.5" className="text-acencia-orange-light" />
            </pattern>
          </defs>
          <rect width="400" height="400" fill="url(#benefitsPattern)" />
        </svg>
      </div>
      
      {/* Floating accent elements */}
      <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-acencia-orange rounded-full animate-pulse opacity-30"></div>
      <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-acencia-orange-light rounded-full animate-bounce opacity-40"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6 font-heading">
            Die konkreten <span className="text-orange-400">Vorteile für Sie</span>
          </h2>
          <p className="text-slate-300 max-w-3xl mx-auto text-base mb-8 font-body">
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
        <div className={`gap-8 mb-16 ${
          activeTab === 'mitarbeitende' 
            ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4' 
            : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
        }`}>
          {currentBenefits.map((benefit, index) => (
            <div key={index} className="text-center group cursor-pointer" onClick={() => toggleBenefit(index)}>
              {/* Icon container */}
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