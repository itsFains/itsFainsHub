
import React from 'react';

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary';
}

export const Button: React.FC<ButtonProps> = ({ 
  href, 
  children, 
  icon, 
  className = '',
  variant = 'primary' 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-gray-dark transition-all duration-300 ease-in-out transform hover:scale-105";
  
  const variantStyles = {
    primary: "bg-brand-red text-white hover:bg-brand-red-dark focus:ring-brand-red",
    secondary: "bg-gray-600 text-white hover:bg-gray-500 focus:ring-gray-500"
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {icon && <span className="mr-3 -ml-1 h-6 w-6">{icon}</span>}
      {children}
    </a>
  );
};
