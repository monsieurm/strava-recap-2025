# 📐 Structure de la Carte de Partage

## Vue d'ensemble

La carte de partage est organisée en plusieurs sections pour une hiérarchie visuelle claire.

## Layout (400x600px)

```
┌─────────────────────────────────────┐
│  🚴 Vélo Orange        🚴 Emoji     │  ← Header
│  Sport le plus pratiqué             │
├─────────────────────────────────────┤
│                                     │
│  ╔═══════════════════════════════╗  │
│  ║   NOMBRE DE SORTIES           ║  │  ← CARTE MISE EN ÉVIDENCE
│  ║         196                   ║  │     (Grande, orange, centrée)
│  ╚═══════════════════════════════╝  │
│                                     │
├─────────────────────────────────────┤
│  Jours actifs                       │
│  196                                │  ← Stats normales
│                                     │     (Plus petites)
│  Distance totale                    │
│  5364 km                            │
│                                     │
│  Temps total                        │
│  240 h                              │
│                                     │
│  Dénivelé positif total             │
│  24874 m                            │
├─────────────────────────────────────┤
│  STRAVA L'ANNÉE SPORTIVE 2025       │  ← Footer orange
└─────────────────────────────────────┘
```

## Hiérarchie Visuelle

### 1. Header (Haut)
- **Icône vélo** : 16x16 (w-16 h-16), orange-500
- **Emoji** : 4xl dans un cadre 20x20
- **Label** : "Sport le plus pratiqué" en gray-400

### 2. Carte Mise en Évidence (Centre-Haut)
- **Background** : Dégradé orange-500/20 → orange-600/10
- **Bordure** : orange-500/30
- **Label** : "NOMBRE DE SORTIES" en orange-300, uppercase
- **Valeur** : text-7xl, orange-400, centré
- **Padding** : p-6
- **Border radius** : rounded-2xl

### 3. Statistiques Principales (Centre-Bas)
- **Taille** : text-5xl (réduit de 6xl pour donner plus d'importance à la carte)
- **Espacement** : space-y-4
- **Labels** : text-sm, gray-400
- **Valeurs** : font-bold, tracking-tight

### 4. Footer (Bas)
- **Background** : bg-orange-500 (plein)
- **Text** : text-xs, uppercase, tracking-widest
- **Padding** : py-5

## Tailles de Police

| Élément | Taille | Utilisation |
|---------|--------|-------------|
| 7xl | ~72px | Nombre de sorties (carte mise en évidence) |
| 5xl | ~48px | Statistiques principales |
| base | ~16px | Labels du header |
| sm | ~14px | Labels des stats |
| xs | ~12px | Footer |

## Couleurs

### Orange (Accent)
- **orange-500** : `#f97316` - Icône vélo, footer
- **orange-400** : `#fb923c` - Nombre de sorties
- **orange-300** : `#fdba74` - Label "NOMBRE DE SORTIES"
- **orange-500/20** : Dégradé de fond de la carte
- **orange-500/30** : Bordure de la carte

### Gris (Texte secondaire)
- **gray-400** : `#9ca3af` - Labels
- **white** : `#ffffff` - Texte principal

### Fond
- **zinc-900** : `#18181b` - Fond principal
- **zinc-800** : `#27272a` - Dégradé intermédiaire

## Espacements

- **Container padding** : p-8 (32px)
- **Header spacing** : space-y-4 (16px)
- **Carte highlight margin** : -mx-2 (pour déborder légèrement)
- **Stats spacing** : space-y-4 (16px entre chaque stat)
- **Footer** : -mx-8 -mb-8 (pour toucher les bords)

## Effets Visuels

### Carte Mise en Évidence
```css
background: gradient from-orange-500/20 to-orange-600/10
border: 1px solid orange-500/30
border-radius: 1rem (rounded-2xl)
```

### Container Principal
```css
background: gradient from-zinc-900 via-zinc-800 to-zinc-900
border-radius: 1rem (rounded-2xl)
```

## Responsive

La carte est fixe à 400x600px pour garantir la qualité de l'export.
Elle est mise à l'échelle (scale-75) dans la prévisualisation web.

## Export

Lors de l'export :
- **Résolution** : 1200x1800px (3x pour haute qualité)
- **Format** : PNG
- **Background** : #000000
- **Quality** : 1 (maximale)
