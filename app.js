// ==========================================================================
// GUATOCA WEB - MOTOR OFICIAL REPRODUCCIÓN EXACTA (100% FIEL A CAPTURAS)
// ==========================================================================

// Paleta de colores pastel original para el tablero (Captura 4)
const PASTEL_COLORS = ['c-pink', 'c-blue', 'c-green', 'c-yellow', 'c-peach'];

// ==========================================================================
// CONFIGURACIÓN DE TABLEROS OFICIALES DE LA GUATOCA
// ==========================================================================

// Coordenadas de la espiral clásica (Clásico, Etílico, Hot, Pareja: 9x8, 62 casillas)
const SPIRAL_COORDS_CLASSIC = [
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

// Coordenadas de la espiral Flash (Flash: 6x7, 35 casillas oficiales)
const SPIRAL_COORDS_FLASH = [
  { num: 1, x: 2, y: 6 }, { num: 2, x: 3, y: 6 }, { num: 3, x: 4, y: 6 }, { num: 4, x: 5, y: 6 },
  { num: 5, x: 5, y: 5 }, { num: 6, x: 5, y: 4 }, { num: 7, x: 5, y: 3 }, { num: 8, x: 5, y: 2 },
  { num: 9, x: 5, y: 1 }, { num: 10, x: 5, y: 0 }, { num: 11, x: 4, y: 0 }, { num: 12, x: 3, y: 0 },
  { num: 13, x: 2, y: 0 }, { num: 14, x: 1, y: 0 }, { num: 15, x: 0, y: 0 }, { num: 16, x: 0, y: 1 },
  { num: 17, x: 0, y: 2 }, { num: 18, x: 0, y: 3 }, { num: 19, x: 0, y: 4 }, { num: 20, x: 0, y: 5 },
  { num: 21, x: 1, y: 5 }, { num: 22, x: 2, y: 5 }, { num: 23, x: 3, y: 5 }, { num: 24, x: 4, y: 5 },
  { num: 25, x: 4, y: 4 }, { num: 26, x: 4, y: 3 }, { num: 27, x: 4, y: 2 }, { num: 28, x: 4, y: 1 },
  { num: 29, x: 3, y: 1 }, { num: 30, x: 2, y: 1 }, { num: 31, x: 1, y: 1 }, { num: 32, x: 1, y: 2 },
  { num: 33, x: 1, y: 3 }, { num: 34, x: 1, y: 4 }, { num: 35, x: 2, y: 4 }
];

// Coordenadas de la espiral XXL (XXL: 9x10, 85 casillas oficiales)
const SPIRAL_COORDS_XXL = [
  { num: 1, x: 6, y: 9 }, { num: 2, x: 5, y: 9 }, { num: 3, x: 4, y: 9 }, { num: 4, x: 3, y: 9 },
  { num: 5, x: 2, y: 9 }, { num: 6, x: 1, y: 9 }, { num: 7, x: 0, y: 9 }, { num: 8, x: 0, y: 8 },
  { num: 9, x: 0, y: 7 }, { num: 10, x: 0, y: 6 }, { num: 11, x: 0, y: 5 }, { num: 12, x: 0, y: 4 },
  { num: 13, x: 0, y: 3 }, { num: 14, x: 0, y: 2 }, { num: 15, x: 0, y: 1 }, { num: 16, x: 0, y: 0 },
  { num: 17, x: 1, y: 0 }, { num: 18, x: 2, y: 0 }, { num: 19, x: 3, y: 0 }, { num: 20, x: 4, y: 0 },
  { num: 21, x: 5, y: 0 }, { num: 22, x: 6, y: 0 }, { num: 23, x: 7, y: 0 }, { num: 24, x: 8, y: 0 },
  { num: 25, x: 8, y: 1 }, { num: 26, x: 8, y: 2 }, { num: 27, x: 8, y: 3 }, { num: 28, x: 8, y: 4 },
  { num: 29, x: 8, y: 5 }, { num: 30, x: 8, y: 6 }, { num: 31, x: 8, y: 7 }, { num: 32, x: 8, y: 8 },
  { num: 33, x: 7, y: 8 }, { num: 34, x: 6, y: 8 }, { num: 35, x: 5, y: 8 }, { num: 36, x: 4, y: 8 },
  { num: 37, x: 3, y: 8 }, { num: 38, x: 2, y: 8 }, { num: 39, x: 1, y: 8 }, { num: 40, x: 1, y: 7 },
  { num: 41, x: 1, y: 6 }, { num: 42, x: 1, y: 5 }, { num: 43, x: 1, y: 4 }, { num: 44, x: 1, y: 3 },
  { num: 45, x: 1, y: 2 }, { num: 46, x: 1, y: 1 }, { num: 47, x: 2, y: 1 }, { num: 48, x: 3, y: 1 },
  { num: 49, x: 4, y: 1 }, { num: 50, x: 5, y: 1 }, { num: 51, x: 6, y: 1 }, { num: 52, x: 7, y: 1 },
  { num: 53, x: 7, y: 2 }, { num: 54, x: 7, y: 3 }, { num: 55, x: 7, y: 4 }, { num: 56, x: 7, y: 5 },
  { num: 57, x: 7, y: 6 }, { num: 58, x: 7, y: 7 }, { num: 59, x: 6, y: 7 }, { num: 60, x: 5, y: 7 },
  { num: 61, x: 4, y: 7 }, { num: 62, x: 3, y: 7 }, { num: 63, x: 2, y: 7 }, { num: 64, x: 2, y: 6 },
  { num: 65, x: 2, y: 5 }, { num: 66, x: 2, y: 4 }, { num: 67, x: 2, y: 3 }, { num: 68, x: 2, y: 2 },
  { num: 69, x: 3, y: 2 }, { num: 70, x: 4, y: 2 }, { num: 71, x: 5, y: 2 }, { num: 72, x: 6, y: 2 },
  { num: 73, x: 6, y: 3 }, { num: 74, x: 6, y: 4 }, { num: 75, x: 6, y: 5 }, { num: 76, x: 6, y: 6 },
  { num: 77, x: 5, y: 6 }, { num: 78, x: 4, y: 6 }, { num: 79, x: 3, y: 6 }, { num: 80, x: 3, y: 5 },
  { num: 81, x: 3, y: 4 }, { num: 82, x: 3, y: 3 }, { num: 83, x: 4, y: 3 }, { num: 84, x: 5, y: 3 },
  { num: 85, x: 5, y: 4 }
];

// Compatibilidad
const SPIRAL_COORDS = SPIRAL_COORDS_CLASSIC;

const BOARD_CONFIGS = {
  classic: {
    maxTile: 62,
    cols: 9,
    rows: 8,
    coords: SPIRAL_COORDS_CLASSIC,
    startCol: '1 / span 3',
    startRow: '8',
    endCol: '4 / span 3',
    endRow: '4 / span 2',
    dieBorder: '#a855f7',
    dieShadow: 'rgba(168, 85, 247, 0.35)'
  },
  hammered: {
    maxTile: 62,
    cols: 9,
    rows: 8,
    coords: SPIRAL_COORDS_CLASSIC,
    startCol: '1 / span 3',
    startRow: '8',
    endCol: '4 / span 3',
    endRow: '4 / span 2',
    dieBorder: '#05b1df',
    dieShadow: 'rgba(5, 177, 223, 0.35)'
  },
  hot: {
    maxTile: 62,
    cols: 9,
    rows: 8,
    coords: SPIRAL_COORDS_CLASSIC,
    startCol: '1 / span 3',
    startRow: '8',
    endCol: '4 / span 3',
    endRow: '4 / span 2',
    dieBorder: '#ef4444',
    dieShadow: 'rgba(239, 68, 68, 0.35)'
  },
  couple: {
    maxTile: 62,
    cols: 9,
    rows: 8,
    coords: SPIRAL_COORDS_CLASSIC,
    startCol: '1 / span 3',
    startRow: '8',
    endCol: '4 / span 3',
    endRow: '4 / span 2',
    dieBorder: '#ec4899',
    dieShadow: 'rgba(236, 72, 153, 0.35)'
  },
  flash: {
    maxTile: 35,
    cols: 6,
    rows: 7,
    coords: SPIRAL_COORDS_FLASH,
    startCol: '1 / span 2',
    startRow: '7',
    endCol: '3 / span 2',
    endRow: '3 / span 3',
    dieBorder: '#3b82f6',
    dieShadow: 'rgba(59, 130, 246, 0.35)'
  },
  xxl: {
    maxTile: 85,
    cols: 9,
    rows: 10,
    coords: SPIRAL_COORDS_XXL,
    startCol: '8 / span 2',
    startRow: '10',
    endCol: '5 / span 2',
    endRow: '5 / span 2',
    dieBorder: '#ff06a7',
    dieShadow: 'rgba(255, 6, 167, 0.35)'
  }
};

function getBoardConfig(gameKey) {
  return BOARD_CONFIGS[gameKey] || BOARD_CONFIGS.classic;
}

// Colores pastel para anillos de jugadores
const PLAYER_RINGS = ['#f472b6', '#86efac', '#fde047', '#c084fc', '#fdba74', '#93c5fd', '#fca5a5'];

// ==========================================================================
// REGLA PERMANENTE DE PROYECTO / PROTECCIÓN INVIOLABLE DE AVATARES:
// NO MODIFICAR, NO ELIMINAR, NO SUSTITUIR NI ALTERAR ESTOS EMOJIS DE PORTADA.
// Han sido aprobados por el usuario como mejora definitiva del juego.
// Cualquier IA o desarrollador posterior DEBE conservar este catálogo intacto.
// ==========================================================================
const PLAYER_AVATARS = Object.freeze([
  { id: 'smile', emoji: '😀' },
  { id: 'cocktail', emoji: '🍸' },
  { id: 'diamond', emoji: '💎' },
  { id: 'beer', emoji: '🍺' },
  { id: 'fire', emoji: '🔥' },
  { id: 'cool', emoji: '😎' },
  { id: 'dice', emoji: '🎲' },
  { id: 'heart', emoji: '💜' }
]);
let selectedPlayerAvatarIndex = Math.floor(Math.random() * PLAYER_AVATARS.length);

function avatarMarkup(player, className) {
  const avatar = PLAYER_AVATARS.find(item => item.id === player.avatar) || PLAYER_AVATARS[0];
  return `<div class="${className} avatar-emoji" data-avatar="${avatar.id}" aria-hidden="true">${avatar.emoji}</div>`;
}

// ESTADO GLOBAL
const STATE = {
  players: [],
  currentTurnIndex: 0,
  selectedTab: 'tableros', // 'tableros' | 'modos'
  selectedGameKey: 'classic',
  isRolling: false,
  isMoving: false,
  isGameActive: false,
  activeScreen: 'screen-players',
  activeCard: null,
  round: 1,
  cardsByMode: {},
  allCards: [],
  usedCardTexts: new Set(),
  usedModeCardTexts: new Set(),
  activeModeChoice: null,
  deferredInstallPrompt: null,
  isAppInstalled: false,
  installButtonState: 'initial'
};

// ==========================================================================
// PERSISTENCIA EN CACHÉ / LOCALSTORAGE (SESIÓN DE PARTIDA)
// ==========================================================================
const STORAGE_KEY = 'guatoca_game_session_v1';

function saveGameState() {
  try {
    const session = {
      version: 1,
      timestamp: Date.now(),
      isGameActive: STATE.isGameActive || false,
      activeScreen: STATE.activeScreen || 'screen-players',
      selectedTab: STATE.selectedTab || 'tableros',
      selectedGameKey: STATE.selectedGameKey || 'classic',
      currentTurnIndex: STATE.currentTurnIndex || 0,
      round: STATE.round || 1,
      players: STATE.players || [],
      usedCardTexts: Array.from(STATE.usedCardTexts || []),
      usedModeCardTexts: Array.from(STATE.usedModeCardTexts || []),
      activeModeChoice: STATE.activeModeChoice || null
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(session));
  } catch (err) {
    console.warn('No se pudo guardar la sesión en caché:', err);
  }
}

function loadGameState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch (err) {
    console.warn('Error al leer sesión de caché:', err);
    return null;
  }
}

