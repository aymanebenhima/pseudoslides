# Pseudoslides 🚀

**Pseudoslides** est une application web de présentation dynamique inspirée de slides.com. Elle s'appuie sur la puissance de [Reveal.js](https://revealjs.com/) combinée à un Design System "Premium" (Glassmorphism, mode sombre, dégradés).

## Fonctionnalités Principales

- **Animations Fluides** : Profitez des transitions impressionnantes natives à Reveal.js.
- **Design System Premium** : Un rendu professionnel avec des effets de transparence et de flou (backdrop-filter).
- **Navigation 2D** : Navigation clavier fluide, gestion des fragments (animations d'éléments dans le slide).
- **Tableau de Bord de Configuration (Dashboard)** : Panneau latéral interactif pour changer le design (Couleurs, Typographie) et le comportement des slides (Type et vitesse de transition).
- **Persistance des données** : Les choix effectués dans le Dashboard sont enregistrés automatiquement dans votre navigateur (via `localStorage`).
- **Plein Écran Natif** : L'interface remplit 100% de la fenêtre et dispose d'un raccourci pour masquer l'UI du navigateur.

## Installation & Démarrage

Le projet est propulsé par [Vite](https://vitejs.dev/) pour un développement ultra-rapide.

1. Installez les dépendances :
```bash
npm install
```

2. Lancez le serveur de développement :
```bash
npm run dev
```

3. Ouvrez votre navigateur sur l'adresse locale affichée dans la console (généralement `http://localhost:5173` ou `http://localhost:5174`).

## Utilisation du Tableau de Bord (Configuration globale)

1. Cliquez sur le bouton **"Configuration"** (icône d'engrenage) en bas à gauche de la présentation.
2. Un panneau glissera depuis la droite de l'écran.
3. Modifiez en temps réel :
   - **Transitions :** Choisissez entre Slide, Fade, Convex, Concave, Zoom, etc.
   - **Couleurs :** Redéfinissez les couleurs primaires/secondaires et les nuances de dégradé du fond.
   - **Typographie :** Changez la famille de police (Outfit, Inter, Roboto, Arial).
4. Chaque modification est immédiatement visible et s'enregistre pour la prochaine visite. 
5. Cliquez sur le bouton **"Réinitialiser par défaut"** si vous souhaitez revenir aux styles originaux.

## Structure du Projet

- `index.html` : Contient la structure des slides et le code HTML du tableau de bord.
- `style.css` : Définit les variables CSS globales, le style Premium et l'interface du tableau de bord.
- `main.js` : Point d'entrée de l'application, initialise Reveal.js et importe les configurations.
- `config.js` : Logique de gestion d'état (localStorage), interaction avec les paramètres (couleurs, polices, animation) et mise à jour dynamique.

## Technologies

- **Vite** (Build Tool)
- **Vanilla JS** (Aucun framework lourd imposé)
- **Reveal.js** (Moteur de présentation)
- **CSS3 Variables** (Pour le Design System en temps réel)

> Propulsé par la configuration "Advanced Agentic Coding" de Google DeepMind.
