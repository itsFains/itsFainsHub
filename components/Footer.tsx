
import React from 'react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-brand-gray-dark border-t border-brand-gray-light py-8 text-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm text-gray-400">
          &copy; {currentYear} itsFain. All Rights Reserved.
        </p>
        <p className="text-xs text-gray-500 mt-1">
          Designed with <span className="text-brand-red">&hearts;</span> for the community.
        </p>
        {/* Optional: Add social media links here if desired */}
        {/* 
        <div className="mt-4 flex justify-center space-x-4">
          <a href="#" className="text-gray-400 hover:text-brand-red">YouTube</a>
          <a href="#" className="text-gray-400 hover:text-brand-red">Twitch</a>
          <a href="#" className="text-gray-400 hover:text-brand-red">Twitter</a>
        </div>
        */}
      </div>
    </footer>
  );
};
