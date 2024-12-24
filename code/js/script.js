let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.menu-list');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-times'); // Altera o ícone entre "hambúrguer" e "x"
    navbar.classList.toggle('active'); // Mostra ou esconde o menu
};
