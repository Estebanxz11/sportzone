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


 // Función para generar intervalos de hora
 function generateHourOptions() {
    var select = document.getElementById("hora");
    for (var i = 0; i < 24; i++) {
        var hour = ("0" + i).slice(-2) + ":00"; // Añade un cero delante de las horas menores de 10
        var option = document.createElement("option");
        option.text = hour;
        option.value = hour;
        select.add(option);
    }
}

// Función para obtener la fecha actual y establecerla en el campo de fecha
function setCurrentDate() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); // Enero es 0!
    var yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd;
    document.getElementById("fecha").value = today;
}

// Llamar a las funciones al cargar la página
window.onload = function () {
    generateHourOptions();
    setCurrentDate();
};