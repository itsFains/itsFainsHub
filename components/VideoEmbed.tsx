
import React, { useState } from 'react';

interface VideoEmbedProps {
  videoId: string;
  title: string;
}

const PlayIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.279 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
  </svg>
);

export const VideoEmbed: React.FC<VideoEmbedProps> = ({ videoId, title }) => {
  const [showPlayer, setShowPlayer] = useState(false);

  // Use sddefault.jpg for more reliable thumbnail display
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/sddefault.jpg`;
  const embedUrl = `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&autoplay=1`;

  const handleThumbnailClick = () => {
    setShowPlayer(true);
  };

  return (
    <div className="group bg-brand-gray-light p-4 rounded-lg shadow-xl hover:shadow-brand-red/30 transition-shadow duration-300 transform hover:scale-105">
      <div
        className="relative pb-[56.25%] h-0 overflow-hidden rounded-md border-2 border-brand-red/50 cursor-pointer"
        onClick={!showPlayer ? handleThumbnailClick : undefined} // Only allow click if player is not shown
        role={!showPlayer ? "button" : undefined}
        aria-label={!showPlayer ? `Play video: ${title}` : undefined}
        tabIndex={!showPlayer ? 0 : -1}
        onKeyDown={!showPlayer ? (e) => { if (e.key === 'Enter' || e.key === ' ') handleThumbnailClick(); } : undefined}
      >
        {!showPlayer ? (
          <>
            <img
              src={thumbnailUrl}
              alt={`Thumbnail for ${title}`}
              className="absolute top-0 left-0 w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 group-hover:bg-opacity-10 transition-all duration-300">
              <PlayIcon className="w-16 h-16 text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transform transition-all duration-300" />
            </div>
          </>
        ) : (
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={embedUrl}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
      </div>
      <h3 className="mt-3 text-lg font-semibold text-gray-100 truncate" title={title}>{title}</h3>
    </div>
  );
};