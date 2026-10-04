/* ============================================================
   THEME TOGGLE
   ============================================================ */
const themeToggle = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('creanova-theme') || 'dark';
document.body.setAttribute('data-theme', savedTheme);

themeToggle.addEventListener('click', () => {
  const current = document.body.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  document.body.setAttribute('data-theme', next);
  localStorage.setItem('creanova-theme', next);
});

/* ============================================================
   EVENT
   ============================================================ */
const EVENT = { name:'CREANOVA', organizer:'HIMASIF SATU UNIVERSITY', tagline:'PHOTOBOOTH • SYSTEM RESTORED ✔' };

const SHOT_PRESETS = [
  { count:1, label:'Solo Shot' },
  { count:2, label:'Duo Shot'  },
  { count:3, label:'Trio Shot' },
  { count:4, label:'Classic'   }
];

const DESIGNS = [
  { id:'lavender-dream', name:'Lavender Dream', mood:'soft & elegant', bg1:'#1a1332', bg2:'#2a1f4d', border:'#c4b5fd', accent:'#e9d5ff', text:'#ffffff', headerStyle:'serif', deco:'stars' },
  { id:'cyber-neon', name:'Cyber Neon', mood:'futuristic', bg1:'#051025', bg2:'#0a1f3d', border:'#22d3ee', accent:'#67e8f9', text:'#ffffff', headerStyle:'mono', deco:'grid' },
  { id:'sunset-glow', name:'Sunset Glow', mood:'warm & cozy', bg1:'#2d1533', bg2:'#4a1f3d', border:'#fb923c', accent:'#fbbf24', text:'#ffffff', headerStyle:'serif', deco:'sun' },
  { id:'mint-fresh', name:'Mint Fresh', mood:'clean & minimal', bg1:'#0a2620', bg2:'#0f3d33', border:'#5eead4', accent:'#a7f3d0', text:'#ffffff', headerStyle:'sans', deco:'dots' },
  { id:'rose-gold', name:'Rose Gold', mood:'luxury & chic', bg1:'#2a1720', bg2:'#3d1f2d', border:'#f9a8d4', accent:'#fbcfe8', text:'#ffffff', headerStyle:'serif', deco:'sparkle' },
  { id:'mono-chrome', name:'Mono Chrome', mood:'classic & bold', bg1:'#0f0f0f', bg2:'#1f1f1f', border:'#e5e5e5', accent:'#ffffff', text:'#ffffff', headerStyle:'mono', deco:'lines' },
  { id:'forest-zen', name:'Forest Zen', mood:'natural & calm', bg1:'#0f1f15', bg2:'#1a3322', border:'#86efac', accent:'#bbf7d0', text:'#ffffff', headerStyle:'sans', deco:'leaf' },
  { id:'midnight-blue', name:'Midnight Blue', mood:'deep & dreamy', bg1:'#0a0f2a', bg2:'#141b45', border:'#818cf8', accent:'#c7d2fe', text:'#ffffff', headerStyle:'serif', deco:'moon' }
];

