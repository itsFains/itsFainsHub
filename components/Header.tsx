import React from 'react';
import type { NavItem } from '../types';

interface HeaderProps {
  navItems: NavItem[];
  onNavItemClick: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ navItems, onNavItemClick }) => {
  return (
    <header className="bg-brand-gray-light shadow-lg"> {/* Removed fixed positioning, z-index, backdrop-blur */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a 
              href="#home" 
              onClick={(e) => { e.preventDefault(); onNavItemClick('home'); }}
              className="font-orbitron text-4xl font-bold text-brand-red hover:text-brand-red-dark transition-colors" /* Changed text to uppercase and increased size */
            >
              ITSFAINS
            </a>
          </div>
          <nav className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <a
                key={item.sectionId}
                href={`#${item.sectionId}`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavItemClick(item.sectionId);
                }}
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-200 hover:bg-brand-red hover:text-white transition-all duration-200 ease-in-out transform hover:scale-105"
              >
                {item.label}
              </a>
            ))}
          </nav>
          {/* Mobile menu button (optional, for future expansion) */}
          <div className="md:hidden">
            {/* Placeholder for a mobile menu icon/button if needed */}
          </div>
        </div>
      </div>
    </header>
  );
};