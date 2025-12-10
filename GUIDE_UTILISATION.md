# 📖 Guide d'Utilisation - Strava Recap 2025

## 🎯 Comment voir la carte de partage

La carte de partage avec le nombre de sorties **n'apparaît qu'après avoir uploadé votre archive Strava**. Voici les étapes :

## 📋 Étapes à Suivre

### 1. Page d'Accueil (http://localhost:5173/)

Vous devriez voir :
- Un titre "Strava Recap 2025"
- Une zone de dépôt de fichier (drag & drop)
- Des instructions pour obtenir votre archive

### 2. Obtenir Votre Archive Strava

Si vous n'avez pas encore votre archive :

1. **Allez sur Strava.com** et connectez-vous
2. **Paramètres** → **Mon compte**
3. Cherchez **"Télécharger ou supprimer votre compte"**
4. Cliquez sur **"Demander votre archive"**
5. Attendez l'email de Strava (peut prendre quelques heures)
6. **Téléchargez le fichier ZIP** depuis l'email

### 3. Uploader Votre Archive

Deux méthodes :

**Méthode 1 : Drag & Drop**
- Glissez votre fichier ZIP sur la zone de dépôt
- Relâchez

**Méthode 2 : Clic**
- Cliquez sur la zone de dépôt
- Sélectionnez votre fichier ZIP
- Cliquez sur "Ouvrir"

### 4. Analyse en Cours

Vous verrez :
- "Analyse en cours..."
- L'application traite votre archive localement

### 5. Visualisation des Statistiques

Une fois l'analyse terminée, vous verrez :
- **En haut** : Vos statistiques détaillées avec des cartes colorées
- **En bas** : La section "Partager votre récap"

### 6. Carte de Partage

Dans la section "Partager votre récap", vous verrez :

**Prévisualisation** (au centre) :
```
┌─────────────────────────────┐
│  🚴 Vélo    🚴 Emoji        │
│  Sport le plus pratiqué     │
│                             │
│  ╔═══════════════════════╗  │
│  ║  NOMBRE DE SORTIES    ║  │ ← Grande carte orange
│  ║       196             ║  │
│  ╚═══════════════════════╝  │
│                             │
│  Jours actifs: 196          │
│  Distance totale: 5364 km   │
│  Temps total: 240 h         │
│  Dénivelé: 24874 m          │
│                             │
│  STRAVA L'ANNÉE 2025        │
└─────────────────────────────┘
```

**Boutons d'export** :
- Instagram Story
- Instagram Post
- Twitter/X

### 7. Exporter l'Image

1. Cliquez sur le format souhaité
2. L'image est téléchargée automatiquement
3. Partagez sur vos réseaux sociaux !

## 🔍 Dépannage

### Je ne vois rien après l'upload

**Vérifiez :**
- ✅ Le fichier est bien un ZIP
- ✅ C'est bien votre archive Strava (pas un autre fichier)
- ✅ L'archive contient des activités vélo de 2025
- ✅ Regardez la console du navigateur (F12) pour les erreurs

### Erreur "Aucune activité vélo trouvée"

**Causes possibles :**
- Pas d'activités vélo en 2025 dans l'archive
- Les activités sont d'un autre type (course, natation, etc.)
- L'archive est incomplète

**Solution :**
- Vérifiez que vous avez des activités vélo en 2025 sur Strava
- Demandez une nouvelle archive si nécessaire

### La carte de partage ne s'affiche pas

**Vérifiez :**
- ✅ Vous avez bien scrollé jusqu'en bas de la page
- ✅ Les statistiques s'affichent correctement au-dessus
- ✅ Le serveur dev est bien lancé (`pnpm dev`)
- ✅ Pas d'erreurs dans la console (F12)

### L'export d'image ne fonctionne pas

**Essayez :**
- Rafraîchir la page (F5)
- Réuploader votre archive
- Vérifier que votre navigateur autorise les téléchargements

## 🎨 Ce Que Vous Devriez Voir

### Page d'Accueil
- ✅ Fond dégradé orange/blanc
- ✅ Carte centrale avec zone de dépôt
- ✅ Instructions claires

### Page de Statistiques
- ✅ Fond dégradé orange/blanc
- ✅ Badge "Année 2025" en haut
- ✅ Titre "Votre année à vélo"
- ✅ 6 cartes de statistiques
- ✅ Carte "Vélo préféré" (si applicable)
- ✅ Carte de félicitations orange

### Section Partage
- ✅ Titre "Partager votre récap"
- ✅ Prévisualisation de la carte (fond sombre)
- ✅ Grande carte orange avec le nombre de sorties
- ✅ 3 boutons d'export

## 📱 Navigation

```
Page d'Accueil
    ↓ (Upload archive)
Page de Statistiques
    ↓ (Scroll en bas)
Section Partage
    ↓ (Clic sur format)
Téléchargement de l'image
```

## 🚀 Raccourcis

- **F5** : Rafraîchir la page
- **F12** : Ouvrir la console développeur
- **Ctrl/Cmd + Shift + R** : Rafraîchir en vidant le cache

## 💡 Astuces

1. **Testez avec des données réelles** : L'application a besoin d'activités vélo de 2025
2. **Vérifiez la console** : Les erreurs y sont affichées
3. **Scrollez jusqu'en bas** : La section partage est tout en bas
4. **Attendez le chargement** : L'analyse peut prendre quelques secondes

## ✅ Checklist de Vérification

Avant de demander de l'aide :

- [ ] Le serveur dev est lancé (`pnpm dev`)
- [ ] Vous êtes sur http://localhost:5173/
- [ ] Vous avez uploadé une archive Strava valide
- [ ] L'archive contient des activités vélo de 2025
- [ ] Vous avez attendu la fin de l'analyse
- [ ] Vous avez scrollé jusqu'en bas de la page
- [ ] Vous avez vérifié la console (F12) pour les erreurs
- [ ] Vous avez essayé de rafraîchir la page

## 🆘 Besoin d'Aide ?

Si rien ne fonctionne :

1. Ouvrez la console (F12)
2. Copiez les erreurs affichées
3. Vérifiez que tous les fichiers sont présents
4. Relancez le serveur : `Ctrl+C` puis `pnpm dev`