const STICKER_LIBRARY = [
  { id:'skull', name:'Skull', category:'cyber', svg: (c='#f0abfc') => `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M50 5 C25 5 15 25 15 45 C15 58 22 68 30 74 L30 88 C30 92 34 95 38 95 L62 95 C66 95 70 92 70 88 L70 74 C78 68 85 58 85 45 C85 25 75 5 50 5 Z" fill="${c}" stroke="#1a1430" stroke-width="4" stroke-linejoin="round"/><circle cx="35" cy="48" r="8" fill="#1a1430"/><circle cx="65" cy="48" r="8" fill="#1a1430"/><path d="M45 68 L50 75 L55 68 Z" fill="#1a1430"/><rect x="38" y="82" width="6" height="10" fill="#1a1430"/><rect x="56" y="82" width="6" height="10" fill="#1a1430"/></svg>` },
  { id:'wifi', name:'WiFi', category:'cyber', svg: (c='#67e8f9') => `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M50 85 M20 55 Q50 25 80 55 M30 65 Q50 45 70 65 M40 75 Q50 65 60 75" stroke="${c}" stroke-width="9" fill="none" stroke-linecap="round"/><circle cx="50" cy="85" r="4" fill="${c}"/></svg>` },
  { id:'glitch', name:'Glitch', category:'cyber', svg: (c='#a78bfa') => `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="20" width="80" height="12" rx="3" fill="${c}"/><rect x="5" y="35" width="55" height="12" rx="3" fill="${c}"/><rect x="25" y="50" width="70" height="12" rx="3" fill="${c}"/><rect x="15" y="65" width="45" height="12" rx="3" fill="${c}"/><rect x="40" y="80" width="55" height="12" rx="3" fill="${c}"/></svg>` },
  { id:'bug', name:'Bug', category:'cyber', svg: (c='#4ade80') => `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><ellipse cx="50" cy="55" rx="22" ry="28" fill="${c}" stroke="#1a1430" stroke-width="4"/><circle cx="50" cy="30" r="12" fill="${c}" stroke="#1a1430" stroke-width="4"/><circle cx="45" cy="28" r="2.5" fill="#1a1430"/><circle cx="55" cy="28" r="2.5" fill="#1a1430"/><path d="M28 40 L15 30 M28 55 L12 55 M28 70 L15 80 M72 40 L85 30 M72 55 L88 55 M72 70 L85 80" stroke="#1a1430" stroke-width="3" fill="none" stroke-linecap="round"/></svg>` },
  { id:'code', name:'Code', category:'cyber', svg: (c='#a78bfa') => `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M30 30 L10 50 L30 70 M70 30 L90 50 L70 70 M60 20 L40 80" stroke="${c}" stroke-width="11" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>` },
  { id:'terminal', name:'Terminal', category:'cyber', svg: (c='#4ade80') => `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect x="8" y="15" width="84" height="70" rx="8" fill="#1a1430" stroke="${c}" stroke-width="4"/><text x="18" y="42" font-family="monospace" font-size="18" fill="${c}" font-weight="bold">&gt;_</text><rect x="18" y="52" width="30" height="4" rx="2" fill="${c}"/><rect x="18" y="62" width="50" height="4" rx="2" fill="${c}"/><circle cx="82" cy="22" r="3" fill="#fb7185"/><circle cx="72" cy="22" r="3" fill="#fbbf24"/><circle cx="62" cy="22" r="3" fill="#4ade80"/></svg>` },
  { id:'grad-cap', name:'Grad Cap', category:'campus', svg: (c='#fbbf24') => `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><polygon points="50,25 95,45 50,65 5,45" fill="${c}" stroke="#1a1430" stroke-width="4" stroke-linejoin="round"/><path d="M20 52 L20 70 Q50 82 80 70 L80 52" stroke="${c}" stroke-width="7" fill="none" stroke-linejoin="round"/><line x1="50" y1="65" x2="50" y2="88" stroke="#1a1430" stroke-width="4"/><circle cx="50" cy="90" r="5" fill="#1a1430"/></svg>` },
  { id:'book', name:'Book', category:'campus', svg: (c='#67e8f9') => `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M15 20 Q35 15 50 25 Q65 15 85 20 L85 80 Q65 75 50 85 Q35 75 15 80 Z" fill="${c}" stroke="#1a1430" stroke-width="4" stroke-linejoin="round"/><line x1="50" y1="25" x2="50" y2="85" stroke="#1a1430" stroke-width="3"/><line x1="22" y1="35" x2="42" y2="33" stroke="#1a1430" stroke-width="2.5"/><line x1="22" y1="45" x2="42" y2="43" stroke="#1a1430" stroke-width="2.5"/><line x1="58" y1="33" x2="78" y2="35" stroke="#1a1430" stroke-width="2.5"/><line x1="58" y1="43" x2="78" y2="45" stroke="#1a1430" stroke-width="2.5"/></svg>` },
  { id:'crown', name:'Crown', category:'campus', svg: (c='#fbbf24') => `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M10 75 L15 30 L35 50 L50 20 L65 50 L85 30 L90 75 Z" fill="${c}" stroke="#1a1430" stroke-width="4" stroke-linejoin="round"/><circle cx="15" cy="30" r="5" fill="#f0abfc" stroke="#1a1430" stroke-width="2.5"/><circle cx="50" cy="20" r="5" fill="#f0abfc" stroke="#1a1430" stroke-width="2.5"/><circle cx="85" cy="30" r="5" fill="#f0abfc" stroke="#1a1430" stroke-width="2.5"/><rect x="10" y="75" width="80" height="12" rx="3" fill="${c}" stroke="#1a1430" stroke-width="4"/></svg>` },
  { id:'medal', name:'Medal', category:'campus', svg: (c='#fbbf24') => `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><polygon points="30,10 42,50 58,50 70,10" fill="${c}" stroke="#1a1430" stroke-width="2.5" stroke-linejoin="round"/><polygon points="42,50 58,50 62,20 38,20" fill="#f0abfc" stroke="#1a1430" stroke-width="2.5"/><circle cx="50" cy="68" r="22" fill="${c}" stroke="#1a1430" stroke-width="4"/><text x="50" y="78" text-anchor="middle" font-family="serif" font-style="italic" font-size="22" font-weight="bold" fill="#1a1430">1</text></svg>` },
  { id:'star-award', name:'Star', category:'campus', svg: (c='#fbbf24') => `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><polygon points="50,10 61,38 92,38 67,56 76,88 50,70 24,88 33,56 8,38 39,38" fill="${c}" stroke="#1a1430" stroke-width="4" stroke-linejoin="round"/></svg>` },
  { id:'bulb', name:'Idea', category:'campus', svg: (c='#fbbf24') => `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="42" r="28" fill="${c}" stroke="#1a1430" stroke-width="4"/><rect x="38" y="68" width="24" height="20" rx="4" fill="#b8b0d4" stroke="#1a1430" stroke-width="4"/><line x1="42" y1="76" x2="58" y2="76" stroke="#1a1430" stroke-width="2.5"/><line x1="42" y1="82" x2="58" y2="82" stroke="#1a1430" stroke-width="2.5"/><path d="M50 5 L50 15 M20 25 L28 32 M80 25 L72 32 M12 50 L20 50 M88 50 L80 50" stroke="${c}" stroke-width="5" stroke-linecap="round"/></svg>` },
  { id:'star', name:'Star', category:'retro', svg: (c='#f0abfc') => `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><polygon points="50,8 60,38 92,38 66,57 76,90 50,72 24,90 34,57 8,38 40,38" fill="${c}" stroke="#1a1430" stroke-width="4" stroke-linejoin="round"/></svg>` },
  { id:'heart', name:'Heart', category:'retro', svg: (c='#f0abfc') => `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M50 88 C15 62 8 42 20 28 C32 15 48 22 50 35 C52 22 68 15 80 28 C92 42 85 62 50 88 Z" fill="${c}" stroke="#1a1430" stroke-width="4" stroke-linejoin="round"/></svg>` },
  { id:'flower', name:'Flower', category:'retro', svg: (c='#f9a8d4') => `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><ellipse cx="50" cy="22" rx="12" ry="18" fill="${c}" stroke="#1a1430" stroke-width="3"/><ellipse cx="50" cy="78" rx="12" ry="18" fill="${c}" stroke="#1a1430" stroke-width="3"/><ellipse cx="22" cy="50" rx="18" ry="12" fill="${c}" stroke="#1a1430" stroke-width="3"/><ellipse cx="78" cy="50" rx="18" ry="12" fill="${c}" stroke="#1a1430" stroke-width="3"/><circle cx="50" cy="50" r="14" fill="#fbbf24" stroke="#1a1430" stroke-width="3"/></svg>` },
  { id:'smiley', name:'Smiley', category:'retro', svg: (c='#fbbf24') => `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="42" fill="${c}" stroke="#1a1430" stroke-width="4"/><circle cx="35" cy="42" r="6" fill="#1a1430"/><circle cx="65" cy="42" r="6" fill="#1a1430"/><path d="M30 62 Q50 82 70 62" stroke="#1a1430" stroke-width="5" fill="none" stroke-linecap="round"/></svg>` },
  { id:'lightning', name:'Lightning', category:'retro', svg: (c='#fbbf24') => `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><polygon points="55,5 20,55 45,55 35,95 80,42 55,42" fill="${c}" stroke="#1a1430" stroke-width="4" stroke-linejoin="round"/></svg>` },
  { id:'sparkle', name:'Sparkle', category:'retro', svg: (c='#67e8f9') => `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M50 8 L58 42 L92 50 L58 58 L50 92 L42 58 L8 50 L42 42 Z" fill="${c}" stroke="#1a1430" stroke-width="3" stroke-linejoin="round"/><circle cx="78" cy="22" r="5" fill="${c}"/><circle cx="22" cy="78" r="5" fill="${c}"/></svg>` },
  { id:'cloud', name:'Cloud', category:'retro', svg: (c='#e0f2fe') => `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M25 70 Q10 70 10 55 Q10 42 22 40 Q25 22 42 22 Q55 22 60 32 Q70 25 80 32 Q95 32 92 48 Q95 65 78 70 Z" fill="${c}" stroke="#1a1430" stroke-width="4" stroke-linejoin="round"/></svg>` },
  { id:'rainbow', name:'Rainbow', category:'retro', svg: () => `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M10 75 Q50 20 90 75" stroke="#fb7185" stroke-width="9" fill="none" stroke-linecap="round"/><path d="M18 75 Q50 30 82 75" stroke="#fbbf24" stroke-width="9" fill="none" stroke-linecap="round"/><path d="M26 75 Q50 40 74 75" stroke="#4ade80" stroke-width="9" fill="none" stroke-linecap="round"/><path d="M34 75 Q50 50 66 75" stroke="#67e8f9" stroke-width="9" fill="none" stroke-linecap="round"/></svg>` },
  { id:'y2k-star', name:'Y2K', category:'retro', svg: (c='#f0abfc') => `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M50 5 L55 40 L90 30 L62 50 L85 78 L55 60 L50 95 L45 60 L15 78 L38 50 L10 30 L45 40 Z" fill="${c}" stroke="#1a1430" stroke-width="3" stroke-linejoin="round"/><circle cx="50" cy="50" r="7" fill="#fbbf24" stroke="#1a1430" stroke-width="2.5"/></svg>` },
  { id:'fire', name:'Fire', category:'emotion', svg: (c='#fb923c') => `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M50 5 Q55 30 70 35 Q80 42 80 60 Q80 85 50 95 Q20 85 20 60 Q20 45 32 38 Q28 55 40 60 Q38 40 50 5 Z" fill="${c}" stroke="#1a1430" stroke-width="4" stroke-linejoin="round"/><path d="M50 45 Q60 55 60 70 Q60 85 50 88 Q40 85 40 70 Q40 60 50 45 Z" fill="#fbbf24"/></svg>` },
  { id:'cool', name:'Cool', category:'emotion', svg: (c='#67e8f9') => `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="42" width="35" height="16" rx="6" fill="${c}" stroke="#1a1430" stroke-width="4"/><rect x="55" y="42" width="35" height="16" rx="6" fill="${c}" stroke="#1a1430" stroke-width="4"/><line x1="45" y1="50" x2="55" y2="50" stroke="#1a1430" stroke-width="4"/><line x1="5" y1="50" x2="10" y2="50" stroke="#1a1430" stroke-width="4"/><line x1="90" y1="50" x2="95" y2="50" stroke="#1a1430" stroke-width="4"/></svg>` },
  { id:'lips', name:'Lips', category:'emotion', svg: (c='#f43f5e') => `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M50 30 Q30 20 15 45 Q25 55 50 55 Q75 55 85 45 Q70 20 50 30 Z" fill="${c}" stroke="#1a1430" stroke-width="4" stroke-linejoin="round"/><path d="M15 45 Q30 75 50 80 Q70 75 85 45 Q75 65 50 68 Q25 65 15 45 Z" fill="${c}" stroke="#1a1430" stroke-width="4" stroke-linejoin="round"/></svg>` },
  { id:'wink', name:'Wink', category:'emotion', svg: (c='#fbbf24') => `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="42" fill="${c}" stroke="#1a1430" stroke-width="4"/><circle cx="65" cy="42" r="6" fill="#1a1430"/><path d="M25 42 Q35 35 45 42" stroke="#1a1430" stroke-width="5" fill="none" stroke-linecap="round"/><path d="M30 62 Q50 82 70 62" stroke="#1a1430" stroke-width="5" fill="none" stroke-linecap="round"/></svg>` },
  { id:'txt-creanova', name:'Creanova', category:'text', svg: () => `<svg viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg"><rect x="4" y="4" width="192" height="72" rx="20" fill="#a78bfa" stroke="#7c5dd8" stroke-width="4"/><text x="100" y="52" text-anchor="middle" font-family="serif" font-style="italic" font-size="32" font-weight="900" fill="#ffffff" filter="drop-shadow(2px 2px 0 #7c5dd8)">CREANOVA</text></svg>` },
  { id:'txt-himasif', name:'Himasif', category:'text', svg: () => `<svg viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg"><rect x="4" y="4" width="192" height="72" rx="20" fill="#67e8f9" stroke="#0891b2" stroke-width="4"/><text x="100" y="52" text-anchor="middle" font-family="monospace" font-size="28" font-weight="900" fill="#0e7490">HIMASIF</text></svg>` },
  { id:'txt-univ', name:'Univ', category:'text', svg: () => `<svg viewBox="0 0 220 80" xmlns="http://www.w3.org/2000/svg"><rect x="4" y="4" width="212" height="72" rx="36" fill="#f0abfc" stroke="#c026d3" stroke-width="4"/><text x="110" y="52" text-anchor="middle" font-family="sans-serif" font-size="24" font-weight="900" fill="#86198f">SATU UNIV</text></svg>` },
  { id:'txt-wow', name:'Wow!', category:'text', svg: () => `<svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg"><polygon points="100,5 195,50 100,95 5,50" fill="#fbbf24" stroke="#d97706" stroke-width="4" stroke-linejoin="round"/><text x="100" y="68" text-anchor="middle" font-family="serif" font-style="italic" font-size="44" font-weight="900" fill="#78350f">WOW!</text></svg>` },
  { id:'txt-love', name:'Love', category:'text', svg: () => `<svg viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg"><rect x="4" y="4" width="192" height="72" rx="20" fill="#f9a8d4" stroke="#db2777" stroke-width="4"/><text x="100" y="54" text-anchor="middle" font-family="serif" font-style="italic" font-size="36" font-weight="900" fill="#9d174d">Love ♥</text></svg>` },
  { id:'txt-2026', name:'2026', category:'text', svg: () => `<svg viewBox="0 0 220 90" xmlns="http://www.w3.org/2000/svg"><rect x="4" y="4" width="212" height="82" rx="16" fill="none" stroke="#f0abfc" stroke-width="6" stroke-dasharray="12 6"/><text x="110" y="64" text-anchor="middle" font-family="monospace" font-size="54" font-weight="900" fill="#f0abfc" filter="drop-shadow(3px 3px 0 #a21caf)">2026</text></svg>` },
  { id:'blob-purple', name:'Blob', category:'shape', svg: (c='#a78bfa') => `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M50 5 Q75 10 88 30 Q95 50 88 70 Q75 90 50 95 Q25 90 12 70 Q5 50 12 30 Q25 10 50 5 Z" fill="${c}" stroke="#1a1430" stroke-width="4" stroke-linejoin="round"/></svg>` },
  { id:'circle-outline', name:'Circle', category:'shape', svg: (c='#67e8f9') => `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="42" fill="none" stroke="${c}" stroke-width="8"/><circle cx="50" cy="50" r="30" fill="none" stroke="${c}" stroke-width="4"/></svg>` },
  { id:'heart-outline', name:'Heart O', category:'shape', svg: (c='#f0abfc') => `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M50 88 C15 62 8 42 20 28 C32 15 48 22 50 35 C52 22 68 15 80 28 C92 42 85 62 50 88 Z" fill="none" stroke="${c}" stroke-width="7" stroke-linejoin="round"/></svg>` },
  { id:'arrow', name:'Arrow', category:'shape', svg: (c='#fbbf24') => `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M10 50 L70 50 L55 35 M70 50 L55 65" stroke="${c}" stroke-width="10" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>` }
];

