
import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({ id, title, children, className = '' }) => {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-orbitron font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-brand-red to-red-400 text-transparent bg-clip-text">
            {title}
          </span>
        </h2>
        {children}
      </div>
    </section>
  );
};
