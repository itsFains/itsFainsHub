
import React from 'react'; // Removed useState, useEffect
import { Header } from './components/Header';
import { HomeSection } from './components/HomeSection';
import { YouTubeSection } from './components/YouTubeSection';
import { TwitchSection } from './components/TwitchSection';
import { SupportSection } from './components/SupportSection';
import { Footer } from './components/Footer';
import type { NavItem } from './types';

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', sectionId: 'home' },
  { label: 'YouTube', sectionId: 'youtube' },
  { label: 'Twitch', sectionId: 'twitch' },
  { label: 'Support Me', sectionId: 'support' },
];

const App: React.FC = () => {
  // showContent state and useEffect removed for simplification and to ensure layout is primary focus.
  // Content is now always rendered.

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const headerOffset = 0; // Header is not fixed, so no offset needed for scrolling.
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-brand-gray-dark text-gray-100">
      {/* Header, main, and Footer are now direct children of the min-h-screen flex container */}
      <Header navItems={NAV_ITEMS} onNavItemClick={scrollToSection} />
      
      {/* The main content area will grow to push the footer down or allow scrolling if content is long */}
      <main className="flex-grow"> 
        <HomeSection id="home" />
        <YouTubeSection id="youtube" />
        <TwitchSection id="twitch" />
        <SupportSection id="support" />
      </main>
      
      <Footer />
    </div>
  );
};

export default App;
