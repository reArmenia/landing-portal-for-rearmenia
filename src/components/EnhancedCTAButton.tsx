
import React from 'react';
import { cn } from "@/lib/utils";
import { ArrowRight } from 'lucide-react';

interface EnhancedCTAButtonProps {
  text: string;
  href: string;
  variant?: 'pulse' | 'shake' | 'float' | 'glow' | 'gradient';
  className?: string;
}

const EnhancedCTAButton = ({ 
  text, 
  href, 
  variant = 'pulse',
  className 
}: EnhancedCTAButtonProps) => {
  
  const baseClasses = "text-lg md:text-xl font-montserrat font-semibold inline-flex items-center group relative text-white rounded-lg px-8 py-4 transition-all duration-300";
  
  const variantClasses = {
    // Variant 1: Pulsing Animation
    pulse: "bg-rearmenia-orange hover:shadow-button hover:translate-y-[-2px] active:translate-y-[0px] animate-[pulse_2s_infinite]",
    
    // Variant 2: Shake Animation on Hover
    shake: "bg-rearmenia-orange hover:shadow-button hover:animate-[wiggle_0.5s_ease-in-out] active:translate-y-[0px]",
    
    // Variant 3: Floating Animation
    float: "bg-rearmenia-orange overflow-hidden hover:shadow-button hover:translate-y-[-2px] active:translate-y-[0px] animate-float",
    
    // Variant 4: Glowing Border Effect
    glow: "bg-rearmenia-orange hover:shadow-button hover:translate-y-[-2px] active:translate-y-[0px] border-2 border-rearmenia-orange/30 animate-[border-glow_3s_infinite_ease-in-out]",
    
    // Variant 5: Gradient Shift Animation
    gradient: "hover:shadow-button hover:translate-y-[-2px] active:translate-y-[0px] bg-gradient-to-r from-rearmenia-orange to-[#ff9f3f] bg-size-200 animate-gradient-shift"
  };

  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className={cn(baseClasses, variantClasses[variant], className)}
    >
      {text}
      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
      
      {/* Special effect for gradient variant */}
      {variant === 'gradient' && (
        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-rearmenia-orange to-[#ff9f3f] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" style={{ zIndex: -1 }} />
      )}
    </a>
  );
};

export default EnhancedCTAButton;
