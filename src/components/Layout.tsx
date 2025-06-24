
import { ReactNode } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-orange-50 to-blue-50 relative">
      {/* Logo en arrière-plan en haut à gauche */}
      <div className="fixed top-4 left-4 z-0 opacity-10 pointer-events-none">
        <img 
          src="/BTS SIO SISR ESICAD.png" 
          alt="BTS SIO SISR ESICAD" 
          className="w-16 h-16 object-contain"
        />
      </div>
      
      {/* Logo en arrière-plan en haut à droite */}
      <div className="fixed top-4 right-4 z-0 opacity-10 pointer-events-none">
        <img 
          src="/Logo ESICAD.png" 
          alt="ESICAD" 
          className="w-16 h-16 object-contain"
        />
      </div>
      
      <Navigation />
      <main className="flex-grow relative z-10">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
