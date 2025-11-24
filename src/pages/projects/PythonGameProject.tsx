import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const PythonGameProject = () => {
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
                Jeu Python
              </h1>
              <p className="text-primary text-lg mt-2">Code Game Jam - Novembre 2024</p>
            </div>
          </div>
        </div>

        <Card className="p-8 bg-card border-border">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-3 text-primary">Description</h2>
              <p className="text-foreground leading-relaxed">
                Développement d'un jeu de plateforme en Python lors du Code Game Jam. Le joueur doit naviguer à travers différents niveaux en évitant des obstacles et en collectant des objets.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3 text-primary">Contexte</h2>
              <p className="text-muted-foreground leading-relaxed">
                Événement de 48h où nous devions créer un jeu complet sur le thème 'Voyages dans le temps'. Projet réalisé en binôme avec utilisation de Pygame. Ce défi intensif nous a poussés à prioriser les fonctionnalités et à livrer un produit jouable dans un temps limité.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3 text-primary">Apprentissages</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-primary text-xl mt-1">•</span>
                  <div>
                    <h3 className="font-semibold text-foreground">Programmation orientée objet en Python</h3>
                    <p className="text-muted-foreground">Structuration du code avec des classes pour les entités du jeu (joueur, ennemis, obstacles).</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary text-xl mt-1">•</span>
                  <div>
                    <h3 className="font-semibold text-foreground">Gestion d'événements et boucle de jeu</h3>
                    <p className="text-muted-foreground">Implémentation de la game loop et gestion des inputs utilisateur en temps réel.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary text-xl mt-1">•</span>
                  <div>
                    <h3 className="font-semibold text-foreground">Design patterns (MVC, Observer)</h3>
                    <p className="text-muted-foreground">Application de patterns pour maintenir un code organisé et maintenable.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary text-xl mt-1">•</span>
                  <div>
                    <h3 className="font-semibold text-foreground">Gestion du temps et des priorités</h3>
                    <p className="text-muted-foreground">Apprentissage crucial sur la priorisation des fonctionnalités dans un contexte de temps limité.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3 text-primary">Technologies</h2>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                  Python
                </Badge>
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                  Pygame
                </Badge>
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                  POO
                </Badge>
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                  Game Dev
                </Badge>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default PythonGameProject;
