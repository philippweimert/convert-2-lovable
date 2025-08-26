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
        ? 'bg-acencia/95 backdrop-blur-lg border-b border-acencia-light/50 shadow-lg' 
        : 'bg-acencia/90 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center group smooth-slide py-2">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 group-hover:bg-white/20 transition-all duration-400">
              <img 
                src="/acencia-logo.png" 
                alt="ACENCIA - Wir machen bAV einfach" 
                className="h-16 w-auto object-contain transition-all duration-400 group-hover:scale-105 filter brightness-110"
              />
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
          <div className="px-2 pt-2 pb-6 space-y-1 bg-acencia-light/95 backdrop-blur-lg rounded-2xl mt-4 border border-acencia-light/50 shadow-xl">
            <Link
              to="/arbeitgeber-pflichten"
              className="block px-6 py-3 text-white hover:text-orange-400 hover:bg-white/5 rounded-xl transition-all duration-300 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              bAV - rechtliche Grundlagen
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