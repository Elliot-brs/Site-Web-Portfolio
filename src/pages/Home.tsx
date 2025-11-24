import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Code, Database, Globe, Rocket } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  const skills = [
    { icon: <Code className="w-6 h-6" />, label: "Développement Web" },
    { icon: <Database className="w-6 h-6" />, label: "Bases de données" },
    { icon: <Globe className="w-6 h-6" />, label: "POO" },
    { icon: <Rocket className="w-6 h-6" />, label: "Gestion de projets" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Étudiant en{" "}
                <span className="text-gradient">BUT Informatique</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Actuellement étudiant en deuxième année de BUT Informatique à l'IUT de Montpellier-Sète, 
                je me passionne pour le développement web et la programmation orientée objet. 
                Au cours de mes semestres, j'ai participé à plusieurs projets pratiques, tels que la 
                réalisation de SAÉ sur la gestion de bases de données et la création de jeux lors du 
                Code Game Jam. Ces expériences m'ont permis de développer mes compétences en travail 
                collaboratif, en résolution de problèmes et en gestion de projets informatiques.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/projects">
                  <Button variant="tech" size="lg">
                    Voir mes projets
                  </Button>
                </Link>
                <Link to="/cv">
                  <Button variant="outline" size="lg">
                    Télécharger mon CV
                  </Button>
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 animate-slide-in">
              {skills.map((skill, index) => (
                <Card
                  key={index}
                  className="p-6 bg-card hover:bg-card/80 border-border card-hover group"
                >
                  <div className="flex flex-col items-center text-center gap-3">
                    <div className="text-primary group-hover:scale-110 transition-transform">
                      {skill.icon}
                    </div>
                    <p className="font-medium">{skill.label}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-card/30">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold">À propos de moi</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6 bg-card border-border">
              <h3 className="text-xl font-semibold mb-4 text-primary">Parcours de formation</h3>
              <div className="space-y-3 text-muted-foreground">
                <p>• BUT Informatique - IUT Montpellier-Sète (2023-2026)</p>
                <p>• Spécialisation en développement web</p>
                <p>• Participation active aux projets SAÉ</p>
                <p>• Événements: Code Game Jam, Nuit de l'info</p>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border">
              <h3 className="text-xl font-semibold mb-4 text-primary">Centres d'intérêt</h3>
              <div className="space-y-3 text-muted-foreground">
                <p>• Développement d'applications web modernes</p>
                <p>• Participation à des hackathons</p>
                <p>• Veille technologique</p>
                <p>• Open source et collaboration</p>
              </div>
            </Card>
          </div>

          <Card className="p-8 bg-gradient-to-br from-card to-card/50 border-primary/20">
            <h3 className="text-2xl font-semibold mb-4 text-center">Vision pour le futur</h3>
            <p className="text-muted-foreground text-center leading-relaxed">
              Après l'obtention de mon BUT, je souhaite me spécialiser dans le développement 
              full-stack et contribuer à des projets innovants. Mon objectif est d'intégrer 
              une entreprise dynamique où je pourrai continuer à apprendre et à relever de 
              nouveaux défis techniques tout en développant mes compétences en architecture 
              logicielle et en méthodologies agiles.
            </p>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Home;