function clearGameSession() {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (_) {}
}

function showToast(message, duration = 3200) {
  let toast = document.getElementById('guatoca-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'guatoca-toast';
    toast.className = 'guatoca-toast';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toast._timeout);
  toast._timeout = setTimeout(() => {
    toast.classList.remove('show');
  }, duration);
}

function updateResumeButtonVisibility() {
  const banner = document.getElementById('resume-game-banner');
  const nameEl = document.getElementById('resume-board-name');
  const roundEl = document.getElementById('resume-round-num');
  if (!banner) return;

  if (STATE.isGameActive && STATE.players.length >= 2) {
    banner.style.display = 'flex';
    const title = BOARD_DETAILS[STATE.selectedGameKey]?.title || MODE_DETAILS[STATE.selectedGameKey]?.title || 'Partida';
    if (nameEl) nameEl.textContent = title;
    if (roundEl) roundEl.textContent = STATE.round;
  } else {
    banner.style.display = 'none';
  }
}

function restoreGameState() {
  const saved = loadGameState();
  if (!saved) return false;

  if (Array.isArray(saved.players) && saved.players.length > 0) {
    STATE.players = saved.players;
  }
  if (saved.selectedTab) STATE.selectedTab = saved.selectedTab;
  if (saved.selectedGameKey) STATE.selectedGameKey = saved.selectedGameKey;
  if (typeof saved.currentTurnIndex === 'number') STATE.currentTurnIndex = saved.currentTurnIndex;
  if (typeof saved.round === 'number') STATE.round = saved.round;
  if (Array.isArray(saved.usedCardTexts)) STATE.usedCardTexts = new Set(saved.usedCardTexts);
  if (Array.isArray(saved.usedModeCardTexts)) STATE.usedModeCardTexts = new Set(saved.usedModeCardTexts);
  if (saved.activeModeChoice) STATE.activeModeChoice = saved.activeModeChoice;
  STATE.isGameActive = !!saved.isGameActive;

  // Restaurar pantalla si había una partida activa en el tablero
  if (STATE.isGameActive && saved.activeScreen === 'screen-board-game' && STATE.players.length >= 2) {
    startBoardGame(true);
    showToast(`💾 Partida reanudada en Casilla ${STATE.players[STATE.currentTurnIndex]?.position || 0} (Ronda ${STATE.round})`);
    return true;
  } else if (STATE.isGameActive && saved.activeScreen === 'screen-mode-game' && STATE.players.length >= 2) {
    restoreModeGame(saved.selectedGameKey);
    showToast('💾 Modo de juego reanudado');
    return true;
  } else if (saved.activeScreen === 'screen-choose-game' && STATE.players.length >= 2) {
    renderPlayersScreen();
    showScreen('screen-choose-game');
    showToast('👥 Jugadores guardados listos');
    return true;
  } else {
    renderPlayersScreen();
    if (STATE.players.length > 0) {
      showToast('👥 Jugadores guardados cargados');
    }
    return false;
  }
}

