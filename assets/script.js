// ── Interactivity text letter-split ──────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.interactivity-text');
    if (container) {
        const text = container.innerText;
        container.innerHTML = '';
        text.split('').forEach((char, index) => {
            const span = document.createElement('span');
            span.innerText = char;
            span.classList.add('char');
            span.style.transitionDelay = `${index * 0.05}s`;
            container.appendChild(span);
        });
    }
});

// ── JS/TS logo swap ───────────────────────────────────────────────────────────
const jsLogo = document.querySelector('.js-logo-img');
const tsLogo = document.querySelector('.ts-logo-img');

if (jsLogo && tsLogo) {
    jsLogo.addEventListener('mouseenter', () => { jsLogo.style.display = 'none';   tsLogo.style.display = 'inline'; });
    jsLogo.addEventListener('mouseleave', () => { jsLogo.style.display = 'inline'; tsLogo.style.display = 'none';   });
}

// ── Orbit animation ───────────────────────────────────────────────────────────
const RINGS = [
    { count: 6,  radius: 140, size: 28, duration: 18, cw: true  },
    { count: 9,  radius: 230, size: 42, duration: 28, cw: false },
    { count: 12, radius: 330, size: 58, duration: 40, cw: true  },
];

function createFloatingLogos() {
    const heroSection = document.getElementById('hero');
    if (!heroSection) return;

    // remove old logos before re-creating
    heroSection.querySelectorAll('.floating-js-logo').forEach(el => el.remove());

    const cx = heroSection.offsetWidth  / 2;
    const cy = heroSection.offsetHeight / 2;

    RINGS.forEach(({ count, radius, size, duration, cw }) => {
        for (let i = 0; i < count; i++) {
            const logo = document.createElement('div');
            logo.classList.add('floating-js-logo');
            logo.innerText = 'JS';
            logo.style.width      = `${size}px`;
            logo.style.height     = `${size}px`;
            logo.style.fontSize   = `${size * 0.55}px`;
            logo.style.left       = `${cx}px`;
            logo.style.top        = `${cy}px`;
            logo.style.marginLeft = `-${size / 2}px`;
            logo.style.marginTop  = `-${size / 2}px`;

            const startAngle = (360 / count) * i;
            logo.style.setProperty('--start-angle', `${startAngle}deg`);
            logo.style.setProperty('--radius', `${radius}px`);

            const animName = cw ? 'orbitCW' : 'orbitCCW';
            const delay = -(duration / count) * i;
            logo.style.animation = `${animName} ${duration}s linear ${delay}s infinite`;

            heroSection.appendChild(logo);
        }
    });
}

createFloatingLogos();

// reload orbit on resize (debounced)
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(createFloatingLogos, 150);
});

// ── Settings ──────────────────────────────────────────────────────────────────
const DEFAULTS = {
    textFont:  "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    codeFont:  'monospace',
    fontSize:  '16',
    accent:    '#f7df1e',
    bg:        '#1e1e1e',
    reduceMotion: false,
};

const root             = document.documentElement;
const settingsToggle   = document.getElementById('settings-toggle');
const settingsPopover  = document.getElementById('settings_popover');
const closeSettingsBtn = document.getElementById('close-settings');
const resetAllBtn      = document.getElementById('reset-all-settings');
const textFontSelect   = document.getElementById('text-font');
const codeFontSelect   = document.getElementById('code-font');
const fontSizeInput    = document.getElementById('font-size');
const fontSizeVal      = document.getElementById('font-size-val');
const accentInput      = document.getElementById('accent-color');
const bgInput          = document.getElementById('bg-color');
const reduceMotionCb   = document.getElementById('reduce-motion');
const backdrop         = createBackdrop();

function createBackdrop() {
    const el = document.createElement('div');
    el.classList.add('popover-backdrop');
    el.addEventListener('click', closeAllPopovers);
    document.body.appendChild(el);
    return el;
}

function openPopover(el) {
    closeAllPopovers();
    el.classList.remove('hidden');
    backdrop.classList.add('visible');
}

function closeAllPopovers() {
    document.querySelectorAll('#settings_popover, #open-link-popover').forEach(p => p.classList.add('hidden'));
    backdrop.classList.remove('visible');
}

// apply a saved setting to the DOM
function applySettings(s) {
    root.style.setProperty('--base-font', s.textFont);
    root.style.setProperty('--code-font', s.codeFont);
    root.style.setProperty('--base-size', s.fontSize + 'px');
    root.style.setProperty('--js-yellow', s.accent);
    root.style.setProperty('--bg-dark',   s.bg);
    fontSizeVal.innerText = s.fontSize + 'px';
    fontSizeInput.value   = s.fontSize;
    accentInput.value     = s.accent;
    bgInput.value         = s.bg;
    reduceMotionCb.checked = s.reduceMotion;
    document.body.classList.toggle('reduce-motion', s.reduceMotion);

    // sync selects
    [...textFontSelect.options].forEach(o => { o.selected = o.value === s.textFont; });
    [...codeFontSelect.options].forEach(o => { o.selected = o.value === s.codeFont; });
}

