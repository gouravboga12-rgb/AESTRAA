import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
  const whatsappNumber = '918125585386';
  const message = 'Hello Aestraa, I am interested in your services.';
  
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-[60] group flex items-center gap-3"
      aria-label="Contact us on WhatsApp"
    >
      <div className="bg-white px-4 py-2 rounded-full shadow-xl text-navy text-[10px] uppercase tracking-widest font-bold opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 pointer-events-none hidden md:block">
        Message us
      </div>
      <div className="relative">
        <div className="absolute inset-0 bg-gold rounded-full animate-ping opacity-20 group-hover:opacity-40 transition-opacity"></div>
        <div className="relative bg-gold text-white p-4 rounded-full shadow-2xl hover:bg-navy transition-all duration-500 hover:scale-110 flex items-center justify-center">
          <MessageCircle size={24} />
        </div>
      </div>
    </a>
  );
};

export default WhatsAppButton;
