import React from "react";
import { Home, Building, Building2 } from "lucide-react";

const CustomerSegments = () => {
  const segments = [
    {
      icon: <Home className="w-8 h-8" />,
      title: "Start-up",
      description: "Flexible und skalierbare bAV-Lösungen für junge Unternehmen"
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Mittelstand",
      description: "Bewährte Konzepte für etablierte mittelständische Betriebe"
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Konzern",
      description: "Komplexe Lösungen für große Unternehmensstrukturen"
    }
  ];

  return (
    <section className="bg-slate-100 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-slate-900 mb-8">Unsere Kunden.</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {segments.map((segment, index) => (
            <div key={index} className="group">
              <div className="bg-slate-900 rounded-2xl p-8 h-64 flex flex-col justify-between hover:bg-slate-800 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <div className="text-orange-500 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {segment.icon}
                </div>
                <div>
                  <div className="bg-orange-100 rounded-md px-4 py-2 inline-block mb-4">
                    <span className="text-slate-900 font-semibold">{segment.title}</span>
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {segment.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerSegments;