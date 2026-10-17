// ==========================================================================
// GUATOCA WEB - MOTOR OFICIAL REPRODUCCIÓN EXACTA (100% FIEL A CAPTURAS)
// ==========================================================================

// Paleta de colores pastel original para el tablero (Captura 4)
const PASTEL_COLORS = ['c-pink', 'c-blue', 'c-green', 'c-yellow', 'c-peach'];

// Coordenadas de la espiral original: 9 columnas por 8 filas, con START de
// tres celdas y END de tres por dos (Captura del tablero).
const SPIRAL_COORDS = [
  { num: 1, x: 3, y: 7 }, { num: 2, x: 4, y: 7 }, { num: 3, x: 5, y: 7 },
  { num: 4, x: 6, y: 7 }, { num: 5, x: 7, y: 7 }, { num: 6, x: 8, y: 7 },
  { num: 7, x: 8, y: 6 }, { num: 8, x: 8, y: 5 }, { num: 9, x: 8, y: 4 },
  { num: 10, x: 8, y: 3 }, { num: 11, x: 8, y: 2 }, { num: 12, x: 8, y: 1 },
  { num: 13, x: 8, y: 0 }, { num: 14, x: 7, y: 0 }, { num: 15, x: 6, y: 0 },
  { num: 16, x: 5, y: 0 }, { num: 17, x: 4, y: 0 }, { num: 18, x: 3, y: 0 },
  { num: 19, x: 2, y: 0 }, { num: 20, x: 1, y: 0 }, { num: 21, x: 0, y: 0 },
  { num: 22, x: 0, y: 1 }, { num: 23, x: 0, y: 2 }, { num: 24, x: 0, y: 3 },
  { num: 25, x: 0, y: 4 }, { num: 26, x: 0, y: 5 }, { num: 27, x: 0, y: 6 },
  { num: 28, x: 1, y: 6 }, { num: 29, x: 2, y: 6 }, { num: 30, x: 3, y: 6 },
  { num: 31, x: 4, y: 6 }, { num: 32, x: 5, y: 6 }, { num: 33, x: 6, y: 6 },
  { num: 34, x: 7, y: 6 }, { num: 35, x: 7, y: 5 }, { num: 36, x: 7, y: 4 },
  { num: 37, x: 7, y: 3 }, { num: 38, x: 7, y: 2 }, { num: 39, x: 7, y: 1 },
  { num: 40, x: 6, y: 1 }, { num: 41, x: 5, y: 1 }, { num: 42, x: 4, y: 1 },
  { num: 43, x: 3, y: 1 }, { num: 44, x: 2, y: 1 }, { num: 45, x: 1, y: 1 },
  { num: 46, x: 1, y: 2 }, { num: 47, x: 1, y: 3 }, { num: 48, x: 1, y: 4 },
  { num: 49, x: 1, y: 5 }, { num: 50, x: 2, y: 5 }, { num: 51, x: 3, y: 5 },
  { num: 52, x: 4, y: 5 }, { num: 53, x: 5, y: 5 }, { num: 54, x: 6, y: 5 },
  { num: 55, x: 6, y: 4 }, { num: 56, x: 6, y: 3 }, { num: 57, x: 6, y: 2 },
  { num: 58, x: 5, y: 2 }, { num: 59, x: 4, y: 2 }, { num: 60, x: 3, y: 2 },
  { num: 61, x: 2, y: 2 }, { num: 62, x: 2, y: 3 }
];

// Colores pastel para anillos de jugadores
const PLAYER_RINGS = ['#f472b6', '#86efac', '#fde047', '#c084fc', '#fdba74', '#93c5fd', '#fca5a5'];
const PLAYER_AVATARS = [
  { id: 'smile', emoji: '😀' },
  { id: 'cocktail', emoji: '🍸' },
  { id: 'diamond', emoji: '💎' },
  { id: 'beer', emoji: '🍺' },
  { id: 'fire', emoji: '🔥' },
  { id: 'cool', emoji: '😎' },
  { id: 'dice', emoji: '🎲' },
  { id: 'heart', emoji: '💜' }
];
let selectedPlayerAvatarIndex = Math.floor(Math.random() * PLAYER_AVATARS.length);

