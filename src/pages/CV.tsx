import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, Github, Linkedin, Mail } from "lucide-react";

const CV = () => {
  return (
    <div className="min-h-screen section-padding pt-32">
      <div className="max-w-4xl mx-auto space-y-12 animate-fade-in">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">
            Curriculum <span className="text-gradient">Vitae</span>
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
        </div>

        {/* Download CV */}
        <Card className="p-8 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-semibold mb-2">Télécharger mon CV</h2>
              <p className="text-muted-foreground">
                Version PDF actualisée - Dernière mise à jour: {new Date().toLocaleDateString('fr-FR')}
              </p>
            </div>
            <Button variant="tech" size="lg" className="gap-2">
              <Download className="w-5 h-5" />
              Télécharger PDF
            </Button>
          </div>
        </Card>

        {/* Social Links */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Me contacter</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Card className="p-6 bg-card border-border card-hover group">
                <div className="flex flex-col items-center text-center gap-3">
                  <Github className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="font-semibold">GitHub</p>
                    <p className="text-sm text-muted-foreground">Voir mes projets</p>
                  </div>
                </div>
              </Card>
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Card className="p-6 bg-card border-border card-hover group">
                <div className="flex flex-col items-center text-center gap-3">
                  <Linkedin className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="font-semibold">LinkedIn</p>
                    <p className="text-sm text-muted-foreground">Mon réseau professionnel</p>
                  </div>
                </div>
              </Card>
            </a>

            <a
              href="mailto:contact@example.com"
              className="block"
            >
              <Card className="p-6 bg-card border-border card-hover group">
                <div className="flex flex-col items-center text-center gap-3">
                  <Mail className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-sm text-muted-foreground">Me contacter directement</p>
                  </div>
                </div>
              </Card>
            </a>
          </div>
        </div>

        {/* Skills Overview */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Compétences techniques</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 bg-card border-border">
              <h3 className="text-lg font-semibold mb-4 text-primary">Langages & Frameworks</h3>
              <div className="flex flex-wrap gap-2">
                {["HTML/CSS", "JavaScript", "TypeScript", "React", "Java", "Python", "SQL"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm border border-primary/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>

            <Card className="p-6 bg-card border-border">
              <h3 className="text-lg font-semibold mb-4 text-primary">Outils & Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {["Git", "GitHub", "VS Code", "MySQL", "PostgreSQL", "Node.js", "Figma"].map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm border border-primary/20"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </Card>
          </div>
        </div>

        {/* Experience */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Formation & Expériences</h2>
          <div className="space-y-4">
            <Card className="p-6 bg-card border-border">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-lg font-semibold">BUT Informatique</h3>
                    <span className="text-sm text-muted-foreground">2023 - 2026</span>
                  </div>
                  <p className="text-primary text-sm mb-2">IUT Montpellier-Sète</p>
                  <p className="text-muted-foreground text-sm">
                    Formation en développement d'applications, gestion de bases de données, 
                    programmation orientée objet et travail en équipe sur des projets réels.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CV;
