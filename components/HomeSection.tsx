
import React from 'react';
import { Section } from './Section';

interface HomeSectionProps {
  id: string;
}

export const HomeSection: React.FC<HomeSectionProps> = ({ id }) => {
  return (
    <Section id={id} title="WELCOME TO THE HUB" className="bg-brand-gray-dark">
      <div className="text-center max-w-3xl mx-auto">
        <img 
          src="https://picsum.photos/seed/itsfainbanner/1200/400" // Placeholder banner image
          alt="itsFain Community Banner" 
          className="rounded-lg shadow-2xl mb-8 mx-auto border-4 border-brand-red"
        />
        <p className="text-xl md:text-2xl text-gray-300 mb-6 leading-relaxed">
          Hey everyone, <span className="text-brand-red font-semibold">itsFain</span> here! This is the official spot for all things related to my content. Check out the latest videos, epic Twitch moments, and find ways to support the channel.
        </p>
        <p className="text-lg text-gray-400">
          Thanks for being an awesome part of the community!
        </p>
      </div>
    </Section>
  );
};
