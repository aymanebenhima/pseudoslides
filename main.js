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
});

deck.initialize();
