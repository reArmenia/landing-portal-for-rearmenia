
import { useState } from 'react';

interface EnhancedCTAButtonProps {
  href: string;
  variant?: 'pulse' | 'bounce' | 'shine' | 'expand' | 'arrow';
  children: React.ReactNode;
}

const EnhancedCTAButton = ({ 
  href, 
  variant = 'pulse', 
  children 
}: EnhancedCTAButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Base classes for all button variants
  const baseClasses = "relative inline-flex items-center justify-center font-montserrat font-semibold text-lg md:text-xl text-white bg-rearmenia-orange px-8 py-4 rounded-lg transition-all overflow-hidden";
  
  // Specific classes per variant
  const variantClasses = {
    pulse: "hover:shadow-button hover:translate-y-[-2px] active:translate-y-[0px] animate-[pulse_2s_infinite]",
    bounce: "hover:shadow-button transform hover:scale-105 active:scale-100 transition-transform",
    shine: "hover:shadow-button group",
    expand: "hover:shadow-button hover:px-10 transition-all duration-300 ease-in-out",
    arrow: "hover:shadow-button group"
  };
  
  // Additional elements per variant
  const variantElements = {
    pulse: null,
    bounce: null,
    shine: (
      <span 
        className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shine_1.5s_ease_forwards_infinite]"
        style={{ 
          animationDelay: '0.5s', 
          backgroundSize: '200% 100%'
        }}
      />
    ),
    expand: null,
    arrow: (
      <svg 
        className="ml-2 h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1" 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
    )
  };
  
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClasses} ${variantClasses[variant]}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      {variantElements[variant]}
    </a>
  );
};

export default EnhancedCTAButton;
