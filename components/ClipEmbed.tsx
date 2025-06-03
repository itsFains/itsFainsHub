
import React from 'react';

interface ClipEmbedProps {
  clipId: string; // Twitch Clip Slug
  title: string;
}

export const ClipEmbed: React.FC<ClipEmbedProps> = ({ clipId, title }) => {
  // IMPORTANT: Replace 'localhost' with your actual domain when deploying.
  // For local development, 'localhost' or '127.0.0.1' (plus port if needed) might work.
  // Example: &parent=yourwebsite.com or &parent=www.yourwebsite.com
  // The `parent` parameter is crucial for Twitch embeds to function.
  const twitchEmbedParent = 'localhost'; // TODO: Update for deployment!
  const embedUrl = `https://clips.twitch.tv/embed?clip=${clipId}&parent=${twitchEmbedParent}&autoplay=false&muted=true`;

  return (
    <div className="bg-brand-gray-light p-4 rounded-lg shadow-xl hover:shadow-purple-500/30 transition-shadow duration-300 transform hover:scale-105">
      <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-md border-2 border-purple-500/50">
        {/* Aspect ratio 16:9 */}
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={embedUrl}
          title={title}
          frameBorder="0"
          allow="autoplay; fullscreen"
          scrolling="no"
          height="100%"
          width="100%"
        ></iframe>
      </div>
      <h3 className="mt-3 text-lg font-semibold text-gray-100 truncate" title={title}>{title}</h3>
      <a 
        href={`https://clips.twitch.tv/${clipId}`} 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-sm text-purple-400 hover:text-purple-300 transition-colors"
      >
        Watch on Twitch
      </a>
    </div>
  );
};
