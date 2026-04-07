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

jsLogo.addEventListener('mouseenter', () => {
    jsLogo.style.display = 'none';
    tsLogo.style.display = 'inline';
});

jsLogo.addEventListener('mouseleave', () => {
    jsLogo.style.display = 'inline';
    tsLogo.style.display = 'none';
});

function createFloatingLogos() {
    const heroSection = document.getElementById('hero');
    if (!heroSection) return;

    const numberOfLogos = 12;

    for (let i = 0; i < numberOfLogos; i++) {
        const logo = document.createElement('div');
        logo.classList.add('floating-js-logo');
        logo.innerText = 'JS';

        const size = Math.random() * 60 + 20;
        logo.style.width = `${size}px`;
        logo.style.height = `${size}px`;
        logo.style.fontSize = `${size * 0.6}px`;

        logo.style.left = `${Math.random() * 95}%`;
        logo.style.top = `${Math.random() * 95}%`;

        const duration = Math.random() * 15 + 10;
        logo.style.animationDuration = `${duration}s`;
        logo.style.animationDelay = `-${Math.random() * 10}s`;

        heroSection.appendChild(logo);
    }
}
createFloatingLogos();

const settingsToggle = document.getElementById('settings-toggle');
const settingsPopover = document.getElementById('settings_popover');
const closeSettingsBtn = document.getElementById('close-settings');

const textFontSelect = document.getElementById('text-font');
const codeFontSelect = document.getElementById('code-font');
const fontSizeInput = document.getElementById('font-size');
const fontSizeVal = document.getElementById('font-size-val');
const rootElement = document.documentElement;

settingsToggle.addEventListener('click', () => {
    settingsPopover.classList.toggle('hidden');
});

closeSettingsBtn.addEventListener('click', () => {
    settingsPopover.classList.add('hidden');
});

textFontSelect.addEventListener('change', (e) => {
    rootElement.style.setProperty('--base-font', e.target.value);
});

codeFontSelect.addEventListener('change', (e) => {
    rootElement.style.setProperty('--code-font', e.target.value);
});

fontSizeInput.addEventListener('input', (e) => {
    const newSize = e.target.value + 'px';
    fontSizeVal.innerText = newSize;
    rootElement.style.setProperty('--base-size', newSize);
});


const confettiBtn = document.getElementById('confetti-btn');
if (confettiBtn) {
    confettiBtn.addEventListener('click', () => {
        var duration = 3 * 1000;
        var animationEnd = Date.now() + duration;
        var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

        function randomInRange(min, max) {
            return Math.random() * (max - min) + min;
        }

        var interval = setInterval(function () {
            var timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            var particleCount = 50 * (timeLeft / duration);
            confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }, colors: ['#f7df1e', '#000000', '#ffffff'] }));
            confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }, colors: ['#f7df1e', '#000000', '#ffffff'] }));
        }, 250);
    });
}