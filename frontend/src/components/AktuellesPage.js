import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Calendar, Clock, User, BookOpen, Scale, Gavel, TrendingUp, Filter, Search } from 'lucide-react';

const AktuellesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('alle');
  const [searchTerm, setSearchTerm] = useState('');

  // Mock-Artikel über betriebliche Altersvorsorge
  const articles = [
    {
      id: 1,
      title: "BAG-Urteil: Neue Pflichten bei der Entgeltumwandlung",
      excerpt: "Das Bundesarbeitsgericht hat in einem wegweisenden Urteil die Arbeitgeberpflichten bei der Entgeltumwandlung präzisiert. Unternehmen müssen künftig über steuerliche Auswirkungen informieren.",
      date: "2024-12-15",
      category: "Rechtsprechung",
      author: "Dr. Maria Schmidt",
      readTime: "5 Min.",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=240&fit=crop",
      tags: ["BAG", "Entgeltumwandlung", "Arbeitgeberpflichten"]
    },
    {
      id: 2,
      title: "Betriebsrentenstärkungsgesetz: Änderungen ab 2025",
      excerpt: "Mit dem neuen Jahr treten wichtige Änderungen des Betriebsrentenstärkungsgesetzes in Kraft. Wir erläutern die wichtigsten Neuerungen für Arbeitgeber und Arbeitnehmer.",
      date: "2024-12-10",
      category: "Gesetzgebung",
      author: "Prof. Dr. Thomas Weber",
      readTime: "8 Min.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=240&fit=crop",
      tags: ["BRSG", "Gesetzesänderung", "2025"]
    },
    {
      id: 3,
      title: "Digitalisierung der bAV: Chancen und Herausforderungen",
      excerpt: "Expertenmeinung zur fortschreitenden Digitalisierung in der betrieblichen Altersvorsorge. Welche Potentiale bieten moderne HR-Technologien?",
      date: "2024-12-05",
      category: "Expertenmeinung",
      author: "Sarah Mueller",
      readTime: "6 Min.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=240&fit=crop",
      tags: ["Digitalisierung", "HR-Tech", "Innovation"]
    },
    {
      id: 4,
      title: "BFH stärkt Arbeitnehmerrechte bei Direktversicherung",
      excerpt: "Der Bundesfinanzhof hat in einem aktuellen Urteil die Rechte von Arbeitnehmern bei der Direktversicherung gestärkt. Die Auswirkungen für die Praxis.",
      date: "2024-11-28",
      category: "Rechtsprechung",
      author: "Dr. Klaus Hoffmann",
      readTime: "4 Min.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=240&fit=crop",
      tags: ["BFH", "Direktversicherung", "Arbeitnehmerrechte"]
    },
    {
      id: 5,
      title: "Nachhaltigkeit in der betrieblichen Altersvorsorge",
      excerpt: "ESG-Kriterien gewinnen auch in der bAV an Bedeutung. Experten diskutieren über nachhaltige Anlagestrategien und regulatorische Entwicklungen.",
      date: "2024-11-20",
      category: "Expertenmeinung",
      author: "Dr. Anna Richter",
      readTime: "7 Min.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=240&fit=crop",
      tags: ["ESG", "Nachhaltigkeit", "Anlagestrategie"]
    },
    {
      id: 6,
      title: "EU-Portabilitätsrichtlinie: Was Unternehmen wissen müssen",
      excerpt: "Die neue EU-Richtlinie zur Portabilität von Zusatzrentenansprüchen bringt Änderungen für internationale Unternehmen. Ein Überblick über die wichtigsten Punkte.",
      date: "2024-11-15",
      category: "Gesetzgebung",
      author: "Prof. Dr. Michael Ernst",
      readTime: "9 Min.",
      image: "https://images.unsplash.com/photo-1494790108755-2616c04af132?w=400&h=240&fit=crop",
      tags: ["EU-Richtlinie", "Portabilität", "International"]
    }
  ];

  const categories = ['alle', 'Rechtsprechung', 'Gesetzgebung', 'Expertenmeinung'];

  // Filter articles based on category and search term
  const filteredArticles = articles.filter(article => {
    const matchesCategory = selectedCategory === 'alle' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Rechtsprechung': return <Gavel className="w-4 h-4" />;
      case 'Gesetzgebung': return <Scale className="w-4 h-4" />;
      case 'Expertenmeinung': return <User className="w-4 h-4" />;
      default: return <BookOpen className="w-4 h-4" />;
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Rechtsprechung': return 'bg-red-100 text-red-800 border-red-200';
      case 'Gesetzgebung': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Expertenmeinung': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <Header />
      
      {/* Header Spacing */}
      <div className="pt-20"></div>
      
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <TrendingUp className="w-8 h-8 text-orange-400" />
            <span className="text-orange-400 font-semibold text-lg tracking-wide">Immer aktuell informiert</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Aktuelles zur{' '}
            <span className="text-orange-500">betrieblichen Altersvorsorge</span>
          </h1>
          <p className="text-xl text-gray-300 mb-12">
            Rechtliche Entwicklungen, Expertenmeinungen und wichtige Urteile - 
            bleiben Sie auf dem Laufenden mit unserem Fach-Blog.
          </p>
        </div>
      </div>

      {/* Filter and Search Section */}
      <div className="container mx-auto px-6 mb-12">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              
              {/* Category Filter */}
              <div className="flex items-center space-x-2">
                <Filter className="w-5 h-5 text-gray-300" />
                <span className="text-gray-300 font-medium">Kategorie:</span>
                <div className="flex space-x-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                        selectedCategory === category
                          ? 'bg-orange-500 text-white'
                          : 'bg-white/10 text-gray-300 hover:bg-white/20'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Artikel durchsuchen..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Articles Grid */}
      <div className="container mx-auto px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          {filteredArticles.length === 0 ? (
            <div className="text-center py-16">
              <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl text-gray-300 mb-2">Keine Artikel gefunden</h3>
              <p className="text-gray-400">Versuchen Sie andere Suchbegriffe oder Filter.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article, index) => (
                <article 
                  key={article.id}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Article Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-bold border ${getCategoryColor(article.category)}`}>
                        {getCategoryIcon(article.category)}
                        <span>{article.category}</span>
                      </span>
                    </div>
                  </div>

                  {/* Article Content */}
                  <div className="p-6">
                    {/* Meta Information */}
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(article.date).toLocaleDateString('de-DE')}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>

                    {/* Article Title */}
                    <h3 className="text-lg font-bold text-slate-900 mb-3 leading-tight group-hover:text-orange-600 transition-colors">
                      {article.title}
                    </h3>

                    {/* Article Excerpt */}
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {article.excerpt}
                    </p>

                    {/* Author and Tags */}
                    <div className="border-t border-gray-100 pt-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <User className="w-4 h-4 text-gray-400" />
                          <span className="text-sm text-gray-600 font-medium">{article.author}</span>
                        </div>
                        <button className="text-orange-500 hover:text-orange-600 font-semibold text-sm transition-colors">
                          Weiterlesen →
                        </button>
                      </div>
                      
                      {/* Tags */}
                      <div className="mt-3 flex flex-wrap gap-2">
                        {article.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AktuellesPage;