function restoreModeGame(modeKey) {
  closeModePreview();
  const screen = document.getElementById('screen-mode-game');
  if (screen) screen.dataset.game = modeKey;
  document.getElementById('mode-game-title').textContent = MODE_DETAILS[modeKey]?.title || '';
  renderModePlayers();
  renderModeActions(modeKey === 'tod');
  if (modeKey !== 'tod') {
    const prompt = document.getElementById('mode-game-prompt');
    if (prompt && !prompt.textContent) {
      prompt.textContent = getModePrompt(modeKey);
    }
  }
  showScreen('screen-mode-game');
}

function resetBoardGame() {
  STATE.players.forEach(p => {
    p.position = 0;
    p.drinks = 0;
    p.completed = 0;
  });
  STATE.currentTurnIndex = 0;
  STATE.round = 1;
  STATE.usedCardTexts.clear();
  STATE.isGameActive = true;

  renderTurnPlayersHeader();
  renderSpiralBoard();
  setDieFace(1);
  saveGameState();
  sound.playStep();
  showToast('🔄 Partida reiniciada desde la casilla 0');
}

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
  playFlip() {
    if (!this.enabled || !this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(340, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(120, this.ctx.currentTime + 0.15);
      gain.gain.setValueAtTime(0.22, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.15);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.15);
    } catch (_) {}
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

// ==========================================================================
// MOTOR DE AMBIENTES DINÁMICOS Y ANIMACIONES VISUALES PREMIUM (GUATOCA FX)
// ==========================================================================

class AmbientFXEngine {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.particles = [];
    this.maxParticles = 24;
    this.currentMode = 'screen-players';
    this.animId = null;
    this.isRunning = false;
    this.prefersReducedMotion = false;
    this.width = 0;
    this.height = 0;

    this.checkReducedMotion();
    this.resize();
    window.addEventListener('resize', () => this.resize());
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) this.stop();
      else if (!this.prefersReducedMotion) this.start();
    });

    this.initParticles();
    this.start();
  }

  checkReducedMotion() {
    this.prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  resize() {
    if (!this.canvas) return;
    const parent = this.canvas.parentElement || document.getElementById('app-container');
    if (!parent) return;
    const rect = parent.getBoundingClientRect ? parent.getBoundingClientRect() : { width: 480, height: 800 };
    this.width = rect.width || 480;
    this.height = rect.height || 800;
    this.canvas.width = this.width;
    this.canvas.height = this.height;
  }

  setMode(mode) {
    this.currentMode = mode;
    this.particles.forEach(p => this.resetParticle(p));
  }

  initParticles() {
    this.particles = [];
    for (let i = 0; i < this.maxParticles; i++) {
      const p = this.createParticle();
      p.y = Math.random() * (this.height || 800);
      this.particles.push(p);
    }
  }

  createParticle() {
    const p = {};
    this.resetParticle(p);
    return p;
  }

  resetParticle(p) {
    p.x = Math.random() * (this.width || 480);
    p.y = (this.height || 800) + 10 + Math.random() * 30;
    p.opacity = 0.2 + Math.random() * 0.55;
    p.wobble = Math.random() * Math.PI * 2;
    p.wobbleSpeed = 0.02 + Math.random() * 0.03;

    switch (this.currentMode) {
      case 'hammered': // Etílico (burbujas efervescentes)
        p.type = 'bubble';
        p.size = 3 + Math.random() * 7;
        p.speedY = 1.2 + Math.random() * 1.8;
        p.color = Math.random() > 0.4 ? 'rgba(5, 177, 223, ' : 'rgba(110, 231, 183, ';
        break;
      case 'hot': // Hot (brasas ardientes)
        p.type = 'ember';
        p.size = 2 + Math.random() * 5;
        p.speedY = 1.0 + Math.random() * 1.6;
        p.color = Math.random() > 0.5 ? 'rgba(239, 68, 68, ' : (Math.random() > 0.3 ? 'rgba(249, 115, 22, ' : 'rgba(253, 224, 71, ');
        break;
      case 'couple': // Pareja (corazones y polvo de estrellas)
        p.type = Math.random() > 0.4 ? 'heart' : 'sparkle';
        p.size = 5 + Math.random() * 6;
        p.speedY = 0.5 + Math.random() * 0.9;
        p.color = 'rgba(244, 114, 182, ';
        break;
      case 'flash': // Flash (destellos eléctricos)
        p.type = 'electric';
        p.size = 3 + Math.random() * 5;
        p.speedY = 1.5 + Math.random() * 2.2;
        p.color = Math.random() > 0.5 ? 'rgba(59, 130, 246, ' : 'rgba(147, 197, 253, ';
        break;
      case 'xxl': // XXL (confeti de fiesta)
        p.type = Math.random() > 0.5 ? 'confetti' : 'bubble';
        p.size = 3 + Math.random() * 6;
        p.speedY = 0.8 + Math.random() * 1.4;
        const xxlColors = ['rgba(255, 6, 167, ', 'rgba(245, 158, 11, ', 'rgba(6, 182, 212, ', 'rgba(168, 85, 247, '];
        p.color = xxlColors[Math.floor(Math.random() * xxlColors.length)];
        p.rot = Math.random() * Math.PI * 2;
        p.rotSpeed = 0.04 * (Math.random() - 0.5);
        break;
      case 'screen-choose-game':
        p.type = Math.random() > 0.6 ? 'sparkle' : 'bubble';
        p.size = 4 + Math.random() * 8;
        p.speedY = 0.6 + Math.random() * 1.0;
        p.color = Math.random() > 0.5 ? 'rgba(192, 132, 252, ' : 'rgba(244, 114, 182, ';
        break;
      default: // Clásico y lobby
        p.type = Math.random() > 0.5 ? 'bubble' : 'sparkle';
        p.size = 4 + Math.random() * 8;
        p.speedY = 0.6 + Math.random() * 1.1;
        p.color = Math.random() > 0.5 ? 'rgba(192, 132, 252, ' : 'rgba(216, 180, 254, ';
        break;
    }
  }

  update() {
    const ctx = this.ctx;
    if (!ctx) return;
    ctx.clearRect(0, 0, this.width, this.height);

    for (let i = 0; i < this.particles.length; i++) {
      const p = this.particles[i];
      p.y -= p.speedY;
      p.wobble += p.wobbleSpeed;
      p.x += Math.sin(p.wobble) * 0.9;

      if (p.y < -30) {
        this.resetParticle(p);
      }

      ctx.save();
      ctx.fillStyle = p.color + p.opacity + ')';

      if (p.type === 'bubble') {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = 'rgba(255, 255, 255, ' + (p.opacity * 0.6) + ')';
        ctx.beginPath();
        ctx.arc(p.x - p.size * 0.3, p.y - p.size * 0.3, p.size * 0.28, 0, Math.PI * 2);
        ctx.fill();
      } else if (p.type === 'heart') {
        this.drawHeart(ctx, p.x, p.y, p.size);
      } else if (p.type === 'sparkle') {
        this.drawSparkle(ctx, p.x, p.y, p.size);
      } else if (p.type === 'ember') {
        ctx.shadowColor = p.color + '0.8)';
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      } else if (p.type === 'electric') {
        ctx.shadowColor = '#60a5fa';
        ctx.shadowBlur = 6;
        ctx.fillRect(p.x, p.y, p.size * 0.7, p.size * 2.2);
      } else if (p.type === 'confetti') {
        p.rot = (p.rot || 0) + (p.rotSpeed || 0.02);
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 1.4);
      }

      ctx.restore();
    }
  }

  drawSparkle(ctx, cx, cy, size) {
    ctx.beginPath();
    ctx.moveTo(cx, cy - size);
    ctx.quadraticCurveTo(cx, cy, cx + size, cy);
    ctx.quadraticCurveTo(cx, cy, cx, cy + size);
    ctx.quadraticCurveTo(cx, cy, cx - size, cy);
    ctx.quadraticCurveTo(cx, cy, cx, cy - size);
    ctx.fill();
  }

  drawHeart(ctx, x, y, size) {
    ctx.beginPath();
    const topCurveHeight = size * 0.3;
    ctx.moveTo(x, y + topCurveHeight);
    ctx.bezierCurveTo(x, y, x - size / 2, y, x - size / 2, y + topCurveHeight);
    ctx.bezierCurveTo(x - size / 2, y + (size + topCurveHeight) / 2, x, y + (size + topCurveHeight) / 1.4, x, y + size);
    ctx.bezierCurveTo(x, y + (size + topCurveHeight) / 1.4, x + size / 2, y + (size + topCurveHeight) / 2, x + size / 2, y + topCurveHeight);
    ctx.bezierCurveTo(x + size / 2, y, x, y, x, y + topCurveHeight);
    ctx.fill();
  }

  start() {
    if (this.isRunning || this.prefersReducedMotion) return;
    this.isRunning = true;
    const loop = () => {
      if (!this.isRunning) return;
      this.update();
      this.animId = requestAnimationFrame(loop);
    };
    this.animId = requestAnimationFrame(loop);
  }

  stop() {
    this.isRunning = false;
    if (this.animId) cancelAnimationFrame(this.animId);
  }
}

