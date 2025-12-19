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
                Application Web de vote participatif
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
                Création d'une application web responsive pour la gestion de votes collaboratifs. Interface utilisateur moderne avec authentification et gestion des permissions.
              </p>

              <div className="mt-6">
                <img
                  src="/CaptureSiteWeb.png"
                  alt="Capture d'écran de l'application web de vote participatif"
                  className="w-full rounded-lg border border-border"
                  loading="lazy"
                />
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3 text-primary">Contexte</h2>
              <p className="text-muted-foreground leading-relaxed">
                Projet de fin de semestre visant à mettre en pratique toutes les compétences acquises en développement web full-stack. L'application devait permettre à plusieurs utilisateurs de voter pour des propositions avec différents niveaux d'accès.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3 text-primary">Apprentissages</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-primary text-xl mt-1">•</span>
                  <div>
                    <h3 className="font-semibold text-foreground">Développement front-end</h3>
                    <p className="text-muted-foreground">Gestion du CSS et du responsive avec Bulma.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary text-xl mt-1">•</span>
                  <div>
                    <h3 className="font-semibold text-foreground">Mise en place d'une architecture PHP</h3>
                    <p className="text-muted-foreground">Codé sans framework, nous nous sommes basé sur une architecture MVC.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3 text-primary">Technologies</h2>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                  PHP
                </Badge>
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                  HTML
                </Badge>
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                  CSS
                </Badge>
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                  Bulma
                </Badge>
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                  MVC
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