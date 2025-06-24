
import Layout from '@/components/Layout';
import { Shield, Settings, Users, FileText, Lock, Eye, Edit, Trash2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const Referentiels = () => {
  return (
    <Layout>
      <div className="py-12">
        {/* Header */}
        <div className="bg-gradient-orange-blue text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              Référentiels et Conformité
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Gouvernance IT, Normes et Protection des Données
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          
          {/* Gouvernance IT Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <Settings className="h-8 w-8 text-orange-600 mr-3" />
              Gouvernance et Gestion des Services IT
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* ITIL */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-xl">
                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                    <span>ITIL (Information Technology Infrastructure Library)</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700">
                    Dans le cadre de notre projet de blog BTS SIO1, nous appliquons plusieurs bonnes pratiques ITIL :
                  </p>
                  
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-gray-900">Gestion des Incidents</h4>
                      <p className="text-gray-600 text-sm">
                        Processus de résolution rapide des problèmes techniques du site web, 
                        avec un système de ticketing pour tracer et résoudre les dysfonctionnements.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900">Gestion des Changements</h4>
                      <p className="text-gray-600 text-sm">
                        Toute modification du contenu ou de la structure du site suit un processus 
                        d'approbation et de validation pour éviter les interruptions de service.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900">Gestion des Versions</h4>
                      <p className="text-gray-600 text-sm">
                        Planification et déploiement contrôlé des mises à jour du blog avec 
                        tests préalables et procédures de rollback.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* COBIT */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-xl">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span>COBIT (Control Objectives for IT)</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700">
                    Notre projet s'inscrit dans une démarche de gouvernance des systèmes d'information :
                  </p>
                  
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-gray-900">Alignement Stratégique</h4>
                      <p className="text-gray-600 text-sm">
                        Le blog répond aux objectifs pédagogiques de l'école et aux besoins de 
                        communication de la classe BTS SIO1.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900">Gestion des Responsabilités</h4>
                      <p className="text-gray-600 text-sm">
                        Définition claire des rôles : administrateurs, contributeurs, et validation 
                        du contenu par l'équipe pédagogique.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900">Mesure de Performance</h4>
                      <p className="text-gray-600 text-sm">
                        Suivi des métriques d'usage du site et évaluation de l'atteinte des 
                        objectifs de communication.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          <Separator className="my-12" />

          {/* RGPD Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <Shield className="h-8 w-8 text-blue-600 mr-3" />
              Protection des Données Personnelles (RGPD)
            </h2>

            {/* Données collectées */}
            <div className="mb-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <FileText className="h-5 w-5 text-orange-600" />
                    <span>Données Personnelles Collectées</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Dans le cadre de ce blog, nous collectons et traitons les données personnelles suivantes :
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-orange-800 mb-2">Photos</h4>
                      <p className="text-orange-700 text-sm">
                        Photos individuelles des étudiants pour le trombinoscope
                      </p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-800 mb-2">Identité</h4>
                      <p className="text-blue-700 text-sm">
                        Noms et prénoms des étudiants de la classe SIO1
                        L’adresse mail et le numéro de téléphone peuvent être présente dans les portfolio personnels des étudiants
                      </p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-800 mb-2">Liens</h4>
                      <p className="text-green-700 text-sm">
                        URL vers les portfolios étudiant contenant les liens vers leurs différents réseaux.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Mesures de conformité */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-blue-600" />
                    <span>Consentement et Finalité</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Consentement Explicite</h4>
                    <p className="text-gray-600 text-sm">
                      Tous les étudiants ont donné leur consentement écrit et éclairé pour la 
                      publication de leurs données personnelles sur ce blog pédagogique.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Finalité du Traitement</h4>
                    <p className="text-gray-600 text-sm">
                      Les données sont utilisées exclusivement dans un cadre pédagogique pour :
                    </p>
                    <ul className="list-disc list-inside text-gray-600 text-sm mt-2 space-y-1">
                      <li>Présentation de la classe BTS SIO1</li>
                      <li>Promotion des travaux étudiants</li>
                      <li>Création d'un lien avec le monde professionnel</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Lock className="h-5 w-5 text-orange-600" />
                    <span>Droits des Personnes</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700">
                    Conformément au RGPD, chaque étudiant dispose des droits suivants :
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <Eye className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <h5 className="font-medium text-gray-900">Droit d'accès</h5>
                        <p className="text-gray-600 text-sm">Consultation de ses données publiées</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Edit className="h-4 w-4 text-orange-600 mt-1 flex-shrink-0" />
                      <div>
                        <h5 className="font-medium text-gray-900">Droit de rectification</h5>
                        <p className="text-gray-600 text-sm">Modification des informations incorrectes</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Trash2 className="h-4 w-4 text-red-600 mt-1 flex-shrink-0" />
                      <div>
                        <h5 className="font-medium text-gray-900">Droit à l'effacement</h5>
                        <p className="text-gray-600 text-sm">Suppression de ses données du blog</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Contact pour exercer ses droits */}
          <div className="bg-gradient-to-br from-orange-50 to-blue-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              Exercer vos Droits RGPD
            </h3>
            <p className="text-gray-700 text-center mb-6 max-w-2xl mx-auto">
              Pour toute demande relative à vos données personnelles (accès, rectification, suppression), 
              contactez notre délégué à la protection des données.
            </p>
            
            <div className="text-center space-y-2">
              <p className="text-gray-900 font-semibold">Contact DPO ESICAD</p>
              <p className="text-gray-700">Email : dpo@esicad.fr</p>
              <p className="text-gray-700">Téléphone : 01 23 45 67 89</p>
              <p className="text-gray-600 text-sm mt-4">
                Délai de réponse : maximum 1 mois suivant la réception de votre demande
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Referentiels;
