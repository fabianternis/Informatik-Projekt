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