function avatarMarkup(player, className) {
  const avatar = PLAYER_AVATARS.find(item => item.id === player.avatar) || PLAYER_AVATARS[0];
  const isImage = avatar.id === 'smile';
  return `<div class="${className}${isImage ? '' : ' avatar-emoji'}" data-avatar="${avatar.id}" aria-hidden="true">${isImage ? '' : avatar.emoji}</div>`;
}

// ESTADO GLOBAL
const STATE = {
  players: [],
  currentTurnIndex: 0,
  selectedTab: 'tableros', // 'tableros' | 'modos'
  selectedGameKey: 'classic',
  isRolling: false,
  isMoving: false,
  activeCard: null,
  round: 1,
  cardsByMode: {},
  allCards: [],
  usedCardTexts: new Set(),
  usedModeCardTexts: new Set(),
  activeModeChoice: null
};

const MODE_DETAILS = {
  nhie: {
    title: 'YO NUNCA',
    description: 'Solo frases de “Yo nunca”. Todos los que SÍ lo han hecho, toman.'
  },
  tod: {
    title: 'VERDAD O RETO',
    description: 'Por turnos, cada quien elige Verdad o Reto. Si no contestas o no lo haces, tomas.'
  },
  mlt: {
    title: 'QUIÉN ES MÁS PROBABLE QUE',
    description: 'Solo frases de “¿Quién es más probable que...?”. A la cuenta de 3, señalen a quien crean que encaja. El más señalado toma.'
  },
  versus: {
    title: 'VERSUS',
    description: 'Rétate con tus amigos. Formen dos equipos y eviten tomar enfrentándose en diferentes juegos.'
  }
};

// Board details used in the preview card before starting a game.
const BOARD_DETAILS = {
  classic: {
    title: 'CLÁSICO',
    description: 'El tablero más equilibrado y versátil para cualquier previa o rumba. Miles de frases repartidas entre sus casillas: Toma, Yo Nunca, Verdad, Reto, Evento y Hot',
    sample: 'Quien más probablemente se cogería a un profesor por una mejor calificación toma',
  },
  hammered: {
    title: 'ETÍLICO',
    description: '¿Quieres ponerte mal rápido? Toma y toma con este tablero y llega a la meta si puedes... Los peces aman este tablero',
    sample: 'Los solteros se toman un shot. ¿En una relación? Toman 2. ¿Casados? Toman 3. ¿Tienen amante? Súmenle 1 más',
  },
  hot: {
    title: 'HOT',
    description: 'Un tablero de contenido más atrevido para subir la temperatura de la partida.',
  },
  couple: {
    title: 'PAREJA',
    description: '¿Ya se aburren tú y tu pareja? Pásenla romántico, conózcanse más, ríanse y caliéntense con este tablero. No nos hacemos responsables de lo que pase',
    sample: 'Yo nunca he esperado que mi pareja se disculpe sabiendo que yo estaba mal',
  },
  flash: {
    title: 'FLASH',
    description: 'Pruebas rápidas para mantener la partida en movimiento. Reacciona y juega sin perder el ritmo.',
  },
  xxl: {
    title: 'XXL',
    description: 'Una partida a lo grande, con más casillas y más oportunidades para que la noche se alargue.',
  }
};

// SINTETIZADOR DE AUDIO PROCEDIMENTAL
class SoundEngine {
  constructor() {
    this.ctx = null;
    this.enabled = true;
  }
  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) this.ctx = new AudioCtx();
    }
    if (this.ctx && this.ctx.state === 'suspended') this.ctx.resume();
  }
  toggle() {
    this.enabled = !this.enabled;
    return this.enabled;
  }
  playDice() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    for (let i = 0; i < 6; i++) {
      setTimeout(() => {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(150 + Math.random() * 200, this.ctx.currentTime);
        gain.gain.setValueAtTime(0.2, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.05);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + 0.05);
      }, i * 70);
    }
  }
  playStep() {
    if (!this.enabled || !this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(360, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(580, this.ctx.currentTime + 0.06);
    gain.gain.setValueAtTime(0.18, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.06);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.06);
  }
  playCard() {
    if (!this.enabled || !this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(240, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(800, this.ctx.currentTime + 0.12);
    gain.gain.setValueAtTime(0.2, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.12);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.12);
  }
  playDrink() {
    if (!this.enabled || !this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(987.77, this.ctx.currentTime);
    gain.gain.setValueAtTime(0.25, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.5);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.5);
  }
  playFanfare() {
    if (!this.enabled || !this.ctx) return;
    [523.25, 659.25, 783.99, 1046.50].forEach((freq, idx) => {
      setTimeout(() => {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'square';
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
        gain.gain.setValueAtTime(0.14, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.22);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + 0.22);
      }, idx * 110);
    });
  }
}

const sound = new SoundEngine();

// ==========================================================================
// INICIALIZACIÓN
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  setReferenceScale();
  loadCardsDatabase();
  renderPlayersScreen();
  setupEventListeners();
});

function setReferenceScale() {
  const scale = Math.min(window.innerWidth / 477, window.innerHeight / 1024);
  document.documentElement.style.setProperty('--reference-scale', String(scale));
}

window.addEventListener('resize', setReferenceScale);

function loadCardsDatabase() {
  if (window.GUATOCA_DATA) {
    STATE.cardsByMode = window.GUATOCA_DATA.byMode || {};
    STATE.allCards = window.GUATOCA_DATA.allCards || [];
    console.log('✅ Base de datos cargada: 1,073 retos listos.');
  }
}

