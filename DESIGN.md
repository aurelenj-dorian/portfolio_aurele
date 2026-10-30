# Design

## Idée

DEVSECOPS a neuf lettres, comme PORTFOLIO sur les modèles d'inspiration. Le mot occupe toute la largeur, le sujet se tient devant, et SEC est redessiné en contour blanc par-dessus lui : la sécurité passe par la personne.

Règles absolues :

- Le contour ne croise jamais le visage : le mot commence sous le menton.
- Aucun texte ne passe sur le mot : le contenu du héros démarre sous lui, quelle que soit la taille de la fenêtre.
- Le mot n'apparaît jamais dans une police de secours : il attend la sienne, et le portrait attend d'être complet. Tester sur connexion lente, pas seulement en local.

## Style

Affiche, rapport technique : très grand titre condensé, annotations en mono, filets fins, angles droits. La couleur d'accent porte l'emphase, et elle sert aussi à signaler ce qui est validé.

- Pas d'esthétique « terminal de hacker », pas de vert sur noir.
- Pas de barres de pourcentage pour les compétences.
- Pas d'emoji : icônes Lucide uniquement.
- Aucun chiffre ni titre sans source réelle.

## Couleurs

Définies dans `src/styles/tokens.css`. Utiliser les variables, jamais une couleur en dur.

| Thème | Principale | Secondaire |
| --- | --- | --- |
| Sombre (par défaut) | Noir | Rouge |
| Clair | Blanc | Bleu |

`--accent-ink` est réservé au texte d'accent, `--accent` aux aplats. En thème clair, le bleu des lettres reste vif pour détacher le costume bleu marine du portrait.

## Typographie

| Rôle | Police |
| --- | --- |
| Titres, chiffres | Sofia Sans Extra Condensed, 800 à 900, en capitales |
| Texte courant | Instrument Sans |
| Annotations, boutons, navigation | IBM Plex Mono |

Les polices sont auto-hébergées. Une nouvelle police doit passer par `@fontsource`.

## Mouvement

Une sortie courte et une entrée amortie (`--ease-out`), transitions de page natives (View Transitions), apparitions au défilement. Tout est neutralisé par `prefers-reduced-motion`.

## Sécurité du front

La CSP interdit les scripts et styles inline ainsi que les ressources externes. Pas de `<style>` ni de `<script>` dans le HTML, pas de CDN. Vérifier avec `npm run preview`, qui sert les en-têtes de production.
