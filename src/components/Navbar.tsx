import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '../utils/cn';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out px-4 md:px-6 py-2',
        isScrolled ? 'bg-white shadow-sm py-1.5' : 'bg-transparent py-3'
      )}
    >
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 md:w-10 md:h-10 overflow-hidden rounded-full border-2 border-gold/40 p-0.5 transition-all duration-700 group-hover:border-gold">
            <img 
              src="/logo.jpg" 
              alt="Aestraa Logo" 
              className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-700" 
            />
          </div>
          <span className={cn(
            'text-lg md:text-xl font-serif tracking-[0.2em] transition-all duration-700 ease-in-out',
            isScrolled ? 'text-navy' : (isHomePage ? 'text-navy md:text-white' : 'text-navy')
          )}>
            AESTRAA
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  'text-sm uppercase tracking-widest font-medium transition-colors duration-300 relative group/link',
                  isActive 
                    ? 'text-gold' 
                    : (isScrolled ? 'text-navy hover:text-gold' : (isHomePage ? 'text-navy md:text-white md:hover:text-gold' : 'text-navy hover:text-gold'))
                )}
              >
                {link.name}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gold transform origin-left transition-transform duration-300" />
                )}
              </Link>
            );
          })}
          <a
            href="https://wa.me/918125585386?text=Hi, I'm interested in inquiring about Aestraa's services."
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              'px-6 py-2.5 rounded-none text-xs uppercase tracking-widest font-bold transition-all duration-300 border-2',
              isScrolled 
                ? 'bg-navy text-white border-navy hover:bg-transparent hover:text-navy' 
                : 'bg-gold text-white border-gold hover:bg-transparent hover:text-gold'
            )}
          >
            Inquire
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className={cn(
            "md:hidden p-2 transition-colors",
            isScrolled ? "text-navy" : (isHomePage ? "text-white" : "text-navy")
          )}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        'fixed top-0 left-0 w-full bg-white z-40 flex flex-col items-center pt-24 pb-12 gap-6 transition-all duration-500 md:hidden shadow-2xl rounded-b-[2rem]',
        isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      )}>
        <div className="absolute top-0 left-0 w-full p-4 md:p-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3" onClick={() => setIsMobileMenuOpen(false)}>
            <div className="w-8 h-8 overflow-hidden rounded-full border border-gold/40 p-0.5">
              <img src="/logo.jpg" alt="Aestraa Logo" className="w-full h-full object-cover rounded-full" />
            </div>
            <span className="text-lg font-serif tracking-[0.2em] text-navy">
              AESTRAA
            </span>
          </Link>
          <button
            className="p-2 text-navy"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X className="w-8 h-8" />
          </button>
        </div>
        {navLinks.map((link) => {
          const isActive = location.pathname === link.path;
          return (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                "text-lg md:text-xl font-serif tracking-widest transition-colors",
                isActive ? "text-gold" : "text-navy hover:text-gold"
              )}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