function setupEventListeners() {
  // Botón Sonido
  const soundBtn = document.getElementById('btn-sound-toggle');
  if (soundBtn) {
    soundBtn.addEventListener('click', () => {
      const on = sound.toggle();
      soundBtn.setAttribute('aria-pressed', String(on));
      soundBtn.classList.toggle('is-muted', !on);
      soundBtn.title = on ? 'Desactivar sonido' : 'Activar sonido';
    });
  }

  // Botón EMPEZAR en pantalla de jugadores (Captura 3 -> Captura 2)
  const empezarBtn = document.getElementById('btn-empezar-lobby');
  if (empezarBtn) {
    empezarBtn.addEventListener('click', () => {
      if (STATE.players.length < 2) {
        alert('¡Añade al menos 2 jugadores para empezar!');
        return;
      }
      sound.playCard();
      showScreen('screen-choose-game');
    });
  }

  // Botón Atrás en selección de juego (Captura 2 -> Captura 3)
  const backToLobbyBtn = document.getElementById('btn-back-to-lobby');
  if (backToLobbyBtn) {
    backToLobbyBtn.addEventListener('click', () => {
      sound.playStep();
      showScreen('screen-players');
    });
  }

  // Botón Atrás en tablero de juego (Captura 4 -> Captura 2)
  const backToChooseBtn = document.getElementById('btn-back-to-choose');
  if (backToChooseBtn) {
    backToChooseBtn.addEventListener('click', () => {
      if (confirm('¿Deseas volver a la selección de tableros?')) {
        sound.playStep();
        showScreen('screen-choose-game');
      }
    });
  }

  // Pestañas TABLEROS vs MODOS (Captura 2 vs Captura 5)
  const tabTableros = document.getElementById('tab-tableros');
  const tabModos = document.getElementById('tab-modos');
  const listTableros = document.getElementById('list-tableros');
  const listModos = document.getElementById('list-modos');

  if (tabTableros && tabModos) {
    tabTableros.addEventListener('click', () => {
      tabTableros.classList.add('active');
      tabModos.classList.remove('active');
      listTableros.style.display = 'flex';
      listModos.style.display = 'none';
      STATE.selectedTab = 'tableros';
      sound.playStep();
    });

    tabModos.addEventListener('click', () => {
      tabModos.classList.add('active');
      tabTableros.classList.remove('active');
      listTableros.style.display = 'none';
      listModos.style.display = 'flex';
      STATE.selectedTab = 'modos';
      sound.playStep();
    });
  }

  // Tanto tableros como modos muestran su ficha antes de jugar.
  document.querySelectorAll('.game-capsule-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const gameKey = btn.dataset.game;
      STATE.selectedGameKey = gameKey;
      openGamePreview(gameKey);
    });
  });

  const modePreview = document.getElementById('modal-mode-preview');
  document.getElementById('btn-close-mode-preview')?.addEventListener('click', closeModePreview);
  modePreview?.addEventListener('click', (event) => { if (event.target === modePreview) closeModePreview(); });
  document.getElementById('btn-mode-preview-play')?.addEventListener('click', startSelectedMode);
  document.getElementById('btn-mode-game-back')?.addEventListener('click', () => {
    sound.playStep();
    showScreen('screen-choose-game');
  });
  document.getElementById('mode-game-actions')?.addEventListener('click', (event) => {
    const action = event.target.closest('.mode-game-action');
    if (!action) return;
    const choice = action.dataset.choice || null;
    showNextModePrompt(choice);
  });
  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape') return;
    closeModePreview();
  });

  // Botón + Añadir Jugador (abre modal)
  const playersGrid = document.getElementById('players-grid-container');
  const modal = document.getElementById('modal-add-player');
  const input = document.getElementById('new-player-name-input');
  const cancelBtn = document.getElementById('btn-cancel-add-player');
  const confirmBtn = document.getElementById('btn-confirm-add-player');

  if (playersGrid && modal) {
    playersGrid.addEventListener('click', (event) => {
      if (!event.target.closest('#btn-add-player-circle')) return;
      if (STATE.players.length >= 9) {
        alert('Máximo 9 jugadores');
        return;
      }
      modal.classList.add('open');
      input.value = '';
      selectedPlayerAvatarIndex = Math.floor(Math.random() * PLAYER_AVATARS.length);
      renderSelectedPlayerAvatar();
      sound.playStep();
    });

    const closeAddModal = () => modal.classList.remove('open');
    if (cancelBtn) cancelBtn.addEventListener('click', closeAddModal);
    document.getElementById('btn-close-add-player')?.addEventListener('click', closeAddModal);
    modal.addEventListener('click', (event) => {
      if (event.target === modal) closeAddModal();
    });
    document.getElementById('btn-player-avatar-prev')?.addEventListener('click', () => {
      selectedPlayerAvatarIndex = (selectedPlayerAvatarIndex - 1 + PLAYER_AVATARS.length) % PLAYER_AVATARS.length;
      renderSelectedPlayerAvatar();
      sound.playStep();
    });
    document.getElementById('btn-player-avatar-next')?.addEventListener('click', () => {
      selectedPlayerAvatarIndex = (selectedPlayerAvatarIndex + 1) % PLAYER_AVATARS.length;
      renderSelectedPlayerAvatar();
      sound.playStep();
    });

    const confirmAdd = () => {
      const name = input.value.trim().toLowerCase();
      if (!name) return;
      const color = PLAYER_RINGS[STATE.players.length % PLAYER_RINGS.length];
      STATE.players.push({
        id: Date.now(),
        name,
        avatar: PLAYER_AVATARS[selectedPlayerAvatarIndex].id,
        ringColor: color,
        position: 0,
        drinks: 0,
        completed: 0
      });
      closeAddModal();
      renderPlayersScreen();
      sound.playStep();
    };

    if (confirmBtn) confirmBtn.addEventListener('click', confirmAdd);
    if (input) input.addEventListener('keydown', (e) => { if (e.key === 'Enter') confirmAdd(); });
  }

  // Tirar el Dado Blanco (Captura 4)
  const die = document.getElementById('official-die');
  if (die) die.addEventListener('click', rollOfficialDie);

  // Botones de Carta Modal
  const doneBtn = document.getElementById('btn-card-done');
  const drinkBtn = document.getElementById('btn-card-drink');
  if (doneBtn) doneBtn.addEventListener('click', () => handleCardAction(true));
  if (drinkBtn) drinkBtn.addEventListener('click', () => handleCardAction(false));
}

