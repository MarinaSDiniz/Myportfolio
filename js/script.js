let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.menu-list');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-times'); // Altera o ícone entre "hambúrguer" e "x"
    navbar.classList.toggle('active'); // Mostra ou esconde o menu
};

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      const offset = document.querySelector('header').offsetHeight;
      const topPosition = target.offsetTop - offset;
  
      window.scrollTo({
        top: topPosition,
        behavior: 'smooth'
      });
    });
  });
  