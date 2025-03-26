
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

interface EnhancedCTAButtonProps {
  href: string;
  children: React.ReactNode;
}

const EnhancedCTAButton = ({ 
  href, 
  children 
}: EnhancedCTAButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative inline-flex items-center justify-center font-montserrat font-semibold text-lg md:text-xl text-white px-8 py-4 overflow-hidden transition-all duration-300 rounded-xl hover:scale-105 hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background with gradient */}
      <span className="absolute inset-0 bg-gradient-to-r from-rearmenia-orange to-rearmenia-orange/90 rounded-xl"></span>
      
      {/* Inner shadow for depth */}
      <span className="absolute inset-0 opacity-30 bg-gradient-to-b from-white/30 to-transparent rounded-xl"></span>
      
      {/* Shine effect that runs continuously */}
      <span 
        className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[shine_1.5s_ease_forwards_infinite] rounded-xl"
        style={{ backgroundSize: '200% 100%' }}
      />
      
      {/* Content with icon */}
      <span className="relative flex items-center gap-2 z-10">
        {children}
        <ArrowRight 
          className={`w-5 h-5 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} 
        />
      </span>
    </a>
  );
};

export default EnhancedCTAButton;