function renderSelectedPlayerAvatar() {
  const avatar = PLAYER_AVATARS[selectedPlayerAvatarIndex] || PLAYER_AVATARS[0];
  const preview = document.getElementById('player-avatar-preview');
  const rim = document.getElementById('player-avatar-preview-rim');
  if (preview) {
    preview.textContent = avatar.emoji;
    preview.dataset.avatar = avatar.id;
  }
  if (rim) rim.dataset.avatar = avatar.id;
}

function showScreen(screenId) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const target = document.getElementById(screenId);
  if (target) target.classList.add('active');

  const appContainer = document.getElementById('app-container');
  if (screenId === 'screen-board-game') {
    appContainer.classList.add('in-game-board');
  } else {
    appContainer.classList.remove('in-game-board');
  }
}

function openGamePreview(gameKey) {
  const details = MODE_DETAILS[gameKey] || BOARD_DETAILS[gameKey];
  const modal = document.getElementById('modal-mode-preview');
  const sheet = document.getElementById('mode-preview-sheet');
  if (!details || !modal || !sheet) return;
  sheet.dataset.game = gameKey;
  document.getElementById('mode-preview-title').textContent = details.title;
  document.getElementById('mode-preview-description').textContent = details.description;
  const sample = details.sample || getModePrompt(gameKey) || STATE.cardsByMode[gameKey]?.[0] || 'Prepárense para jugar';
  document.getElementById('mode-preview-sample').textContent = sample;
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  sound.playFanfare();
}

function closeModePreview() {
  const modal = document.getElementById('modal-mode-preview');
  if (!modal) return;
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
}



function startSelectedMode() {
  const modeKey = STATE.selectedGameKey;
  closeModePreview();
  if (BOARD_DETAILS[modeKey]) {
    sound.playFanfare();
    startBoardGame();
    return;
  }
  STATE.usedModeCardTexts.clear();
  STATE.activeModeChoice = null;
  const screen = document.getElementById('screen-mode-game');
  if (screen) screen.dataset.game = modeKey;
  document.getElementById('mode-game-title').textContent = MODE_DETAILS[modeKey]?.title || '';
  renderModePlayers();
  renderModeActions(modeKey === 'tod');
  document.getElementById('mode-game-prompt').textContent = modeKey === 'tod' ? '' : getModePrompt(modeKey);
  showScreen('screen-mode-game');
  sound.playCard();
}

function renderModePlayers() {
  const row = document.getElementById('mode-game-players');
  if (!row) return;
  row.innerHTML = '';
  STATE.players.forEach((player) => {
    const item = document.createElement('div');
    item.className = 'mode-game-player';
    item.innerHTML = `<div class="turn-orb-token" style="background:${player.ringColor}">${avatarMarkup(player, 'turn-orb-face')}</div><span class="turn-player-label">${escapeHtml(player.name)}</span>`;
    row.appendChild(item);
  });
}

function renderModeActions(isTruthOrDare) {
  const actions = document.getElementById('mode-game-actions');
  if (!actions) return;
  actions.innerHTML = isTruthOrDare
    ? '<button type="button" class="mode-game-action" data-choice="truth">VERDAD</button><button type="button" class="mode-game-action" data-choice="dare">RETO</button>'
    : '<button type="button" class="mode-game-action" data-choice="next">SIGUIENTE</button>';
}

