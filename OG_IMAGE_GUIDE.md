# 🖼️ Guide - Image OpenGraph

## 📋 Qu'est-ce qu'une image OpenGraph ?

L'image OpenGraph (OG) est l'image qui s'affiche quand vous partagez le lien de votre site sur :
- Facebook
- Twitter/X
- LinkedIn
- WhatsApp
- Discord
- Slack
- etc.

## 🎨 Générer l'Image

### Méthode 1 : Fichier HTML Standalone

1. **Ouvrez le fichier** `generate-og.html` dans votre navigateur
2. **Cliquez** sur "Télécharger l'image OG (1200x630)"
3. **L'image est téléchargée** : `og-image.png`

### Méthode 2 : Utiliser les Composants React

Les composants sont prêts dans :
- `src/components/OgImage.tsx` - Composant de l'image
- `src/pages/GenerateOg.tsx` - Page de génération

## 📐 Spécifications

- **Dimensions** : 1200x630px (ratio 1.91:1)
- **Format** : PNG
- **Poids** : ~100-200KB
- **Fond** : Dégradé orange → rouge

## 🎯 Contenu de l'Image

```
┌─────────────────────────────────────────────────┐
│  🚴 Strava Recap 2025                           │
│     Votre année à vélo                          │
│                                                 │
│  Générez votre récapitulatif annuel Strava     │
│  📊 Statistiques • 📱 Export • 🔒 Privé        │
│                                                 │
│  strava-recap-2025.matthieurenaut.com          │
│                                  Gratuit        │
└─────────────────────────────────────────────────┘
```

## 🌐 Intégration dans votre Site

### Meta Tags à Ajouter

Ajoutez ces balises dans le `<head>` de votre `index.html` :

```html
<!-- OpenGraph / Facebook -->
<meta property="og:type" content="website" />
<meta property="og:url" content="https://strava-recap-2025.matthieurenaut.com/" />
<meta property="og:title" content="Strava Recap 2025 - Votre année à vélo" />
<meta property="og:description" content="Générez votre récapitulatif annuel Strava avec statistiques complètes, export multi-formats et traitement 100% privé." />
<meta property="og:image" content="https://strava-recap-2025.matthieurenaut.com/og-image.png" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:url" content="https://strava-recap-2025.matthieurenaut.com/" />
<meta name="twitter:title" content="Strava Recap 2025 - Votre année à vélo" />
<meta name="twitter:description" content="Générez votre récapitulatif annuel Strava avec statistiques complètes, export multi-formats et traitement 100% privé." />
<meta name="twitter:image" content="https://strava-recap-2025.matthieurenaut.com/og-image.png" />
```

## 📤 Déploiement

1. **Générez l'image** avec `generate-og.html`
2. **Placez `og-image.png`** dans votre dossier `public/`
3. **Ajoutez les meta tags** dans `index.html`
4. **Déployez** votre site
5. **Testez** avec les outils ci-dessous

## 🧪 Tester l'Image OG

### Outils de Test

1. **Facebook Sharing Debugger**
   - URL : https://developers.facebook.com/tools/debug/
   - Entrez votre URL et cliquez sur "Debug"

2. **Twitter Card Validator**
   - URL : https://cards-dev.twitter.com/validator
   - Entrez votre URL et cliquez sur "Preview card"

3. **LinkedIn Post Inspector**
   - URL : https://www.linkedin.com/post-inspector/
   - Entrez votre URL et cliquez sur "Inspect"

4. **OpenGraph.xyz**
   - URL : https://www.opengraph.xyz/
   - Prévisualisation pour tous les réseaux

## 🎨 Personnalisation

Pour modifier l'image, éditez `generate-og.html` :

### Changer les Couleurs
```html
<!-- Ligne 32 -->
<div class="bg-linear-to-br from-orange-500 to-red-600">
<!-- Changez orange-500 et red-600 par vos couleurs -->
```

### Changer le Texte
```html
<!-- Lignes 44-46 -->
<h1 class="text-7xl font-bold">Strava Recap 2025</h1>
<p class="text-3xl text-white/90 mt-2">Votre année à vélo</p>
```

### Changer l'URL
```html
<!-- Ligne 67 -->
<p class="text-2xl font-bold">strava-recap-2025.matthieurenaut.com</p>
```

## 📊 Bonnes Pratiques

### Dimensions
- ✅ 1200x630px (ratio 1.91:1) - Recommandé
- ⚠️ 1200x600px - Acceptable
- ❌ Autres ratios - Risque de crop

### Contenu
- ✅ Texte lisible (min 20px)
- ✅ Contraste élevé
- ✅ Logo/Icône visible
- ✅ Message clair
- ❌ Trop de texte
- ❌ Éléments trop petits

### Technique
- ✅ PNG ou JPG
- ✅ < 5MB (idéalement < 300KB)
- ✅ Hébergé sur HTTPS
- ✅ URL absolue (pas relative)

## 🔍 Vérification

Checklist avant déploiement :

- [ ] Image générée (1200x630px)
- [ ] Image placée dans `public/og-image.png`
- [ ] Meta tags ajoutés dans `index.html`
- [ ] URL de l'image est absolue (https://...)
- [ ] Site déployé
- [ ] Testé sur Facebook Debugger
- [ ] Testé sur Twitter Card Validator
- [ ] Image s'affiche correctement

## 🆘 Problèmes Courants

### L'image ne s'affiche pas

**Causes :**
- URL relative au lieu d'absolue
- Image non accessible (404)
- Cache des réseaux sociaux

**Solutions :**
- Utilisez une URL complète : `https://votre-domaine.com/og-image.png`
- Vérifiez que l'image est accessible
- Utilisez les debuggers pour vider le cache

### L'image est coupée

**Cause :** Mauvaises dimensions

**Solution :** Respectez le ratio 1.91:1 (1200x630px)

### L'image est floue

**Cause :** Résolution trop basse

**Solution :** Utilisez au minimum 1200x630px

## 📝 Exemple Complet

Voici un exemple complet pour `index.html` :

```html
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    
    <!-- Title & Description -->
    <title>Strava Recap 2025 - Votre année à vélo</title>
    <meta name="description" content="Générez votre récapitulatif annuel Strava avec statistiques complètes, export multi-formats et traitement 100% privé." />
    
    <!-- OpenGraph -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://strava-recap-2025.matthieurenaut.com/" />
    <meta property="og:title" content="Strava Recap 2025 - Votre année à vélo" />
    <meta property="og:description" content="Générez votre récapitulatif annuel Strava avec statistiques complètes, export multi-formats et traitement 100% privé." />
    <meta property="og:image" content="https://strava-recap-2025.matthieurenaut.com/og-image.png" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    
    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content="https://strava-recap-2025.matthieurenaut.com/" />
    <meta name="twitter:title" content="Strava Recap 2025 - Votre année à vélo" />
    <meta name="twitter:description" content="Générez votre récapitulatif annuel Strava avec statistiques complètes, export multi-formats et traitement 100% privé." />
    <meta name="twitter:image" content="https://strava-recap-2025.matthieurenaut.com/og-image.png" />
  </head>
  <body>
    <!-- Votre contenu -->
  </body>
</html>
```

## 🎉 Résultat

Une fois déployé, quand quelqu'un partagera votre lien, il verra :
- 🖼️ Votre belle image OG
- 📝 Le titre et la description
- 🔗 Le lien cliquable

Parfait pour attirer l'attention et augmenter les clics ! 🚀