class CelebrationFXEngine {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.particles = [];
    this.animId = null;
    this.isRunning = false;
    this.resize();
    window.addEventListener('resize', () => this.resize());
  }

  resize() {
    if (!this.canvas) return;
    const parent = this.canvas.parentElement || document.getElementById('app-container');
    if (!parent) return;
    const rect = parent.getBoundingClientRect ? parent.getBoundingClientRect() : { width: 480, height: 800 };
    this.canvas.width = rect.width || 480;
    this.canvas.height = rect.height || 800;
  }

  burst(x, y, colors, count = 35) {
    this.resize();
    const defaultColors = ['#f43f5e', '#ec4899', '#8b5cf6', '#3b82f6', '#10b981', '#f59e0b', '#ffd24c'];
    const palette = colors || defaultColors;

    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 3.5 + Math.random() * 7.5;
      this.particles.push({
        x: x || this.canvas.width / 2,
        y: y || this.canvas.height / 2,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 2.5,
        size: 5 + Math.random() * 6,
        color: palette[Math.floor(Math.random() * palette.length)],
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.25,
        alpha: 1,
        decay: 0.015 + Math.random() * 0.015,
        gravity: 0.18
      });
    }

    if (!this.isRunning) {
      this.start();
    }
  }

  victoryCelebration() {
    this.resize();
    const w = this.canvas.width;
    const h = this.canvas.height;
    this.burst(w * 0.2, h * 0.7, null, 45);
    this.burst(w * 0.8, h * 0.7, null, 45);
    setTimeout(() => {
      this.burst(w * 0.5, h * 0.4, null, 60);
    }, 350);
  }

  start() {
    this.isRunning = true;
    const loop = () => {
      if (this.particles.length === 0) {
        this.isRunning = false;
        if (this.ctx) this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        return;
      }
      this.update();
      this.animId = requestAnimationFrame(loop);
    };
    this.animId = requestAnimationFrame(loop);
  }

  update() {
    const ctx = this.ctx;
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += p.gravity;
      p.vx *= 0.98;
      p.rotation += p.rotSpeed;
      p.alpha -= p.decay;

      if (p.alpha <= 0) {
        this.particles.splice(i, 1);
        continue;
      }

      ctx.save();
      ctx.globalAlpha = Math.max(0, p.alpha);
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 1.5);
      ctx.restore();
    }
  }
}

let ambientFX = null;
let celebrationFX = null;

const sound = new SoundEngine();

