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
                Gestion de Base de Données
              </h1>
              <p className="text-primary text-lg mt-2">SAÉ - Semestre 3</p>
            </div>
          </div>
        </div>

        <Card className="p-8 bg-card border-border">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-3 text-primary">Description</h2>
              <p className="text-foreground leading-relaxed">
                Projet de conception et implémentation d'une base de données relationnelle pour gérer un système de bibliothèque universitaire. Réalisation du modèle conceptuel, logique et physique.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3 text-primary">Contexte</h2>
              <p className="text-muted-foreground leading-relaxed">
                Dans le cadre de la SAÉ du semestre 3, notre équipe de 4 étudiants a développé une solution complète de gestion de bibliothèque. Ce projet nous a permis de mettre en pratique les concepts de modélisation de données et de requêtes SQL avancées.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3 text-primary">Apprentissages</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-primary text-xl mt-1">•</span>
                  <div>
                    <h3 className="font-semibold text-foreground">Maîtrise de SQL et des requêtes complexes</h3>
                    <p className="text-muted-foreground">Développement de requêtes avancées avec jointures, sous-requêtes et agrégations.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary text-xl mt-1">•</span>
                  <div>
                    <h3 className="font-semibold text-foreground">Conception de schémas de bases de données normalisées</h3>
                    <p className="text-muted-foreground">Application des formes normales pour éviter la redondance et garantir l'intégrité des données.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary text-xl mt-1">•</span>
                  <div>
                    <h3 className="font-semibold text-foreground">Optimisation des performances avec les index</h3>
                    <p className="text-muted-foreground">Mise en place d'index stratégiques pour améliorer les temps de réponse des requêtes.</p>
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
