// Guardar como animations.js
document.addEventListener('DOMContentLoaded', function() {
    // Manejo del menú responsive
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            menuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Cerrar menú al hacer clic en un enlace
        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
    
    // Animación al hacer scroll para las tarjetas
    const cards = document.querySelectorAll('.card');
    
    // Añadir clase para la animación
    cards.forEach(card => {
        card.classList.add('animate');
    });
    
    function checkScroll() {
        cards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (cardTop < windowHeight * 0.9) {
                card.classList.add('visible');
            }
        });
    }
    
    // Comprobar scroll al cargar y durante el scroll
    window.addEventListener('load', checkScroll);
    window.addEventListener('scroll', checkScroll);
    
    // Implementar un efecto adicional en la sección de servicios
    const servicesTitle = document.querySelector('.services-title');
    if (servicesTitle) {
        servicesTitle.addEventListener('mouseover', function() {
            this.style.color = 'var(--secondary-color)';
        });
        
        servicesTitle.addEventListener('mouseout', function() {
            this.style.color = 'var(--primary-dark)';
        });
    }
});