/* ============================================================
   STATE
   ============================================================ */
const state = {
  shotCount: null, design: null, teamName: '', photos: [],
  stream: null, finalStripDataURL: null, isCapturing: false,
  editorBaseImage: null, editorStickers: [], editorSelected: null,
  editorHistory: [], activeCategory: 'cyber',
  photoAspect: 4/3, qrJob: 0, shareUrl: null
};

/* ============================================================
   DOM
   ============================================================ */
const $ = (id) => document.getElementById(id);
const panels = { 1:$('panel1'), 2:$('panel2'), 3:$('panel3'), 4:$('panel4'), 5:$('panel5'), 6:$('panel6') };
const progressFill = $('progressFill');
const pSteps = [$('pStep1'), $('pStep2'), $('pStep3'), $('pStep4'), $('pStep5'), $('pStep6')];
const shotGrid = $('shotGrid'), designGrid = $('designGrid');
const teamNameInput = $('teamName'), teamNameDisplay = $('teamNameDisplay'), designInfo = $('designInfo');
const shotNowEl = $('shotNow'), shotMaxEl = $('shotMax'), shotDots = $('shotDots');
const captureBtn = $('captureBtn'), errorMsg = $('errorMsg');
const video = $('video'), countdownOverlay = $('countdownOverlay'), countdownNum = $('countdownNum'), flash = $('flash');
const photostripCanvas = $('photostripCanvas'), qrBox = $('qrBox');
const editorCanvas = $('editorCanvas'), editorCtx = editorCanvas.getContext('2d');
const stickerCategories = $('stickerCategories'), stickerGrid = $('stickerGrid'), selectionHint = $('selectionHint');
const stickerSize = $('stickerSize'), stickerRotate = $('stickerRotate');
const stickerSizeVal = $('stickerSizeVal'), stickerRotateVal = $('stickerRotateVal');

/* ============================================================
   POLYFILL
   ============================================================ */
if (!CanvasRenderingContext2D.prototype.roundRect) {
  CanvasRenderingContext2D.prototype.roundRect = function(x, y, w, h, r) {
    if (w < 2 * r) r = w / 2;
    if (h < 2 * r) r = h / 2;
    this.moveTo(x + r, y);
    this.lineTo(x + w - r, y);
    this.quadraticCurveTo(x + w, y, x + w, y + r);
    this.lineTo(x + w, y + h - r);
    this.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
    this.lineTo(x + r, y + h);
    this.quadraticCurveTo(x, y + h, x, y + h - r);
    this.lineTo(x, y + r);
    this.quadraticCurveTo(x, y, x + r, y);
    return this;
  };
}

