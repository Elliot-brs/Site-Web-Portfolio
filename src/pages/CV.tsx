import {Button} from "@/components/ui/button";
import {Card} from "@/components/ui/card";
import {Download, Github, Linkedin, Mail} from "lucide-react";

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
                        <a href="/CV_2025-12-19_Elliot_Brossard.pdf" download className="inline-flex">
                            <Button variant="tech" size="lg" className="gap-2">
                                <Download className="w-5 h-5"/>
                                Télécharger PDF
                            </Button>
                        </a>
                    </div>
                </Card>

                {/* Social Links */}
                <div>
                    <h2 className="text-2xl font-semibold mb-6">Me contacter</h2>
                    <div className="grid md:grid-cols-3 gap-4">
                        <a
                            href="https://github.com/Elliot-brs"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block"
                        >
                            <Card className="p-6 bg-card border-border card-hover group">
                                <div className="flex flex-col items-center text-center gap-3">
                                    <Github
                                        className="w-8 h-8 text-primary group-hover:scale-110 transition-transform"/>
                                    <div>
                                        <p className="font-semibold">GitHub</p>
                                        <p className="text-sm text-muted-foreground">Voir mes projets</p>
                                    </div>
                                </div>
                            </Card>
                        </a>

                        <a
                            href="https://www.linkedin.com/in/elliot-brossard-6a654b347"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block"
                        >
                            <Card className="p-6 bg-card border-border card-hover group">
                                <div className="flex flex-col items-center text-center gap-3">
                                    <Linkedin
                                        className="w-8 h-8 text-primary group-hover:scale-110 transition-transform"/>
                                    <div>
                                        <p className="font-semibold">LinkedIn</p>
                                        <p className="text-sm text-muted-foreground">Mon réseau professionnel</p>
                                    </div>
                                </div>
                            </Card>
                        </a>

                        <a
                            href="mailto:elliot.brossard@etu.umontpellier.fr"
                            className="block"
                        >
                            <Card className="p-6 bg-card border-border card-hover group">
                                <div className="flex flex-col items-center text-center gap-3">
                                    <Mail className="w-8 h-8 text-primary group-hover:scale-110 transition-transform"/>
                                    <div>
                                        <p className="font-semibold">Email</p>
                                        <p className="text-sm text-muted-foreground">Me contacter directement</p>
                                    </div>
                                </div>
                            </Card>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CV;