function getModePrompt(modeKey, choice = null) {
  let pool = STATE.cardsByMode[modeKey] || [];
  if (modeKey === 'nhie') pool = pool.filter(text => /^yo nunca\b/i.test(text));
  if (modeKey === 'tod') {
    pool = pool.filter(text => !/^yo nunca\b/i.test(text) && !/^(?:¿\s*)?quién\b|^(?:¿\s*)?quien\b/i.test(text));
    if (choice === 'truth') pool = pool.filter(text => /^¿/.test(text));
    if (choice === 'dare') pool = pool.filter(text => !/^¿/.test(text));
  }
  if (!pool.length) pool = STATE.cardsByMode[modeKey] || STATE.allCards.map(card => card.text);
  let available = pool.filter(text => !STATE.usedModeCardTexts.has(text));
  if (!available.length) {
    STATE.usedModeCardTexts.clear();
    available = pool;
  }
  const prompt = available[Math.floor(Math.random() * available.length)] || '';
  if (prompt) STATE.usedModeCardTexts.add(prompt);
  return prompt;
}

function showNextModePrompt(choice) {
  const modeKey = STATE.selectedGameKey;
  if (modeKey === 'tod') {
    if (['truth', 'dare'].includes(choice)) STATE.activeModeChoice = choice;
    if (!STATE.activeModeChoice) return;
    choice = STATE.activeModeChoice;
  }
  const prompt = document.getElementById('mode-game-prompt');
  if (prompt) prompt.textContent = getModePrompt(modeKey, choice);
  if (modeKey === 'tod') renderModeActions(false);
  sound.playStep();
}

// ==========================================================================
// PANTALLA 1: RENDERIZADO DE JUGADORES (CAPTURA 3)
// ==========================================================================
function renderPlayersScreen() {
  const container = document.getElementById('players-grid-container');
  if (!container) return;
  container.innerHTML = '';

  // 1. Botón + para añadir jugador
  const addBtn = document.createElement('button');
  addBtn.type = 'button';
  addBtn.setAttribute('aria-label', 'Añadir jugador');
  addBtn.className = 'add-player-circle';
  addBtn.id = 'btn-add-player-circle';
  addBtn.innerHTML = '<span class="plus-symbol" aria-hidden="true">+</span>';
  container.appendChild(addBtn);

  // 2. Fichas de los jugadores (smilies amarillos con anillo pastel)
  STATE.players.forEach(p => {
    const unit = document.createElement('div');
    unit.className = 'player-avatar-unit';
    unit.innerHTML = `
      <div class="avatar-token-rim" style="background:${p.ringColor}">
        ${avatarMarkup(p, 'avatar-inner-face')}
        <button type="button" class="token-del-cross" title="Eliminar" aria-label="Eliminar ${escapeHtml(p.name)}" data-id="${p.id}">✕</button>
      </div>
      <span class="player-unit-name">${escapeHtml(p.name)}</span>
    `;

    unit.querySelector('.token-del-cross').addEventListener('click', (e) => {
      e.stopPropagation();
      STATE.players = STATE.players.filter(pl => pl.id !== p.id);
      renderPlayersScreen();
      sound.playStep();
    });

    container.appendChild(unit);
  });
}

// ==========================================================================
// PANTALLA 3: EL TABLERO EN ESPIRAL (CAPTURA 4)
// ==========================================================================
function startBoardGame() {
  STATE.players.forEach(p => {
    p.position = 0;
    p.drinks = 0;
    p.completed = 0;
  });
  STATE.currentTurnIndex = 0;
  STATE.round = 1;
  STATE.usedCardTexts.clear();

  const boardScreen = document.getElementById('screen-board-game');
  if (boardScreen) boardScreen.dataset.game = STATE.selectedGameKey;
  const boardFrame = document.getElementById('spiral-board-frame');
  if (boardFrame) boardFrame.dataset.game = STATE.selectedGameKey;

  showScreen('screen-board-game');
  renderTurnPlayersHeader();
  renderSpiralBoard();
  setDieFace(1);
}

