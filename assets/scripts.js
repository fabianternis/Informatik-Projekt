const ALL_FUNCTIONS = [
    { title: "String.prototype.toUpperCase()", desc: "Wandelt einen String in Großbuchstaben um.", code: "let str = 'hallo';\nconsole.log(str.toUpperCase());" },
    { title: "String.prototype.toLowerCase()", desc: "Wandelt einen String in Kleinbuchstaben um.", code: "let str = 'WELT';\nconsole.log(str.toLowerCase());" },
    { title: "String.prototype.includes()", desc: "Prüft, ob ein Teilstring enthalten ist.", code: "let txt = 'JS ist super!';\nconsole.log(txt.includes('super'));" },
    { title: "String.prototype.split()", desc: "Zerteilt einen String in ein Array.", code: "let list = 'Apfel,Birne,Banane';\nconsole.log(list.split(','));" },
    { title: "Array.prototype.push()", desc: "Fügt ein Element am Ende des Arrays an.", code: "let arr = [1, 2];\narr.push(3);\nconsole.log(arr);" },
    { title: "Array.prototype.pop()", desc: "Entfernt das letzte Element aus einem Array.", code: "let arr = [1, 2, 3];\narr.pop();\nconsole.log(arr);" },
    { title: "Array.prototype.filter()", desc: "Filtert Array-Elemente nach einer Bedingung.", code: "let nums = [1, 5, 10, 15];\nlet big = nums.filter(n => n > 5);\nconsole.log(big);" },
    { title: "Array.prototype.reduce()", desc: "Reduziert das Array auf einen einzigen Wert.", code: "let nums = [1, 2, 3, 4];\nlet sum = nums.reduce((a, b) => a + b, 0);\nconsole.log(sum);" },
    { title: "Math.round()", desc: "Rundet eine Zahl auf die nächste Ganzzahl.", code: "console.log(Math.round(4.7));\nconsole.log(Math.round(4.3));" },
    { title: "Math.floor()", desc: "Rundet eine Zahl immer ab.", code: "console.log(Math.floor(4.9));" },
    { title: "Math.ceil()", desc: "Rundet eine Zahl immer auf.", code: "console.log(Math.ceil(4.1));" },
    { title: "Object.keys()", desc: "Gibt alle Schlüsselnamen eines Objekts als Array zurück.", code: "let user = {name: 'Anna', age: 20};\nconsole.log(Object.keys(user));" },
    { title: "Object.values()", desc: "Gibt alle Werte eines Objekts als Array zurück.", code: "let user = {name: 'Anna', age: 20};\nconsole.log(Object.values(user));" },
    { title: "JSON.stringify()", desc: "Wandelt ein JS-Objekt in einen JSON-String um.", code: "let obj = { x: 5, y: 6 };\nconsole.log(JSON.stringify(obj));" },
    { title: "JSON.parse()", desc: "Wandelt einen JSON-String in ein JS-Objekt um.", code: "let json = '{\"z\": 10}';\nlet obj = JSON.parse(json);\nconsole.log(obj.z);" },
    { title: "setInterval()", desc: "Wiederholt Code in einem bestimmten Intervall.", code: "let i = 0;\nlet id = setInterval(() => {\n  console.log('Tick', ++i);\n  if(i >= 3) clearInterval(id);\n}, 500);" },
    { title: "fetch()", desc: "Lädt Daten von einer API/URL (Netzwerkanfrage).", code: "fetch('https://jsonplaceholder.typicode.com/todos/1')\n  .then(res => res.json())\n  .then(data => console.log(data));" },
];

