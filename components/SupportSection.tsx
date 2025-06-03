
import React from 'react';
import { Section } from './Section';
import { Button } from './Button';

// Heroicons SVGs (inline for simplicity)
const GiftIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 10H3M12 3v7M3 10l1.5 11h15L21 10M5.25 10V7.5a1.5 1.5 0 011.5-1.5h10.5a1.5 1.5 0 011.5 1.5V10" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3a2.25 2.25 0 00-2.25 2.25c0 1.242.75 2.25 2.25 2.25S14.25 6.492 14.25 5.25A2.25 2.25 0 0012 3z" />
  </svg>
);

const ShoppingBagIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
  </svg>
);


interface SupportSectionProps {
  id: string;
}

export const SupportSection: React.FC<SupportSectionProps> = ({ id }) => {
  // TODO: Replace with actual donation and merchandise links
  const donationLink = "https://www.paypal.com/donate?hosted_button_id=YOUR_PAYPAL_BUTTON_ID"; // Example PayPal
  const merchLink = "https://www.yourmerchstore.com/itsfain"; // Example Merch Store

  return (
    <Section id={id} title="SUPPORT THE CHANNEL" className="bg-brand-gray">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-lg text-gray-300 mb-10 leading-relaxed">
          If you enjoy the content and want to help support the channel, there are a couple of ways you can do so. Every bit of support is hugely appreciated and helps me continue creating!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Donations Card */}
          <div className="bg-brand-gray-light p-8 rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
            <div className="flex justify-center mb-4">
              <GiftIcon className="h-16 w-16 text-brand-red" />
            </div>
            <h3 className="text-2xl font-orbitron font-semibold text-white mb-3">Donations & Tips</h3>
            <p className="text-gray-400 mb-6">
              Directly support the stream and content creation. Your generosity helps cover costs and improve the quality!
            </p>
            <Button href={donationLink} icon={<GiftIcon className="w-5 h-5" />}>
              Donate via PayPal
            </Button>
             <p className="text-xs text-gray-500 mt-3">
              {/* TODO: Replace with your specific donation platform name if not PayPal */}
              (or your preferred platform)
            </p>
          </div>

          {/* Merchandise Card */}
          <div className="bg-brand-gray-light p-8 rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
            <div className="flex justify-center mb-4">
              <ShoppingBagIcon className="h-16 w-16 text-brand-red" />
            </div>
            <h3 className="text-2xl font-orbitron font-semibold text-white mb-3">Official Merch</h3>
            <p className="text-gray-400 mb-6">
              Grab some awesome itsFain gear! Show your support and look cool doing it. New designs added regularly.
            </p>
            <Button href={merchLink} icon={<ShoppingBagIcon className="w-5 h-5" />}>
              Shop Merch
            </Button>
            <p className="text-xs text-gray-500 mt-3">
              {/* TODO: Replace with your merch store platform if applicable */}
              (Powered by YourMerchPlatform)
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};