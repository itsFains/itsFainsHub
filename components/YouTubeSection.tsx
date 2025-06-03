
import React from 'react';
import { Section } from './Section';
import { VideoEmbed } from './VideoEmbed';
import type { VideoItem } from '../types';

// Updated with itsFain's YouTube Video IDs and verified titles
const YOUTUBE_VIDEOS: VideoItem[] = [
  { id: '6Kj4HaayXJA', title: 'I got hacked on stream and lost everything..' },
  { id: '4eN0n2P0m0o', title: 'MY FIRST EVER CHARITY STREAM!!' },
  { id: 'wL57TfT45Wo', title: 'this is why i love playing gta rp' },
  { id: 'cR5i_N0n-L0', title: 'ITSFAINS MOST WANTED PERSON IN LOS SANTOS' },
];

interface YouTubeSectionProps {
  id: string;
}

export const YouTubeSection: React.FC<YouTubeSectionProps> = ({ id }) => {
  return (
    <Section id={id} title="MY YOUTUBE VIDEOS" className="bg-brand-gray">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 md:gap-8">
        {YOUTUBE_VIDEOS.map((video) => (
          <VideoEmbed key={video.id} videoId={video.id} title={video.title} />
        ))}
      </div>
      <div className="text-center mt-12">
        <a
          href="https://www.youtube.com/@itsFain"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-brand-red hover:bg-brand-red-dark text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
        >
          Visit YouTube Channel
        </a>
      </div>
    </Section>
  );
};
