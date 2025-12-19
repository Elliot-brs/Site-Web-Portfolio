import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const DatabaseProject = () => {
  return (
    <div className="min-h-screen section-padding pt-32">
      <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
        <Link to="/projects">
          <Button variant="ghost" className="gap-2 mb-4">
            <ArrowLeft className="w-4 h-4" />
            Retour aux projets
          </Button>
        </Link>

        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="w-2 h-16 bg-gradient-to-b from-primary to-accent"></div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold">
                Création d'un jeu du 421 en Java
              </h1>
              <p className="text-primary text-lg mt-2">SAÉ - Semestre 1</p>
            </div>
          </div>
        </div>

        <Card className="p-8 bg-card border-border">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-3 text-primary">Description</h2>
              <p className="text-foreground leading-relaxed">
                Projet de conception et implémentation d'un jeu du 421. Réalisation du modèle conceptuel, logique et affichage. Le jeu n'avais pas d'interface graphique, les interaction se faisaient à travers le terminale.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3 text-primary">Contexte</h2>
              <p className="text-muted-foreground leading-relaxed">
                Dans le cadre de la SAÉ du semestre 1, nous avons développé à deux ce jeu en programmation objet. Ce projet nous a permis de mettre en pratique les concepts de POO et la colaboration avec git.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3 text-primary">Apprentissages</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-primary text-xl mt-1">•</span>
                  <div>
                    <h3 className="font-semibold text-foreground">Organisation en classes</h3>
                    <p className="text-muted-foreground">Programmation objet avec gestion des différents classes et boucle de jeu.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary text-xl mt-1">•</span>
                  <div>
                    <h3 className="font-semibold text-foreground">Java</h3>
                    <p className="text-muted-foreground">Familiarisation avec la syntaxe Java.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary text-xl mt-1">•</span>
                  <div>
                    <h3 className="font-semibold text-foreground">Travail collaboratif avec Git</h3>
                    <p className="text-muted-foreground">Utilisation de Git pour la gestion de version et la collaboration en équipe.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3 text-primary">Technologies</h2>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                  SQL
                </Badge>
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                  PostgreSQL
                </Badge>
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                  Merise
                </Badge>
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                  Git
                </Badge>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default DatabaseProject;
