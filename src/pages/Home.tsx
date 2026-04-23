import React from 'react';
import Section from '../components/Section';
import { ArrowRight, Check, Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const TestimonialSlider: React.FC = () => {
  const testimonials = [
    {
      quote: "Aestraa transformed not just our space, but how we experience art.",
      author: "Joydeb Pal",
      role: "Founder, Aestraa"
    },
    {
      quote: "The personalized commission I received from Joydeb and Sukarna is the centerpiece of my home. It truly resonates with our personal story.",
      author: "Marcus Aurelius",
      role: "Private Collector"
    },
    {
      quote: "Strategic, professional, and deeply artistic. Their consultancy helped our institution bridge the gap between inspiration and execution.",
      author: "Sophia Chen",
      role: "Head of Arts, Global Institute"
    }
  ];

  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
      <div className="text-gold mb-8 flex justify-center gap-1 text-2xl font-serif">“</div>
      <div className="min-h-[200px] flex items-center justify-center">
        <div key={current} className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <blockquote className="text-2xl md:text-3xl font-serif text-navy leading-relaxed mb-10 italic">
            {testimonials[current].quote}
          </blockquote>
          <cite className="not-italic">
            <span className="text-gold text-[10px] uppercase tracking-[0.3em] font-bold block mb-1">
              {testimonials[current].author}
            </span>
            <span className="text-navy/40 text-[10px] uppercase tracking-widest">
              {testimonials[current].role}
            </span>
          </cite>
        </div>
      </div>
      <div className="flex justify-center gap-3 mt-12">
        {testimonials.map((_, i) => (
          <button 
            key={i} 
            onClick={() => setCurrent(i)}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${i === current ? 'bg-gold w-6' : 'bg-navy/10'}`}
          />
        ))}
      </div>
    </div>
  );
};

const Home: React.FC = () => {
  const [scrollY, setScrollY] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
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
      bio: 'A contemporary visual artist with a Bachelor’s and Master’s in Fine Arts, her work has been showcased at platforms such as the Birla Academy of Art & Culture, Centre of International Modern Art, and international exhibitions including the Universal Youth Movement, Bangladesh. Recognized with the Jury’s Special Mention (2022) and Highly Commended Award (2021), she brings over five years of mentoring experience. At Aestraa, her vision is to nurture talent, empower artists, and elevate art as a global medium of expression.',
      image: '/sukarna.jpg'
    }
  ];

  const galleryImages = [
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

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src="/hero.png" 
            alt="Artistic Studio" 
            className="w-full h-full object-cover brightness-50"
            style={{ 
              transform: `translateY(${scrollY * 0.4}px)`,
              transition: 'transform 0.1s ease-out'
            }}
          />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl" data-aos="zoom-out" data-aos-duration="1500">
          <h1 className="text-4xl sm:text-5xl md:text-8xl font-serif mb-6 md:mb-8 leading-[1.2] md:leading-[1.1] tracking-tight">
            Where Art Meets <br />
            <span className="italic font-light">Experience.</span>
          </h1>
          <p className="text-base md:text-xl font-light mb-10 md:mb-12 max-w-2xl mx-auto leading-relaxed text-white/80">
            Workshops, commissioned art, and consultancy designed to bring creativity, structure, and beauty into every space.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <a 
              href="https://wa.me/918125585386?text=Hi, I'm interested in booking a workshop with Aestraa." 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gold text-white px-10 py-4 text-sm uppercase tracking-widest font-bold hover:bg-white hover:text-navy transition-all duration-300"
            >
              Book a Workshop
            </a>
            <Link to="/gallery" className="border border-white/40 text-white px-10 py-4 text-sm uppercase tracking-widest font-bold hover:bg-white hover:text-navy transition-all duration-300">
              Explore Our Work
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
           <div className="w-[1px] h-12 bg-white"></div>
        </div>
      </section>

      {/* Brand Intro Strip */}
      <Section className="bg-zinc-50 border-y border-zinc-100 text-center" aos="fade-up">
        <div className="max-w-3xl mx-auto py-8">
          <span className="text-gold text-[10px] uppercase tracking-[0.4em] font-bold mb-6 block">Premium Creative Studio</span>
          <h2 className="text-2xl md:text-3xl font-serif leading-relaxed text-navy mb-6">
            Aestraa is a premium creative studio dedicated to shaping meaningful artistic experiences.
          </h2>
          <p className="text-navy/60 text-lg font-light leading-relaxed">
            From immersive workshops to large-scale commissioned artworks and structured art consultancy, we blend creativity with purpose.
          </p>
        </div>
      </Section>

      {/* Detailed Services Section */}
      <div id="services" className="bg-zinc-50 pt-20">
        <div className="max-w-4xl mx-auto text-center px-6 mb-12 md:mb-20" data-aos="fade">
          <span className="text-gold text-xs uppercase tracking-[0.3em] font-bold mb-6 block">Our Offerings</span>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif text-navy mb-6 md:mb-8">Services for <br className="hidden sm:block" /> the <span className="italic">Discerning.</span></h2>
          <div className="h-px w-24 bg-gold mx-auto mb-6 md:mb-8"></div>
        </div>

        {services.map((service, index) => (
          <Section key={service.id} className={index % 2 === 0 ? 'bg-white' : 'bg-zinc-50'}>
            <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-16 md:gap-32`}>
              <div className="w-full md:w-1/2" data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}>
                <div className="aspect-[16/10] overflow-hidden shadow-2xl">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-[2000ms] hover:scale-110" />
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
                  className="inline-flex items-center gap-4 text-sm uppercase tracking-widest font-bold text-navy hover:text-gold transition-colors group"
                >
                  Inquire Now <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                </a>
              </div>
            </div>
          </Section>
        ))}
      </div>

      {/* About Section */}
      <div id="about">
        <Section className="bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 items-center">
            <div data-aos="fade-right">
              <div className="aspect-[4/5] overflow-hidden shadow-2xl">
                <img src="/hero.png" alt="Aestraa Studio" className="w-full h-full object-cover" />
              </div>
            </div>
            <div data-aos="fade-left">
              <span className="text-gold text-xs uppercase tracking-[0.3em] font-bold mb-6 block">Our Philosophy</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-navy mb-6 md:mb-8 leading-tight">Creativity, <br /> <span className="italic">Structured.</span></h2>
              <div className="space-y-6 text-navy/60 font-light text-lg leading-relaxed">
                <p>
                  Aestraa is a premium creative studio dedicated to shaping meaningful artistic experiences. We believe in the power of art to transform spaces and inspire individuals.
                </p>
                <p>
                  From immersive workshops to large-scale commissioned artworks and structured art consultancy, we blend creativity with purpose. Our approach is defined by a commitment to excellence and a professional, structured methodology.
                </p>
                <Link to="/about" className="inline-flex items-center gap-4 text-sm uppercase tracking-widest font-bold text-navy hover:text-gold transition-colors group mt-4">
                  Full Story <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </Section>

        {/* Mission & Vision Strip */}
        <Section className="bg-navy text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 text-[30vw] font-serif text-white/5 z-0 pointer-events-none -translate-y-1/2 translate-x-1/4">
            VISION
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">
            <div className="p-12 border border-white/10" data-aos="fade-up">
              <span className="text-gold text-xs uppercase tracking-[0.3em] font-bold mb-8 block">The Vision</span>
              <h3 className="text-2xl md:text-3xl font-serif mb-8 leading-relaxed italic text-white/90">
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
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif text-navy">Meet Our Founders</h2>
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
                  <p className="text-navy/60 font-light text-base mt-4 leading-relaxed line-clamp-3">
                    {founder.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Section>
      </div>

      {/* Gallery Section */}
      <div id="gallery" className="bg-zinc-50 py-20">
        <div className="max-w-4xl mx-auto text-center px-6 mb-20" data-aos="fade">
          <span className="text-gold text-xs uppercase tracking-[0.3em] font-bold mb-6 block">Our Creations</span>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif text-navy mb-6 md:mb-8">Artistic <br className="hidden sm:block" /> <span className="italic">Exhibitions.</span></h2>
          <div className="h-px w-24 bg-gold mx-auto mb-6 md:mb-8"></div>
        </div>
        
        <Section>
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {galleryImages.slice(0, 4).map((image, index) => (
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
          <div className="mt-20 text-center">
            <Link to="/gallery" className="bg-navy text-white px-10 py-4 text-sm uppercase tracking-widest font-bold hover:bg-gold transition-all duration-300 inline-flex items-center gap-3">
              View More <ArrowRight size={18} />
            </Link>
          </div>
        </Section>
      </div>

      {/* Testimonials Slider */}
      <Section className="bg-zinc-50 border-y border-zinc-100">
        <TestimonialSlider />
      </Section>

      {/* Contact Section */}
      <div id="contact">
        <Section className="bg-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            {/* Contact Details */}
            <div data-aos="fade-right">
              <h2 className="text-3xl md:text-4xl font-serif text-navy mb-12">Our Studio</h2>
              <div className="space-y-12">
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-zinc-50 rounded-full flex items-center justify-center shrink-0">
                    <Mail className="text-gold" size={20} />
                  </div>
                  <div>
                    <h3 className="text-xs uppercase tracking-widest font-bold text-navy mb-2">Email Us</h3>
                    <p className="text-navy/60 font-light text-lg">aestraaarts@gmail.com</p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-zinc-50 rounded-full flex items-center justify-center shrink-0">
                    <Phone className="text-gold" size={20} />
                  </div>
                  <div>
                    <h3 className="text-xs uppercase tracking-widest font-bold text-navy mb-2">Call Us</h3>
                    <p className="text-navy/60 font-light text-lg">+91 81255 85386</p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-zinc-50 rounded-full flex items-center justify-center shrink-0">
                    <MapPin className="text-gold" size={20} />
                  </div>
                  <div>
                    <h3 className="text-xs uppercase tracking-widest font-bold text-navy mb-2">Visit Us</h3>
                    <p className="text-navy/60 font-light text-lg">Hyderabad, India</p>
                  </div>
                </div>
              </div>

              <a 
                href="https://wa.me/918125585386" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="mt-16 p-8 bg-zinc-50 border border-zinc-100 flex items-center justify-between group cursor-pointer hover:border-gold/30 transition-all"
              >
                <div>
                  <h3 className="text-lg font-serif text-navy mb-1">WhatsApp Chat</h3>
                  <p className="text-navy/40 text-sm">Instant response from our team</p>
                </div>
                <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center text-white transition-transform group-hover:scale-110">
                  <MessageCircle size={24} />
                </div>
              </a>
            </div>

            {/* Contact Form */}
            <div data-aos="fade-left" className="relative">
              <div className="relative z-10 bg-white p-8 md:p-12 shadow-[0_30px_60px_-15px_rgba(15,28,63,0.08)] border border-zinc-100">
                <h2 className="text-3xl font-serif text-navy mb-10">Send an Inquiry</h2>
                <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-2 group">
                      <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-navy/40 group-focus-within:text-gold transition-colors">Full Name</label>
                      <input 
                        type="text" 
                        className="w-full border-b border-zinc-100 py-3 focus:border-gold outline-none transition-all duration-500 font-light text-lg px-0 bg-transparent placeholder:text-zinc-200 focus:pl-2" 
                        placeholder="Your Name" 
                      />
                    </div>
                    <div className="space-y-2 group">
                      <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-navy/40 group-focus-within:text-gold transition-colors">Email Address</label>
                      <input 
                        type="email" 
                        className="w-full border-b border-zinc-100 py-3 focus:border-gold outline-none transition-all duration-500 font-light text-lg px-0 bg-transparent placeholder:text-zinc-200 focus:pl-2" 
                        placeholder="email@example.com" 
                      />
                    </div>
                  </div>

                  <div className="space-y-2 group">
                    <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-navy/40 group-focus-within:text-gold transition-colors">Service Interest</label>
                    <div className="relative">
                      <select className="w-full border-b border-zinc-100 py-3 focus:border-gold outline-none transition-all duration-500 font-light text-lg px-0 bg-transparent appearance-none relative z-10 cursor-pointer text-navy/60">
                        <option>Workshop Inquiry</option>
                        <option>Art Commission</option>
                        <option>Consultancy</option>
                        <option>Other</option>
                      </select>
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-300">
                        <ArrowRight size={14} className="rotate-90" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 group">
                    <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-navy/40 group-focus-within:text-gold transition-colors">Your Message</label>
                    <textarea 
                      rows={4} 
                      className="w-full border-b border-zinc-100 py-3 focus:border-gold outline-none transition-all duration-500 font-light text-lg px-0 bg-transparent resize-none placeholder:text-zinc-200 focus:pl-2" 
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>

                  <button className="group relative bg-navy text-white px-12 py-5 text-sm uppercase tracking-[0.3em] font-bold overflow-hidden transition-all duration-500 w-full md:w-auto">
                    <span className="relative z-10 flex items-center justify-center gap-3 group-hover:gap-5 transition-all">
                      Send Inquiry <ArrowRight size={18} />
                    </span>
                    <div className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </Section>

        {/* Google Map */}
        <div className="h-[450px] w-full bg-zinc-100 mt-20" data-aos="fade-up">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.2517687157!2d78.26795908611893!3d17.412299801616605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1713876000000!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full opacity-90 hover:opacity-100 transition-opacity"
            title="Aestraa Studio Location"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Home;
