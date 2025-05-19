import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import Button from './ui/Button';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a href="#home" className="flex items-center">
                <span className="text-2xl font-bold text-blue-600">DLT</span>
                <span className="text-2xl font-bold text-gray-800">NOVA</span>
              </a>
            </div>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:space-x-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className={`text-base font-medium hover:text-blue-600 transition-colors ${
                  isScrolled ? 'text-gray-700' : 'text-gray-100'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex md:items-center">
            <Button
              onClick={() => handleNavClick('#contact')}
              className="ml-4"
            >
              Contact Us
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              className={`-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
              onClick={() => setIsMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-gray-900/50 backdrop-blur-sm">
          <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-white shadow-lg">
            <div className="flex items-center justify-between px-6 py-4">
              <div className="flex items-center">
                <span className="text-2xl font-bold text-blue-600">DLT</span>
                <span className="text-2xl font-bold text-gray-800">NOVA</span>
              </div>
              <button
                type="button"
                className="rounded-md p-2 text-gray-400 hover:text-gray-500"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-2 px-6 py-4">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className="block py-3 text-base font-medium text-gray-900 hover:text-blue-600"
                >
                  {item.label}
                </a>
              ))}
              <Button 
                className="mt-6 w-full"
                onClick={() => handleNavClick('#contact')}
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