// ==========================================================================
// INICIALIZACIÓN
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  ambientFX = new AmbientFXEngine('ambient-canvas');
  celebrationFX = new CelebrationFXEngine('celebration-canvas');
  loadCardsDatabase();
  setupEventListeners();
  const restored = restoreGameState();
  if (!restored) {
    renderPlayersScreen();
  }
  initPwaManager();
});

function loadCardsDatabase() {
  if (window.GUATOCA_DATA) {
    STATE.cardsByMode = window.GUATOCA_DATA.byMode || {};
    STATE.allCards = window.GUATOCA_DATA.allCards || [];
    console.log('✅ Base de datos cargada: 1,073 retos listos.');
  }
}

function setupEventListeners() {
  // Botón Reanudar Partida Guardada (Caché / LocalStorage)
  const resumeBtn = document.getElementById('btn-resume-game');
  if (resumeBtn) {
    resumeBtn.addEventListener('click', () => {
      sound.playFanfare();
      if (celebrationFX) {
        celebrationFX.burst(null, null, ['#8b5cf6', '#ec4899', '#38bdf8', '#ffd24c'], 24);
      }
      startBoardGame(true);
    });
  }

  // Botón Reiniciar Partida en Tablero
  const resetBtn = document.getElementById('btn-reset-board-game');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      if (confirm('¿Deseas reiniciar la partida? Las posiciones de todos los jugadores volverán a la casilla 0.')) {
        resetBoardGame();
      }
    });
  }

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
      saveGameState();
      sound.playStep();
      if (celebrationFX) {
        celebrationFX.burst(null, null, [color, '#ffffff', '#ffd24c'], 14);
      }
    };

    if (confirmBtn) confirmBtn.addEventListener('click', confirmAdd);
    if (input) input.addEventListener('keydown', (e) => { if (e.key === 'Enter') confirmAdd(); });
  }

  // Tirar el Dado Blanco (Captura 4)
  const die = document.getElementById('official-die');
  if (die) die.addEventListener('click', rollOfficialDie);

  // Tarjeta 3D Volteable Oficial (Física y lógica de toque idéntica a Unity)
  const cardWrapper = document.getElementById('card-3d-wrapper');
  if (cardWrapper) {
    cardWrapper.addEventListener('click', onCardWrapperClick);
    cardWrapper.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        onCardWrapperClick();
      }
    });
  }

  // Botones opcionales de Acción en Carta Modal
  const doneBtn = document.getElementById('btn-card-done');
  const drinkBtn = document.getElementById('btn-card-drink');
  if (doneBtn) doneBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    handleCardAction(true);
  });
  if (drinkBtn) drinkBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    handleCardAction(false);
  });
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
    document.body.classList.add('in-game-board');
    if (typeof hidePwaInviteBanner === 'function') hidePwaInviteBanner(false);
  } else {
    appContainer.classList.remove('in-game-board');
    document.body.classList.remove('in-game-board');
  }

  STATE.activeScreen = screenId;
  if (ambientFX) {
    if (screenId === 'screen-board-game') {
      ambientFX.setMode(STATE.selectedGameKey || 'classic');
    } else {
      ambientFX.setMode(screenId);
    }
  }
  updateResumeButtonVisibility();
  saveGameState();
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
  if (ambientFX) {
    ambientFX.setMode(gameKey);
  }
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
    startBoardGame(false);
    return;
  }
  STATE.isGameActive = true;
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
  saveGameState();
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
  saveGameState();
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
      saveGameState();
      sound.playStep();
    });

    container.appendChild(unit);
  });
}

// ==========================================================================
// PANTALLA 3: EL TABLERO EN ESPIRAL (CAPTURA 4)
// ==========================================================================
function startBoardGame(isRestoring = false) {
  if (!isRestoring) {
    STATE.players.forEach(p => {
      p.position = 0;
      p.drinks = 0;
      p.completed = 0;
    });
    STATE.currentTurnIndex = 0;
    STATE.round = 1;
    STATE.usedCardTexts.clear();
  }

  STATE.isGameActive = true;

  const boardScreen = document.getElementById('screen-board-game');
  if (boardScreen) boardScreen.dataset.game = STATE.selectedGameKey;
  const boardFrame = document.getElementById('spiral-board-frame');
  if (boardFrame) boardFrame.dataset.game = STATE.selectedGameKey;

  showScreen('screen-board-game');
  renderTurnPlayersHeader();
  renderSpiralBoard();
  setDieFace(1);
  saveGameState();
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

  const boardConfig = getBoardConfig(STATE.selectedGameKey);
  frame.dataset.game = STATE.selectedGameKey;

  // Celda START adaptada a la geometría de cada tablero
  const startCell = document.createElement('div');
  startCell.className = 'spiral-cell tile-start';
  startCell.style.gridColumn = boardConfig.startCol;
  startCell.style.gridRow = boardConfig.startRow;

  // Renderizar a todos los jugadores que estén en la casilla de salida (0)
  const playersAtStart = STATE.players.filter(p => p.position === 0);
  if (playersAtStart.length > 0) {
    startCell.appendChild(createPucksWrapper(playersAtStart));
  }
  frame.appendChild(startCell);

  // Renderizar las casillas en sus coordenadas correspondientes
  boardConfig.coords.forEach((c, idx) => {
    const cell = document.createElement('div');
    const colorClass = PASTEL_COLORS[idx % PASTEL_COLORS.length];
    cell.className = `spiral-cell ${colorClass}`;
    cell.id = `cell-${c.num}`;
    cell.style.gridColumn = `${c.x + 1}`;
    cell.style.gridRow = `${c.y + 1}`;

    cell.innerHTML = `<span class="cell-num">${c.num}</span>`;

    // Dibujar a TODOS los jugadores que estén en esta casilla
    const playersHere = STATE.players.filter(p => p.position === c.num);
    if (playersHere.length > 0) {
      cell.appendChild(createPucksWrapper(playersHere));
    }

    frame.appendChild(cell);
  });

  // Casilla central END adaptada al tablero
  const endCell = document.createElement('div');
  endCell.className = 'spiral-cell tile-end';
  endCell.id = 'cell-end';
  endCell.style.gridColumn = boardConfig.endCol;
  endCell.style.gridRow = boardConfig.endRow;

  // Si alguien llegó a la meta
  const playersAtEnd = STATE.players.filter(p => p.position >= boardConfig.maxTile);
  if (playersAtEnd.length > 0) {
    endCell.appendChild(createPucksWrapper(playersAtEnd));
  }

  frame.appendChild(endCell);
}

