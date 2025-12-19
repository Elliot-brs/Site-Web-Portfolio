import {Card} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Badge} from "@/components/ui/badge";
import {ArrowLeft, ExternalLink} from "lucide-react";
import {Link} from "react-router-dom";

const MeloKnightProject = () => {
    return (
        <div className="min-h-screen section-padding pt-32">
            <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
                <Link to="/projects">
                    <Button variant="ghost" className="gap-2 mb-4">
                        <ArrowLeft className="w-4 h-4"/>
                        Retour aux projets
                    </Button>
                </Link>

                <div className="space-y-4">
                    <div className="flex items-center gap-4">
                        <div className="w-2 h-16 bg-gradient-to-b from-primary to-accent"></div>
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold">
                                Jeu GameMaker : Melo Knight
                            </h1>
                            <p className="text-primary text-lg mt-2">Code Game Jam - Janvier 2025</p>

                            {/* Lien (ajout ligne 42 environ) */}
                            <a
                                href="https://oxirus.itch.io/melo-knight"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 mt-3 text-muted-foreground hover:text-primary transition-colors"
                            >
                                Voir le jeu <ExternalLink className="w-4 h-4"/>
                            </a>
                        </div>
                    </div>
                </div>

                <Card className="p-8 bg-card border-border">
                    <div className="space-y-6">
                        <div>
                            <h2 className="text-2xl font-bold mb-3 text-primary">Description</h2>
                            <p className="text-foreground leading-relaxed">
                                Développement d'un jeu de plateforme sur GameMaker lors de la Code Game Jam. Le joueur
                                doit appuyer sur les bonnes notes au bon moment pour pas heurter les Juke-box. Toujours
                                disponible sur itch.io (lien plus haut).
                            </p>

                            <div className="mt-6">
                                <img
                                    src="/CaptureMeloKnight.png"
                                    alt="Capture d'écran de Melo Knight"
                                    className="w-full rounded-lg border border-border"
                                    loading="lazy"
                                />
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold mb-3 text-primary">Contexte</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Événement de 30h où nous devions créer un jeu complet sur le thème 'Mélodie à
                                l'infinie'. Projet réalisé en groupe avec utilisation de GameMaker. Ce défi intensif
                                nous a poussés à prioriser les fonctionnalités et à livrer un produit jouable dans un
                                temps limité.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold mb-3 text-primary">Apprentissages</h2>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <span className="text-primary text-xl mt-1">•</span>
                                    <div>
                                        <h3 className="font-semibold text-foreground">Programmation en GML</h3>
                                        <p className="text-muted-foreground">Programmation simple pour les entités du
                                            jeu (joueur, Juke-box).</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-primary text-xl mt-1">•</span>
                                    <div>
                                        <h3 className="font-semibold text-foreground">Gestion d'événements</h3>
                                        <p className="text-muted-foreground">Gestion des inputs utilisateur en temps
                                            réel et les différentes interactions entre les objets.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-primary text-xl mt-1">•</span>
                                    <div>
                                        <h3 className="font-semibold text-foreground">Gestion du temps et des
                                            priorités</h3>
                                        <p className="text-muted-foreground">Apprentissage crucial sur la priorisation
                                            des fonctionnalités dans un contexte de temps limité.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold mb-3 text-primary">Technologies</h2>
                            <div className="flex flex-wrap gap-2">
                                <Badge variant="secondary"
                                       className="bg-primary/10 text-primary border-primary/20">GameMaker</Badge>
                                <Badge variant="secondary"
                                       className="bg-primary/10 text-primary border-primary/20">GML</Badge>
                                <Badge variant="secondary"
                                       className="bg-primary/10 text-primary border-primary/20">Itch.io</Badge>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default MeloKnightProject;