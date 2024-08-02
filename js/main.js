// Espera a que el contenido del DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function () {
    // Manejador de menú de navegación responsive
    const menuToggle = document.querySelector('.navbar-toggler');
    const navMenu = document.querySelector('.navbar-nav');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function () {
            navMenu.classList.toggle('show');
        });
    }

    // Animaciones de desplazamiento suave para los enlaces internos
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Efecto de desplazamiento en la sección del héroe
    const heroSection = document.getElementById('hero');
    if (heroSection) {
        window.addEventListener('scroll', function () {
            const scrollPosition = window.scrollY;
            heroSection.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
        });
    }
});