function saveSettings() {
    const s = {
        textFont:     textFontSelect.value,
        codeFont:     codeFontSelect.value,
        fontSize:     fontSizeInput.value,
        accent:       accentInput.value,
        bg:           bgInput.value,
        reduceMotion: reduceMotionCb.checked,
    };
    localStorage.setItem('siteSettings', JSON.stringify(s));
    applySettings(s);
}

function loadSettings() {
    try {
        const saved = JSON.parse(localStorage.getItem('siteSettings'));
        applySettings(saved && typeof saved === 'object' ? { ...DEFAULTS, ...saved } : DEFAULTS);
    } catch { applySettings(DEFAULTS); }
}

loadSettings();

settingsToggle.addEventListener('click', () => openPopover(settingsPopover));
closeSettingsBtn.addEventListener('click', () => { saveSettings(); closeAllPopovers(); });

resetAllBtn.addEventListener('click', () => {
    localStorage.removeItem('siteSettings');
    applySettings(DEFAULTS);
});

textFontSelect.addEventListener('change',  saveSettings);
codeFontSelect.addEventListener('change',  saveSettings);
fontSizeInput.addEventListener('input',    saveSettings);
accentInput.addEventListener('input',      saveSettings);
bgInput.addEventListener('input',          saveSettings);
reduceMotionCb.addEventListener('change',  saveSettings);

document.getElementById('reset-accent').addEventListener('click', () => { accentInput.value = DEFAULTS.accent; saveSettings(); });
document.getElementById('reset-bg').addEventListener('click',     () => { bgInput.value     = DEFAULTS.bg;     saveSettings(); });

// ── openLink ──────────────────────────────────────────────────────────────────
const openLinkPopover  = document.getElementById('open-link-popover');
const openLinkUrlEl    = document.getElementById('open-link-url');
const openLinkCountEl  = document.getElementById('open-link-count');
const openLinkNewTabEl = document.getElementById('open-link-newtab');
const openLinkConfirm  = document.getElementById('open-link-confirm');
const openLinkCancel   = document.getElementById('open-link-cancel');

let _pendingHref = null;

function openLink(href, event) {
    if (event) event.preventDefault();
    _pendingHref = href;
    openLinkUrlEl.textContent = href;
    openLinkCountEl.value     = 1;
    openLinkNewTabEl.checked  = true;
    openPopover(openLinkPopover);
}

openLinkConfirm.addEventListener('click', () => {
    if (!_pendingHref) return;
    const count  = Math.max(1, Math.min(20, parseInt(openLinkCountEl.value, 10) || 1));
    const newTab = openLinkNewTabEl.checked;
    closeAllPopovers();
    for (let i = 0; i < count; i++) {
        if (newTab) {
            window.open(_pendingHref, '_blank', 'noopener,noreferrer');
        } else {
            window.location.href = _pendingHref;
            break; // can only navigate once in same tab
        }
    }
    _pendingHref = null;
});

openLinkCancel.addEventListener('click', () => { _pendingHref = null; closeAllPopovers(); });

// intercept all <a href> clicks (except anchor-only links like #hero)
document.addEventListener('click', (e) => {
    const anchor = e.target.closest('a[href]');
    if (!anchor) return;
    const href = anchor.getAttribute('href');
    // skip pure hash anchors (in-page navigation)
    if (href && href.startsWith('#')) return;
    openLink(href, e);
});

// ── Confetti ──────────────────────────────────────────────────────────────────
const confettiBtn = document.getElementById('confetti-btn');
if (confettiBtn) {
    confettiBtn.addEventListener('click', () => {
        const duration   = 3000;
        const animEnd    = Date.now() + duration;
        const defaults   = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };
        const rnd        = (min, max) => Math.random() * (max - min) + min;
        const colors     = ['#f7df1e', '#000000', '#ffffff'];

        const interval = setInterval(() => {
            const timeLeft = animEnd - Date.now();
            if (timeLeft <= 0) return clearInterval(interval);
            const particleCount = 50 * (timeLeft / duration);
            confetti({ ...defaults, particleCount, origin: { x: rnd(0.1, 0.3), y: Math.random() - 0.2 }, colors });
            confetti({ ...defaults, particleCount, origin: { x: rnd(0.7, 0.9), y: Math.random() - 0.2 }, colors });
        }, 250);
    });
}
