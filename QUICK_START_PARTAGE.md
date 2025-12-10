# 🚀 Quick Start - Fonctionnalité de Partage

## ✅ Ce qui a été implémenté

J'ai ajouté une fonctionnalité complète de partage d'image pour vos statistiques Strava 2025, **sans les comparatifs avec l'année précédente** comme vous l'avez demandé.

## 📸 Aperçu

La carte de partage affiche :
- 🚴 Icône de vélo orange
- ⭐ **Carte mise en évidence** : Nombre de sorties (grande carte orange au centre)
- 📊 4 statistiques principales :
  - Jours actifs
  - Distance totale
  - Temps total
  - Dénivelé positif total
- 🟠 Footer orange "STRAVA L'ANNÉE SPORTIVE 2025"

## 🎯 Comment l'utiliser

1. **Lancez l'application** :
   ```bash
   pnpm dev
   ```

2. **Uploadez votre archive Strava**

3. **Scrollez en bas de la page** jusqu'à la section "Partager votre récap"

4. **Prévisualisez** votre carte de partage

5. **Choisissez un format** :
   - Instagram Story (1080x1920)
   - Instagram Post (1080x1080)
   - Twitter/X (1200x675)

6. **Téléchargez** l'image générée

## 📁 Fichiers créés

### Composants
- ✅ `src/components/ShareCard.tsx` - Carte de partage stylisée

### Documentation
- ✅ `PARTAGE.md` - Documentation technique
- ✅ `TEST_PARTAGE.md` - Guide de test
- ✅ `IMPLEMENTATION_SUMMARY.md` - Résumé complet
- ✅ `QUICK_START_PARTAGE.md` - Ce fichier

### Fichiers modifiés
- ✅ `src/components/ImageExport.tsx` - Ajout prévisualisation + export
- ✅ `src/App.tsx` - Passage des stats
- ✅ `src/utils/statsCalculator.ts` - Formatage simplifié

## 🎨 Design

Le design s'inspire de votre exemple avec :
- Fond sombre élégant (zinc-900)
- Typographie grande et lisible
- Icônes et émojis pour l'aspect visuel
- Footer orange Strava

## ✨ Fonctionnalités

- ✅ Prévisualisation avant export
- ✅ Export haute qualité (3x)
- ✅ Multi-formats (Instagram, Twitter)
- ✅ Gestion d'erreurs
- ✅ Design responsive
- ✅ **Pas de comparatifs avec 2024** (comme demandé)

## 🔧 Vérification

Tout compile sans erreur :
```bash
pnpm exec tsc --noEmit
# ✅ TypeScript OK
```

## 📖 Documentation

Pour plus de détails, consultez :
- `PARTAGE.md` - Vue d'ensemble technique
- `TEST_PARTAGE.md` - Comment tester
- `IMPLEMENTATION_SUMMARY.md` - Résumé complet

## 🎉 C'est prêt !

Vous pouvez maintenant :
1. Tester la fonctionnalité
2. Partager vos statistiques sur les réseaux sociaux
3. Personnaliser le design si besoin

Bon partage ! 🚴‍♂️