/* ============================================================
   NAV
   ============================================================ */
function goToStep(n) {
  Object.keys(panels).forEach(k => panels[k].classList.toggle('active', parseInt(k) === n));
  progressFill.style.width = ((n / 6) * 100) + '%';
  pSteps.forEach((el, i) => {
    el.classList.toggle('active', i + 1 === n);
    el.classList.toggle('done', i + 1 < n);
  });
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ============================================================
   STEP 1
   ============================================================ */
function renderShotOptions() {
  shotGrid.innerHTML = '';
  SHOT_PRESETS.forEach(preset => {
    const card = document.createElement('div');
    card.className = 'shot-card';
    card.dataset.count = preset.count;
    let slotsHtml = '';
    for (let i = 0; i < preset.count; i++) slotsHtml += '<div class="shot-slot"></div>';
    card.innerHTML = `<div class="shot-visual">${slotsHtml}</div><div class="shot-count">${preset.count}×</div><div class="shot-label">${preset.label}</div>`;
    card.addEventListener('click', () => {
      state.shotCount = preset.count;
      document.querySelectorAll('.shot-card').forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      $('toStep2').disabled = false;
    });
    shotGrid.appendChild(card);
  });
}

/* ============================================================
   STEP 2
   ============================================================ */
function renderDesigns() {
  designGrid.innerHTML = '';
  DESIGNS.forEach(design => {
    const card = document.createElement('div');
    card.className = 'design-card';
    card.dataset.id = design.id;
    const slotsCount = state.shotCount || 4;
    let slotsHtml = '';
    for (let i = 0; i < slotsCount; i++) slotsHtml += `<div class="mini-slot" style="background:linear-gradient(135deg,${design.accent}55,${design.border}40);border:1.5px dashed ${design.border}90;"></div>`;
    const headerFont = design.headerStyle === 'serif' ? "'Playfair Display', serif" : design.headerStyle === 'mono' ? "'JetBrains Mono', monospace" : "'Space Grotesk', sans-serif";
    card.innerHTML = `
      <div class="design-preview" style="background:linear-gradient(180deg,${design.bg1},${design.bg2});border:2px solid ${design.border};">
        <div class="mini-header" style="color:${design.text};font-family:${headerFont};text-shadow:0 1px 4px ${design.accent};">CREANOVA</div>
        <div class="mini-slots">${slotsHtml}</div>
        <div class="mini-footer" style="color:${design.accent};">★ HIMASIF ★</div>
      </div>
      <div class="design-name">${design.name}</div>
      <div class="design-mood">${design.mood}</div>`;
    card.addEventListener('click', () => {
      state.design = design;
      document.querySelectorAll('.design-card').forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      $('toStep3').disabled = false;
    });
    designGrid.appendChild(card);
  });
}

/* ============================================================
   STEP 3
   ============================================================ */
teamNameInput.addEventListener('input', () => {
  $('toStep4').disabled = teamNameInput.value.trim().length < 2;
});

/* ============================================================
   NAV LISTENERS
   ============================================================ */
$('toStep2').addEventListener('click', () => { if(!state.shotCount) return; renderDesigns(); goToStep(2); });
$('backToStep1').addEventListener('click', () => goToStep(1));
$('toStep3').addEventListener('click', () => { if(!state.design) return; goToStep(3); setTimeout(()=>teamNameInput.focus(),300); });
$('backToStep2').addEventListener('click', () => goToStep(2));
$('toStep4').addEventListener('click', () => {
  state.teamName = teamNameInput.value.trim();
  if (!state.teamName) return;
  teamNameDisplay.textContent = state.teamName;
  designInfo.textContent = state.design.name.toUpperCase();
  initSession();
  goToStep(4);
  initCamera();
});
$('backToStep3b').addEventListener('click', () => { stopCamera(); goToStep(3); setTimeout(()=>teamNameInput.focus(),300); });

/* ============================================================
   SESSION
   ============================================================ */
function initSession() { state.photos = []; state.isCapturing = false; shotMaxEl.textContent = state.shotCount; updateShotUI(); renderShotDots(); }

function updateShotUI() {
  shotNowEl.textContent = state.photos.length;
  const allTaken = state.photos.length >= state.shotCount;
  captureBtn.disabled = allTaken || !state.stream || state.isCapturing;
  captureBtn.querySelector('span:last-child').textContent = allTaken ? '✅ Selesai' : 'Mulai Jepret';
}

function renderShotDots() {
  shotDots.innerHTML = '';
  for (let i = 0; i < state.shotCount; i++) {
    const dot = document.createElement('div');
    dot.className = 'shot-dot' + (state.photos[i] ? ' filled' : '');
    if (state.photos[i]) dot.style.backgroundImage = `url(${state.photos[i]})`;
    else dot.textContent = i + 1;
    shotDots.appendChild(dot);
  }
}

async function initCamera() {
  try {
    stopCamera();
    state.stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user', width: { ideal: 1280 }, height: { ideal: 960 } }, audio: false });
    video.srcObject = state.stream;
    await video.play();
    errorMsg.classList.add('hidden');
    updateShotUI();
  } catch (err) {
    console.error(err);
    errorMsg.textContent = '⚠️ Tidak dapat mengakses kamera. Pastikan izin diberikan.';
    errorMsg.classList.remove('hidden');
    captureBtn.disabled = true;
  }
}

function stopCamera() { if (state.stream) { state.stream.getTracks().forEach(t => t.stop()); state.stream = null; } }

/* ============================================================
   CAPTURE
   ============================================================ */
captureBtn.addEventListener('click', startCaptureSequence);

async function startCaptureSequence() {
  if (state.isCapturing) return;
  if (state.photos.length >= state.shotCount) return;
  if (!video.videoWidth) { alert('Kamera belum siap.'); return; }
  state.isCapturing = true;
  captureBtn.disabled = true;
  const remaining = state.shotCount - state.photos.length;
  for (let i = 0; i < remaining; i++) {
    await runCountdown(3);
    await takeShot();
    renderShotDots();
    updateShotUI();
    if (i < remaining - 1) await sleep(800);
  }
  state.isCapturing = false;
  setTimeout(async () => { await generatePhotostrip(); goToStep(5); triggerConfetti(); }, 600);
}

function sleep(ms) { return new Promise(res => setTimeout(res, ms)); }

async function runCountdown(from) {
  countdownOverlay.classList.add('active');
  for (let i = from; i >= 1; i--) {
    countdownNum.textContent = i;
    countdownNum.style.animation = 'none';
    void countdownNum.offsetWidth;
    countdownNum.style.animation = 'countPop 1s ease-out';
    await sleep(900);
  }
  countdownNum.textContent = '📸';
  await sleep(200);
  countdownOverlay.classList.remove('active');
}

function takeShot() {
  return new Promise(resolve => {
    flash.classList.add('active');
    setTimeout(() => flash.classList.remove('active'), 150);
    const vw = video.videoWidth, vh = video.videoHeight;
    const canvas = document.createElement('canvas');
    canvas.width = vw; canvas.height = vh;
    state.photoAspect = vw / vh;
    const ctx = canvas.getContext('2d');
    ctx.save(); ctx.translate(vw, 0); ctx.scale(-1, 1);
    ctx.drawImage(video, 0, 0, vw, vh);
    ctx.restore();
    state.photos.push(canvas.toDataURL('image/png'));
    resolve();
  });
}

$('restartSession').addEventListener('click', () => { state.photos = []; state.isCapturing = false; updateShotUI(); renderShotDots(); });

/* ============================================================
   GENERATE PHOTOSTRIP
   ============================================================ */
async function generatePhotostrip() {
  try {
    await Promise.all([
      document.fonts.load('italic 700 54px "Playfair Display"'),
      document.fonts.load('bold 34px "Space Grotesk"'),
      document.fonts.load('bold 16px "JetBrains Mono"')
    ]);
  } catch (e) {}
  const design = state.design;
  const shots = state.shotCount;
  const teamName = state.teamName;
  const W = 600, HEADER_H = 140, FOOTER_H = 180, PADDING = 22, SLOT_GAP = 14;
  // Slot mengikuti rasio asli foto hasil jepretan -> tidak gepeng / tidak ter-crop
  const aspect = state.photoAspect || 4 / 3;
  const maxSlotH = [0, 640, 480, 400, 340][shots] || 340;
  let slotW = shots <= 2 ? W - PADDING * 2 : 470;
  slotW = Math.round(Math.min(slotW, maxSlotH * aspect));
  const slotH = Math.round(slotW / aspect);
  const H = HEADER_H + shots * slotH + (shots - 1) * SLOT_GAP + FOOTER_H + PADDING * 2;

  photostripCanvas.width = W; photostripCanvas.height = H;
  const ctx = photostripCanvas.getContext('2d');

  const grad = ctx.createLinearGradient(0, 0, 0, H);
  grad.addColorStop(0, design.bg1); grad.addColorStop(1, design.bg2);
  ctx.fillStyle = grad; ctx.fillRect(0, 0, W, H);

  drawBackgroundDeco(ctx, W, H, design);

  ctx.save();
  ctx.strokeStyle = design.border; ctx.lineWidth = 8;
  ctx.shadowColor = design.border; ctx.shadowBlur = 30;
  ctx.strokeRect(4, 4, W - 8, H - 8);
  ctx.restore();

  ctx.save();
  ctx.strokeStyle = design.accent; ctx.lineWidth = 2;
  ctx.strokeRect(18, 18, W - 36, H - 36);
  ctx.restore();

  ctx.save();
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  const headerFont = design.headerStyle === 'serif' ? 'italic 700 54px "Playfair Display", serif'
    : design.headerStyle === 'mono' ? 'bold 48px "JetBrains Mono", monospace'
    : 'bold 50px "Space Grotesk", sans-serif';
  ctx.font = headerFont;
  ctx.fillStyle = design.text; ctx.shadowColor = design.accent; ctx.shadowBlur = 25;
  ctx.fillText('CREANOVA', W / 2, 60);
  ctx.font = 'bold 16px "JetBrains Mono", monospace';
  ctx.fillStyle = design.accent; ctx.shadowColor = design.accent; ctx.shadowBlur = 12;
  ctx.fillText('HIMASIF SATU UNIVERSITY', W / 2, 100);
  ctx.restore();

  ctx.save();
  ctx.strokeStyle = design.accent; ctx.lineWidth = 2; ctx.globalAlpha = 0.7;
  ctx.beginPath(); ctx.moveTo(50, HEADER_H); ctx.lineTo(W - 50, HEADER_H); ctx.stroke();
  ctx.restore();

  const startY = HEADER_H + PADDING;
  const slotX = Math.round((W - slotW) / 2);

  state.photos.forEach((_, i) => {
    const y = startY + i * (slotH + SLOT_GAP);
    ctx.save();
    ctx.strokeStyle = design.border; ctx.lineWidth = 3;
    ctx.shadowColor = design.border; ctx.shadowBlur = 15;
    ctx.strokeRect(slotX - 2, y - 2, slotW + 4, slotH + 4);
    ctx.restore();
    ctx.fillStyle = '#000';
    ctx.fillRect(slotX, y, slotW, slotH);
  });

  const footerY = startY + shots * (slotH + SLOT_GAP) + 12;
  ctx.save();
  ctx.strokeStyle = design.accent; ctx.lineWidth = 2; ctx.globalAlpha = 0.7;
  ctx.beginPath(); ctx.moveTo(50, footerY); ctx.lineTo(W - 50, footerY); ctx.stroke();
  ctx.restore();

  ctx.save();
  ctx.font = 'bold 34px "Space Grotesk", sans-serif';
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillStyle = design.text; ctx.shadowColor = design.border; ctx.shadowBlur = 18;
  ctx.fillText(teamName, W / 2, footerY + 45);
  ctx.restore();

  ctx.save();
  ctx.font = 'italic 16px "Playfair Display", serif';
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillStyle = design.accent; ctx.shadowColor = design.accent; ctx.shadowBlur = 8;
  ctx.fillText('~ captured with love ~', W / 2, footerY + 82);
  ctx.restore();

  ctx.save();
  ctx.font = '12px "JetBrains Mono", monospace';
  ctx.textAlign = 'center';
  ctx.fillStyle = design.accent; ctx.globalAlpha = 0.9;
  const ts = new Date().toLocaleString('id-ID', { day:'2-digit', month:'short', year:'numeric', hour:'2-digit', minute:'2-digit' });
  ctx.fillText(ts, W / 2, footerY + 118);
  ctx.globalAlpha = 0.8;
  ctx.fillText(EVENT.tagline, W / 2, footerY + 140);
  ctx.restore();

  const imgPromises = state.photos.map((dataURL, i) => {
    return new Promise(resolve => {
      const img = new Image();
      img.onload = () => {
        const y = startY + i * (slotH + SLOT_GAP);
        const imgAspect = img.width / img.height;
        const slotAspect = slotW / slotH;
        let dw, dh, dx, dy;
        if (imgAspect > slotAspect) { dh = slotH; dw = slotH * imgAspect; dx = slotX - (dw - slotW) / 2; dy = y; }
        else { dw = slotW; dh = slotW / imgAspect; dx = slotX; dy = y - (dh - slotH) / 2; }
        ctx.save(); ctx.beginPath(); ctx.rect(slotX, y, slotW, slotH); ctx.clip();
        ctx.drawImage(img, dx, dy, dw, dh);
        ctx.restore();
        resolve();
      };
      img.onerror = () => resolve();
      img.src = dataURL;
    });
  });

  Promise.all(imgPromises).then(() => {
    state.finalStripDataURL = photostripCanvas.toDataURL('image/png');
    generateQRCode();
  });
}

function drawBackgroundDeco(ctx, W, H, design) {
  ctx.save();
  ctx.globalAlpha = 0.15;
  if (design.deco === 'stars') {
    for (let i = 0; i < 60; i++) { ctx.fillStyle = design.accent; ctx.beginPath(); ctx.arc(Math.random()*W, Math.random()*H, Math.random()*1.5+0.5, 0, Math.PI*2); ctx.fill(); }
  } else if (design.deco === 'grid') {
    ctx.strokeStyle = design.accent; ctx.lineWidth = 0.5;
    for (let x = 0; x < W; x += 30) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke(); }
    for (let y = 0; y < H; y += 30) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); }
  } else if (design.deco === 'dots') {
    ctx.fillStyle = design.accent;
    for (let x = 20; x < W; x += 40) for (let y = 20; y < H; y += 40) { ctx.beginPath(); ctx.arc(x, y, 1.5, 0, Math.PI*2); ctx.fill(); }
  } else if (design.deco === 'lines') {
    ctx.strokeStyle = design.accent; ctx.lineWidth = 1;
    for (let y = 0; y < H; y += 8) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); }
  } else if (design.deco === 'sun') {
    const cx = W/2, cy = H*0.4;
    ctx.strokeStyle = design.accent; ctx.lineWidth = 1;
    for (let i = 0; i < 24; i++) { const a = (i/24)*Math.PI*2; ctx.beginPath(); ctx.moveTo(cx + Math.cos(a)*60, cy + Math.sin(a)*60); ctx.lineTo(cx + Math.cos(a)*400, cy + Math.sin(a)*400); ctx.stroke(); }
  } else if (design.deco === 'sparkle') {
    for (let i = 0; i < 30; i++) { const x = Math.random()*W, y = Math.random()*H, s = Math.random()*4+2; ctx.strokeStyle = design.accent; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(x-s,y); ctx.lineTo(x+s,y); ctx.moveTo(x,y-s); ctx.lineTo(x,y+s); ctx.stroke(); }
  } else if (design.deco === 'leaf') {
    for (let i = 0; i < 20; i++) { ctx.fillStyle = design.accent; ctx.beginPath(); ctx.ellipse(Math.random()*W, Math.random()*H, 8, 3, Math.random()*Math.PI, 0, Math.PI*2); ctx.fill(); }
  } else if (design.deco === 'moon') {
    for (let i = 0; i < 15; i++) { const x = Math.random()*W, y = Math.random()*H, r = Math.random()*8+4; ctx.fillStyle = design.accent; ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI*2); ctx.fill(); ctx.globalCompositeOperation = 'destination-out'; ctx.beginPath(); ctx.arc(x + r*0.5, y - r*0.3, r*0.9, 0, Math.PI*2); ctx.fill(); ctx.globalCompositeOperation = 'source-over'; }
  }
  ctx.restore();
}

