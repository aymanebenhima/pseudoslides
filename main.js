import './style.css';
import Reveal from 'reveal.js';
import Highlight from 'reveal.js/plugin/highlight';

const deck = new Reveal({
  plugins: [Highlight],
  hash: true,
  transition: 'slide', // none/fade/slide/convex/concave/zoom
  backgroundTransition: 'fade',
  slideNumber: true,
  controls: true,
  progress: true,
  center: true,
  
  // Rendre les slides 100% fluides (prend tout l'écran)
  width: '100%',
  height: '100%',
  margin: 0,
  minScale: 1,
  maxScale: 1
});

deck.initialize();

// Logique du bouton Plein Écran (Native Fullscreen)
const fullscreenBtn = document.getElementById('fullscreen-btn');
fullscreenBtn.addEventListener('click', () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch((err) => {
      console.error(`Erreur lors du passage en plein écran: ${err.message}`);
    });
  } else {
    document.exitFullscreen();
  }
});