const tbody = document.getElementById('functions-tbody');
if (tbody) {
    ALL_FUNCTIONS.forEach(fn => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td><code>${fn.title}</code></td>
            <td>${fn.desc}</td>
            <td><button onclick="openInPlayground(${JSON.stringify(fn.code)})">Im Playground testen</button></td>
        `;
        tbody.appendChild(tr);
    });
}

function openInPlayground(code) {
    window.location.href = 'playground.html?code=' + encodeURIComponent(code);
}

window.addEventListener('DOMContentLoaded', () => {
    if (window.location.hash) {
        setTimeout(() => {
            const el = document.querySelector(window.location.hash);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    }

    const codeParam = new URLSearchParams(window.location.search).get('code');
    const editor = document.getElementById('playground-code');
    if (editor && codeParam) {
        editor.value = decodeURIComponent(codeParam);
    }
});

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

const jsLogo = document.querySelector('.js-logo-img');
const tsLogo = document.querySelector('.ts-logo-img');
if (jsLogo && tsLogo) {
    jsLogo.addEventListener('mouseenter', () => { jsLogo.style.display = 'none';   tsLogo.style.display = 'inline'; });
    jsLogo.addEventListener('mouseleave', () => { jsLogo.style.display = 'inline'; tsLogo.style.display = 'none';   });
}

const RINGS = [
    { count: 6,  radius: 140, size: 28, duration: 18, cw: true  },
    { count: 9,  radius: 230, size: 42, duration: 28, cw: false },
    { count: 12, radius: 330, size: 58, duration: 40, cw: true  },
];

function createFloatingLogos() {
    const heroSection = document.getElementById('hero');
    if (!heroSection) return;

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

let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(createFloatingLogos, 150);
});

const DEFAULTS = {
    textFont:     "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    codeFont:     'monospace',
    fontSize:     '16',
    accent:       '#f7df1e',
    bg:           '#1e1e1e',
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

function applySettings(s) {
    root.style.setProperty('--base-font', s.textFont);
    root.style.setProperty('--code-font', s.codeFont);
    root.style.setProperty('--base-size', s.fontSize + 'px');
    root.style.setProperty('--js-yellow', s.accent);
    root.style.setProperty('--bg-dark',   s.bg);
    fontSizeVal.innerText  = s.fontSize + 'px';
    fontSizeInput.value    = s.fontSize;
    accentInput.value      = s.accent;
    bgInput.value          = s.bg;
    reduceMotionCb.checked = s.reduceMotion;
    document.body.classList.toggle('reduce-motion', s.reduceMotion);
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
resetAllBtn.addEventListener('click', () => { localStorage.removeItem('siteSettings'); applySettings(DEFAULTS); });

textFontSelect.addEventListener('change',  saveSettings);
codeFontSelect.addEventListener('change',  saveSettings);
fontSizeInput.addEventListener('input',    saveSettings);
accentInput.addEventListener('input',      saveSettings);
bgInput.addEventListener('input',          saveSettings);
reduceMotionCb.addEventListener('change',  saveSettings);

document.getElementById('reset-accent').addEventListener('click', () => { accentInput.value = DEFAULTS.accent; saveSettings(); });
document.getElementById('reset-bg').addEventListener('click',     () => { bgInput.value     = DEFAULTS.bg;     saveSettings(); });

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
    const href   = _pendingHref;
    _pendingHref = null;
    closeAllPopovers();

    if (newTab) {
        for (let i = 0; i < count; i++) window.open(href, '_blank', 'noopener,noreferrer');
    } else {
        for (let i = 0; i < count - 1; i++) window.open(href, '_blank', 'noopener,noreferrer');
        window.location.href = href;
    }
});

openLinkCancel.addEventListener('click', () => { _pendingHref = null; closeAllPopovers(); });

document.addEventListener('click', (e) => {
    const anchor = e.target.closest('a[href]');
    if (!anchor) return;
    const href = anchor.getAttribute('href');
    if (href && href.startsWith('#')) return;
    openLink(href, e);
});

const confettiBtn = document.getElementById('confetti-btn');
if (confettiBtn) {
    confettiBtn.addEventListener('click', () => {
        const duration = 3000;
        const animEnd  = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };
        const rnd      = (min, max) => Math.random() * (max - min) + min;
        const colors   = ['#f7df1e', '#000000', '#ffffff'];

        const interval = setInterval(() => {
            const timeLeft = animEnd - Date.now();
            if (timeLeft <= 0) return clearInterval(interval);
            const particleCount = 50 * (timeLeft / duration);
            confetti({ ...defaults, particleCount, origin: { x: rnd(0.1, 0.3), y: Math.random() - 0.2 }, colors });
            confetti({ ...defaults, particleCount, origin: { x: rnd(0.7, 0.9), y: Math.random() - 0.2 }, colors });
        }, 250);
    });
}

const runBtn  = document.getElementById('run-code-btn');
const playOut = document.getElementById('playground-out');

if (runBtn && playOut) {
    runBtn.addEventListener('click', () => {
        const code = document.getElementById('playground-code').value;
        playOut.textContent = '';

        const origLog   = console.log;
        const origWarn  = console.warn;
        const origError = console.error;

        function appendOutput(type, ...args) {
            const msg = args.map(a => typeof a === 'object' ? JSON.stringify(a) : a).join(' ');
            playOut.textContent += `[${type}] ${msg}\n`;
        }

        console.log   = (...args) => { appendOutput('LOG',  ...args); origLog.apply(console, args);   };
        console.warn  = (...args) => { appendOutput('WARN', ...args); origWarn.apply(console, args);  };
        console.error = (...args) => { appendOutput('ERR',  ...args); origError.apply(console, args); };

        try {
            const result = eval(code);
            if (result !== undefined) {
                playOut.textContent += '\n\u276F ' + (typeof result === 'object' ? JSON.stringify(result) : result) + '\n';
            }
        } catch (err) {
            playOut.textContent += '\n\u2718 ' + err.name + ': ' + err.message + '\n';
        }

        console.log   = origLog;
        console.warn  = origWarn;
        console.error = origError;
    });
}