/* ============================================================
   QR
   ============================================================ */
const UPLOAD_CONFIG = {
  // OPSIONAL: isi API key gratis dari https://api.imgbb.com/ agar link lebih stabil & tahan lama.
  IMGBB_API_KEY: '',
  IMGBB_EXPIRATION: 604800,            // 7 hari (detik). Isi 0 untuk permanen
  MAX_UPLOAD_BYTES: 1.5 * 1024 * 1024, // di atas ini otomatis dikompres
  TIMEOUT_MS: 30000
};

function canvasToBlob(canvas, type, quality) {
  return new Promise(res => canvas.toBlob(b => res(b), type, quality));
}

/* Kompres bertahap: PNG asli -> JPEG kualitas tinggi (96%->80%) -> baru kecilkan dimensi sedikit.
   Berhenti di langkah pertama yang muat batas ukuran, jadi kualitas selalu dipertahankan maksimal. */
async function compressForUpload(canvas, maxBytes) {
  let blob = await canvasToBlob(canvas, 'image/png');
  if (blob && blob.size <= maxBytes) return { blob, ext: 'png' };
  for (const q of [0.96, 0.92, 0.88, 0.84, 0.8]) {
    blob = await canvasToBlob(canvas, 'image/jpeg', q);
    if (blob && blob.size <= maxBytes) return { blob, ext: 'jpg' };
  }
  for (let scale = 0.9; scale >= 0.5; scale -= 0.1) {
    const t = document.createElement('canvas');
    t.width = Math.round(canvas.width * scale); t.height = Math.round(canvas.height * scale);
    const c = t.getContext('2d');
    c.imageSmoothingQuality = 'high';
    c.drawImage(canvas, 0, 0, t.width, t.height);
    blob = await canvasToBlob(t, 'image/jpeg', 0.88);
    if (blob && blob.size <= maxBytes) return { blob, ext: 'jpg' };
  }
  return { blob, ext: 'jpg' };
}

