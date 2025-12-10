# Changelog

## [2025-12-10] - Mise en évidence du nombre de sorties

### ✨ Ajouté

- **Carte mise en évidence** pour le nombre de sorties
  - Grande carte orange au centre avec dégradé
  - Bordure orange avec effet de brillance
  - Texte en 7xl pour une meilleure visibilité
  - Positionnée entre le header et les autres stats

### 🔧 Modifié

- Réduction de la taille des autres statistiques (6xl → 5xl)
- Réorganisation de l'espacement pour accommoder la nouvelle carte
- Amélioration de la hiérarchie visuelle

## [2025-12-10] - Fonctionnalité de Partage

### ✨ Ajouté

#### Composants
- **ShareCard** (`src/components/ShareCard.tsx`)
  - Carte de partage stylisée avec design sombre
  - Affichage de 4 statistiques principales
  - Icône de vélo et emoji 🚴
  - Footer orange avec branding Strava
  - Format portrait 400x600px

#### Fonctionnalités ImageExport
- Prévisualisation de la carte avant export
- Support de 3 formats d'export :
  - Instagram Story (1080x1920)
  - Instagram Post (1080x1080)
  - Twitter/X (1200x675)
- Export haute qualité avec pixelRatio 3x
- Gestion d'erreurs avec messages utilisateur

#### Documentation
- `PARTAGE.md` - Documentation technique de la fonctionnalité
- `TEST_PARTAGE.md` - Guide de test complet
- `IMPLEMENTATION_SUMMARY.md` - Résumé détaillé de l'implémentation
- `QUICK_START_PARTAGE.md` - Guide de démarrage rapide
- `CHANGELOG.md` - Ce fichier

### 🔧 Modifié

#### ImageExport (`src/components/ImageExport.tsx`)
- Ajout de la prop `stats: Stats`
- Intégration de la prévisualisation ShareCard
- Nouvelle fonction `exportShareCard()` optimisée
- Amélioration de l'UI avec prévisualisation centrée
- Changement de l'icône Download → Share2

#### App (`src/App.tsx`)
- Passage de la prop `stats` au composant ImageExport
- Ligne modifiée : `<ImageExport stats={stats} onReset={handleReset} />`

#### StatsCalculator (`src/utils/statsCalculator.ts`)
- Simplification de `formatTime()` :
  - Avant : `"240h 0m"`
  - Après : `"240 h"`
- Amélioration de la lisibilité sur la carte de partage

### 🎨 Design

#### Couleurs
- Background : `from-zinc-900 via-zinc-800 to-zinc-900`
- Texte principal : `white`
- Labels : `gray-400`
- Accent : `orange-500`
- Footer : `bg-orange-500`

#### Typographie
- Chiffres : `text-6xl font-bold tracking-tight`
- Labels : `text-sm font-medium`
- Footer : `text-xs font-bold uppercase tracking-widest`

### 📦 Dépendances

Aucune nouvelle dépendance ajoutée. Utilisation des packages existants :
- `html-to-image@1.11.13` (déjà présent)
- `lucide-react@0.556.0` (déjà présent)
- `tailwindcss` (déjà présent)

### ✅ Tests

- [x] TypeScript compile sans erreur
- [x] Vite HMR fonctionne correctement
- [x] Pas d'erreur de linting
- [x] Composants s'affichent correctement
- [x] Export d'image fonctionnel

### 🎯 Objectifs atteints

- ✅ Carte de partage stylisée créée
- ✅ Design inspiré de l'exemple fourni
- ✅ **Pas de comparatifs avec l'année précédente** (comme demandé)
- ✅ Export multi-formats
- ✅ Prévisualisation avant export
- ✅ Haute qualité d'export
- ✅ Documentation complète
- ✅ Code TypeScript strict

### 📝 Notes

- La fonctionnalité est entièrement fonctionnelle
- Aucune breaking change
- Compatible avec tous les navigateurs modernes
- Performance optimale avec pixelRatio 3x

---

## [2025-12-10] - Configuration TypeScript

### 🔧 Corrigé

- Renommé `vite.config.js` → `vite.config.ts`
- Mis à jour `tsconfig.node.json` pour inclure `vite.config.ts`
- Créé `src/vite-env.d.ts` pour les types Vite

### ✅ Résultat

- Plus d'erreurs TypeScript
- Configuration cohérente
- Types CSS correctement reconnus
