let currentSlide = 1; // Comienza en la primera imagen
const totalSlides = 5; // Total de imágenes

setInterval(() => {
    currentSlide++;

    if (currentSlide > totalSlides) {
        currentSlide = 1; // Reinicia al primer slide después del último
    }

    document.getElementById(`slide${currentSlide}`).checked = true; // Marca el radio correspondiente
}, 3000); // Cambia cada 3 segundos (3000 milisegundos)

// script.js

document.getElementById('menu-toggle').addEventListener('click', function() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active'); // Alterna la clase 'active' para mostrar/ocultar el menú
});