function fetchWithTimeout(url, opts) {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), UPLOAD_CONFIG.TIMEOUT_MS);
  return fetch(url, { ...opts, signal: ctrl.signal }).finally(() => clearTimeout(timer));
}

async function uploadImage(blob, filename) {
  // 1) ImgBB (jika API key diisi)
  if (UPLOAD_CONFIG.IMGBB_API_KEY) {
    try {
      const fd = new FormData();
      fd.append('image', blob, filename);
      let url = `https://api.imgbb.com/1/upload?key=${encodeURIComponent(UPLOAD_CONFIG.IMGBB_API_KEY)}`;
      if (UPLOAD_CONFIG.IMGBB_EXPIRATION) url += `&expiration=${UPLOAD_CONFIG.IMGBB_EXPIRATION}`;
      const res = await fetchWithTimeout(url, { method: 'POST', body: fd });
      const json = await res.json();
      if (json && json.success && json.data && json.data.url) return json.data.url;
    } catch (e) { console.warn('ImgBB gagal', e); }
  }
  // 2) tmpfiles.org (tanpa API key, file tersedia ± 60 menit)
  try {
    const fd = new FormData();
    fd.append('file', blob, filename);
    const res = await fetchWithTimeout('https://tmpfiles.org/api/v1/upload', { method: 'POST', body: fd });
    const json = await res.json();
    const u = json && json.data && json.data.url;
    if (u) return u.replace(/^http:/, 'https:').replace('tmpfiles.org/', 'tmpfiles.org/dl/');
  } catch (e) { console.warn('tmpfiles gagal', e); }
  throw new Error('Upload gagal');
}

function showQRStatus(msg) {
  qrBox.innerHTML = `<div class="qr-status"><div class="qr-spinner"></div>${msg}</div>`;
  removeQRLink();
}

function removeQRLink() { const o = document.getElementById('qrLink'); if (o) o.remove(); }

function showQRError() {
  qrBox.innerHTML = `<div class="qr-status">⚠️ QR belum bisa dibuat<br><span style="font-weight:600;letter-spacing:0">Cek koneksi internet.<br>Kamu tetap bisa pakai tombol Download.</span><br><button class="qr-retry" id="qrRetry">🔄 COBA LAGI</button></div>`;
  $('qrRetry').addEventListener('click', generateQRCode);
}

async function generateQRCode() {
  const job = ++state.qrJob;
  state.shareUrl = null;
  showQRStatus('MENYIAPKAN QR...');
  try {
    const { blob, ext } = await compressForUpload(photostripCanvas, UPLOAD_CONFIG.MAX_UPLOAD_BYTES);
    if (job !== state.qrJob) return;
    if (!blob) throw new Error('Gagal membuat gambar');
    showQRStatus('MENGUNGGAH FOTO...');
    const slug = (state.teamName || 'photostrip').replace(/[^a-z0-9]+/gi, '-').toLowerCase();
    const url = await uploadImage(blob, `creanova-${slug}-${Date.now()}.${ext}`);
    if (job !== state.qrJob) return;
    state.shareUrl = url;
    renderQR(url);
  } catch (e) {
    console.error(e);
    if (job === state.qrJob) showQRError();
  }
}

function renderQR(url) {
  qrBox.innerHTML = '';
  const ok = (typeof QRCode !== 'undefined') && (() => {
    try {
      new QRCode(qrBox, { text: url, width: 220, height: 220, colorDark: '#000000', colorLight: '#ffffff', correctLevel: QRCode.CorrectLevel.M });
      return true;
    } catch (e) { return false; }
  })();
  if (!ok) {
    const img = document.createElement('img');
    img.src = `https://quickchart.io/qr?text=${encodeURIComponent(url)}&size=220&margin=1&ecLevel=M`;
    img.width = 220; img.height = 220; img.alt = 'QR';
    img.onerror = showQRError;
    qrBox.appendChild(img);
  }
  removeQRLink();
  const p = document.createElement('p');
  p.id = 'qrLink'; p.className = 'qr-link';
  p.innerHTML = `Atau buka: <a href="${escapeHtml(url)}" target="_blank" rel="noopener">${escapeHtml(url)}</a>`;
  qrBox.parentElement.insertBefore(p, qrBox.nextSibling);
}

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, c => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[c]));
}

/* ============================================================
   DOWNLOAD & RESTART
   ============================================================ */