function createPucksWrapper(players) {
  const wrapper = document.createElement('div');
  wrapper.className = 'cell-pucks-wrapper';
  const sizeClass = players.length === 1 ? 'puck-size-1' : players.length === 2 ? 'puck-size-2' : 'puck-size-multi';

  players.forEach(p => {
    const isCurrent = STATE.players[STATE.currentTurnIndex]?.id === p.id;
    const isHopping = isCurrent && STATE.isMoving;
    const puck = document.createElement('div');
    puck.className = `cell-puck ${sizeClass}${isCurrent ? ' puck-active-turn' : ''}${isHopping ? ' puck-hopping' : ''}`;
    puck.style.borderColor = p.ringColor;
    const avatarObj = PLAYER_AVATARS.find(item => item.id === p.avatar) || PLAYER_AVATARS[0];
    puck.textContent = avatarObj.emoji;
    puck.title = `${p.name} (Casilla ${p.position})`;
    wrapper.appendChild(puck);
  });

  return wrapper;
}

// ==========================================================================
// TIRADA DE DADO (CAPTURA 4)
// ==========================================================================
function rollOfficialDie() {
  if (STATE.isRolling || STATE.isMoving) return;
  STATE.isRolling = true;
  sound.playDice();

  const die = document.getElementById('official-die');
  if (die) {
    die.classList.remove('die-landing');
    die.classList.add('die-rolling');
  }

  // Animación dinámica de caras parpadeando durante el rodamiento 3D
  let flickerCount = 0;
  const flickerInterval = setInterval(() => {
    flickerCount++;
    const randomFace = Math.floor(Math.random() * 6) + 1;
    setDieFace(randomFace);
    if (flickerCount >= 8) {
      clearInterval(flickerInterval);
    }
  }, 70);

  setTimeout(() => {
    clearInterval(flickerInterval);
    const roll = Math.floor(Math.random() * 6) + 1;
    if (die) {
      die.classList.remove('die-rolling');
      setDieFace(roll);
      die.classList.add('die-landing');
      setTimeout(() => die.classList.remove('die-landing'), 380);

      // Destellos efervescentes al impactar el dado
      if (celebrationFX) {
        const rect = die.getBoundingClientRect();
        const appRect = document.getElementById('app-container')?.getBoundingClientRect();
        const x = appRect ? (rect.left - appRect.left + rect.width / 2) : rect.left + rect.width / 2;
        const y = appRect ? (rect.top - appRect.top + rect.height / 2) : rect.top + rect.height / 2;
        const boardCfg = getBoardConfig(STATE.selectedGameKey);
        celebrationFX.burst(x, y, [boardCfg.dieBorder, '#ffd24c', '#ffffff'], 18);
      }
    }
    STATE.isRolling = false;
    setTimeout(() => {
      movePlayerSpiral(roll);
    }, 180);
  }, 650);
}

const DIE_PIP_POSITIONS = {
  1: ['pip-center'],
  2: ['pip-top-right', 'pip-bottom-left'],
  3: ['pip-top-left', 'pip-center', 'pip-bottom-right'],
  4: ['pip-top-left', 'pip-top-right', 'pip-bottom-left', 'pip-bottom-right'],
  5: ['pip-top-left', 'pip-top-right', 'pip-center', 'pip-bottom-left', 'pip-bottom-right'],
  6: ['pip-top-left', 'pip-mid-left', 'pip-bottom-left', 'pip-top-right', 'pip-mid-right', 'pip-bottom-right']
};

function setDieFace(num) {
  const die = document.getElementById('official-die');
  if (!die) return;
  const boardConfig = getBoardConfig(STATE.selectedGameKey);
  die.className = `official-white-die die-${num}`;
  die.style.borderColor = boardConfig.dieBorder;
  die.style.boxShadow = `0 8px 24px ${boardConfig.dieShadow}`;

  const pips = DIE_PIP_POSITIONS[num] || DIE_PIP_POSITIONS[1];
  die.innerHTML = pips.map(pos => `<div class="die-pip ${pos}"></div>`).join('');
}

// Movimiento por la espiral casilla por casilla
function movePlayerSpiral(steps) {
  STATE.isMoving = true;
  const p = STATE.players[STATE.currentTurnIndex];
  const boardConfig = getBoardConfig(STATE.selectedGameKey);
  const maxTile = boardConfig.maxTile;

  let remaining = steps;

  const timer = setInterval(() => {
    if (remaining > 0 && p.position < maxTile) {
      p.position++;
      remaining--;
      sound.playStep();
      renderSpiralBoard();
      saveGameState();
    } else {
      clearInterval(timer);
      STATE.isMoving = false;
      saveGameState();
      setTimeout(() => triggerTileCard(p), 350);
    }
  }, 230);
}

let currentCardState = 'NONE'; // 'NONE' | 'WAITING_FLIP' | 'SHOWING'
let lastCardFlipTimestamp = 0;

