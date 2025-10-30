// JavaScript para interatividade do site

document.addEventListener('DOMContentLoaded', function() {
    // Adicionar efeito de clique nos cards
    const menuCards = document.querySelectorAll('.menu-card');
    
    menuCards.forEach(card => {
        card.addEventListener('click', function(e) {
            // Efeito de ripple
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            
            const rect = card.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            
            card.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // Animação de entrada dos elementos
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.info-card').forEach(card => {
        observer.observe(card);
    });
    
    // Atalhos de teclado
    document.addEventListener('keydown', function(e) {
        if (e.key === '1') window.location.href = 'pages/sinalizar.html';
        if (e.key === '2') window.location.href = 'pages/aprender.html';
        if (e.key === '3') window.location.href = 'pages/brincar.html';
        if (e.key === '4') window.location.href = 'pages/pesquisar.html';
    });
});

// Função para smooth scroll
function smoothScrollTo(element) {
    document.querySelector(element).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}
