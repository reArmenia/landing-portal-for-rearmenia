
import { useState, useEffect } from "react";
import CountdownTimer from "../components/CountdownTimer";
import RegistrationCounter from "../components/RegistrationCounter";
import PriceDisplay from "../components/PriceDisplay";
import ContactSection from "../components/ContactSection";
import PricingTable from "../components/PricingTable";
import DebugInfo from "../components/DebugInfo";

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [debugMode, setDebugMode] = useState(false);
  const [selectedHeroVariant, setSelectedHeroVariant] = useState(1);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Hero section styling variants
  const getHeroCardClass = (index: number) => {
    switch(index) {
      case 0: return "hero-stats-v1";
      case 1: return "hero-stats-v2";
      case 2: return "hero-stats-v3";
      case 3: return "hero-stats-v4";
      case 4: return "hero-stats-v5";
      default: return "hero-stats-v1";
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header with Logo */}
      <header className={`py-6 px-8 transition-all duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <div className="container mx-auto flex justify-center">
          <img 
            src="/lovable-uploads/a682db00-a836-4a06-b377-026351a15828.png" 
            alt="reArmenia Academy Logo" 
            className="h-20 md:h-28 object-contain"
          />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col justify-center items-center px-4 py-8">
        <div className="container max-w-6xl mx-auto">
          <div className={`text-center mb-8 transition-all duration-700 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-4xl md:text-6xl font-montserrat font-semibold text-rearmenia-blue mb-4">
              «222» ՏԵՔՍՏԱՅԻՆ AI ԿՈՒՐՍ
            </h1>
            <p className="text-xl md:text-2xl font-montserrat text-gray-600 mt-4">
              2 շաբաթ, շաբաթական 2 օր, օրական 2 ժամ
            </p>
          </div>

          {/* Pricing Table Section - Only Grid variant */}
          <div className={`mb-12 transition-all duration-700 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <PricingTable variant="grid" />
          </div>

          {/* Hero Variant Selector */}
          <div className="flex justify-center gap-2 mb-6">
            {[1, 2, 3, 4, 5].map((variant) => (
              <button 
                key={variant}
                onClick={() => setSelectedHeroVariant(variant)}
                className={`w-8 h-8 rounded-full border ${selectedHeroVariant === variant ? 'bg-rearmenia-blue border-rearmenia-orange' : 'bg-gray-100 border-gray-300'}`}
                aria-label={`Hero Style ${variant}`}
              />
            ))}
          </div>

          {/* Stats Cards - Hero Section */}
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 mb-16 transition-all duration-700 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className={getHeroCardClass(selectedHeroVariant - 1)}>
              <div className="absolute top-0 right-0 w-24 h-24 bg-rearmenia-blue/5 rounded-full -mr-10 -mt-10"></div>
              <RegistrationCounter apiKey="AIzaSyAUQi23Gj0riJjH74-yy-H9TbzKqo5vbsc" />
            </div>
            
            <div className={getHeroCardClass(selectedHeroVariant - 1)}>
              <div className="absolute top-0 right-0 w-24 h-24 bg-rearmenia-orange/5 rounded-full -mr-10 -mt-10"></div>
              <PriceDisplay apiKey="AIzaSyAUQi23Gj0riJjH74-yy-H9TbzKqo5vbsc" />
            </div>
            
            <div className={getHeroCardClass(selectedHeroVariant - 1)}>
              <div className="absolute top-0 right-0 w-24 h-24 bg-rearmenia-blue/5 rounded-full -mr-10 -mt-10"></div>
              <CountdownTimer />
            </div>
          </div>

          {/* Debug Info */}
          {debugMode && <DebugInfo apiKey="AIzaSyAUQi23Gj0riJjH74-yy-H9TbzKqo5vbsc" />}

          {/* Toggle Debug Mode */}
          <div className="text-center mb-6">
            <button 
              onClick={() => setDebugMode(!debugMode)} 
              className="text-sm font-montserrat text-rearmenia-blue underline"
            >
              {debugMode ? "Hide Debug Info" : "Show Debug Info"}
            </button>
          </div>

          {/* CTA Button */}
          <div className={`text-center mb-20 transition-all duration-700 delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <a 
              href="https://forms.gle/ch23zZq7kdzxM9Nb7" 
              target="_blank" 
              rel="noopener noreferrer"
              className="button-primary text-lg md:text-xl font-montserrat font-semibold inline-flex items-center group"
            >
              Գրանցվում եմ «222» տեքստային AI կուրսին
              <svg className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>

          {/* Contact Section */}
          <div className={`transition-all duration-700 delay-900 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <ContactSection />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className={`py-6 px-8 text-center text-gray-500 text-sm font-montserrat transition-all duration-700 delay-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <div className="container mx-auto">
          <p>© {new Date().getFullYear()} reArmenia Academy. Բոլոր իրավունքները պաշտպանված են։</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
