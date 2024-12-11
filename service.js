const container = document.querySelector('body');
const navBox = document.querySelector('.icon-container');
const mainContainer = document.querySelector('.main-container');

navBox.addEventListener('click', (e) => {
  e.preventDefault();
  const navMenu = document.querySelector('.navigation');
  navMenu.style.width = '300px';
  navMenu.style.display = 'block';
});

const sunday = document.querySelector('.sundays');
const tuesday = document.querySelector('.tuesdays');
const cena = document.querySelector('.santa-cena');
const vigil = document.querySelector('.vigilia');

const services =[sunday, tuesday, cena, vigil];
let serviceBox = document.createElement('div');
serviceBox.classList.add('service-box');

services.forEach((service, index) => {
  service.addEventListener('click', (e) => {
    if(index === 0) {
      console.log('This is Sunday');
      serviceBox;
      disableService();
      animateCard();
    } else if(index === 1) {
      console.log('This is tuesday');
      disableService();
    } else if(index === 2) {
      console.log('This is Santa Cena');
      disableService();
    } else if(index === 3) {
      console.log('This is Vigilia');
      disableService();
    }

    mainContainer.append(serviceBox);
  });
});

function animateCard() {
  let height = 0;
  const maxHeight = 60;

  const animateHeight = () => {
    height += 3;
    serviceBox.style.height = height + '%';

    if(height < maxHeight) {
      requestAnimationFrame(animateHeight);
    }
  }

  animateHeight();

  serviceBox.style.gridColumn = '1/4';
  serviceBox.style.gridRow = '1/3';
  serviceBox.style.zIndex = '1';
  serviceBox.style.position = 'absolute';
}

function disableService() {
  services.forEach((item, e) => {
    if(item !== e) {
      item.style.pointerEvents = 'none';
    }
  });
}