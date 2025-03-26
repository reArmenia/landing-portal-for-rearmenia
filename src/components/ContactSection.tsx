import { Mail, Phone, User } from "lucide-react";
const ContactSection = () => {
  return <div className="glass-panel rounded-2xl p-8 w-full mx-auto animate-fade-in">
      <h3 className="text-2xl font-bold text-rearmenia-blue mb-6 text-center">Կապ մեզ հետ</h3>
      
      <div className="space-y-4 md:flex md:flex-col md:items-center">
        <div className="flex items-center gap-4 md:w-auto">
          <div className="bg-rearmenia-blue/10 p-3 rounded-full flex-shrink-0">
            <User className="h-5 w-5 text-rearmenia-blue" />
          </div>
          <div className="min-w-0">
            <div className="text-sm text-gray-500">Անուն Ազգանուն</div>
            <div className="font-medium truncate">Ani Hovhannisyan</div>
          </div>
        </div>
        
        <div className="flex items-center gap-4 md:w-auto">
          <div className="bg-rearmenia-blue/10 p-3 rounded-full flex-shrink-0">
            <Mail className="h-5 w-5 text-rearmenia-blue" />
          </div>
          <div className="min-w-0">
            <div className="text-sm text-gray-500">Էլ․ հասցե</div>
            <a href="mailto:ani.hovhannisyan@rearmenia.com" className="text-xs md:font-small hover:text-rearmenia-orange transition-colors truncate block overflow-hidden text-ellipsis">
              ani.hovhannisyan@rearmenia.com
            </a>
          </div>
        </div>
        
        <div className="flex items-center gap-4 md:w-auto">
          <div className="bg-rearmenia-blue/10 p-3 rounded-full flex-shrink-0">
            <Phone className="h-5 w-5 text-rearmenia-blue" />
          </div>
          <div className="min-w-0">
            <div className="text-sm text-gray-500">Հեռախոսահամար</div>
            <a href="tel:+37495565989" className="font-medium hover:text-rearmenia-orange transition-colors truncate">
              +374 95 565989
            </a>
          </div>
        </div>
      </div>
    </div>;
};
export default ContactSection;