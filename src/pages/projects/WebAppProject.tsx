import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const WebAppProject = () => {
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
                Application Web de Gestion
              </h1>
              <p className="text-primary text-lg mt-2">SAÉ - Semestre 4</p>
            </div>
          </div>
        </div>

        <Card className="p-8 bg-card border-border">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-3 text-primary">Description</h2>
              <p className="text-foreground leading-relaxed">
                Création d'une application web responsive pour la gestion de tâches collaboratives. Interface utilisateur moderne avec authentification et gestion des permissions.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3 text-primary">Contexte</h2>
              <p className="text-muted-foreground leading-relaxed">
                Projet de fin de semestre visant à mettre en pratique toutes les compétences acquises en développement web full-stack. L'application devait permettre à plusieurs utilisateurs de collaborer sur des projets avec différents niveaux d'accès.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3 text-primary">Apprentissages</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-primary text-xl mt-1">•</span>
                  <div>
                    <h3 className="font-semibold text-foreground">Développement front-end avec React et TypeScript</h3>
                    <p className="text-muted-foreground">Création de composants réutilisables et gestion d'état avec hooks modernes.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary text-xl mt-1">•</span>
                  <div>
                    <h3 className="font-semibold text-foreground">API REST avec Node.js et Express</h3>
                    <p className="text-muted-foreground">Conception et implémentation d'une API RESTful sécurisée.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary text-xl mt-1">•</span>
                  <div>
                    <h3 className="font-semibold text-foreground">Authentification JWT</h3>
                    <p className="text-muted-foreground">Mise en place d'un système d'authentification sécurisé avec tokens JWT.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary text-xl mt-1">•</span>
                  <div>
                    <h3 className="font-semibold text-foreground">Design responsive et UX</h3>
                    <p className="text-muted-foreground">Création d'une interface adaptative et intuitive pour tous les appareils.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3 text-primary">Technologies</h2>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                  React
                </Badge>
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                  TypeScript
                </Badge>
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                  Node.js
                </Badge>
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                  REST API
                </Badge>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default WebAppProject;
