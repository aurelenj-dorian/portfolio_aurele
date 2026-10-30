// Tout le contenu du site vit dans src/data : c'est ce que le futur backoffice remplacera.

export const profile = {
  name: 'NJEUHA AURELE DORIAN',
  nameLines: ['NJEUHA', 'AURELE', 'DORIAN'],
  role: 'Développeur · Système, réseau & cybersécurité',
  tagline:
    'Je développe des applications web, mobiles et desktop. Je me forme à les déployer, les administrer et les protéger.',
  availability: 'Ouvert aux opportunités',
  location: 'Douala, Cameroun',
  phone: '+237 693 713 944',
  phoneHref: 'tel:+237693713944',
  emails: ['aureledorian@gmail.com', 'aurelenj@gmail.com'],
  website: 'portfolio-aurele.vercel.app',
  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/aurele-njeuha-408162409/' },
    { label: 'GitHub', href: 'https://github.com/aurelenj-dorian' },
    { label: 'X', href: 'https://x.com/aureledorian?s=21' },
  ],
  stats: [
    { value: '6', label: 'Projets réalisés' },
    { value: '10+', label: 'Technologies pratiquées' },
  ],
  quote: "La sécurité n'est pas une étape de fin de projet. C'est une exigence à chaque ligne.",
  bio: [
    "Je suis titulaire du Diplôme d'Études Collégiales en Programmation et Applications Mobiles du CCNB Canada, suivi en délocalisation à l'Institut Universitaire de la Côte, à Douala. J'y ai appris à concevoir et à livrer des applications web, mobiles et desktop.",
    "Mon stage chez SOCAD'EL m'a mis face à un vrai besoin métier : une plateforme où le contrôle d'accès et la traçabilité comptaient autant que les fonctionnalités. C'est là que ma curiosité pour la sécurité est devenue un cap.",
    "Je prépare aujourd'hui un Bachelor en Administration Système, Réseau et Cybersécurité pour couvrir toute la chaîne : écrire le code, le déployer, le protéger. C'est le sens du mot DevSecOps sur ce site.",
  ],
  languages: [
    { label: 'Français', level: 'Natif' },
    { label: 'Anglais', level: 'Intermédiaire' },
  ],
}

export const timeline = [
  {
    period: 'En cours',
    title: 'Bachelor Administration Système, Réseau et Cybersécurité',
    place: 'Douala, Cameroun',
    text: "Le prolongement naturel du développement : administrer les systèmes, concevoir les réseaux et sécuriser l'ensemble.",
    current: true,
  },
  {
    period: 'Juin – juillet 2026',
    title: "Stage académique · SOCAD'EL",
    place: 'Site de Koumassi, Douala · Service HelpDesk, DISI',
    text: 'Conception et développement de la plateforme DUERP, et résolution de problèmes informatiques rencontrés par le personnel.',
    link: { to: '/projets/plateforme-duerp', label: "Voir l'étude de cas" },
  },
  {
    period: 'Octobre 2025 - septembre 2026',
    title: "Diplôme d'Études Collégiales en Programmation et Applications Mobiles",
    place: "CCNB Canada, délocalisé à l'Institut Universitaire de la Côte, Douala",
    text: 'Filière Technologies de l’Information : développement mobile, web et desktop, bases de données, systèmes d’information, réseaux.',
  },
  {
    period: 'Septembre 2024 - Juillet 2025',
    title: 'Baccalauréat ESG · Série C',
    place: 'Mathématiques et sciences physiques',
  },
  {
    period: 'Septembre 2020 - Juin 2021',
    title: "Brevet d'Études du Premier Cycle",
    place: 'Option allemand',
  },
]
