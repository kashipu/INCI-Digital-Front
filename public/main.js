const btnMenu = document.querySelector('.btn-menu');

function toggle() {
    var menuShow = document.getElementById('menu-toggle');
    var bodyShow = document.getElementById('container');
    menuShow.classList.toggle('show');
    bodyShow.classList.toggle('show');
}