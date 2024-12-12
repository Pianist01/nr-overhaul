const container = document.querySelector('body');
const navBox = document.querySelector('.icon-container');
let navMenu;
const navExit = document.querySelector('.exit');
const mainContainer = document.querySelector('.main-container');

navBox.addEventListener('click', (e) => {
  e.preventDefault();
  navMenu = document.querySelector('.navigation');
  navMenu.style.width = '300px';
  navMenu.style.display = 'block';
});

menuExit();

const sunday = document.querySelector('.sunday-image');
const tuesday = document.querySelector('.tuesday-image');
const cena = document.querySelector('.cena-image');
const vigil = document.querySelector('.vigilia');

const services = [sunday, tuesday, cena, vigil];
let serviceBox = document.createElement('div');
serviceBox.classList.add('service-box');
let infoBox;
let infoExit;
let height;
const maxHeight = 60;

imageHover();

services.forEach((service, index) => {
  service.addEventListener('click', (e) => {

    if(container !== e) {
      container.style.backgroundColor = 'rgba(0, 0, 0, 1)';
    }

    services.forEach((item) => {
      item.style.opacity = 0;
    });

    infoBox = document.createElement('div');
    infoBox.classList.add('info-box');
    serviceBox.append(infoBox);

    infoExit = document.createElement('img');
    infoExit.classList.add('info-exit');
    infoExit.src = 'img/exit.png';
    infoBox.append(infoExit);

    if(index === 0) {
      console.log('This is Sunday');
      serviceBox;
      disableService();
      animateCard();
      aboutSunday();
    } else if(index === 1) {
      console.log('This is tuesday');
      serviceBox;
      disableService();
      animateCard();
      aboutTuesday();
    } else if(index === 2) {
      console.log('This is Santa Cena');
      serviceBox;
      disableService();
      animateCard();
      aboutSantaCena();
    } else if(index === 3) {
      console.log('This is Vigilia');
      serviceBox;
      disableService();
      animateCard();
      aboutVigilia();
    }

    exitBox();

    mainContainer.append(serviceBox);
  });
});

function animateCard() {
  height = 0;
  maxHeight;

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

function exitBox() {
  infoExit.addEventListener('click', (e) => {
    e.preventDefault();
    container.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    services.forEach((item) => {
      item.style.opacity = 100;
      item.style.pointerEvents = '';

      infoBox.style.display = 'none';
    });

    const boxDisappear = () => {
      height -= 3;
      serviceBox.style.height = height + '%';

      if(height) {
        requestAnimationFrame(boxDisappear);
      }
    }

    boxDisappear();

    container.style.backgroundColor = 'rgba(0, 0, 0, 0)';

  });
}

function menuExit() {
  navExit.addEventListener('click', (e) => {
    e.preventDefault();
    navMenu.style.width = 0;
  });
}

function imageHover() {
  services.forEach((service) => {
    service.addEventListener('mouseover', (e) => {
      container.style.filter = 'blur(10px)';
    });
    service.addEventListener('mouseout', (e) => {
      container.style.filter = '';
    });
  });
}

// Service information functions

function aboutSunday() {
  const sundayTitle = document.createElement('h2');
  sundayTitle.classList.add('info-title');
  sundayTitle.textContent = 'Servicio Regular';

  const sundayHours = document.createElement('p');
  sundayHours.classList.add('service-hours');
  sundayHours.textContent = 'Domingos(5PM-7PM)';

  const sundayDescrip = document.createElement('p');
  sundayDescrip.classList.add('service-description');
  sundayDescrip.textContent = 'Cada Domingo a las 5PM, nos reunimos para adorar a nuestro se\u00F1or. Es importante en mantener una relacion personal con Dios cada dia, y ser parte de una congregacion tambien nos ayuda en aprender mas de la palabra de Dios. Ademas de adoracion y predicacion, cada Domingo despues del servicio tenemos convivir juntos con comida o un refresco hecho por nuestras hermanas incre\u00EDbles.';

  infoBox.append(sundayTitle, sundayHours, sundayDescrip);
}

function aboutTuesday() {
  const tuesdayTitle = document.createElement('h2');
  tuesdayTitle.classList.add('info-title');
  tuesdayTitle.textContent = 'Oracion/Predicacion/Estudio';

  const tuesdayHours = document.createElement('p');
  tuesdayHours.classList.add('service-hours');
  tuesdayHours.textContent = 'Martes(7PM-8:30PM)';

  const tuesdayDescrip = document.createElement('p');
  tuesdayDescrip.classList.add('service-description');
  tuesdayDescrip.textContent = 'Cada Martes tenemos servicio de oracion, predicacion, o estudio Biblico. El primer Martes de cada mes es servicio de oracion donde dedicamos un servicio entero a la oracion. La oracion es un aspecto importante en manteniendo una relacion con Dios. Los Martes siguientes son servicios normales donde adoramos al se\u00F1or y despues tenemos tiempo de predicacion donde podemos escuchar la palabra de Dios. El ultimo Martes del mes tenemos estudio Biblico. Si en qualquier momento ha tenido preguntas sobre lo que dice la Biblia, este servicio es para usted.';

  infoBox.append(tuesdayTitle, tuesdayHours, tuesdayDescrip);
}

function aboutSantaCena() {
  const cenaTitle = document.createElement('h2');
  cenaTitle.classList.add('info-title');
  cenaTitle.textContent = 'Santa Cena';

  const cenaHours = document.createElement('p');
  cenaHours.classList.add('service-hours');
  cenaHours.textContent = 'Primer Domingo Del Mes(5PM - 7PM)';

  const cenaDescrip = document.createElement('p');
  cenaDescrip.classList.add('service-description');
  cenaDescrip.textContent = 'Cada primer Domingo del mes tenemos nuestro servicio de la Santa Cena. Como un servicio normal, tenemos adoracion y predicacion, pero al final tomamos parte de la Santa Cena. Jesus nos instruye recordando su memoria y sacrificio con pan y vino(no usamos vino real). Pero tambien es un tiempo lindo para poder reflexionar.';

  infoBox.append(cenaTitle, cenaHours, cenaDescrip);
}

function aboutVigilia() {
  const vigilTitle = document.createElement('h2');
  vigilTitle.classList.add('info-title');
  vigilTitle.textContent = 'Vigilia';

  const vigilHours = document.createElement('p');
  vigilHours.classList.add('service-hours');
  vigilHours.textContent = 'Ultimo Sabado Del Mes(7PM - 12AM)';

  const vigilDescrip = document.createElement('p');
  vigilDescrip.classList.add('service-description');
  vigilDescrip.textContent = 'El ultimo Sabado de cada mes tenemos nuestro servicio de Vigilia. Comenzando a las 7PM, dedicamos una noche entera a nuestro se\u00F1or en oracion, adoracion, predicacion, testimonios, y mas! Ademas de eso, tenemos una cena hecho por nuestras hermanas para la congregacion, y si usted quiere, puede traer algo para compartir con todos. Este servicio es el paquete completeo.';

  infoBox.append(vigilTitle, vigilHours, vigilDescrip);
}