$('downloadBtn').addEventListener('click', () => {
  if (!state.finalStripDataURL) return;
  const safeName = state.teamName.replace(/\s+/g, '-').toLowerCase();
  const link = document.createElement('a');
  link.download = `creanova-${safeName}-${Date.now()}.png`;
  link.href = state.finalStripDataURL;
  link.click();
});

$('restartAll').addEventListener('click', () => {
  stopCamera();
  state.shotCount = null; state.design = null; state.teamName = '';
  state.photos = []; state.finalStripDataURL = null; state.isCapturing = false;
  state.editorStickers = []; state.editorSelected = null; state.editorBaseImage = null;
  teamNameInput.value = '';
  state.qrJob++; state.shareUrl = null; removeQRLink();
  qrBox.innerHTML = '<span style="color:#333;font-size:12px;font-weight:700;">MEMBUAT QR...</span>';
  document.querySelectorAll('.shot-card, .design-card').forEach(c => c.classList.remove('selected'));
  $('toStep2').disabled = true; $('toStep3').disabled = true; $('toStep4').disabled = true;
  goToStep(1);
});

/* ============================================================
   CONFETTI
   ============================================================ */
function triggerConfetti() {
  const colors = ['#a78bfa', '#f0abfc', '#67e8f9', '#fbbf24', '#4ade80'];
  for (let i = 0; i < 80; i++) {
    setTimeout(() => {
      const c = document.createElement('div');
      c.className = 'confetti';
      c.style.left = Math.random() * 100 + 'vw';
      c.style.background = colors[Math.floor(Math.random() * colors.length)];
      c.style.width = c.style.height = (Math.random() * 8 + 6) + 'px';
      c.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
      c.style.opacity = '1';
      document.body.appendChild(c);
      requestAnimationFrame(() => {
        c.style.top = '110vh';
        c.style.transform = `rotate(${Math.random()*720}deg)`;
        c.style.opacity = '0';
        c.style.transition = 'transform 3s linear, top 3s ease-in, opacity 3s ease-in';
      });
      setTimeout(() => c.remove(), 3200);
    }, i * 25);
  }
}

/* ============================================================
   STICKER EDITOR
   ============================================================ */
$('goToStickerEditor').addEventListener('click', openStickerEditor);
$('backToResult').addEventListener('click', () => {
  if (state.editorStickers.length > 0) { if (!confirm('Yakin batal? Stiker yang sudah dipasang akan hilang.')) return; }
  state.editorStickers = []; state.editorSelected = null; goToStep(5);
});
$('saveStickers').addEventListener('click', saveStickersAndReturn);

function openStickerEditor() {
  const base = new Image();
  base.onload = () => {
    state.editorBaseImage = base;
    editorCanvas.width = base.width;
    editorCanvas.height = base.height;
    renderEditorCanvas();
    renderStickerCategories();
    renderStickerGrid();
    updateSelectionHint();
    goToStep(6);
  };
  base.src = state.finalStripDataURL;
}

function renderEditorCanvas() {
  if (!state.editorBaseImage) return;
  editorCtx.clearRect(0, 0, editorCanvas.width, editorCanvas.height);
  editorCtx.drawImage(state.editorBaseImage, 0, 0);
  state.editorStickers.forEach((stk, idx) => {
    editorCtx.save();
    editorCtx.translate(stk.x, stk.y);
    editorCtx.rotate((stk.rotation * Math.PI) / 180);
    if (stk._img && stk._img.complete) {
      editorCtx.shadowColor = 'rgba(0,0,0,0.3)';
      editorCtx.shadowBlur = 8;
      editorCtx.shadowOffsetX = 3;
      editorCtx.shadowOffsetY = 3;
      editorCtx.drawImage(stk._img, -stk.size/2, -stk.size/2, stk.size, stk.size);
      editorCtx.shadowColor = 'transparent';
    }
    if (state.editorSelected === idx) {
      editorCtx.strokeStyle = '#f0abfc';
      editorCtx.lineWidth = Math.max(3, stk.size * 0.025);
      editorCtx.setLineDash([10, 8]);
      editorCtx.strokeRect(-stk.size/2, -stk.size/2, stk.size, stk.size);
      editorCtx.setLineDash([]);
      const hs = Math.max(12, stk.size * 0.1);
      editorCtx.fillStyle = '#f0abfc';
      editorCtx.shadowColor = '#a78bfa';
      editorCtx.shadowBlur = 10;
      [[-stk.size/2, -stk.size/2], [stk.size/2, -stk.size/2], [-stk.size/2, stk.size/2], [stk.size/2, stk.size/2]].forEach(([x,y]) => {
        editorCtx.beginPath();
        editorCtx.arc(x, y, hs/2, 0, Math.PI*2);
        editorCtx.fill();
      });
      editorCtx.shadowColor = 'transparent';
    }
    editorCtx.restore();
  });
}

function renderStickerCategories() {
  const cats = [
    { id: 'cyber', label: '💻 Cyber' },
    { id: 'campus', label: '🎓 Kampus' },
    { id: 'retro', label: '✨ Retro' },
    { id: 'emotion', label: '😎 Ekspresi' },
    { id: 'text', label: '📝 Text' },
    { id: 'shape', label: '🔷 Bentuk' }
  ];
  stickerCategories.innerHTML = '';
  cats.forEach(cat => {
    const btn = document.createElement('button');
    btn.className = 'cat-btn' + (state.activeCategory === cat.id ? ' active' : '');
    btn.textContent = cat.label;
    btn.addEventListener('click', () => {
      state.activeCategory = cat.id;
      renderStickerCategories();
      renderStickerGrid();
    });
    stickerCategories.appendChild(btn);
  });
}

function renderStickerGrid() {
  stickerGrid.innerHTML = '';
  const filtered = STICKER_LIBRARY.filter(s => s.category === state.activeCategory);
  filtered.forEach(stk => {
    const btn = document.createElement('button');
    btn.className = 'sticker-btn';
    btn.title = stk.name;
    btn.innerHTML = stk.svg();
    btn.addEventListener('click', () => addStickerToCanvas(stk));
    stickerGrid.appendChild(btn);
  });
}

