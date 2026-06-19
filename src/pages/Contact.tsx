import React, { useState } from 'react';
import Section from '../components/Section';
import { Mail, Phone, MapPin, MessageCircle, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [interest, setInterest] = useState('Workshop Inquiry');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi Aestraa, I'd like to send an inquiry:\n\n*Name:* ${name}\n*Email:* ${email}\n*Service Interest:* ${interest}\n*Message:* ${message}`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/918125585386?text=${encodedText}`, '_blank');
  };
  return (
    <div className="pt-20">
      <SEO 
        title="Contact Aestraa Studio | Book a Workshop in Hyderabad"
        description="Get in touch with Aestraa for art commissions, corporate workshops, or consultancy. Visit our studio in Hyderabad or reach out via email or WhatsApp."
      />
      <section className="bg-zinc-50 pt-24 md:pt-32 pb-16 md:pb-32 px-6 md:px-12 text-center" data-aos="fade">
        <div className="max-w-4xl mx-auto">
          <span className="text-gold text-xs uppercase tracking-[0.3em] font-bold mb-6 block">Get in Touch</span>
          <h1 className="text-4xl sm:text-5xl md:text-8xl font-serif text-navy mb-8 md:mb-12">Connect with <br className="hidden sm:block" /> <span className="italic">Aestraa.</span></h1>
          <p className="text-navy/50 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
             Whether you're looking for a bespoke artwork, a corporate workshop, or artistic consultancy, we're here to help.
          </p>
        </div>
      </section>

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
                  <p className="text-navy/60 font-light text-lg">info@aestraa.com</p>
                  <p className="text-navy/30 text-sm mt-1">General inquiries & commissions</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-zinc-50 rounded-full flex items-center justify-center shrink-0">
                  <Phone className="text-gold" size={20} />
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-widest font-bold text-navy mb-2">Call Us</h3>
                  <p className="text-navy/60 font-light text-lg">+91 81255 85386</p>
                  <p className="text-navy/30 text-sm mt-1">Mon–Fri, 9am–6pm</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-zinc-50 rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="text-gold" size={20} />
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-widest font-bold text-navy mb-2">Visit Us</h3>
                  <p className="text-navy/60 font-light text-lg">Hyderabad, India</p>
                  <p className="text-navy/30 text-sm mt-1">Design & Art Studio</p>
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
            {/* Decorative background elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-gold/5 rounded-full blur-3xl z-0"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-navy/5 rounded-full blur-3xl z-0"></div>
            
            <div className="relative z-10 bg-white p-8 md:p-12 shadow-[0_30px_60px_-15px_rgba(15,28,63,0.08)] border border-zinc-100">
              <h2 className="text-3xl font-serif text-navy mb-10">Send an Inquiry</h2>
              <form className="space-y-10" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-2 group">
                    <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-navy/40 group-focus-within:text-gold transition-colors">Full Name</label>
                    <input 
                      type="text" 
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full border-b border-zinc-100 py-3 focus:border-gold outline-none transition-all duration-500 font-light text-lg px-0 bg-transparent placeholder:text-zinc-200 focus:pl-2" 
                      placeholder="Your Name" 
                    />
                  </div>
                  <div className="space-y-2 group">
                    <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-navy/40 group-focus-within:text-gold transition-colors">Email Address</label>
                    <input 
                      type="email" 
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full border-b border-zinc-100 py-3 focus:border-gold outline-none transition-all duration-500 font-light text-lg px-0 bg-transparent placeholder:text-zinc-200 focus:pl-2" 
                      placeholder="email@example.com" 
                    />
                  </div>
                </div>
                
                <div className="space-y-2 group">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-navy/40 group-focus-within:text-gold transition-colors">Service Interest</label>
                  <div className="relative">
                    <select 
                      value={interest}
                      onChange={(e) => setInterest(e.target.value)}
                      className="w-full border-b border-zinc-100 py-3 focus:border-gold outline-none transition-all duration-500 font-light text-lg px-0 bg-transparent appearance-none relative z-10 cursor-pointer text-navy/60"
                    >
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
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full border-b border-zinc-100 py-3 focus:border-gold outline-none transition-all duration-500 font-light text-lg px-0 bg-transparent resize-none placeholder:text-zinc-200 focus:pl-2" 
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <button type="submit" className="group relative bg-navy text-white px-12 py-5 text-sm uppercase tracking-[0.3em] font-bold overflow-hidden transition-all duration-500 w-full md:w-auto">
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
      <div className="h-[450px] w-full bg-zinc-100" data-aos="fade-up">
        <iframe 
          src="https://maps.google.com/maps?q=17%C2%B029'35.6%22N%2078%C2%B020'15.1%22E&t=&z=15&ie=UTF8&iwloc=&output=embed" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={true} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full"
          title="Aestraa Studio Location"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
