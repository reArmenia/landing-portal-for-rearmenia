
import { useState } from 'react';

interface EnhancedCTAButtonProps {
  href: string;
  children: React.ReactNode;
}

const EnhancedCTAButton = ({ 
  href, 
  children 
}: EnhancedCTAButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Base classes for the button
  const baseClasses = "relative inline-flex items-center justify-center font-montserrat font-semibold text-lg md:text-xl text-white bg-rearmenia-orange px-8 py-4 rounded-lg transition-all overflow-hidden";
  
  // Hover classes for scaling effect
  const hoverClasses = "hover:scale-105 hover:shadow-button transform transition-transform duration-300";
  
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClasses} ${hoverClasses}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      {/* Shine effect that runs continuously in static state */}
      <span 
        className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[shine_1.5s_ease_forwards_infinite]"
        style={{ 
          backgroundSize: '200% 100%'
        }}
      />
    </a>
  );
};

export default EnhancedCTAButton;