// Abre la carta de reto correspondiente a la casilla
function triggerTileCard(player) {
  const boardConfig = getBoardConfig(STATE.selectedGameKey);
  if (player.position >= boardConfig.maxTile) {
    sound.playFanfare();
    if (celebrationFX) {
      celebrationFX.victoryCelebration();
    }
    showCardChallenge({
      type: 'event',
      category: '🏆 ¡CAMPEÓN!',
      title: `¡${player.name.toUpperCase()} HA LLEGADO AL FINAL!`,
      text: '¡Ha ganado la partida de La Guatoca! Todos los demás jugadores se terminan su vaso o shot ahora mismo.'
    });
    STATE.isGameActive = false;
    saveGameState();
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

  // Mapeo dinámico a las 6 categorías oficiales extraídas de Unity IL2CPP
  const lower = formatted.toLowerCase();
  let cardType = 'drink';
  let categoryName = 'TOMAR';

  if (lower.startsWith('yo nunca')) {
    cardType = 'nhie';
    categoryName = 'YO NUNCA';
  } else if (lower.startsWith('verdad') || lower.includes('confiesa')) {
    cardType = 'truth';
    categoryName = 'VERDAD';
  } else if (lower.startsWith('reto') || lower.includes('imita') || lower.includes('baila')) {
    cardType = 'dare';
    categoryName = 'RETO';
  } else if (STATE.selectedGameKey === 'hot' || lower.includes('beso') || lower.includes('sex') || lower.includes('desnúd') || lower.includes('ropa')) {
    cardType = 'hot';
    categoryName = 'HOT';
  } else if (player.position % 5 === 0 || lower.includes('todos') || lower.includes('ronda')) {
    cardType = 'event';
    categoryName = 'EVENTO';
  } else {
    cardType = 'drink';
    categoryName = 'TOMAR';
  }

  showCardChallenge({
    type: cardType,
    category: categoryName,
    title: `Casilla ${player.position} · Turno de ${player.name}`,
    text: formatted
  });
}

function showCardChallenge(card) {
  STATE.activeCard = card;
  sound.playCard();

  const modal = document.getElementById('modal-card-challenge');
  const target = document.getElementById('card-target-banner');
  const frontTitle = document.getElementById('card-front-title');
  const prompt = document.getElementById('card-challenge-prompt');
  const wrapper = document.getElementById('card-3d-wrapper');
  const frontFace = document.getElementById('card-face-front');
  const backFace = document.getElementById('card-face-back');
  const actionsWrapper = document.getElementById('card-actions-wrapper');

  if (target) target.textContent = card.title;
  if (frontTitle) frontTitle.textContent = card.category;
  if (prompt) prompt.textContent = card.text;

  // Cargar sprites oficiales 1:1 extraídos de Unity
  if (frontFace) frontFace.style.backgroundImage = `url('assets/original/cards/front_${card.type}.png')`;
  if (backFace) backFace.style.backgroundImage = `url('assets/original/cards/back_${card.type}.png')`;

  // Estado inicial: WAITING_FLIP (Mostrando el anverso de la categoría)
  currentCardState = 'WAITING_FLIP';
  lastCardFlipTimestamp = 0;
  if (wrapper) wrapper.classList.remove('flipped');
  if (actionsWrapper) actionsWrapper.classList.remove('visible');

  if (modal) modal.classList.add('open');
}

function onCardWrapperClick() {
  if (currentCardState === 'WAITING_FLIP') {
    // 3D Flip rotación en eje Y de 0 a 180 grados con física elástica
    const wrapper = document.getElementById('card-3d-wrapper');
    const actionsWrapper = document.getElementById('card-actions-wrapper');
    if (wrapper) wrapper.classList.add('flipped');
    if (actionsWrapper) actionsWrapper.classList.add('visible');
    sound.playFlip();
    if (celebrationFX) {
      const modal = document.getElementById('modal-card-challenge');
      const rect = modal?.getBoundingClientRect();
      const x = rect ? rect.width / 2 : 240;
      const y = rect ? rect.height * 0.45 : 350;
      celebrationFX.burst(x, y, ['#f43f5e', '#a855f7', '#38bdf8', '#fbbf24', '#ffffff'], 24);
    }
    currentCardState = 'SHOWING';
    lastCardFlipTimestamp = Date.now();
  } else if (currentCardState === 'SHOWING') {
    // Cooldown para evitar que toques rápidos o doble-toque en móvil descarten la carta sin leerla
    if (Date.now() - lastCardFlipTimestamp < 450) {
      return;
    }
    // Al tocar la carta de nuevo se descarta y avanza turno automáticamente como en la app oficial
    handleCardAction(true);
  }
}

function handleCardAction(isDone) {
  currentCardState = 'NONE';
  const modal = document.getElementById('modal-card-challenge');
  const wrapper = document.getElementById('card-3d-wrapper');
  const actionsWrapper = document.getElementById('card-actions-wrapper');

  if (modal) modal.classList.remove('open');
  if (wrapper) wrapper.classList.remove('flipped');
  if (actionsWrapper) actionsWrapper.classList.remove('visible');

  const p = STATE.players[STATE.currentTurnIndex];
  if (p) {
    if (isDone) {
      p.completed++;
      sound.playFanfare();
      if (celebrationFX) {
        celebrationFX.burst(null, null, ['#10b981', '#34d399', '#6ee7b7', '#ffd24c'], 28);
      }
    } else {
      p.drinks++;
      sound.playDrink();
      if (celebrationFX) {
        celebrationFX.burst(null, null, ['#f59e0b', '#fbbf24', '#fcd34d', '#f97316'], 20);
      }
    }
  }

  // Siguiente turno
  STATE.currentTurnIndex = (STATE.currentTurnIndex + 1) % STATE.players.length;
  if (STATE.currentTurnIndex === 0) STATE.round++;

  renderTurnPlayersHeader();
  renderSpiralBoard();
  saveGameState();
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// ==========================================================================
// PWA MANAGER: INSTALACIÓN, SERVICE WORKER, BANNER Y COMPATIBILIDAD
// ==========================================================================

const PWA_STORAGE_DISMISSED_KEY = 'guatoca_pwa_invite_dismissed';
const PWA_DISMISS_COOLDOWN_MS = 3 * 24 * 60 * 60 * 1000; // 3 días de cortesía

function isRunningStandalone() {
  return (
    window.matchMedia('(display-mode: standalone)').matches ||
    window.matchMedia('(display-mode: window-controls-overlay)').matches ||
    window.matchMedia('(display-mode: minimal-ui)').matches ||
    navigator.standalone === true ||
    document.referrer.includes('android-app://')
  );
}

function initPwaManager() {
  // 1. Detección de modo instalado / standalone
  if (isRunningStandalone()) {
    STATE.isAppInstalled = true;
    document.body.classList.add('is-standalone');
    updateInstallButtonState('installed');
  }

  // 2. Registro seguro del Service Worker
  registerServiceWorker();

  // 3. Captura del evento de instalación nativa (Chromium / Android)
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    STATE.deferredInstallPrompt = e;
    updateInstallButtonState('available');
    console.log('[PWA] Evento beforeinstallprompt capturado y listo para instalar');
  });

  // 4. Notificación cuando la instalación concluye con éxito
  window.addEventListener('appinstalled', () => {
    STATE.deferredInstallPrompt = null;
    STATE.isAppInstalled = true;
    document.body.classList.add('is-standalone');
    updateInstallButtonState('installed');
    hidePwaInviteBanner(true);
    showToast('¡Guatoca se ha instalado correctamente! 🎉');
    console.log('[PWA] Guatoca instalada');
  });

  // 5. Configurar los botones de instalación en la interfaz
  setupInstallButtons();

  // 6. Configurar modales y eventos de la PWA
  setupPwaModals();

  // 7. Programar aviso de invitación suave al entrar
  schedulePwaInvite();
}

function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js')
        .then((registration) => {
          console.log('[PWA] Service Worker activo con alcance:', registration.scope);
          // Detección de actualización disponible
          registration.addEventListener('updatefound', () => {
            const newWorker = registration.installing;
            if (newWorker) {
              newWorker.addEventListener('statechange', () => {
                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                  console.log('[PWA] Nueva versión de Guatoca lista para actualizar');
                }
              });
            }
          });
        })
        .catch((err) => {
          console.warn('[PWA] Registro de Service Worker omitido o no compatible en este entorno:', err);
        });
    });
  }
}

function setupInstallButtons() {
  const headerBtn = document.getElementById('btn-pwa-install-header');
  const chooseBtn = document.getElementById('btn-pwa-install-header-choose');

  const onInstallClick = (e) => {
    e.preventDefault();
    sound.playStep();
    triggerPwaInstall();
  };

  if (headerBtn) headerBtn.addEventListener('click', onInstallClick);
  if (chooseBtn) chooseBtn.addEventListener('click', onInstallClick);
}

