import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-lg border-b border-slate-700/50 shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Enhanced Logo */}
          <Link to="/" className="flex items-center space-x-3 group smooth-slide">
            <div className="flex flex-col text-white group-hover:text-orange-400 transition-colors duration-400">
              <span className="text-lg tracking-wider transform group-hover:scale-110 transition-transform duration-400 icon-hover">≡</span>
            </div>
            <div className="text-white">
              <span className="text-2xl font-extrabold tracking-wider group-hover:text-orange-400 transition-colors duration-400 text-headline">
                ACENCIA
              </span>
              <div className="text-xs text-slate-400 tracking-widest group-hover:text-orange-300 transition-colors duration-400 text-caption">
                WIR MACHEN bAV EINFACH
              </div>
            </div>
          </Link>

          {/* Enhanced Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            <Link 
              to="/arbeitgeber-pflichten" 
              className="relative text-white hover:text-orange-400 transition-all duration-400 font-medium group py-2 smooth-slide text-body"
            >
              <span>bAV - rechtliche Grundlagen</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-orange-500 group-hover:w-full transition-all duration-400 ease-smooth"></div>
            </Link>
            <Link 
              to="/der-service" 
              className="relative text-white hover:text-orange-400 transition-all duration-400 font-medium group py-2 smooth-slide text-body"
            >
              <span>Der Service</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-orange-500 group-hover:w-full transition-all duration-400 ease-smooth"></div>
            </Link>
            <Link 
              to="/aktuelles" 
              className="relative text-white hover:text-orange-400 transition-all duration-400 font-medium group py-2 smooth-slide text-body"
            >
              <span>Aktuelles</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-orange-500 group-hover:w-full transition-all duration-400 ease-smooth"></div>
            </Link>
            <Link 
              to="/ueber-uns" 
              className="relative text-white hover:text-orange-400 transition-all duration-400 font-medium group py-2 smooth-slide text-body"
            >
              <span>Über uns</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-orange-500 group-hover:w-full transition-all duration-400 ease-smooth"></div>
            </Link>
            <Link 
              to="/kontakt" 
              className="relative text-white hover:text-orange-400 transition-all duration-400 font-medium group py-2 smooth-slide text-body"
            >
              <span>Kontakt</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-orange-500 group-hover:w-full transition-all duration-400 ease-smooth"></div>
            </Link>
            <Button 
              className="btn-primary bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-400 hover:scale-105 shadow-md micro-bounce text-body"
              onClick={() => window.open('https://www.smartcloudservices.de/acencia/login/login.do', '_blank')}
            >
              Login Portal
            </Button>
          </div>

          {/* Enhanced Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-orange-400 hover:bg-white/10 p-3 rounded-xl transition-all duration-300"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-[32rem] opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="px-2 pt-2 pb-6 space-y-1 bg-slate-800/95 backdrop-blur-lg rounded-2xl mt-4 border border-slate-700/50 shadow-xl">
            <Link
              to="/arbeitgeber-pflichten"
              className="block px-6 py-3 text-white hover:text-orange-400 hover:bg-white/5 rounded-xl transition-all duration-300 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Pflichten des Arbeitgebers
            </Link>
            <Link
              to="/der-service"
              className="block px-6 py-3 text-white hover:text-orange-400 hover:bg-white/5 rounded-xl transition-all duration-300 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Der Service
            </Link>
            <Link
              to="/aktuelles"
              className="block px-6 py-3 text-white hover:text-orange-400 hover:bg-white/5 rounded-xl transition-all duration-300 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Aktuelles
            </Link>
            <Link
              to="/ueber-uns"
              className="block px-6 py-3 text-white hover:text-orange-400 hover:bg-white/5 rounded-xl transition-all duration-300 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Über uns
            </Link>
            <Link
              to="/kontakt"
              className="block px-6 py-3 text-white hover:text-orange-400 hover:bg-white/5 rounded-xl transition-all duration-300 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Kontakt
            </Link>
            <div className="pt-2">
              <Button 
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold rounded-xl py-3 transition-all duration-300"
                onClick={() => {
                  window.open('https://www.smartcloudservices.de/acencia/login/login.do', '_blank');
                  setIsMenuOpen(false);
                }}
              >
                Login Portal
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;