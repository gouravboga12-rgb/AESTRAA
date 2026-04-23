import React from 'react';
import Section from '../components/Section';
import SEO from '../components/SEO';

const About: React.FC = () => {
  const founders = [
    {
      name: 'Joydeb Pal',
      role: 'Founder, Aestraa',
      bio: 'An artist and educator with a passion for blending creativity with structured learning. With experience in workshops, curriculum design, and large-scale art execution, Joy leads Aestraa with a vision to make art more accessible, meaningful, and impactful.',
      image: '/joydeb.jpg'
    },
    {
      name: 'Sukarna Das',
      role: 'Founder, Aestraa',
      bio: 'A contemporary visual artist with a Bachelor’s and Master’s in Fine Arts, her work has been showcased at platforms such as the Birla Academy of Art & Culture, Centre of International Modern Art, and international exhibitions including the Universal youth Movement, Bangladesh. Recognized with the Jury’s Special Mention (2022) and Highly Commended Award (2021), she brings over five years of mentoring experience. At Aestraa, her vision is to nurture talent, empower artists, and elevate art as a global medium of expression.',
      image: '/sukarna.jpg'
    }
  ];

  return (
    <div className="pt-20">
      <SEO 
        title="About Our Studio | Aestraa Philosophy & Founders"
        description="Learn about Aestraa's mission to transform lives through art. Meet our founders Joydeb Pal and Sukarna Das and discover our structured approach to creativity."
      />
      {/* Editorial Header */}
      <section className="bg-zinc-50 pt-24 md:pt-32 pb-16 md:pb-32 px-6 md:px-12 text-center" data-aos="fade">
        <div className="max-w-4xl mx-auto">
          <span className="text-gold text-xs uppercase tracking-[0.3em] font-bold mb-6 block">Our Story</span>
          <h1 className="text-4xl sm:text-5xl md:text-8xl font-serif text-navy mb-8 leading-tight">
            Creativity, <br />
            <span className="italic">Structured.</span>
          </h1>
          <div className="h-px w-24 bg-gold mx-auto mb-8 md:mb-12"></div>
        </div>
      </section>

      {/* Brand Story */}
      <Section className="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 items-center">
          <div data-aos="fade-right">
            <div className="aspect-[4/5] overflow-hidden">
               <img src="/hero.png" alt="Aestraa Studio" className="w-full h-full object-cover" />
            </div>
          </div>
          <div data-aos="fade-left">
            <h2 className="text-3xl md:text-4xl font-serif text-navy mb-8">The Aestraa Philosophy</h2>
            <div className="space-y-6 text-navy/60 font-light text-lg leading-relaxed">
              <p>
                Aestraa is a premium creative studio dedicated to shaping meaningful artistic experiences. We believe in the power of art to transform spaces and inspire individuals.
              </p>
              <p>
                From immersive workshops to large-scale commissioned artworks and structured art consultancy, we blend creativity with purpose. Our approach is defined by a commitment to excellence and a professional, structured methodology.
              </p>
              <p>
                Our founders, Joydeb Pal and Sukarna Das, lead a curated team of artists, educators, and creative professionals dedicated to delivering excellence in every creation.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Mission & Vision Cards */}
      <Section className="bg-navy text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 text-[30vw] font-serif text-white/5 z-0 pointer-events-none -translate-y-1/2 translate-x-1/4">
           VISION
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">
          <div className="p-12 border border-white/10" data-aos="fade-up">
            <span className="text-gold text-xs uppercase tracking-[0.3em] font-bold mb-8 block">The Vision</span>
            <h3 className="text-3xl md:text-4xl font-serif mb-8 leading-relaxed italic">
              "To become a leading creative ecosystem where art, education, and experience come together to inspire individuals and transform lives."
            </h3>
          </div>
          <div className="p-12 border border-white/10" data-aos="fade-up" data-aos-delay="200">
            <span className="text-gold text-xs uppercase tracking-[0.3em] font-bold mb-8 block">The Mission</span>
            <p className="text-xl md:text-2xl font-serif leading-relaxed text-white/70 italic">
              "To deliver high-quality artistic experiences, structured learning, and curated platforms that empower creativity at every level."
            </p>
          </div>
        </div>
      </Section>

      {/* Founders Section */}
      <Section className="bg-white">
        <div className="text-center mb-24">
          <span className="text-gold text-xs uppercase tracking-[0.3em] font-bold mb-6 block">The Visionaries</span>
          <h2 className="text-4xl md:text-6xl font-serif text-navy">Meet Our Founders</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {founders.map((founder, index) => (
            <div key={index} className="space-y-4 text-center md:text-left" data-aos="fade-up" data-aos-delay={index * 200}>
              <div className="aspect-[4/5] overflow-hidden shadow-md hover:shadow-xl transition-all duration-700 max-w-xs mx-auto md:mx-0">
                <img src={founder.image} alt={founder.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="text-2xl font-serif text-navy">{founder.name}</h3>
                <p className="text-gold text-[11px] uppercase tracking-widest font-bold mt-1">{founder.role}</p>
                <p className="text-navy/60 font-light text-base mt-4 leading-relaxed">
                  {founder.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section className="bg-zinc-50 border-t border-zinc-100">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          <div data-aos="fade-up">
            <h4 className="text-xl font-serif text-navy mb-4">Artistic Excellence</h4>
            <p className="text-navy/50 font-light leading-relaxed">We prioritize high-quality visuals and meaningful storytelling, ensuring excellence in every creation.</p>
          </div>
          <div data-aos="fade-up" data-aos-delay="100">
            <h4 className="text-xl font-serif text-navy mb-4">Thoughtful Design</h4>
            <p className="text-navy/50 font-light leading-relaxed">Our experiences are thoughtfully designed to be immersive, inspiring, and deeply meaningful.</p>
          </div>
          <div data-aos="fade-up" data-aos-delay="200">
            <h4 className="text-xl font-serif text-navy mb-4">Structured Approach</h4>
            <p className="text-navy/50 font-light leading-relaxed">We bring a professional and structured methodology to the creative process, bridging art and efficiency.</p>
          </div>
          <div data-aos="fade-up" data-aos-delay="300">
            <h4 className="text-xl font-serif text-navy mb-4">Empowering Artists</h4>
            <p className="text-navy/50 font-light leading-relaxed">We are committed to supporting and promoting emerging artists, providing a platform for growth.</p>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default About;
