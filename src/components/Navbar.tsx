import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Code2, Menu, X } from 'lucide-react';

function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const isActive = (path: string) => location.pathname === path;
  
  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' }
  
  ];

  return (
    <nav className="sticky top-0 z-50 shadow-sm backdrop-blur-md bg-white/90">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Code2 style={{ color: '#007BFF' }} className="h-6 w-6" />
            <span className="font-bold text-xl" style={{ color: '#333333' }}></span>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`transition-colors duration-200 ${
                  isActive(path) ? 'font-semibold' : 'hover:text-opacity-80'
                }`}
                style={{ 
                  color: isActive(path) ? '#007BFF' : '#333333'
                }}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{ color: '#333333' }}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            {navItems.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`block py-2 transition-colors duration-200 ${
                  isActive(path) ? 'font-semibold' : 'hover:text-opacity-80'
                }`}
                style={{ 
                  color: isActive(path) ? '#007BFF' : '#333333'
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar