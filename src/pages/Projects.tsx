import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Projects = () => {
  const projects = [
    {
      title: "Gestion de Base de Données",
      period: "SAÉ - Semestre 3",
      description:
        "Projet de conception et implémentation d'une base de données relationnelle pour gérer un système de bibliothèque universitaire.",
      link: "/projects/database",
      tags: ["SQL", "PostgreSQL", "Merise"],
    },
    {
      title: "Jeu Python",
      period: "Code Game Jam - Novembre 2024",
      description:
        "Développement d'un jeu de plateforme en Python lors du Code Game Jam sur le thème 'Voyages dans le temps'.",
      link: "/projects/python-game",
      tags: ["Python", "Pygame", "POO"],
    },
    {
      title: "Application Web de Gestion",
      period: "SAÉ - Semestre 4",
      description:
        "Création d'une application web responsive pour la gestion de tâches collaboratives avec authentification.",
      link: "/projects/web-app",
      tags: ["React", "TypeScript", "Node.js"],
    },
  ];

  return (
    <div className="min-h-screen section-padding pt-32">
      <div className="max-w-6xl mx-auto space-y-12 animate-fade-in">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">
            Mes <span className="text-gradient">Projets</span>
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Découvrez mes réalisations en informatique, des projets académiques aux événements 
            comme le Code Game Jam.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="p-6 bg-card border-border card-hover group"
            >
              <div className="space-y-4">
                <div>
                  <h2 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h2>
                  <p className="text-primary text-sm">{project.period}</p>
                </div>

                <p className="text-muted-foreground leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded-md bg-primary/10 text-primary border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link to={project.link}>
                  <Button variant="ghost" className="w-full gap-2 group-hover:bg-primary/10">
                    Voir le projet
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
