function toggle() {
    let menuShow = document.getElementById('menu-toggle');

    menuShow.classList.toggle('no-show');
    console.log(menuShow)
    if (menuShow.classList.contains("no-show")) {
        console.log("Menú Oculto");
        let mainHome = document.getElementById('home');
        let burguerSet = document.getElementById('burguer-menu');
        mainHome.style.display = 'block';
        mainHome.setAttribute("aria-hidden", "false");
        burguerSet.setAttribute("aria-expanded", "false")
    } else {
        console.log("Menu Mostrandose");
        let mainHome = document.getElementById('home');
        let burguerSet = document.getElementById('burguer-menu');
        mainHome.style.display = 'none';
        mainHome.setAttribute("aria-hidden", "true");
        burguerSet.setAttribute("aria-expanded", "true")
    }
}

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    document.getElementById('botonAtras').focus();
}