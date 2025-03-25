
import { Mail, Phone, User } from "lucide-react";

const ContactSection = () => {
  return (
    <div className="glass-panel rounded-2xl p-8 w-full max-w-md mx-auto animate-fade-in">
      <h3 className="text-2xl font-bold text-rearmenia-blue mb-6 text-center">Կապ մեզ հետ</h3>
      
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <div className="bg-rearmenia-blue/10 p-3 rounded-full">
            <User className="h-5 w-5 text-rearmenia-blue" />
          </div>
          <div>
            <div className="text-sm text-gray-500">Անուն Ազգանուն</div>
            <div className="font-medium">Ani Hovhannisyan</div>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="bg-rearmenia-blue/10 p-3 rounded-full">
            <Mail className="h-5 w-5 text-rearmenia-blue" />
          </div>
          <div>
            <div className="text-sm text-gray-500">Էլ․ հասցե</div>
            <a href="mailto:ani.hovhannisyan@rearmenia.com" className="font-medium hover:text-rearmenia-orange transition-colors">
              ani.hovhannisyan@rearmenia.com
            </a>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="bg-rearmenia-blue/10 p-3 rounded-full">
            <Phone className="h-5 w-5 text-rearmenia-blue" />
          </div>
          <div>
            <div className="text-sm text-gray-500">Հեռախոսահամար</div>
            <a href="tel:+37495565989" className="font-medium hover:text-rearmenia-orange transition-colors">
              +374 95 565989
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
