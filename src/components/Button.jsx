import React from 'react';
import { twMerge } from 'tailwind-merge';

const Button = ({ 
  children, 
  variant = 'primary', 
  className, 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-full font-bold transition-all transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-brand-yellow text-brand-dark hover:bg-brand-yellow-hover shadow-lg shadow-brand-yellow/30",
    secondary: "bg-white border-2 border-brand-green text-brand-green hover:bg-brand-green-bg",
    outline: "border-2 border-white text-white hover:bg-white/10",
    ghost: "text-brand-green hover:bg-brand-green/10"
  };

  return (
    <button 
      className={twMerge(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
