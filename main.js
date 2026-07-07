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

// --- Interactive Trace Engine ---
const traceEngine = {
  "slide-anim-affectation": [
    { line: null, mem: "", out: "" },
    { line: 1, mem: "x = 5", out: "" },
    { line: 2, mem: "x = 8", out: "" },
    { line: 3, mem: "x = 8, y = 16", out: "" }
  ],
  "slide-anim-condition": [
    { line: null, mem: "", out: "" },
    { line: 1, mem: "age = 20", out: "" },
    { line: 2, mem: "age = 20 <br><span style='color:var(--secondary-color);font-size:1rem;'>(20 >= 18 est VRAI)</span>", out: "" },
    { line: 3, mem: "age = 20", out: "Majeur" },
    { line: 6, mem: "age = 20", out: "Majeur" }
  ],
  "slide-anim-boucle-imbriquee": [
    { line: null, mem: "", out: "" },
    { line: 1, mem: "i = 1", out: "" },
    { line: 2, mem: "i = 1, j = 1", out: "" },
    { line: 3, mem: "i = 1, j = 1", out: "1-1" },
    { line: 4, mem: "i = 1, j = 1", out: "1-1" },
    { line: 2, mem: "i = 1, j = 2", out: "1-1" },
    { line: 3, mem: "i = 1, j = 2", out: "1-1<br>1-2" },
    { line: 4, mem: "i = 1, j = 2", out: "1-1<br>1-2" },
    { line: 5, mem: "i = 1 <span style='color:var(--secondary-color);font-size:1rem;'>(Boucle interne finie !)</span>", out: "1-1<br>1-2" },
    { line: 1, mem: "i = 2", out: "1-1<br>1-2" },
    { line: 2, mem: "i = 2, j = 1", out: "1-1<br>1-2" },
    { line: 3, mem: "i = 2, j = 1", out: "1-1<br>1-2<br>2-1" },
    { line: 4, mem: "i = 2, j = 1", out: "1-1<br>1-2<br>2-1" },
    { line: 2, mem: "i = 2, j = 2", out: "1-1<br>1-2<br>2-1" },
    { line: 3, mem: "i = 2, j = 2", out: "1-1<br>1-2<br>2-1<br>2-2" },
    { line: 6, mem: "Terminé !", out: "1-1<br>1-2<br>2-1<br>2-2" }
  ],
  "slide-anim-exemple-complet": [
    { line: null, mem: "", out: "" },
    { line: 1, mem: "score = 0", out: "" },
    { line: 2, mem: "score = 0, i = 1", out: "" },
    { line: 3, mem: "score = 0, i = 1 <br><span style='color:var(--secondary-color);font-size:1rem;'>(1 MOD 2 == 0 est FAUX)</span>", out: "" },
    { line: 5, mem: "score = 0, i = 1", out: "" },
    { line: 6, mem: "score = 5, i = 1", out: "" },
    { line: 7, mem: "score = 5, i = 1", out: "" },
    { line: 8, mem: "score = 5, i = 1", out: "" },
    { line: 2, mem: "score = 5, i = 2", out: "" },
    { line: 3, mem: "score = 5, i = 2 <br><span style='color:var(--secondary-color);font-size:1rem;'>(2 MOD 2 == 0 est VRAI)</span>", out: "" },
    { line: 4, mem: "score = 15, i = 2", out: "" },
    { line: 7, mem: "score = 15, i = 2", out: "" },
    { line: 8, mem: "score = 15, i = 2", out: "" },
    { line: 2, mem: "score = 15, i = 3", out: "" },
    { line: 3, mem: "score = 15, i = 3 <br><span style='color:var(--secondary-color);font-size:1rem;'>(3 MOD 2 == 0 est FAUX)</span>", out: "" },
    { line: 6, mem: "score = 20, i = 3", out: "" },
    { line: 7, mem: "score = 20, i = 3", out: "" },
    { line: 8, mem: "score = 20, i = 3", out: "" },
    { line: 9, mem: "Terminé ! score = 20", out: "Score final : 20" }
  ]
};

function renderTrace(section) {
  let slideId = section.getAttribute('id');
  if(!slideId || !traceEngine[slideId]) return;
  
  let fragments = Array.from(section.querySelectorAll('.trace-triggers .fragment.visible'));
  let index = fragments.length;
  
  let state = traceEngine[slideId][index];
  if(!state) return;

  let codeWindow = section.querySelector('.code-window');
  codeWindow.querySelectorAll('.code-line').forEach(l => l.classList.remove('highlighted-line'));
  if(state.line) {
    let target = codeWindow.querySelector('.code-line[data-line="'+state.line+'"]');
    if(target) target.classList.add('highlighted-line');
  }

  const memEl = section.querySelector('.mem-content');
  if(memEl) memEl.innerHTML = state.mem;
  const outEl = section.querySelector('.out-content');
  if(outEl) outEl.innerHTML = state.out;
}

deck.on('fragmentshown', event => {
  if(event.fragment.classList.contains('current-code')) {
    let codeLines = event.fragment.parentElement.querySelectorAll('.current-code');
    codeLines.forEach(line => {
      if(line !== event.fragment) {
        line.classList.remove('current-fragment');
      }
    });
  }
  if(event.fragment.closest('section')) renderTrace(event.fragment.closest('section'));
});

deck.on('fragmenthidden', event => {
  if(event.fragment.closest('section')) renderTrace(event.fragment.closest('section'));
});

// Initialize state for tracing slides on load
deck.on('ready', () => {
  document.querySelectorAll('section[id^="slide-anim-"]').forEach(renderTrace);
});
