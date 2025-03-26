
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

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-gray-50">
      {/* Header with Logo */}
      <header className={`py-8 px-8 transition-all duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <div className="container mx-auto flex justify-center">
          <img 
            src="/lovable-uploads/919e7881-6e0b-4bb9-9eea-d4aa9a9a7d55.png" 
            alt="reArmenia Academy Logo" 
            className="h-20 md:h-28 object-contain drop-shadow-md" 
          />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col justify-center items-center px-4 py-8">
        <div className="container max-w-6xl mx-auto px-0">
          <div className={`text-center mb-12 transition-all duration-700 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-4xl md:text-6xl font-montserrat font-bold text-rearmenia-blue mb-6 relative inline-block">
              <span className="relative z-10">«222» ՏԵՔՍՏԱՅԻՆ AI ԿՈՒՐՍ</span>
              <span className="absolute inset-0 bg-gradient-to-r from-rearmenia-orange/10 to-rearmenia-blue/10 blur-xl opacity-70 -z-10"></span>
            </h1>
            <p className="text-xl md:text-2xl font-montserrat text-gray-600 mt-6 relative inline-block">
              <span className="relative z-10">2 շաբաթ, շաբաթական 2 օր, օրական 2 ժամ</span>
              <span className="absolute inset-0 bg-gradient-to-r from-rearmenia-blue/5 to-rearmenia-orange/5 blur-lg opacity-50 -z-10"></span>
            </p>
          </div>

          {/* Pricing Table Section */}
          <div className={`mb-16 transition-all duration-700 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <PricingTable variant="grid" />
          </div>

          {/* Stats Cards - Hero Section */}
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16 transition-all duration-700 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="backdrop-blur-md bg-white/30 rounded-2xl p-8 shadow-xl border border-white/20 transform hover:translate-y-[-5px] transition-all duration-300 hover:shadow-2xl">
              <RegistrationCounter apiKey="AIzaSyAUQi23Gj0riJjH74-yy-H9TbzKqo5vbsc" />
            </div>
            
            <div className="backdrop-blur-md bg-white/30 rounded-2xl p-8 shadow-xl border border-white/20 transform hover:translate-y-[-5px] transition-all duration-300 hover:shadow-2xl">
              <PriceDisplay apiKey="AIzaSyAUQi23Gj0riJjH74-yy-H9TbzKqo5vbsc" />
            </div>
            
            <div className="backdrop-blur-md bg-white/30 rounded-2xl p-8 shadow-xl border border-white/20 transform hover:translate-y-[-5px] transition-all duration-300 hover:shadow-2xl">
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
      <footer className={`py-8 px-8 text-center text-gray-600 text-sm font-montserrat transition-all duration-700 delay-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <div className="container mx-auto">
          <p className="bg-gradient-to-r from-rearmenia-blue to-rearmenia-orange bg-clip-text text-transparent font-medium">
            © {new Date().getFullYear()} reArmenia Academy. Բոլոր իրավունքները պաշտպանված են։
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
