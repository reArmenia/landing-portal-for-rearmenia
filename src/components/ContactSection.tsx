
import { Mail, Phone, User } from "lucide-react";

const ContactSection = () => {
  return (
    <div className="backdrop-blur-md bg-white/30 rounded-2xl p-8 shadow-xl border border-white/20 w-fit mx-auto animate-fade-in transform hover:shadow-2xl transition-all duration-300">
      <h3 className="text-2xl font-bold text-rearmenia-blue mb-6 text-center relative">
        <span className="relative z-10">Կապ մեզ հետ</span>
        <span className="absolute inset-0 bg-gradient-to-r from-rearmenia-blue/10 to-rearmenia-orange/10 blur-lg opacity-70 rounded-full"></span>
      </h3>
      
      <div className="space-y-6">
        <div className="flex items-center gap-5 group">
          <div className="bg-gradient-to-br from-rearmenia-blue to-rearmenia-blue/70 p-4 rounded-2xl flex-shrink-0 shadow-md group-hover:shadow-rearmenia-blue/20 group-hover:shadow-lg transition-all duration-300">
            <User className="h-5 w-5 text-white" />
          </div>
          <div className="min-w-0">
            <div className="text-sm text-gray-500 font-medium">Անուն Ազգանուն</div>
            <div className="font-bold text-rearmenia-blue truncate text-lg">Ani Hovhannisyan</div>
          </div>
        </div>
        
        <div className="flex items-center gap-5 group">
          <div className="bg-gradient-to-br from-rearmenia-blue/90 to-rearmenia-blue/60 p-4 rounded-2xl flex-shrink-0 shadow-md group-hover:shadow-rearmenia-blue/20 group-hover:shadow-lg transition-all duration-300">
            <Mail className="h-5 w-5 text-white" />
          </div>
          <div className="min-w-0">
            <div className="text-sm text-gray-500 font-medium">Էլ․ հասցե</div>
            <a 
              href="mailto:ani.hovhannisyan@rearmenia.com" 
              className="text-rearmenia-blue hover:text-rearmenia-orange transition-colors truncate block overflow-hidden text-ellipsis font-medium text-lg"
            >
              ani.hovhannisyan@rearmenia.com
            </a>
          </div>
        </div>
        
        <div className="flex items-center gap-5 group">
          <div className="bg-gradient-to-br from-rearmenia-blue/80 to-rearmenia-blue/50 p-4 rounded-2xl flex-shrink-0 shadow-md group-hover:shadow-rearmenia-blue/20 group-hover:shadow-lg transition-all duration-300">
            <Phone className="h-5 w-5 text-white" />
          </div>
          <div className="min-w-0">
            <div className="text-sm text-gray-500 font-medium">Հեռախոսահամար</div>
            <a 
              href="tel:+37495565989" 
              className="font-bold text-rearmenia-blue hover:text-rearmenia-orange transition-colors truncate text-lg"
            >
              +374 95 565989
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