function addStickerToCanvas(stk) {
  pushEditorHistory();
  const defaultSize = Math.round(editorCanvas.width * 0.22);
  const svgStr = stk.svg();
  const blob = new Blob([svgStr], { type: 'image/svg+xml;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const img = new Image();
  img.onload = () => {
    const newSticker = {
      svgId: stk.id, svg: svgStr, _img: img,
      x: editorCanvas.width / 2 + (Math.random() - 0.5) * 60,
      y: editorCanvas.height / 2 + (Math.random() - 0.5) * 60,
      size: defaultSize, rotation: 0
    };
    state.editorStickers.push(newSticker);
    state.editorSelected = state.editorStickers.length - 1;
    syncSlidersToSelected();
    renderEditorCanvas();
    updateSelectionHint();
  };
  img.src = url;
}

let isDragging = false;
let dragOffset = { x: 0, y: 0 };

function getCanvasCoords(e) {
  const rect = editorCanvas.getBoundingClientRect();
  const scaleX = editorCanvas.width / rect.width;
  const scaleY = editorCanvas.height / rect.height;
  const clientX = e.touches ? e.touches[0].clientX : e.clientX;
  const clientY = e.touches ? e.touches[0].clientY : e.clientY;
  return { x: (clientX - rect.left) * scaleX, y: (clientY - rect.top) * scaleY };
}

function hitTestSticker(x, y) {
  for (let i = state.editorStickers.length - 1; i >= 0; i--) {
    const stk = state.editorStickers[i];
    const rad = -(stk.rotation * Math.PI) / 180;
    const dx = x - stk.x, dy = y - stk.y;
    const lx = dx * Math.cos(rad) - dy * Math.sin(rad);
    const ly = dx * Math.sin(rad) + dy * Math.cos(rad);
    if (Math.abs(lx) <= stk.size / 2 && Math.abs(ly) <= stk.size / 2) return i;
  }
  return -1;
}

editorCanvas.addEventListener('mousedown', onPointerDown);
editorCanvas.addEventListener('touchstart', onPointerDown, { passive: false });
editorCanvas.addEventListener('mousemove', onPointerMove);
editorCanvas.addEventListener('touchmove', onPointerMove, { passive: false });
editorCanvas.addEventListener('mouseup', onPointerUp);
editorCanvas.addEventListener('touchend', onPointerUp);
editorCanvas.addEventListener('mouseleave', onPointerUp);

function onPointerDown(e) {
  e.preventDefault();
  const pos = getCanvasCoords(e);
  const idx = hitTestSticker(pos.x, pos.y);
  if (idx >= 0) {
    state.editorSelected = idx;
    isDragging = true;
    dragOffset.x = pos.x - state.editorStickers[idx].x;
    dragOffset.y = pos.y - state.editorStickers[idx].y;
    pushEditorHistory();
    syncSlidersToSelected();
    updateSelectionHint();
    renderEditorCanvas();
  } else {
    state.editorSelected = null;
    updateSelectionHint();
    renderEditorCanvas();
  }
}

function onPointerMove(e) {
  if (!isDragging || state.editorSelected === null) return;
  e.preventDefault();
  const pos = getCanvasCoords(e);
  const stk = state.editorStickers[state.editorSelected];
  stk.x = pos.x - dragOffset.x;
  stk.y = pos.y - dragOffset.y;
  stk.x = Math.max(0, Math.min(editorCanvas.width, stk.x));
  stk.y = Math.max(0, Math.min(editorCanvas.height, stk.y));
  renderEditorCanvas();
}

function onPointerUp() { isDragging = false; }

function syncSlidersToSelected() {
  if (state.editorSelected === null) {
    stickerSize.disabled = true; stickerRotate.disabled = true;
    return;
  }
  const stk = state.editorStickers[state.editorSelected];
  stickerSize.disabled = false; stickerRotate.disabled = false;
  stickerSize.value = Math.round((stk.size / editorCanvas.width) * 1000);
  stickerRotate.value = stk.rotation;
  stickerSizeVal.textContent = stk.size;
  stickerRotateVal.textContent = stk.rotation + '°';
}

stickerSize.addEventListener('input', () => {
  if (state.editorSelected === null) return;
  const stk = state.editorStickers[state.editorSelected];
  stk.size = Math.round((parseInt(stickerSize.value) / 1000) * editorCanvas.width);
  stickerSizeVal.textContent = stk.size;
  renderEditorCanvas();
});

stickerRotate.addEventListener('input', () => {
  if (state.editorSelected === null) return;
  const stk = state.editorStickers[state.editorSelected];
  stk.rotation = parseInt(stickerRotate.value);
  stickerRotateVal.textContent = stk.rotation + '°';
  renderEditorCanvas();
});

$('deleteStickerBtn').addEventListener('click', () => {
  if (state.editorSelected === null) return;
  pushEditorHistory();
  state.editorStickers.splice(state.editorSelected, 1);
  state.editorSelected = null;
  syncSlidersToSelected();
  updateSelectionHint();
  renderEditorCanvas();
});

$('duplicateBtn').addEventListener('click', () => {
  if (state.editorSelected === null) return;
  pushEditorHistory();
  const orig = state.editorStickers[state.editorSelected];
  const copy = { ...orig, x: orig.x + 30, y: orig.y + 30 };
  state.editorStickers.push(copy);
  state.editorSelected = state.editorStickers.length - 1;
  syncSlidersToSelected();
  updateSelectionHint();
  renderEditorCanvas();
});

$('bringFrontBtn').addEventListener('click', () => {
  if (state.editorSelected === null) return;
  pushEditorHistory();
  const stk = state.editorStickers.splice(state.editorSelected, 1)[0];
  state.editorStickers.push(stk);
  state.editorSelected = state.editorStickers.length - 1;
  updateSelectionHint();
  renderEditorCanvas();
});

$('sendBackBtn').addEventListener('click', () => {
  if (state.editorSelected === null) return;
  pushEditorHistory();
  const stk = state.editorStickers.splice(state.editorSelected, 1)[0];
  state.editorStickers.unshift(stk);
  state.editorSelected = 0;
  updateSelectionHint();
  renderEditorCanvas();
});

$('undoBtn').addEventListener('click', () => {
  if (state.editorHistory.length === 0) return;
  const snapshot = state.editorHistory.pop();
  state.editorStickers = snapshot.map(s => ({ ...s }));
  let pending = state.editorStickers.length;
  if (pending === 0) {
    state.editorSelected = null;
    syncSlidersToSelected(); renderEditorCanvas(); updateSelectionHint();
    return;
  }
  state.editorStickers.forEach((stk, i) => {
    const blob = new Blob([stk.svg], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const img = new Image();
    img.onload = () => {
      state.editorStickers[i]._img = img;
      pending--;
      if (pending === 0) {
        state.editorSelected = state.editorStickers.length - 1;
        syncSlidersToSelected(); renderEditorCanvas(); updateSelectionHint();
      }
    };
    img.src = url;
  });
});

$('clearAllBtn').addEventListener('click', () => {
  if (state.editorStickers.length === 0) return;
  if (!confirm('Hapus semua stiker?')) return;
  pushEditorHistory();
  state.editorStickers = []; state.editorSelected = null;
  syncSlidersToSelected(); renderEditorCanvas(); updateSelectionHint();
});

function pushEditorHistory() {
  const snap = state.editorStickers.map(s => ({ svgId: s.svgId, svg: s.svg, x: s.x, y: s.y, size: s.size, rotation: s.rotation }));
  state.editorHistory.push(snap);
  if (state.editorHistory.length > 30) state.editorHistory.shift();
}

function updateSelectionHint() {
  if (state.editorSelected === null) {
    selectionHint.textContent = '💡 Belum ada stiker yang dipilih';
    stickerSize.disabled = true; stickerRotate.disabled = true;
    stickerSizeVal.textContent = '—'; stickerRotateVal.textContent = '—';
  } else {
    selectionHint.textContent = `🎯 Stiker terpilih — ${state.editorSelected + 1} dari ${state.editorStickers.length}`;
  }
}

function saveStickersAndReturn() {
  const finalCanvas = document.createElement('canvas');
  finalCanvas.width = editorCanvas.width;
  finalCanvas.height = editorCanvas.height;
  const fctx = finalCanvas.getContext('2d');
  fctx.drawImage(state.editorBaseImage, 0, 0);
  state.editorStickers.forEach(stk => {
    fctx.save();
    fctx.translate(stk.x, stk.y);
    fctx.rotate((stk.rotation * Math.PI) / 180);
    if (stk._img && stk._img.complete) fctx.drawImage(stk._img, -stk.size/2, -stk.size/2, stk.size, stk.size);
    fctx.restore();
  });
  photostripCanvas.width = finalCanvas.width;
  photostripCanvas.height = finalCanvas.height;
  const pctx = photostripCanvas.getContext('2d');
  pctx.drawImage(finalCanvas, 0, 0);
  state.finalStripDataURL = photostripCanvas.toDataURL('image/png');
  generateQRCode();
  goToStep(5);
}

/* ============================================================
   INIT
   ============================================================ */
window.addEventListener('load', () => { renderShotOptions(); goToStep(1); });
window.addEventListener('beforeunload', stopCamera);