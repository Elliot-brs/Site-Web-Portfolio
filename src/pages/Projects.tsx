import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Gestion de Base de Données - SAÉ",
      period: "Semestre 3",
      description:
        "Projet de conception et implémentation d'une base de données relationnelle pour gérer un système de bibliothèque universitaire. Réalisation du modèle conceptuel, logique et physique.",
      context:
        "Dans le cadre de la SAÉ du semestre 3, notre équipe de 4 étudiants a développé une solution complète de gestion de bibliothèque.",
      learnings: [
        "Maîtrise de SQL et des requêtes complexes",
        "Conception de schémas de bases de données normalisées",
        "Optimisation des performances avec les index",
        "Travail collaboratif avec Git",
      ],
      tags: ["SQL", "PostgreSQL", "Merise", "Git"],
    },
    {
      title: "Jeu Python - Code Game Jam",
      period: "Novembre 2024",
      description:
        "Développement d'un jeu de plateforme en Python lors du Code Game Jam. Le joueur doit naviguer à travers différents niveaux en évitant des obstacles et en collectant des objets.",
      context:
        "Événement de 48h où nous devions créer un jeu complet sur le thème 'Voyages dans le temps'. Projet réalisé en binôme avec utilisation de Pygame.",
      learnings: [
        "Programmation orientée objet en Python",
        "Gestion d'événements et boucle de jeu",
        "Design patterns (MVC, Observer)",
        "Gestion du temps et des priorités",
      ],
      tags: ["Python", "Pygame", "POO", "Game Dev"],
    },
    {
      title: "Application Web de Gestion - SAÉ",
      period: "Semestre 4",
      description:
        "Création d'une application web responsive pour la gestion de tâches collaboratives. Interface utilisateur moderne avec authentification et gestion des permissions.",
      context:
        "Projet de fin de semestre visant à mettre en pratique toutes les compétences acquises en développement web full-stack.",
      learnings: [
        "Développement front-end avec React et TypeScript",
        "API REST avec Node.js et Express",
        "Authentification JWT",
        "Design responsive et UX",
      ],
      tags: ["React", "TypeScript", "Node.js", "REST API"],
    },
    {
      title: "Site Web - Nuit de l'Info",
      period: "Décembre 2024",
      description:
        "Participation à la Nuit de l'Info avec création d'un site web sensibilisant aux enjeux environnementaux. Design créatif et interactif réalisé en une nuit.",
      context:
        "Hackathon national de 12h où les équipes développent un site web sur un thème donné. Notre équipe de 6 personnes a relevé le défi avec succès.",
      learnings: [
        "Gestion de projet en mode agile",
        "Créativité sous contrainte de temps",
        "Animations CSS et JavaScript",
        "Travail d'équipe intensif",
      ],
      tags: ["HTML", "CSS", "JavaScript", "Animations"],
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
            comme le Code Game Jam et la Nuit de l'Info.
          </p>
        </div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="p-8 bg-card border-border card-hover"
            >
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                    <p className="text-primary text-sm">{project.period}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="gap-2">
                      <Github className="w-4 h-4" />
                      Code
                    </Button>
                    <Button variant="outline" size="sm" className="gap-2">
                      <ExternalLink className="w-4 h-4" />
                      Démo
                    </Button>
                  </div>
                </div>

                <p className="text-foreground leading-relaxed">{project.description}</p>

                <div>
                  <h3 className="text-lg font-semibold mb-2 text-primary">Contexte</h3>
                  <p className="text-muted-foreground">{project.context}</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-primary">Apprentissages</h3>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {project.learnings.map((learning, i) => (
                      <li key={i} className="flex items-start gap-2 text-muted-foreground">
                        <span className="text-primary mt-1">•</span>
                        <span>{learning}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="bg-primary/10 text-primary border-primary/20"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
