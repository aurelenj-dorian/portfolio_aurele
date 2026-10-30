export const skillDomains = [
  {
    code: 'MOB',
    title: 'Développement mobile',
    items: ['Flutter / Dart', 'React Native', 'Java / Android', 'SwiftUI et UIKit'],
  },
  {
    code: 'WEB',
    title: 'Développement web',
    items: ['ASP.NET Core, MVC, WebForms', 'HTML, CSS, JavaScript', 'React', 'PHP / AJAX'],
  },
  {
    code: 'SYS',
    title: 'Système, réseau et sécurité',
    note: 'Bachelor en cours',
    items: ['VMware', 'Debian', 'GNS3', 'Cisco Packet Tracer', 'Docker'],
  },
  {
    code: 'DAT',
    title: 'Données',
    items: ['SQL Server', 'MySQL', 'PostgreSQL', 'Firebase'],
  },
  {
    code: 'LNG',
    title: 'Langages',
    items: ['C#', 'Python', 'Java', 'Dart', 'JavaScript'],
  },
  {
    code: 'DES',
    title: 'Conception',
    items: ['UI / UX Design', 'Modélisation UML', 'Algorithmique', 'Modélisation 3D (bases)'],
  },
]

export const tools = [
  'Visual Studio',
  'Visual Studio Code',
  'Android Studio',
  'Apache NetBeans',
  'PyCharm',
  'Code::Blocks',
  'GitHub',
  'Postman',
  'Navicat',
  'Unity',
  'WordPress',
  'Photoshop',
]

export const foundations = [
  "Systèmes d'information I et II",
  'Mathématiques',
  'Droit',
  'Économie',
  'Rédaction professionnelle',
  'QHSE',
]

export const pipeline = [
  { step: 'plan', title: 'Planifier', text: 'Comprendre le besoin, cadrer le périmètre.', gate: 'Identifier les risques' },
  { step: 'code', title: 'Coder', text: 'Une architecture lisible, des modules testables.', gate: 'Valider les entrées' },
  { step: 'build', title: 'Construire', text: 'Un build reproductible à chaque changement.', gate: 'Auditer les dépendances' },
  { step: 'test', title: 'Tester', text: 'Vérifier chaque scénario, chaque rôle.', gate: 'Contrôler les accès' },
  { step: 'deploy', title: 'Déployer', text: 'Mettre en ligne sans surprise.', gate: 'Durcir la configuration' },
  { step: 'monitor', title: 'Surveiller', text: 'Observer, apprendre, améliorer.', gate: 'Journaliser et tracer' },
]
