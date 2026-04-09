// ── SPA Routing & Active nav link ───────────────────────────────────────────────────────────
const navLinks = document.querySelectorAll('.nav-links a');
const views = document.querySelectorAll('.page-view');

function handleRoute() {
    const hash = window.location.hash || '#/';
    
    // Switch Views based on hash path
    if (hash.startsWith('#/')) {
        const route = hash.substring(2) || 'home';
        views.forEach(v => v.classList.add('hidden'));
        
        const targetView = document.getElementById(`view-${route}`) || document.getElementById('view-home');
        if (targetView) {
            targetView.classList.remove('hidden');
            if (route === 'functions') {
                renderFunctionsPage(); // Render dynamically to prevent DOM parsing if not visited
            } else {
                clearFunctionsPage(); // Remove from DOM when leaving
            }
        }
        
        // Update active links
        navLinks.forEach(a => {
            a.classList.remove('active');
            if (a.getAttribute('href') === hash || (hash === '#/' && a.getAttribute('href') === '#hero')) {
                a.classList.add('active');
            }
        });
        window.scrollTo(0, 0);
    } else {
        // Assume in-page anchor, make sure we show Home View if it was a Home internal link
        document.getElementById('view-home').classList.remove('hidden');
        
        // Wait for render to scroll
        setTimeout(() => {
            if (hash) {
                const el = document.querySelector(hash);
                if (el) el.scrollIntoView({ behavior: 'smooth' });
            }
        }, 10);
    }
}

// ── Dynamic Functions Renderer ────────────────────────────────────────────────
const allFunctions = [
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
    { title: "fetch()", desc: "Lädt Daten von einer API/URL (Netzwerkanfrage).", code: "fetch('https://jsonplaceholder.typicode.com/todos/1')\n  .then(res => res.json())\n  .then(data => console.log(data));" }
];

function renderFunctionsPage() {
    const container = document.getElementById('view-functions');
    if (!container || container.innerHTML.trim() !== '') return; // already rendered

    let html = `
        <section id="functions-extended">
            <h2>Alle Funktionen (Extended List)</h2>
            <p class="section-intro">Hier ist die gigantische Liste an Funktionen. Sie existiert nur im DOM, wenn diese Seite aktiv ist!</p>
            <table>
                <thead>
                    <tr>
                        <th>Funktion / Methode</th>
                        <th>Beschreibung</th>
                        <th>Demo</th>
                    </tr>
                </thead>
                <tbody>
    `;

    allFunctions.forEach(fn => {
        const escd = fn.code.replace(/'/g, "\\'").replace(/\n/g, "\\n");
        html += `
            <tr>
                <td><code>${fn.title}</code></td>
                <td>${fn.desc}</td>
                <td><button onclick="openInPlayground('${escd}')">Im Playground testen</button></td>
            </tr>
        `;
    });

    html += `
                </tbody>
            </table>
        </section>
    `;
    container.innerHTML = html;
}

function clearFunctionsPage() {
    const container = document.getElementById('view-functions');
    if (container) container.innerHTML = '';
}

window.addEventListener('hashchange', handleRoute);
window.addEventListener('DOMContentLoaded', handleRoute);

// Instead of intersection observer for everything, we just rely on hash paths for "Pages"
// The user scrolls naturally inside of them.


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
    const href   = _pendingHref;
    _pendingHref = null;
    closeAllPopovers();

    if (newTab) {
        // open all count tabs in new windows
        for (let i = 0; i < count; i++) {
            window.open(href, '_blank', 'noopener,noreferrer');
        }
    } else {
        // open (count - 1) extra tabs first, then navigate current window
        for (let i = 0; i < count - 1; i++) {
            window.open(href, '_blank', 'noopener,noreferrer');
        }
        window.location.href = href;
    }
});

openLinkCancel.addEventListener('click', () => { _pendingHref = null; closeAllPopovers(); });

// intercept all <a href> clicks (except anchor-only links like #hero)
document.addEventListener('click', (e) => {
    const anchor = e.target.closest('a[href]');
    if (!anchor) return;
    const href = anchor.getAttribute('href');
    // skip pure hash anchors (in-page navigation) OR SPA routing #/
    if (href && (href.startsWith('#'))) return;
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

// ── Playground Logic ──────────────────────────────────────────────────────────

function openInPlayground(code) {
    const editor = document.getElementById('playground-code');
    if (editor) {
        editor.value = code;
    }
    // Navigate to playground view
    window.location.hash = '#/playground';
}

const runBtn = document.getElementById('run-code-btn');
const playOut = document.getElementById('playground-out');

if (runBtn && playOut) {
    runBtn.addEventListener('click', () => {
        const code = document.getElementById('playground-code').value;
        playOut.textContent = ''; // clear previous output
        
        // intercept console.log momentarily
        const originalLog = console.log;
        const originalWarn = console.warn;
        const originalError = console.error;
        
        function appendOutput(type, ...args) {
            const msg = args.map(a => typeof a === 'object' ? JSON.stringify(a) : a).join(' ');
            playOut.textContent += `[${type}] ${msg}\n`;
        }

        console.log = (...args) => { appendOutput('LOG', ...args); originalLog.apply(console, args); };
        console.warn = (...args) => { appendOutput('WARN', ...args); originalWarn.apply(console, args); };
        console.error = (...args) => { appendOutput('ERR', ...args); originalError.apply(console, args); };
        
        try {
            const result = eval(code);
            if (result !== undefined) {
                playOut.textContent += '\n\u276F ' + (typeof result === 'object' ? JSON.stringify(result) : result) + '\n';
            }
        } catch (error) {
            playOut.textContent += '\n\u2718 ' + error.name + ': ' + error.message + '\n';
        }
        
        // restore
        console.log = originalLog;
        console.warn = originalWarn;
        console.error = originalError;
    });
}

