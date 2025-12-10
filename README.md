# Avertissement

Ce projet est entièrement vibecodé, c'est un exercice que je me suis imposé pour voir les points de limite et d'attention de l'IA.

Le site est visible ici : https://strava-recap-2025.matthieurenaut.com/


# Strava Recap 2025 🚴‍♂️

Une application web moderne pour générer votre récapitulatif annuel Strava à partir de votre archive de données personnelles.

## ✨ Fonctionnalités

- 📊 **Statistiques complètes** : Distance totale, temps, dénivelé, jours actifs
- 🎨 **Interface moderne** : Design élégant avec Shadcn/UI et Tailwind CSS
- 📱 **Export multi-formats** : Instagram Story, Instagram Post, Twitter/X
- 🔒 **100% privé** : Traitement local dans le navigateur, aucune donnée envoyée
- 🚲 **Filtrage intelligent** : Activités vélo uniquement pour l'année 2025

## 🚀 Démarrage rapide

### Installation

```bash
pnpm install
```

### Développement

```bash
pnpm dev
```

L'application sera accessible sur `http://localhost:5173`

### Build

```bash
pnpm build
```

## 📖 Comment utiliser

1. **Téléchargez votre archive Strava** :
   - Connectez-vous à Strava
   - Paramètres → Mon compte
   - "Télécharger ou supprimer votre compte"
   - Demandez votre archive de données
   - Téléchargez le fichier ZIP reçu par email

2. **Uploadez votre archive** :
   - Glissez-déposez le fichier ZIP sur la page
   - Ou cliquez pour sélectionner le fichier

3. **Consultez vos statistiques** :
   - L'application analyse automatiquement vos activités vélo de 2025
   - Visualisez vos statistiques dans une interface élégante

4. **Exportez et partagez** :
   - Choisissez le format d'image souhaité
   - Téléchargez et partagez sur vos réseaux sociaux

## 🛠️ Technologies utilisées

- **React 19** - Framework UI
- **TypeScript** - Typage statique
- **Vite** - Build tool ultra-rapide
- **Tailwind CSS** - Framework CSS utility-first
- **Shadcn/UI** - Composants UI modernes
- **JSZip** - Extraction d'archives ZIP
- **PapaParse** - Parsing CSV
- **html-to-image** - Export d'images
- **date-fns** - Manipulation de dates
- **Lucide React** - Icônes

## 📊 Statistiques calculées

- **Jours actifs** : Nombre de jours uniques avec au moins une activité
- **Distance totale** : Somme de toutes les distances parcourues
- **Temps total** : Temps cumulé de toutes les sorties
- **Dénivelé positif** : Dénivelé total grimpé
- **Vitesse moyenne** : Vitesse moyenne globale
- **Plus longue sortie** : Distance de votre plus grande sortie
- **Vélo préféré** : Le vélo que vous avez le plus utilisé

## 🔒 Confidentialité

Toutes les données sont traitées localement dans votre navigateur. Aucune information n'est envoyée à un serveur externe. Vos données Strava restent 100% privées.

## 📝 Structure du projet

```
src/
├── components/          # Composants React
│   ├── ui/             # Composants Shadcn/UI
│   ├── Landing.tsx     # Page d'accueil avec upload
│   ├── StatsDisplay.tsx # Affichage des statistiques
│   └── ImageExport.tsx # Export d'images
├── utils/              # Utilitaires
│   ├── dataParser.ts   # Parsing de l'archive
│   └── statsCalculator.ts # Calcul des statistiques
├── types/              # Types TypeScript
│   └── strava.ts       # Interfaces Strava
├── lib/                # Bibliothèques
│   └── utils.ts        # Utilitaires Shadcn
└── App.tsx             # Composant principal
```

## 🎨 Personnalisation

Les couleurs et le thème peuvent être modifiés dans :
- `src/index.css` - Variables CSS pour les couleurs
- `tailwind.config.js` - Configuration Tailwind

## 📄 Licence

MIT

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou une pull request.

---

Fait avec ❤️ pour les cyclistes qui n'ont pas d'abonnement Strava Premium
