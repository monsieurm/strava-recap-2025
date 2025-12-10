# 📸 Fonctionnalité de Partage

## Vue d'ensemble

La fonctionnalité de partage permet aux utilisateurs d'exporter leurs statistiques Strava sous forme d'image stylisée, prête à être partagée sur les réseaux sociaux.

## Composants créés

### 1. `ShareCard.tsx`
Composant React qui génère une carte visuelle élégante avec :
- **Design moderne** : Fond sombre avec dégradés
- **Icônes** : Vélo et emoji pour l'aspect visuel
- **Carte mise en évidence** : Nombre de sorties dans une grande carte orange au centre
- **Statistiques principales** :
  - Jours actifs
  - Distance totale
  - Temps total
  - Dénivelé positif total
- **Footer Strava** : Bandeau orange avec le branding

### 2. `ImageExport.tsx` (mis à jour)
Composant qui gère l'export de la carte en image :
- **Prévisualisation** : Affiche la carte avant l'export
- **Formats multiples** :
  - Instagram Story (1080x1920)
  - Instagram Post (1080x1080)
  - Twitter/X (1200x675)
- **Export haute qualité** : Utilise `html-to-image` avec pixelRatio 2x

## Fonctionnement technique

### Génération de l'image

1. La `ShareCard` est rendue hors écran (position fixe négative)
2. Lors du clic sur un bouton d'export :
   - Le composant capture la carte avec `toPng()`
   - L'image est générée en haute résolution (2x)
   - Le fichier est téléchargé automatiquement

### Styling

- **Dimensions** : 400x600px (ratio portrait)
- **Couleurs** : Dégradé de gris foncé (#18181b → #27272a → #18181b)
- **Typographie** : Police système, tailles adaptées (6xl pour les chiffres)
- **Espacements** : Généreux pour une meilleure lisibilité

## Utilisation

1. L'utilisateur upload son archive Strava
2. Les statistiques sont calculées et affichées
3. En bas de page, la section "Partager votre récap" apparaît
4. L'utilisateur voit une prévisualisation de la carte
5. Il choisit le format souhaité (Instagram Story, Post, ou Twitter)
6. L'image est téléchargée automatiquement

## Différences avec l'exemple original

✅ **Inclus** :
- Design sombre élégant
- Statistiques principales
- Footer orange Strava
- Icône de vélo

❌ **Retiré** (comme demandé) :
- Comparatifs avec l'année précédente (ex: "↗ 10% par rapport à 2024")
- Pourcentages de variation

## Améliorations possibles

- [ ] Ajouter plus de formats d'export (Facebook, LinkedIn)
- [ ] Permettre la personnalisation des couleurs
- [ ] Ajouter des templates alternatifs
- [ ] Inclure le nom d'utilisateur Strava (si disponible)
- [ ] Ajouter un QR code vers le profil Strava

## Dépendances

- `html-to-image` : Conversion HTML → PNG
- `lucide-react` : Icônes
- Tailwind CSS : Styling
