
import { Heart, Code } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-blue-orange text-white py-8 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Code className="h-5 w-5" />
            <span className="text-lg font-semibold">BTS SIO1 ESICAD</span>
          </div>
          <p className="text-white/80 mb-2">
            Blog officiel de la classe BTS SIO1
          </p>
          <p className="text-white/60 text-sm flex items-center justify-center space-x-1">
            <span>Créé avec</span>
            <Heart className="h-4 w-4 text-red-300" />
            <span>par les étudiants SIO1</span>
          </p>
          <div className="mt-4 pt-4 border-t border-white/20">
            <p className="text-xs text-white/50">
              © 2024 ESICAD - Tous droits réservés
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