function renderTurnPlayersHeader() {
  const row = document.getElementById('board-turn-players-row');
  if (!row) return;
  row.innerHTML = '';

  STATE.players.forEach((p, idx) => {
    const isCurrent = idx === STATE.currentTurnIndex;
    const box = document.createElement('div');
    box.className = 'turn-player-orb-box' + (isCurrent ? ' current-turn-active' : '');
    box.innerHTML = `
      <div class="turn-orb-token ${isCurrent ? 'active-glow' : ''}" style="background:${p.ringColor}">
        ${avatarMarkup(p, 'turn-orb-face')}
      </div>
      <span class="turn-player-label">${escapeHtml(p.name)}</span>
    `;
    row.appendChild(box);
  });
}

function renderSpiralBoard() {
  const frame = document.getElementById('spiral-board-frame');
  if (!frame) return;
  frame.innerHTML = '';

  const activePlayer = STATE.players[STATE.currentTurnIndex];

  // La salida START ocupa tres celdas; los números van del 1 al 62.
  const startCell = document.createElement('div');
  startCell.className = 'spiral-cell tile-start';
  startCell.style.gridColumn = '1 / span 3';
  startCell.style.gridRow = '8';
  if (activePlayer && activePlayer.position === 0) {
    startCell.classList.add('start-reference');
  } else {
    startCell.classList.add('start-cleared');
    startCell.innerHTML = '<span class="start-text-label">START</span>';
  }
  frame.appendChild(startCell);

  // Renderizar las 62 casillas en sus coordenadas 9x8.
  SPIRAL_COORDS.forEach((c, idx) => {
    const cell = document.createElement('div');
    const colorClass = PASTEL_COLORS[idx % PASTEL_COLORS.length];
    cell.className = `spiral-cell ${colorClass}`;
    cell.id = `cell-${c.num}`;
    cell.style.gridColumn = `${c.x + 1}`;
    cell.style.gridRow = `${c.y + 1}`;

    cell.innerHTML = `<span class="cell-num">${c.num}</span>`;

    // Dibujar ficha del jugador en esta casilla
    if (activePlayer && activePlayer.position === c.num) {
      cell.appendChild(createPlayerPuck(activePlayer));
    }

    frame.appendChild(cell);
  });

  // Casilla central END (tres columnas por dos filas).
  const endCell = document.createElement('div');
  endCell.className = 'spiral-cell tile-end';
  endCell.id = 'cell-end';
  endCell.style.gridColumn = '4 / span 3';
  endCell.style.gridRow = '4 / span 2';
  endCell.innerHTML = '<span class="end-text-label">END</span>';

  // Si alguien llegó a la meta
  if (activePlayer && activePlayer.position >= 62) {
    endCell.appendChild(createPlayerPuck(activePlayer));
  }

  frame.appendChild(endCell);
}

function createPlayerPuck(player) {
  const puck = document.createElement('div');
  puck.className = 'cell-puck';
  puck.style.borderColor = player.ringColor;
  puck.textContent = PLAYER_AVATARS.find(item => item.id === player.avatar)?.emoji || '😊';
  if (player.avatar && player.avatar !== 'smile') puck.classList.add('avatar-emoji');
  puck.title = player.name;
  return puck;
}

// ==========================================================================
// TIRADA DE DADO (CAPTURA 4)
// ==========================================================================
function rollOfficialDie() {
  if (STATE.isRolling || STATE.isMoving) return;
  STATE.isRolling = true;
  sound.playDice();

  const die = document.getElementById('official-die');
  if (die) die.classList.add('die-rolling');

  setTimeout(() => {
    const roll = Math.floor(Math.random() * 6) + 1;
    if (die) {
      die.classList.remove('die-rolling');
      setDieFace(roll);
    }
    STATE.isRolling = false;
    movePlayerSpiral(roll);
  }, 650);
}

function setDieFace(num) {
  const die = document.getElementById('official-die');
  if (!die) return;
  die.className = `official-white-die die-${num}`;

  let pips = '';
  for (let i = 0; i < num; i++) {
    pips += '<div class="die-pip"></div>';
  }
  die.innerHTML = pips;
}

