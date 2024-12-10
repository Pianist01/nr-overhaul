const mainContainer = document.querySelector('body');
const navBox = document.querySelector('.icon-container');

navBox.addEventListener('click', (e) => {
  e.preventDefault();
  const navMenu = document.querySelector('.navigation');
  navMenu.style.width = '300px';
  navMenu.style.display = 'block';
});