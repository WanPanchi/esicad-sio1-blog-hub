
import Layout from '@/components/Layout';
import { ExternalLink, Users, Code, Database } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const BtsSio1 = () => {
  // Données d'exemple pour le trombinoscope
  const students = [
    {
      id: 1,
      nom: "SOULIER",
      prenom: "Rémi",
      photo: "public/Remi.webp",
      portfolio: "https://sarra-kouider.portfolio.dev",
      specialite: "SLAM"
    },
    {
      id: 2,
      nom: "PLUCHET",
      prenom: "Menzo",
      photo: "public/Menzo.webp",
      portfolio: "https://adel-hachache.portfolio.dev",
      specialite: "SLAM"
    },
    {
      id: 1,
      nom: "ATLAN",
      prenom: "Ilan",
      photo: "public/Ilan.webp",
      portfolio: "https://sarra-kouider.portfolio.dev",
      specialite: "SISR"
    },
    {
      id: 1,
      nom: "ALBOUY",
      prenom: "Kevin",
      photo: "public/Kevin.webp",
      portfolio: "https://sarra-kouider.portfolio.dev",
      specialite: "SISR"
    },
    {
      id: 1,
      nom: "FRUCHON",
      prenom: "Romain",
      photo: "public/Romain.webp",
      portfolio: "https://sarra-kouider.portfolio.dev",
      specialite: "SISR"
    },
    {
      id: 1,
      nom: "LACHEVRE",
      prenom: "Corran",
      photo: "public/Corran.webp",
      portfolio: "https://sarra-kouider.portfolio.dev",
      specialite: "SISR"
    },
    {
      id: 1,
      nom: "HUSTACHE",
      prenom: "Jordan",
      photo: "public/Jordan.webp",
      portfolio: "https://sarra-kouider.portfolio.dev",
      specialite: "SISR"
    },
    {
      id: 1,
      nom: "MOUTAOUAKIL",
      prenom: "Zyad",
      photo: "/placeholder.webp",
      portfolio: "https://sarra-kouider.portfolio.dev",
      specialite: "SISR"
    },
    {
      id: 1,
      nom: "DEVAUCHELLE",
      prenom: "Elina",
      photo: "public/Elina.webp",
      portfolio: "https://sarra-kouider.portfolio.dev",
      specialite: "SISR"
    },
    {
      id: 1,
      nom: "GABRIELE",
      prenom: "Baptiste",
      photo: "public/Baptiste.webp",
      portfolio: "https://sarra-kouider.portfolio.dev",
      specialite: "SISR"
    },
    {
      id: 3,
      nom: "ADAM",
      prenom: "Dawit",
      photo: "public/ADAM Dawit.webp",
      portfolio: "https://pierre-martin.portfolio.dev",
      specialite: "SISR"
    },
    {
      id: 4,
      nom: "BOUHASSOUN",
      prenom: "Ilyass",
      photo: "public/BOUHASSOUN Ilyass.webp",
      portfolio: "https://sophie-durand.portfolio.dev",
      specialite: "SISR"
    },
    {
      id: 5,
      nom: "IMBERT",
      prenom: "Alexandre",
      photo: "public/Alex.webp",
      portfolio: "https://lucas-bernard.portfolio.dev",
      specialite: "SISR"
    },
    {
      id: 6,
      nom: "GRECH",
      prenom: "Matteo",
      photo: "public/Matteo.webp",
      portfolio: "https://emma-moreau.portfolio.dev",
      specialite: "SISR"
    }
  ];

  const handleStudentClick = (portfolioUrl: string) => {
    window.open(portfolioUrl, '_blank');
  };

  return (
    <Layout>
      <div className="py-12">
        {/* Header */}
        <div className="bg-gradient-blue-orange text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              BTS SIO1 ESICAD
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Services Informatiques aux Organisations - Première année
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Présentation de la classe */}
          <div className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Notre Classe
                </h2>
                <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                  <p>
                    La classe BTS SIO1 d'ESICAD rassemble des étudiants passionnés par l'informatique 
                    et les nouvelles technologies. Notre formation prépare aux métiers de l'informatique 
                    dans les entreprises.
                  </p>
                  <p>
                    Nous développons des compétences en développement d'applications, administration 
                    de systèmes et réseaux, gestion de projets informatiques et cybersécurité.
                  </p>
                  <p>
                    Notre classe se distingue par son esprit d'équipe, sa créativité et sa motivation 
                    à réussir dans le secteur du numérique.
                  </p>
                  <div className="pt-6">
                    <img
                      src="public/Fusion.webp"
                      alt="Logo de la classe BTS SIO1"
                      className="h-20 w-auto mx-auto"
                    />
                </div>
              </div>

              <div className="space-y-6">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Code className="h-6 w-6 text-orange-600" />
                      <span>Option SLAM</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">
                      Solutions Logicielles et Applications Métiers - Développement d'applications 
                      et maintenance du parc informatique.
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Database className="h-6 w-6 text-blue-600" />
                      <span>Option SISR</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">
                      Solutions d'Infrastructure, Systèmes et Réseaux - Administration et sécurité 
                      des systèmes d'information.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Statistiques de la classe */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Users className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">{students.length}</div>
                <div className="text-gray-600">Étudiants</div>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Code className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {students.filter(s => s.specialite === 'SLAM').length}
                </div>
                <div className="text-gray-600">Option SLAM</div>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Database className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {students.filter(s => s.specialite === 'SISR').length}
                </div>
                <div className="text-gray-600">Option SISR</div>
              </CardContent>
            </Card>
          </div>

          {/* Trombinoscope */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Trombinoscope de la Classe
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Cliquez sur la photo d'un étudiant pour accéder à son portfolio personnel 
              et découvrir ses projets et compétences.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {students.map((student) => (
                <Card 
                  key={student.id} 
                  className="group cursor-pointer hover:shadow-xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-orange-50 to-blue-50 hover:from-orange-100 hover:to-blue-100"
                  onClick={() => handleStudentClick(student.portfolio)}
                >
                  <CardContent className="p-6 text-center">
                    <div className="relative mb-4">
                      <img
                        src={student.photo}
                        alt={`${student.prenom} ${student.nom}`}
                        className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-white shadow-lg group-hover:border-orange-200 transition-colors"
                      />
                      <div className="absolute inset-0 bg-gradient-orange-blue opacity-0 group-hover:opacity-20 rounded-full transition-opacity"></div>
                    </div>
                    
                    <h3 className="font-bold text-lg text-gray-900 mb-1 group-hover:text-orange-700 transition-colors">
                      {student.prenom} {student.nom}
                    </h3>
                    
                    <div className="mb-3">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                        student.specialite === 'SLAM' 
                          ? 'bg-orange-100 text-orange-800' 
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {student.specialite}
                      </span>
                    </div>
                    
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="group-hover:bg-gradient-orange-blue group-hover:text-white group-hover:border-transparent transition-all"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Portfolio
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Information sur le consentement RGPD */}
          <div className="mt-16 p-6 bg-yellow-50 border border-yellow-200 rounded-lg">
            <h3 className="text-lg font-semibold text-yellow-800 mb-2">
              Information sur les données personnelles
            </h3>
            <p className="text-yellow-700 text-sm">
              Toutes les photos et informations personnelles affichées sur cette page ont été 
              publiées avec le consentement explicite des étudiants concernés, conformément au RGPD. 
              Pour toute demande de modification ou suppression, veuillez consulter notre page 
              "Référentiels et Normes".
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BtsSio1;
