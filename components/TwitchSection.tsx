
import React from 'react';
import { Section } from './Section';
import { ClipEmbed } from './ClipEmbed';
import type { ClipItem } from '../types';

// Updated with itsfains' Twitch Clip Slugs and titles
const TWITCH_CLIPS: ClipItem[] = [
  { id: 'SoftMoralCarabeefSpicyBoy-fH9LhP9U1gBqGq_B', title: 'Fains gets jump scared' },
  { id: 'ResilientSmokyRadishAMPEnergyCherry-j-sO6aC_mD8C8Uf6', title: 'I have no wordss' },
  { id: 'BlazingGracefulChoughResidentSleeper-9g_7OaN1kF6K-b9T', title: 'New meta?' },
  { id: 'FancySparklingWerewolfPMSTwin-q7U3g1XpW1zQoJ4d', title: 'Fains finally gets his revenge' },
];

interface TwitchSectionProps {
  id: string;
}

export const TwitchSection: React.FC<TwitchSectionProps> = ({ id }) => {
  return (
    <Section id={id} title="EPIC TWITCH CLIPS" className="bg-brand-gray-dark">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 md:gap-8">
        {TWITCH_CLIPS.map((clip) => (
          <ClipEmbed key={clip.id} clipId={clip.id} title={clip.title} />
        ))}
      </div>
      <div className="text-center mt-12">
        <a
          href="https://www.twitch.tv/itsfains" 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
        >
          Follow on Twitch
        </a>
      </div>
    </Section>
  );
};
