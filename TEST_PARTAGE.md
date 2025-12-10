# 🧪 Guide de Test - Fonctionnalité de Partage

## Prérequis

1. Avoir une archive Strava avec des activités vélo en 2025
2. Lancer l'application en mode développement : `pnpm dev`
3. Ouvrir le navigateur sur `http://localhost:5173`

## Scénarios de Test

### ✅ Test 1 : Affichage de la prévisualisation

**Étapes :**
1. Uploader une archive Strava valide
2. Attendre l'affichage des statistiques
3. Scroller jusqu'en bas de la page

**Résultat attendu :**
- Une section "Partager votre récap" est visible
- Une prévisualisation de la carte s'affiche avec :
  - Fond sombre avec dégradé
  - Icône de vélo orange
  - Emoji 🚴
  - 4 statistiques principales (jours actifs, distance, temps, dénivelé)
  - Footer orange "STRAVA L'ANNÉE SPORTIVE 2025 STRAVA"

### ✅ Test 2 : Export Instagram Story

**Étapes :**
1. Cliquer sur le bouton "Instagram Story"
2. Attendre la génération de l'image

**Résultat attendu :**
- Un fichier PNG est téléchargé : `strava-recap-2025-instagram-story.png`
- L'image fait 1200x1800px (400x600 × 3 pour la qualité)
- Le contenu est net et lisible
- Les couleurs sont correctes

### ✅ Test 3 : Export Instagram Post

**Étapes :**
1. Cliquer sur le bouton "Instagram Post"
2. Attendre la génération de l'image

**Résultat attendu :**
- Un fichier PNG est téléchargé : `strava-recap-2025-instagram-post.png`
- L'image est de haute qualité
- Le contenu est centré

### ✅ Test 4 : Export Twitter/X

**Étapes :**
1. Cliquer sur le bouton "Twitter/X"
2. Attendre la génération de l'image

**Résultat attendu :**
- Un fichier PNG est téléchargé : `strava-recap-2025-twitter-x.png`
- L'image est de haute qualité
- Le contenu est bien visible

### ✅ Test 5 : Gestion d'erreur

**Étapes :**
1. Ouvrir la console développeur
2. Supprimer temporairement l'élément `#share-card` du DOM
3. Essayer d'exporter une image

**Résultat attendu :**
- Un message d'erreur s'affiche : "Une erreur est survenue lors de l'export de l'image"
- L'application ne crash pas

### ✅ Test 6 : Bouton "Recommencer"

**Étapes :**
1. Cliquer sur "Recommencer avec une autre archive"

**Résultat attendu :**
- Retour à la page d'accueil
- Les statistiques sont réinitialisées
- Possibilité d'uploader une nouvelle archive

## Vérifications Visuelles

### Design de la carte
- [ ] Fond sombre avec dégradé subtil
- [ ] Icône de vélo orange bien visible
- [ ] Emoji 🚴 dans un cadre arrondi
- [ ] Texte blanc sur fond sombre (bon contraste)
- [ ] Chiffres en grande taille (6xl)
- [ ] Labels en gris clair
- [ ] Footer orange vif
- [ ] Coins arrondis (rounded-2xl)

### Qualité de l'export
- [ ] Texte net (pas de flou)
- [ ] Couleurs fidèles
- [ ] Pas de pixelisation
- [ ] Taille de fichier raisonnable (< 500KB)

## Tests de Compatibilité

### Navigateurs
- [ ] Chrome/Edge (Chromium)
- [ ] Firefox
- [ ] Safari

### Résolutions d'écran
- [ ] Desktop (1920x1080)
- [ ] Laptop (1366x768)
- [ ] Tablette (768x1024)
- [ ] Mobile (375x667)

## Données de Test

### Cas nominal
```
Jours actifs: 196
Distance totale: 5364 km
Temps total: 240 h
Dénivelé positif: 24874 m
```

### Cas limites
- 0 activités
- 1 seule activité
- Très grande distance (> 10000 km)
- Très petit temps (< 1h)

## Problèmes Connus

### ⚠️ Limitations
1. L'export peut prendre 2-3 secondes sur les appareils lents
2. La qualité de l'image dépend du navigateur
3. Les polices peuvent varier légèrement selon le système

### 🐛 Bugs à surveiller
1. Si l'élément est caché, l'export peut échouer
2. Les émojis peuvent s'afficher différemment selon le système
3. Le pixelRatio élevé peut causer des problèmes de mémoire sur mobile

## Checklist de Validation

Avant de considérer la fonctionnalité comme terminée :

- [ ] Tous les tests passent
- [ ] Aucune erreur dans la console
- [ ] Les images exportées sont de bonne qualité
- [ ] Le design correspond à l'exemple fourni
- [ ] Pas de comparatifs avec l'année précédente
- [ ] Le code TypeScript compile sans erreur
- [ ] Les composants sont bien documentés
- [ ] Le README est à jour
