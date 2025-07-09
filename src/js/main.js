document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.accordion-slide');
    let timer;
    
    function nextSlide() {
        const current = document.querySelector('.accordion-slide.active');
        const next = current.nextElementSibling || slides[0];
        
        current.classList.remove('active');
        next.classList.add('active');
    }
    
    function startTimer() {
        clearInterval(timer);
        timer = setInterval(nextSlide, 4000);
    }
    
    // Iniciar timer
    startTimer();
    
    // Clique manual
    slides.forEach(slide => {
        slide.addEventListener('click', function() {
            if (!this.classList.contains('active')) {
                document.querySelector('.accordion-slide.active').classList.remove('active');
                this.classList.add('active');
                startTimer();
            }
        });
    });

    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        offset: 100
    });
});