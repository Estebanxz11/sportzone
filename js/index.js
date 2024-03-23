document.addEventListener('DOMContentLoaded', function() {

    // menu hamburguesa
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('.nav-menu');

    hamburgerMenu.addEventListener('click', function() {
        navMenu.classList.toggle('active'); // Alternar la clase 'active' en el menú de navegación al hacer clic en el menú de hamburguesa
    });


    let currentSlide = 0;
    const slides = document.querySelectorAll('.carousel img');
    const totalSlides = slides.length;

    function showSlide(n) {
        slides.forEach(slide => slide.style.display = 'none');
        slides[n].style.display = 'block';
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        showSlide(currentSlide);
    }

    document.querySelector('.carousel-prev').addEventListener('click', prevSlide);
    document.querySelector('.carousel-next').addEventListener('click', nextSlide);
});
