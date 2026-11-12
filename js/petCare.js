document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const mainMenu = document.getElementById('mainMenu');
    
    menuToggle.addEventListener('click', function() {
        mainMenu.classList.toggle('active');
    });
    
    // Para el carrusel de testimonios
    const testimonialSlider = document.getElementById('testimonials');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    let currentSlide = 0;
    
    nextBtn.addEventListener('click', function() {
        currentSlide = (currentSlide + 1) % testimonialCards.length;
        updateSlider();
    });
    
    prevBtn.addEventListener('click', function() {
        currentSlide = (currentSlide - 1 + testimonialCards.length) % testimonialCards.length;
        updateSlider();
    });
    
    function updateSlider() {
        const cardWidth = testimonialCards[0].offsetWidth + 30; // width + gap
        testimonialSlider.scrollTo({
            left: currentSlide * cardWidth,
            behavior: 'smooth'
        });
    }
    
    // Header scroll effect
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});