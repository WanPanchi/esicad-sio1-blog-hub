
import Layout from '@/components/Layout';
import { Building, Users, Award, MapPin, Phone, Mail } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Ecole = () => {
  const stats = [
    { icon: Users, label: "Étudiants", value: "500+" },
    { icon: Building, label: "Formations", value: "15+" },
    { icon: Award, label: "Années d'expérience", value: "25+" },
  ];

  return (
    <Layout>
      <div className="py-12">
        {/* Header */}
        <div className="bg-gradient-orange-blue text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              ESICAD
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              École Supérieure d'Informatique, Commerce et Administration
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-orange-blue text-white rounded-full mb-4">
                    <stat.icon className="h-8 w-8" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* About Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                À propos d'ESICAD
              </h2>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>
                  ESICAD est une école supérieure privée reconnue qui forme depuis plus de 25 ans 
                  des professionnels dans les domaines de l'informatique, du commerce et de l'administration.
                </p>
                <p>
                  Notre établissement se distingue par son approche pédagogique innovante, 
                  alliant théorie et pratique, avec un fort accent sur l'employabilité de nos diplômés.
                </p>
                <p>
                  Nous proposons des formations du BTS au Master, en initial et en alternance, 
                  adaptées aux besoins du marché du travail actuel.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Nos Valeurs
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Excellence Académique",
                    description: "Des programmes de formation rigoureux et actualisés"
                  },
                  {
                    title: "Innovation Pédagogique",
                    description: "Méthodes d'enseignement modernes et interactives"
                  },
                  {
                    title: "Proximité Entreprises",
                    description: "Partenariats solides avec le monde professionnel"
                  },
                  {
                    title: "Accompagnement Personnalisé",
                    description: "Suivi individualisé de chaque étudiant"
                  }
                ].map((value, index) => (
                  <div key={index} className="flex space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-3 h-3 bg-gradient-orange-blue rounded-full mt-2"></div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{value.title}</h3>
                      <p className="text-gray-600">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Formations */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Nos Formations
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "BTS SIO",
                  subtitle: "Services Informatiques aux Organisations",
                  options: ["SLAM", "SISR"]
                },
                {
                  title: "BTS Commerce",
                  subtitle: "Management Commercial Opérationnel",
                  options: ["Négociation", "Relation Client"]
                },
                {
                  title: "Bachelor",
                  subtitle: "Développement et Architecture",
                  options: ["Full Stack", "DevOps"]
                }
              ].map((formation, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl text-center text-gray-900">
                      {formation.title}
                    </CardTitle>
                    <p className="text-gray-600 text-center">{formation.subtitle}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {formation.options.map((option, optIndex) => (
                        <div key={optIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                          <span className="text-gray-700">{option}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="bg-gradient-to-br from-orange-50 to-blue-50 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Nous Contacter
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center space-y-2">
                <MapPin className="h-8 w-8 text-orange-600" />
                <h3 className="font-semibold text-gray-900">Adresse</h3>
                <p className="text-gray-700">
                  123 Avenue de l'Innovation<br />
                  75001 Paris, France
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <Phone className="h-8 w-8 text-blue-600" />
                <h3 className="font-semibold text-gray-900">Téléphone</h3>
                <p className="text-gray-700">01 23 45 67 89</p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <Mail className="h-8 w-8 text-orange-600" />
                <h3 className="font-semibold text-gray-900">Email</h3>
                <p className="text-gray-700">contact@esicad.fr</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Ecole;