// Movimiento por la espiral casilla por casilla
function movePlayerSpiral(steps) {
  STATE.isMoving = true;
  const p = STATE.players[STATE.currentTurnIndex];
  const maxTile = 62;

  let remaining = steps;

  const timer = setInterval(() => {
    if (remaining > 0 && p.position < maxTile) {
      p.position++;
      remaining--;
      sound.playStep();
      renderSpiralBoard();
    } else {
      clearInterval(timer);
      STATE.isMoving = false;
      setTimeout(() => triggerTileCard(p), 350);
    }
  }, 230);
}

// Abre la carta de reto correspondiente a la casilla
function triggerTileCard(player) {
  if (player.position >= 62) {
    sound.playFanfare();
    showCardChallenge({
      badge: '🏆 ¡CAMPEÓN DE LA GUATOCA!',
      color: '#10b981',
      title: `¡${player.name.toUpperCase()} HA LLEGADO AL END!`,
      text: '¡Ha ganado la partida de La Guatoca! Todos los demás jugadores se terminan su vaso o shot ahora mismo.'
    });
    return;
  }

  // Seleccionar reto de los 957 oficiales (Español Colombia)
  const others = STATE.players.filter(pl => pl.id !== player.id);
  const otherName = others.length > 0 ? others[Math.floor(Math.random() * others.length)].name : 'Alguien';

  let pool = STATE.cardsByMode[STATE.selectedGameKey] || STATE.allCards.map(c => c.text);
  if (!pool || pool.length === 0) pool = STATE.allCards.map(c => c.text);

  let available = pool.filter(t => !STATE.usedCardTexts.has(t));
  if (available.length === 0) {
    STATE.usedCardTexts.clear();
    available = pool;
  }

  const raw = available[Math.floor(Math.random() * available.length)] || `${player.name}, toma 2 tragos o cumple un reto del grupo.`;
  STATE.usedCardTexts.add(raw);

  const formatted = raw
    .replace(/\{turn\}/g, player.name)
    .replace(/\{otherPlayer\}/g, otherName);

  const categories = [
    { badge: '🍺 TOMA', color: '#05b1df' },
    { badge: '🙈 YO NUNCA', color: '#818cf8' },
    { badge: '💬 VERDAD', color: '#c084fc' },
    { badge: '⚡ RETO', color: '#fb923c' },
    { badge: '🌶️ HOT', color: '#ff2e93' },
    { badge: '🎲 EVENTO', color: '#facc15' }
  ];
  const cat = categories[player.position % categories.length];

  showCardChallenge({
    badge: cat.badge,
    color: cat.color,
    title: `Casilla ${player.position} · Reto para ${player.name}`,
    text: formatted
  });
}

function showCardChallenge(card) {
  STATE.activeCard = card;
  sound.playCard();

  const modal = document.getElementById('modal-card-challenge');
  const badge = document.getElementById('card-badge-pill');
  const target = document.getElementById('card-target-banner');
  const prompt = document.getElementById('card-challenge-prompt');

  if (badge) {
    badge.textContent = card.badge;
    badge.style.backgroundColor = card.color;
  }
  if (target) target.textContent = card.title;
  if (prompt) prompt.textContent = card.text;

  if (modal) modal.classList.add('open');
}

function handleCardAction(isDone) {
  const modal = document.getElementById('modal-card-challenge');
  if (modal) modal.classList.remove('open');

  const p = STATE.players[STATE.currentTurnIndex];
  if (p) {
    if (isDone) {
      p.completed++;
      sound.playFanfare();
    } else {
      p.drinks++;
      sound.playDrink();
    }
  }

  // Siguiente turno
  STATE.currentTurnIndex = (STATE.currentTurnIndex + 1) % STATE.players.length;
  if (STATE.currentTurnIndex === 0) STATE.round++;

  renderTurnPlayersHeader();
  renderSpiralBoard();
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
