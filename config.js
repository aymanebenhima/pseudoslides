// Default configuration
const DEFAULT_CONFIG = {
  transition: 'slide',
  speed: 'default',
  primary: '#ff793f',
  secondary: '#ffda79',
  bg1: '#2c2c54',
  bg2: '#474787',
  font: 'Outfit, sans-serif'
};

// State
let currentConfig = { ...DEFAULT_CONFIG };

// Elements
let deckInstance = null;
const drawer = document.getElementById('dashboard-drawer');
const settingsBtn = document.getElementById('settings-btn');
const closeBtn = document.getElementById('close-drawer-btn');
const resetBtn = document.getElementById('reset-config-btn');

// Inputs
const inputs = {
  transition: document.getElementById('config-transition'),
  speed: document.getElementById('config-speed'),
  primary: document.getElementById('config-primary'),
  secondary: document.getElementById('config-secondary'),
  bg1: document.getElementById('config-bg1'),
  bg2: document.getElementById('config-bg2'),
  font: document.getElementById('config-font'),
};

/**
 * Initialize config
 * @param {Object} revealDeck The reveal.js instance
 */
export function initConfig(revealDeck) {
  deckInstance = revealDeck;
  
  // Load from local storage
  const saved = localStorage.getItem('pseudoslides_config');
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      currentConfig = { ...DEFAULT_CONFIG, ...parsed };
    } catch (e) {
      console.error('Failed to parse saved config');
    }
  }

  // Bind UI Events
  settingsBtn.addEventListener('click', () => drawer.classList.add('open'));
  closeBtn.addEventListener('click', () => drawer.classList.remove('open'));
  resetBtn.addEventListener('click', resetConfig);

  // Bind input changes
  Object.keys(inputs).forEach(key => {
    inputs[key].addEventListener('change', (e) => {
      updateConfig(key, e.target.value);
    });
  });

  // Apply initial config
  syncUI();
  applyConfig();
}

/**
 * Update a specific config key
 */
function updateConfig(key, value) {
  currentConfig[key] = value;
  saveConfig();
  applyConfig();
}

/**
 * Save to localStorage
 */
function saveConfig() {
  localStorage.setItem('pseudoslides_config', JSON.stringify(currentConfig));
}

/**
 * Reset to defaults
 */
function resetConfig() {
  if(confirm("Voulez-vous vraiment réinitialiser la configuration par défaut ?")) {
    currentConfig = { ...DEFAULT_CONFIG };
    saveConfig();
    syncUI();
    applyConfig();
  }
}

/**
 * Sync HTML inputs with current state
 */
function syncUI() {
  Object.keys(inputs).forEach(key => {
    if(inputs[key]) {
      inputs[key].value = currentConfig[key];
    }
  });
}

/**
 * Apply the current configuration to CSS and Reveal.js
 */
export function applyConfig() {
  // Update CSS Variables
  document.documentElement.style.setProperty('--primary-color', currentConfig.primary);
  document.documentElement.style.setProperty('--secondary-color', currentConfig.secondary);
  document.documentElement.style.setProperty('--bg-color-1', currentConfig.bg1);
  document.documentElement.style.setProperty('--bg-color-2', currentConfig.bg2);
  document.documentElement.style.setProperty('--font-family', currentConfig.font);

  // Update Reveal.js options
  if (deckInstance) {
    deckInstance.configure({
      transition: currentConfig.transition,
      transitionSpeed: currentConfig.speed
    });
  }
}
