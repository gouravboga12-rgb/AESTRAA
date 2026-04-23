import React from 'react';
import { cn } from '../utils/cn';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  aos?: string;
}

const Section: React.FC<SectionProps> = ({ children, className, id, aos = 'fade-up' }) => {
  return (
    <section 
      id={id} 
      className={cn('py-8 md:py-12 px-6 md:px-12', className)}
      data-aos={aos}
    >
      <div className="max-w-5xl mx-auto">
        {children}
      </div>
    </section>
  );
};

export default Section;
