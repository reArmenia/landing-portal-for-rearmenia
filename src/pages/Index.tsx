import { useState, useEffect } from "react";
import CountdownTimer from "../components/CountdownTimer";
import RegistrationCounter from "../components/RegistrationCounter";
import PriceDisplay from "../components/PriceDisplay";
import ContactSection from "../components/ContactSection";
import PricingTable from "../components/PricingTable";
import EnhancedCTAButton from "../components/EnhancedCTAButton";
const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Hero section styling variants
  const getHeroCardClass = () => {
    return "hero-stats-mixed";
  };
  return <div className="min-h-screen flex flex-col">
      {/* Header with Logo */}
      <header className={`py-6 px-8 transition-all duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <div className="container mx-auto flex justify-center">
          <img src="/imgs/919e7881-6e0b-4bb9-9eea-d4aa9a9a7d55.png" alt="reArmenia Academy Logo" className="h-20 md:h-28 object-contain" />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col justify-center items-center px-4 py-8">
        <div className="container max-w-6xl mx-auto px-0">
          <div className={`text-center mb-8 transition-all duration-700 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-4xl md:text-6xl font-montserrat font-semibold text-rearmenia-blue mb-4">
              «222» ՏԵՔՍՏԱՅԻՆ AI ԿՈՒՐՍ
            </h1>
            <p className="text-xl md:text-2xl font-montserrat text-gray-600 mt-4">
              2 շաբաթ, շաբաթական 2 օր, օրական 2 ժամ
            </p>
          </div>

          {/* Pricing Table Section */}
          <div className={`mb-12 transition-all duration-700 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <PricingTable variant="grid" />
          </div>

          {/* Stats Cards - Hero Section */}
          <div className={`flex flex-col gap-6 max-w-md mx-auto mb-16 transition-all duration-700 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className={getHeroCardClass()}>
              <div className="absolute top-0 right-0 w-24 h-24 bg-rearmenia-blue/5 rounded-full -mr-10 -mt-10"></div>
              <RegistrationCounter apiKey="AIzaSyAUQi23Gj0riJjH74-yy-H9TbzKqo5vbsc" />
            </div>
            
            <div className={getHeroCardClass()}>
              <div className="absolute top-0 right-0 w-24 h-24 bg-rearmenia-orange/5 rounded-full -mr-10 -mt-10"></div>
              <PriceDisplay apiKey="AIzaSyAUQi23Gj0riJjH74-yy-H9TbzKqo5vbsc" />
            </div>
            
            <div className={getHeroCardClass()}>
              <div className="absolute top-0 right-0 w-24 h-24 bg-rearmenia-blue/5 rounded-full -mr-10 -mt-10"></div>
              <CountdownTimer />
            </div>
          </div>

          {/* Single CTA Button with Shine Effect */}
          <div className={`text-center mb-20 transition-all duration-700 delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <EnhancedCTAButton href="https://forms.gle/ch23zZq7kdzxM9Nb7">
              Գրանցվում եմ «222» տեքստային AI կուրսին
            </EnhancedCTAButton>
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
    </div>;
};
export default Index;