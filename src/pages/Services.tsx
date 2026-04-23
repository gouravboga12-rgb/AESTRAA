import React from 'react';
import Section from '../components/Section';
import { ArrowRight, Check } from 'lucide-react';

const Services: React.FC = () => {
  const serviceDetails = [
    {
      id: 'workshops',
      title: 'Workshops',
      tag: 'Experience',
      image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=2800&auto=format&fit=crop',
      description: 'Curated painting experiences for individuals, corporates, and celebrations—designed to inspire, relax, and connect.',
      features: ['Corporate Team Building', 'Children\'s Art Programs', 'Curated Private Events', 'Specialized Masterclasses'],
    },
    {
      id: 'commissions',
      title: 'Commissioned Art',
      tag: 'Creation',
      image: 'https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?q=80&w=2800&auto=format&fit=crop',
      description: 'Custom artworks crafted to transform homes, offices, and public spaces with elegance and identity.',
      features: ['Consultation & Vision Setting', 'Concept Design & Sketching', 'Professional Execution', 'Final Installation'],
    },
    {
      id: 'consultancy',
      title: 'Art Consultancy',
      tag: 'Strategy',
      image: 'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=2934&auto=format&fit=crop',
      description: 'End-to-end guidance for schools and institutions—from curriculum design to teacher training and system building.',
      features: ['Curriculum Design', 'Teacher Training', 'System Building', 'Institutional Art Setup'],
    },
    {
      id: 'marketplace',
      title: 'Art Marketplace',
      tag: 'Curation',
      image: '/marketplace.png',
      description: 'A platform empowering emerging artists to showcase and sell their work to a wider audience.',
      features: ['Artist Onboarding', 'Curated Art Collection', 'Secure Transactions', 'Artist Promotion'],
    }
  ];

  return (
    <div className="pt-20">
      <section className="bg-zinc-50 pt-24 md:pt-32 pb-32 md:pb-48 px-6 md:px-12 text-center" data-aos="fade">
        <div className="max-w-4xl mx-auto">
          <span className="text-gold text-xs uppercase tracking-[0.3em] font-bold mb-6 block">Our Offerings</span>
          <h1 className="text-4xl sm:text-5xl md:text-8xl font-serif text-navy mb-8 md:mb-12 leading-[1.2] md:leading-tight">
            Services for <br className="hidden sm:block" /> the <span className="italic">Discerning.</span>
          </h1>
          <p className="text-navy/50 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
             Refined experiences, bespoke creations, and strategic guidance—all built on artistic excellence.
          </p>
        </div>
      </section>

      <div className="-mt-32">
        {serviceDetails.map((service, index) => (
          <Section key={service.id} className={index % 2 === 0 ? 'bg-white' : 'bg-zinc-50'}>
            <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-16 md:gap-32`}>
              <div className="w-full md:w-1/2" data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}>
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-1000 hover:scale-110" />
                </div>
              </div>
              <div className="w-full md:w-1/2" data-aos={index % 2 === 0 ? 'fade-left' : 'fade-right'}>
                <span className="text-gold text-xs uppercase tracking-[0.3em] font-bold mb-4 block">{service.tag}</span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-navy mb-6 md:mb-8">{service.title}</h2>
                <p className="text-navy/60 text-base md:text-lg font-light leading-relaxed mb-8 md:mb-10">
                  {service.description}
                </p>
                <ul className="space-y-4 mb-12">
                   {service.features.map((feature, i) => (
                     <li key={i} className="flex items-center gap-3 text-navy/70">
                       <Check size={16} className="text-gold" />
                       <span className="font-light">{feature}</span>
                     </li>
                   ))}
                </ul>
                <a 
                  href={`https://wa.me/918125585386?text=Hi, I'm interested in your ${service.title} service.`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-sm uppercase tracking-widest font-bold text-navy hover:text-gold transition-colors group"
                >
                  Inquire Now <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                </a>
              </div>
            </div>
          </Section>
        ))}
      </div>

      {/* Corporate Highlight */}
      <Section className="bg-navy text-white text-center">
         <div className="max-w-3xl mx-auto" data-aos="zoom-in">
            <h2 className="text-4xl md:text-5xl font-serif mb-10 italic">"Art is the only way to run away without leaving home."</h2>
            <p className="text-gold text-sm uppercase tracking-widest font-bold">— Twyla Tharp</p>
         </div>
      </Section>
    </div>
  );
};

export default Services;
