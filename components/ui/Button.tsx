import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'dark';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "group relative inline-flex items-center justify-center px-8 py-4 text-sm font-bold tracking-widest uppercase transition-all duration-300 focus:outline-none overflow-hidden shadow-lg hover:shadow-xl";
  
  const variants = {
    primary: "bg-brand-red text-white hover:bg-brand-blood border border-transparent",
    outline: "bg-transparent text-brand-purple border border-brand-purple/20 hover:bg-brand-purple/5 hover:border-brand-purple",
    dark: "bg-brand-purple text-white hover:bg-brand-purple/90 border border-transparent"
  };

  const widthClass = fullWidth ? 'w-full' : '';

  // Fallback if variant doesn't match keys (though typescript prevents this, robust for runtime)
  const variantClass = variants[variant] || variants.primary;

  return (
    <button 
      className={`${baseStyles} ${variantClass} ${widthClass} ${className}`} 
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      </span>
      {/* Glare effect on hover */}
      <div className="absolute inset-0 z-0 h-full w-full scale-0 rounded-full transition-all duration-300 group-hover:scale-150 group-hover:bg-white/10 opacity-0 group-hover:opacity-100"></div>
    </button>
  );
};