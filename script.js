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