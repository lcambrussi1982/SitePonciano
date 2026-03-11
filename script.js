const btnMenu = document.getElementById('btn-menu');
const menu = document.querySelector('.menu');
const dropdownItems = document.querySelectorAll('.dropdown-item');

btnMenu.addEventListener('click', () => {
  menu.classList.toggle('ativo');
});

if (window.innerWidth <= 768) {
  dropdownItems.forEach((item) => {
    const linkPrincipal = item.querySelector('a');

    linkPrincipal.addEventListener('click', (e) => {
      e.preventDefault();
      item.classList.toggle('aberto');
    });
  });
}

window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    menu.classList.remove('ativo');
    dropdownItems.forEach((item) => item.classList.remove('aberto'));
  }
});