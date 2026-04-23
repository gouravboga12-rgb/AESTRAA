import React, { useState } from 'react';
import Section from '../components/Section';

const Gallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Paintings', 'Installations', 'Workshops'];

  const images = [
    { src: '/gallery/painting1.png', category: 'Paintings' },
    { src: '/gallery/workshop1.png', category: 'Workshops' },
    { src: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=2800&auto=format&fit=crop', category: 'Workshops' },
    { src: '/gallery/installation1.png', category: 'Installations' },
    { src: '/marketplace.png', category: 'Paintings' },
    { src: '/hero.png', category: 'Paintings' },
    { src: 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?q=80&w=2800&auto=format&fit=crop', category: 'Installations' },
    { src: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912?q=80&w=2709&auto=format&fit=crop', category: 'Paintings' },
    { src: 'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=2934&auto=format&fit=crop', category: 'Installations' },
  ];

  const filteredImages = activeFilter === 'All' 
    ? images 
    : images.filter(img => img.category === activeFilter);

  return (
    <div className="pt-20">
      <section className="bg-white pt-24 md:pt-32 pb-16 md:pb-32 px-6 md:px-12 text-center" data-aos="fade">
        <div className="max-w-4xl mx-auto">
          <span className="text-gold text-xs uppercase tracking-[0.3em] font-bold mb-6 block">Our Creations</span>
          <h1 className="text-4xl sm:text-5xl md:text-8xl font-serif text-navy mb-8 md:mb-12 leading-[1.2] md:leading-tight">
            Artistic <br className="hidden sm:block" /> <span className="italic">Exhibitions.</span>
          </h1>
        </div>
      </section>

      {/* Filters */}
      <div className="flex justify-center items-center gap-6 md:gap-16 mb-12 md:mb-20 px-6 overflow-x-auto hide-scrollbar whitespace-nowrap">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold transition-all duration-300 pb-2 border-b-2 flex-shrink-0 ${
              activeFilter === category ? 'text-navy border-gold' : 'text-navy/30 border-transparent hover:text-navy/60'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Masonry Grid */}
      <Section className="pb-40">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredImages.map((image, index) => (
            <div 
              key={index} 
              className="break-inside-avoid group relative overflow-hidden shadow-sm hover:shadow-xl transition-all" 
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              <img 
                src={image.src} 
                alt={`Art ${index}`} 
                className="w-full h-auto object-cover transition-all duration-700 hover:scale-105" 
              />
              <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/40 transition-all duration-500 flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100">
                <span className="text-gold text-[10px] uppercase tracking-widest font-bold mb-2">Aestraa Studio</span>
                <h3 className="text-white text-xl font-serif">{image.category}</h3>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Gallery;
