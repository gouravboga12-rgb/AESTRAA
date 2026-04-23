import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy text-white pt-24 pb-12 px-6 md:px-12 mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-8">
        
        {/* Brand Column */}
        <div className="space-y-8 col-span-1 md:col-span-1">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full overflow-hidden border border-gold/40 p-0.5">
               <img src="/logo.jpg" alt="Aestraa Logo" className="w-full h-full object-cover rounded-full" />
            </div>
            <h2 className="text-3xl font-serif tracking-[0.2em]">AESTRAA</h2>
          </div>
          <p className="text-white/60 font-light leading-relaxed max-w-xs">
            A premium creative studio dedicated to shaping meaningful artistic experiences through workshops, commissions, and consultancy.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-8">
          <h3 className="text-xs uppercase tracking-widest font-bold text-gold">Navigation</h3>
          <ul className="space-y-4">
            <li><Link to="/" className="text-white/70 hover:text-white transition-colors">Home</Link></li>
            <li><Link to="/about" className="text-white/70 hover:text-white transition-colors">About Us</Link></li>
            <li><Link to="/services" className="text-white/70 hover:text-white transition-colors">Services</Link></li>
            <li><Link to="/gallery" className="text-white/70 hover:text-white transition-colors">Gallery</Link></li>
            <li><Link to="/contact" className="text-white/70 hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div className="space-y-8">
          <h3 className="text-xs uppercase tracking-widest font-bold text-gold">Our Studio</h3>
          <ul className="space-y-4">
            <li><Link to="/services" className="text-white/70 hover:text-white transition-colors">Workshops</Link></li>
            <li><Link to="/services" className="text-white/70 hover:text-white transition-colors">Commissioned Art</Link></li>
            <li><Link to="/services" className="text-white/70 hover:text-white transition-colors">Consultancy</Link></li>
            <li><Link to="/services" className="text-white/70 hover:text-white transition-colors">Marketplace</Link></li>
          </ul>
        </div>

        {/* Contact info */}
        <div className="space-y-8">
          <h3 className="text-xs uppercase tracking-widest font-bold text-gold">Get in Touch</h3>
          <ul className="space-y-6">
            <li className="flex gap-4 items-start">
              <Mail size={18} className="text-gold shrink-0 mt-1" />
              <div className="text-white/70">
                <p>aestraaarts@gmail.com</p>
                <p className="text-xs mt-1 text-white/40">Inquiries within 24h</p>
              </div>
            </li>
            <li className="flex gap-4 items-start">
              <Phone size={18} className="text-gold shrink-0 mt-1" />
              <span className="text-white/70">+91 81255 85386</span>
            </li>
            <li className="flex gap-4 items-start">
              <MapPin size={18} className="text-gold shrink-0 mt-1" />
              <span className="text-white/70">Hyderabad, India</span>
            </li>
          </ul>
        </div>

      </div>

      <div className="max-w-7xl mx-auto border-t border-white/10 mt-24 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-white/30 text-xs tracking-widest">
          © {new Date().getFullYear()} AESTRAA STUDIO. ALL RIGHTS RESERVED.
        </p>
        <p className="text-white/30 text-xs tracking-widest">
          DESIGNED FOR ARTISTIC EXCELLENCE
        </p>
      </div>
    </footer>
  );
};

export default Footer;