function updateInstallButtonState(state) {
  STATE.installButtonState = state;
  const buttons = [
    document.getElementById('btn-pwa-install-header'),
    document.getElementById('btn-pwa-install-header-choose')
  ].filter(Boolean);

  buttons.forEach((btn) => {
    if (state === 'installed') {
      btn.style.display = 'none';
    } else if (state === 'available') {
      btn.style.display = 'inline-flex';
      btn.title = 'Instalar Guatoca directamente en tu dispositivo';
      const text = btn.querySelector('.pwa-install-text');
      if (text) text.textContent = 'Instalar Guatoca';
    } else if (state === 'accepted') {
      btn.style.opacity = '0.7';
      const text = btn.querySelector('.pwa-install-text');
      if (text) text.textContent = 'Instalando...';
    } else if (state === 'dismissed') {
      btn.style.opacity = '1';
      const text = btn.querySelector('.pwa-install-text');
      if (text) text.textContent = 'Instalar Guatoca';
    }
  });
}

async function triggerPwaInstall() {
  // Caso A: Instalación directa disponible (Android / Chrome / Edge)
  if (STATE.deferredInstallPrompt) {
    try {
      const promptEvent = STATE.deferredInstallPrompt;
      STATE.deferredInstallPrompt = null;
      await promptEvent.prompt();
      const choice = await promptEvent.userChoice;
      if (choice && choice.outcome === 'accepted') {
        sound.playFanfare();
        updateInstallButtonState('accepted');
        showToast('¡Instalando La Guatoca! 🚀');
      } else {
        updateInstallButtonState('dismissed');
      }
    } catch (err) {
      console.warn('[PWA] Error al invocar prompt de instalación:', err);
      openPwaInstructionsModal();
    }
  } else {
    // Caso B: No hay evento beforeinstallprompt (iOS Safari, Firefox o manual)
    openPwaInstructionsModal();
  }
}

function detectPlatform() {
  const ua = navigator.userAgent || navigator.vendor || window.opera || '';
  if (/iPhone|iPad|iPod/i.test(ua) || (/Macintosh/i.test(ua) && navigator.maxTouchPoints > 1)) {
    return 'ios';
  }
  if (/Android/i.test(ua)) {
    return 'android';
  }
  return 'desktop';
}

function openPwaInstructionsModal() {
  const modal = document.getElementById('modal-pwa-instructions');
  if (!modal) return;

  const platform = detectPlatform();
  selectPwaTab(platform);

  modal.classList.add('open');
  modal.style.display = 'flex';
}

function closePwaInstructionsModal() {
  const modal = document.getElementById('modal-pwa-instructions');
  if (modal) {
    modal.classList.remove('open');
    modal.style.display = 'none';
  }
}

function selectPwaTab(platform) {
  const tabs = document.querySelectorAll('.pwa-tab-btn');
  const panels = {
    ios: document.getElementById('pwa-panel-ios'),
    android: document.getElementById('pwa-panel-android'),
    desktop: document.getElementById('pwa-panel-desktop')
  };

  tabs.forEach((tab) => {
    const isTarget = tab.dataset.platform === platform;
    tab.classList.toggle('active', isTarget);
    tab.setAttribute('aria-selected', String(isTarget));
  });

  Object.entries(panels).forEach(([key, panel]) => {
    if (!panel) return;
    if (key === platform) {
      panel.classList.add('active');
      panel.style.display = 'block';
    } else {
      panel.classList.remove('active');
      panel.style.display = 'none';
    }
  });
}

function setupPwaModals() {
  // Modal de instrucciones
  const modal = document.getElementById('modal-pwa-instructions');
  const closeBtn = document.getElementById('btn-close-pwa-instructions');
  const gotItBtn = document.getElementById('btn-pwa-instructions-gotit');

  if (closeBtn) closeBtn.addEventListener('click', () => {
    sound.playStep();
    closePwaInstructionsModal();
  });
  if (gotItBtn) gotItBtn.addEventListener('click', () => {
    sound.playStep();
    closePwaInstructionsModal();
  });
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closePwaInstructionsModal();
    });
  }

  // Tabs de plataforma
  document.querySelectorAll('.pwa-tab-btn').forEach((tab) => {
    tab.addEventListener('click', () => {
      sound.playStep();
      selectPwaTab(tab.dataset.platform);
    });
  });

  // Banner de Invitación
  const installNowBtn = document.getElementById('btn-pwa-install-now');
  const installLaterBtn = document.getElementById('btn-pwa-install-later');
  const bannerCloseBtn = document.getElementById('btn-pwa-banner-close');

  if (installNowBtn) {
    installNowBtn.addEventListener('click', () => {
      sound.playStep();
      hidePwaInviteBanner(false);
      triggerPwaInstall();
    });
  }

  if (installLaterBtn) {
    installLaterBtn.addEventListener('click', () => {
      sound.playStep();
      hidePwaInviteBanner(true);
    });
  }

  if (bannerCloseBtn) {
    bannerCloseBtn.addEventListener('click', () => {
      hidePwaInviteBanner(true);
    });
  }
}

function schedulePwaInvite() {
  // Mostrar la invitación suave tras un breve retraso (2.2s) para no interrumpir la carga inicial
  setTimeout(() => {
    // 1. Si ya está instalada o en standalone, no mostrar
    if (isRunningStandalone() || STATE.isAppInstalled) return;

    // 2. Si el usuario ya está jugando activamente en el tablero, no interrumpir
    if (STATE.activeScreen === 'screen-board-game' || STATE.activeScreen === 'screen-mode-game') return;

    // 3. Si fue pospuesto recientemente (cooldown de 3 días), respetar la decisión
    try {
      const dismissedTime = localStorage.getItem(PWA_STORAGE_DISMISSED_KEY);
      if (dismissedTime && (Date.now() - parseInt(dismissedTime, 10)) < PWA_DISMISS_COOLDOWN_MS) {
        return;
      }
    } catch (_) {}

    showPwaInviteBanner();
  }, 2200);
}

function showPwaInviteBanner() {
  const banner = document.getElementById('pwa-invite-banner');
  if (!banner) return;
  // No mostrar si estamos en tablero de juego
  if (STATE.activeScreen === 'screen-board-game' || STATE.activeScreen === 'screen-mode-game') return;

  banner.style.display = 'block';
  // Forzar reflow para animación CSS suave
  void banner.offsetWidth;
  banner.classList.add('visible');
}

function hidePwaInviteBanner(persistDismissal = true) {
  const banner = document.getElementById('pwa-invite-banner');
  if (!banner) return;

  banner.classList.remove('visible');
  setTimeout(() => {
    banner.style.display = 'none';
  }, 450);

  if (persistDismissal) {
    try {
      localStorage.setItem(PWA_STORAGE_DISMISSED_KEY, Date.now().toString());
    } catch (_) {}
  }
}

