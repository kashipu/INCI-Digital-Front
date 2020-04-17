// Función expandir menú
function toggle() {
    let menuShow = document.getElementById('menu-toggle');
    menuShow.classList.toggle('no-show');
    let mainHome = document.getElementById('home');
    let burguerSet = document.getElementById('burguer-menu');
    let status, display;
    // Poner atributos de accesibilidad
    if (menuShow.classList.contains("no-show")) {
        status = false;
        display = 'block'
    } else {
        status = true;
        display = 'none'
    }
    mainHome.style.display = display;
    mainHome.setAttribute("aria-hidden", status);
    burguerSet.setAttribute("aria-expanded", status)
}

// Función Acción del botón volver al inicio
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    document.getElementById('botonAtras').focus();
}