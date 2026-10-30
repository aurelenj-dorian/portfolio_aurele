import duerp from '../assets/projet-duerp.webp'
import camalert from '../assets/projet-camalert.webp'
import survivor from '../assets/projet-survivor.webp'

export const projectTypes = ['Tous', 'Web', 'Desktop', 'Jeu']

export const projects = [
  {
    slug: 'plateforme-duerp',
    title: 'Plateforme DUERP',
    kicker: "Stage · SOCAD'EL",
    type: 'Web',
    year: '2026',
    featured: true,
    cover: { src: duerp, width: 1600, height: 1000, alt: "Page d'accueil de la plateforme DUERP SOCAD'EL" },
    summary:
      "Représentation géo-synoptique du Document Unique d'Évaluation des Risques Professionnels pour les cinq sites de la Société Camerounaise d'Électricité.",
    context:
      "Le DUERP de SOCAD'EL était tenu sur des classeurs Excel isolés, site par site : aucune vue consolidée, aucune géolocalisation des risques, des indicateurs de sécurité recalculés à la main et des plans d'action suivis sans traçabilité.",
    delivered: [
      'Carte interactive Leaflet et OpenStreetMap : chaque site prend la couleur de sa priorité la plus critique.',
      'Tableau de bord synoptique A.R.I.S. : Action, Risques, Indicateurs, Socio-sanitaire.',
      "Cotation des risques selon la méthode INRS, avec calcul automatique de la criticité côté SQL Server.",
      "Cycle complet : évaluation, plan d'action, réévaluation, archivage.",
      'Génération du DUERP en PDF et en Excel, au niveau du site ou de la région.',
    ],
    security: [
      'Authentification par session et mots de passe hachés',
      'Écrans et actions filtrés selon le rôle',
      'Protection CSRF et validation des entrées',
      "Journal d'activité pour la traçabilité",
    ],
    figures: [
      { value: '5', label: 'Sites couverts au Cameroun' },
      { value: '25', label: 'Familles de risques' },
      { value: '4', label: 'Rôles utilisateurs' },
      { value: '2', label: "Formats d'export : PDF et Excel" },
    ],
    method:
      'Démarche itérative et incrémentale, modélisation UML : chaque module a été développé, testé puis corrigé avant le suivant. Perspectives identifiées : authentification centralisée (SSO), automatisation des alertes, extension mobile.',
    stack: ['ASP.NET MVC 5', 'C#', 'Entity Framework 6', 'SQL Server', 'Leaflet', 'Bootstrap 5'],
    links: [{ label: 'Voir la plateforme', href: 'https://duerp.bsite.net/' }],
  },
  {
    slug: 'cam-alert',
    title: 'CAM-ALERT',
    kicker: 'Application web',
    type: 'Web',
    featured: true,
    cover: { src: camalert, width: 1600, height: 1000, alt: "Page d'accueil du portail CAM-ALERT" },
    summary: "Plateforme fictive de signalement de personnes disparues et d'avis de recherche.",
    context:
      "Un portail pensé comme un service public : consulter les dossiers, suivre les avis de recherche et transmettre une information. Le site est entièrement fictif et aucune donnée présentée n'est réelle.",
    delivered: [
      'Consultation des dossiers de personnes disparues et recherchées.',
      "Formulaire de transmission d'informations.",
      'Espace de connexion.',
    ],
    stack: ['ASP.NET WebForms', 'C#', 'SQL Server'],
    links: [{ label: 'Voir CAM-ALERT', href: 'https://aurele.bsite.net/' }],
  },
  {
    slug: 'survivor-shooter-3d',
    title: 'Survivor Shooter 3D',
    kicker: 'Jeu de tir à la première personne',
    type: 'Jeu',
    featured: true,
    cover: { src: survivor, width: 1534, height: 539, alt: 'Écran titre du jeu SurvivorShooter3D', fit: 'contain' },
    summary: 'Un FPS en 3D jouable directement dans le navigateur.',
    context:
      "Dans le cours de Développement d'Applications Informatiques, le sujet était libre : développer une application ou un programme dans le langage de notre choix. J'ai choisi la difficulté d'un jeu 3D complet.",
    delivered: ['Jeu de tir à la première personne en 3D.', 'Version WebGL publiée en ligne, jouable sans installation.'],
    stack: ['C#', 'Unity', 'WebGL'],
    links: [{ label: 'Lancer le jeu', href: 'https://survivor-shooter3d.vercel.app/' }],
  },
  {
    slug: 'reconnaissance-faciale',
    title: 'Reconnaissance faciale',
    kicker: 'Application desktop',
    type: 'Desktop',
    cover: { art: 'face' },
    summary: "Application de reconnaissance faciale du corps administratif d'une structure.",
    context:
      "Réalisée dans le cadre du cours de Programmation Multicouche : l'enjeu était autant la fonctionnalité que l'architecture du logiciel, séparée en couches.",
    delivered: [
      'Reconnaissance du personnel administratif.',
      'Architecture logicielle multicouche en C#.',
      'Persistance des données dans MySQL.',
    ],
    stack: ['C#', 'Architecture multicouche', 'MySQL', 'UX Design'],
  },
  {
    slug: 'caisse-enregistreuse',
    title: 'Caisse de vente',
    kicker: 'Application desktop',
    type: 'Desktop',
    cover: { art: 'receipt' },
    summary: 'Caisse enregistreuse à menus prédéfinis, avec QR code en fin de facture.',
    context:
      "L'objectif : concevoir une caisse enregistreuse complète, de la sélection dans des menus prédéfinis jusqu'à la facture finale portant un QR code.",
    delivered: ['Sélection des articles dans des menus prédéfinis.', 'Édition de la facture.', 'QR code généré en fin de facture.'],
    stack: ['C#', 'Firebase', 'UI Design'],
  },
  {
    slug: 'candy-crush',
    title: 'Candy Crush 2D',
    kicker: 'Jeu desktop',
    type: 'Jeu',
    cover: { art: 'match3' },
    summary: 'Un jeu de type match-3 en 2D, développé en C#.',
    context: 'Dans le cadre du cours de C# Avancé, il fallait réaliser un jeu de notre choix.',
    delivered: ['Jeu 2D de type match-3.', 'Interface pensée pour le jeu.', 'Persistance des données dans MySQL.'],
    stack: ['C#', 'MySQL', 'UX Design'],
  },
]
