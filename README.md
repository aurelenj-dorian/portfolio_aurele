# Portfolio — NJEUHA AURELE DORIAN

Site multipage en React (Vite + React Router).

## Lancer le projet

```bash
npm install
npm run dev
```

## Vérifier la version de production

```bash
npm run build
npm run preview
```

`npm run preview` applique les mêmes en-têtes de sécurité que la production (ils sont lus dans `vercel.json`).

## Modifier le contenu

Tout le texte est dans `src/data/`, sans toucher aux composants :

| Fichier | Contenu |
| --- | --- |
| `profile.js` | Identité, contacts, biographie, chiffres clés, parcours |
| `projects.js` | Projets et études de cas |
| `skills.js` | Compétences, outils, méthode |

Ce découpage prépare le futur backoffice : il remplacera ces fichiers par une API.

## Déploiement

Vercel détecte Vite automatiquement. `vercel.json` gère les routes de l'application et les en-têtes de sécurité.

Le formulaire de contact ouvre la messagerie du visiteur. Un envoi direct demandera le backoffice, et il faudra alors assouplir `form-action` et `connect-src` dans la CSP.
