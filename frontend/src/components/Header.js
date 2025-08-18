import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative bg-slate-900 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex flex-col text-white">
              <span className="text-xs tracking-wider">≡</span>
            </div>
            <div className="text-white">
              <span className="text-xl font-bold tracking-wider">ACENCIA</span>
              <div className="text-xs text-slate-400 tracking-widest">WIR MACHEN bAV EINFACH</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/ueber-uns" 
              className="text-white hover:text-orange-400 transition-colors duration-200"
            >
              Über uns
            </Link>
            <Link 
              to="/kontakt" 
              className="text-white hover:text-orange-400 transition-colors duration-200"
            >
              Kontakt
            </Link>
            <Button 
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md transition-colors duration-200"
              onClick={() => window.open('https://outlook.office365.com/owa/calendar/ACENCIAde@acencia.de/bookings/', '_blank')}
            >
              Login Portal
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-orange-400"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-800 rounded-lg mt-2">
              <Link
                to="/ueber-uns"
                className="block px-3 py-2 text-white hover:text-orange-400 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Über uns
              </Link>
              <Link
                to="/kontakt"
                className="block px-3 py-2 text-white hover:text-orange-400 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Kontakt
              </Link>
              <Button 
                className="w-full mt-2 bg-orange-500 hover:bg-orange-600 text-white"
                onClick={() => {
                  window.open('https://outlook.office365.com/owa/calendar/ACENCIAde@acencia.de/bookings/', '_blank');
                  setIsMenuOpen(false);
                }}
              >
                Login Portal
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;