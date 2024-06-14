document.addEventListener("DOMContentLoaded", function () {
    // Obtener la URL actual
    const currentLocation = window.location.href;

    // Obtener todos los enlaces de la barra de navegación
    const navLinks = document.querySelectorAll('.nav-link');

    // Iterar sobre los enlaces y añadir la clase 'active' al enlace correspondiente
    navLinks.forEach(link => {
        if (link.href === currentLocation) {
            link.classList.add('active');
        }

        // Manejar el evento clic para mantener el estado activo después del clic
        link.addEventListener('click', function (event) {
            // Remover la clase 'active' de todos los enlaces
            navLinks.forEach(lnk => lnk.classList.remove('active'));

            // Agregar la clase 'active' solo al enlace clickeado
            link.classList.add('active');
        });
    });
});