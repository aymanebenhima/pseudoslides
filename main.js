import './style.css';
import Reveal from 'reveal.js';
import Highlight from 'reveal.js/plugin/highlight';
import Notes from 'reveal.js/plugin/notes';

const deck = new Reveal({
  plugins: [Highlight, Notes],
  hash: true,
  transition: 'slide', // none/fade/slide/convex/concave/zoom
  backgroundTransition: 'fade',
  slideNumber: true,
  controls: true,
  progress: true,
  center: true,
  
  // Ratio 16:9 standard pour une parfaite adaptation (Full HD pour plus d'espace)
  width: 1920,
  height: 1080,
  margin: 0.04,
  minScale: 0.2,
  maxScale: 2.0
});

import { initConfig } from './config.js';

deck.initialize().then(() => {
  initConfig(deck);
});

// Navigation Rapide
const homeBtn = document.getElementById('home-btn');
if (homeBtn) {
  homeBtn.addEventListener('click', () => {
    deck.slide(0, 0); // Slide 0 (Accueil)
  });
}

const planBtn = document.getElementById('plan-btn');
const planDrawer = document.getElementById('plan-drawer');
const closePlanBtn = document.getElementById('close-plan-btn');

if (planBtn && planDrawer && closePlanBtn) {
  planBtn.addEventListener('click', () => {
    planDrawer.classList.add('open');
  });

  closePlanBtn.addEventListener('click', () => {
    planDrawer.classList.remove('open');
  });

  // Liens du plan
  document.querySelectorAll('.plan-link').forEach(link => {
    link.addEventListener('click', (e) => {
      const h = parseInt(e.target.dataset.slideh, 10);
      const v = parseInt(e.target.dataset.slidev, 10);
      deck.slide(h, v);
      planDrawer.classList.remove('open');
    });
  });
}

// Logique du bouton Plein Écran (Native Fullscreen)
const fullscreenBtn = document.getElementById('fullscreen-btn');
fullscreenBtn.addEventListener('click', () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch((err) => {
      console.error(`Erreur: ${err.message}`);
    });
  } else {
    document.exitFullscreen();
  }
});
