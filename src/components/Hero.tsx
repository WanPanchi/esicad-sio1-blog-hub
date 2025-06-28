
import { Users, School, BookOpen, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  const features = [
    {
      icon: School,
      title: "Notre École",
      description: "Découvrez ESICAD et ses formations",
      link: "/ecole"
    },
    {
      icon: Users,
      title: "BTS SIO1",
      description: "Rencontrez notre classe et consultez le trombinoscope",
      link: "/bts-sio1"
    },
    {
      icon: Shield,
      title: "Référentiels",
      description: "ITIL, COBIT et conformité RGPD",
      link: "/referentiels"
    }
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <div className="bg-gradient-orange-blue text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Bienvenue sur le Blog
              <span className="block text-orange-200">BTS SIO1 ESICAD</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Découvrez notre classe, nos projets et notre école dans un environnement numérique moderne et professionnel.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-orange-50 text-lg px-8">
                <Link to="/bts-sio1">
                  <Users className="mr-2 h-5 w-5" />
                  Découvrir la classe
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-blue-600 hover:bg-white/10 text-lg px-8">
                <Link to="/ecole">
                  <BookOpen className="mr-2 h-5 w-5" />
                  En savoir plus
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Explorez notre univers
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Naviguez à travers les différentes sections de notre blog pour en apprendre plus sur notre formation et notre école.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Link
                key={index}
                to={feature.link}
                className="group p-6 bg-gradient-to-br from-orange-50 to-blue-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-orange-blue text-white rounded-full mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-800 transition-colors">
                    {feature.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
