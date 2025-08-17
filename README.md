# 📋 Catalogue de Services

Un catalogue interactif de services développé avec React et TypeScript, offrant une interface moderne pour parcourir, rechercher et gérer vos services favoris.

## 🚀 Fonctionnalités

### 🗂️ Navigation par onglets
- **Catalogue** : Affiche tous les services disponibles avec compteur dynamique
- **Mes favoris** : Services marqués comme favoris avec compteur en temps réel
- **Où je participe** : Services auxquels vous participez

### 🔍 Recherche et filtrage
- **Recherche en temps réel** : Recherche par titre de service ou propriétaire
- **Tri intelligent** :
  - **Récent** : Tri par dernière modification
  - **Alphabétique** : Tri par ordre alphabétique du titre
  - **Date d'ajout** : Tri par date d'ajout (plus récent en premier)

### ⭐ Système de favoris
- **Marquer/Démarquer des favoris** : Clic sur l'icône étoile dans chaque service
- **Compteur dynamique** : Badge sur l'onglet "Mes favoris" mis à jour automatiquement
- **Filtrage des favoris** : Affichage exclusif des services favoris via l'onglet dédié

### 👁️ Modes d'affichage
- **Vue grille** : Affichage en cartes (responsive : 1-5 colonnes selon l'écran)
- **Vue liste** : Affichage linéaire pour plus de détails

### 📱 Design responsive
- **Mobile-first** : Interface optimisée pour tous les écrans
- **Textes adaptatifs** : Labels complets sur desktop, abrégés sur mobile
- **Navigation tactile** : Boutons et contrôles optimisés pour le touch

## 🛠️ Technologies utilisées

- **React 18** avec Hooks (useState)
- **TypeScript** pour le typage statique
- **Tailwind CSS** pour le styling
- **Lucide React** pour les icônes
- **JSON** pour les données de services

## 📦 Installation et démarrage

### Prérequis
- **Node.js** (version 16 ou supérieure)
- **npm** ou **yarn**

### Étapes pour lancer le projet

1. **Installer les dépendances**
```bash
npm install
```

2. **Démarrer le projet**
```bash
npm run dev
```

3. **Ouvrir dans le navigateur**
Le projet sera accessible à l'adresse qui s'affichera dans votre terminal (généralement `http://localhost:3000`)

  }
]
```

### Composant ServiceCard
Le composant `ServiceCard` doit accepter ces props :

```typescript
interface ServiceCardProps {
  service: Service;
  viewMode: 'grid' | 'list';
  isFavorite: boolean;
  onToggleFavorite: () => void;
}
```

## 📋 Scripts disponibles

```bash
# Démarrer en mode développement
npm start

# Créer un build de production
npm run build

# Lancer les tests
npm test

# Éjecter la configuration (non réversible)
npm run eject
```


---

**Développé avec ❤️ par [Soufiane Messaoud]**
