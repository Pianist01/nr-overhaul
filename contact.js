console.log('Working');
const body = document.querySelector('body');
emailjs.init('yqZixuN23JZWME2M1');

const screenWidth = window.innerWidth;
console.log(screenWidth);

// Header functionality

const logo = document.querySelector('.logo');
logo.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = 'index.html';
});

const menu = document.querySelector('.icon-container');
const navMenu = document.querySelector('.navigation');
const navExit = document.querySelector('.exit');

if(screenWidth > 428) {
    menu.addEventListener('click', (e) => {
    e.preventDefault();
    navMenu.style.width = '300px';
});

navExit.addEventListener('click', (e) => {
    e.preventDefault();
    navMenu.style.width = '0';
});
}

function iconAnimation() {
    const iconContainer = document.querySelector('.icon-container');
    iconContainer.addEventListener('click', (e) => {
        e.preventDefault();
        iconContainer.classList.add('click-icon');
    });

    const closeMenu = document.querySelector('.exit');
    closeMenu.addEventListener('click', (e) => {
        e.preventDefault();
        iconContainer.classList.remove('click-icon');
    });
}

iconAnimation();


const serviceMenu = document.querySelector('.service');
const maxHeight = 70;
const baseHeight = 25;

const sunday = document.createElement('a');
const tuesday = document.createElement('a');
const cena = document.createElement('a');
const vigil = document.createElement('a');

const serviceLink = [sunday, tuesday, cena, vigil];

function dropDownUp() {
    serviceMenu.addEventListener('mouseenter', (e) => {
        e.preventDefault();
    
        height = 25;
        maxHeight;
    
        const animateDrop = () => {
            height += 3;
    
            serviceMenu.style.height = height + '%';
            serviceMenu.style.gridTemplateRows = 'repeat(5, .3fr)';
            if(height < maxHeight) {
                requestAnimationFrame(animateDrop);
            }
        }

        serviceLink.forEach((service, index) => {
            if(index === 0) {
                service.href = 'sunday.html';
                service.textContent = 'Domingos';
                service.classList.add('sunday');
                service.style.display = 'block';
            } else if(index === 1) {
                service.href = 'tuesday.html';
                service.textContent = 'Martes';
                service.classList.add('tuesday');
                service.style.display = 'block';
            } else if(index === 2) {
                service.href = 'cena.html';
                service.textContent = 'Santa Cena';
                service.classList.add('cena');
                service.style.display = 'block';
            } else if(index === 3) {
                service.href = 'vigil.html';
                service.textContent = 'Vigilia';
                service.classList.add('vigil');
                service.style.display = 'block';
            }

            serviceMenu.append(service);
        });

        animateDrop();
    });

    serviceMenu.addEventListener('mouseleave', (e) => {
        e.preventDefault();

        const goAway = () => {
            height -= 3;
            serviceMenu.style.height = height + '%';
            serviceMenu.style.gridTemplateRows = '';
            if(height > baseHeight) {
                requestAnimationFrame(goAway);
            }
        }

        serviceLink.forEach((item) => {
            item.style.display = 'none';
        });
        goAway();
    });
}

dropDownUp();

// Main content functionality

const main = document.querySelector('main');
const title = document.querySelector('h1');
const box = document.querySelector('.contact-box');
let formSubmit = false;

function scrollingAnimation() {
    window.addEventListener('scroll', (e) => {
    e.preventDefault();
    const triggerPoint = window.innerWidth <= 768 ? 250 : 900;

    if(formSubmit === true) {
        window.removeEventListener('scroll', scrollingAnimation);
        console.log('Event listener removed');
    } else if(window.scrollY > triggerPoint) {
        main.style.backgroundColor = 'rgba(0, 0, 0, 1)';
        box.style.boxShadow = '1px 1px 20px 1px white';
        box.style.backgroundColor = 'white';
    } else {
        main.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    }
    
});
}

scrollingAnimation();

const insta = document.querySelector('.insta');

insta.addEventListener('click', (e) => {
    e.preventDefault();
    window.open('https://www.instagram.com/nuevoremanenteoc/', '_blank');
});

// Code for screen size 428px and below

if(screenWidth <= 428) {
    menu.addEventListener('click', (e) => {
        e.preventDefault();
        console.log('Smaller screen');
        navMenu.style.height = '100%';
    });

    navExit.addEventListener('click', (e) => {
        e.preventDefault();
        navMenu.style.height = '0';
    });

}

const form = document.querySelector('#contact-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    submitFormAnimation();
    formSubmit = true;
    emailjs.sendForm('service_w43j5cg', 'template_5eer8ha', form)
    .then(() => {
        displayMessage('Mensaje enviado! Gracias por contactarnos.', 'success');
        form.reset();
    })
    .catch((error) => {
        displayMessage('Error al enviar el mensaje. Por favor, inténtalo de nuevo.', 'error');
        console.error(error);
    });
});

function displayMessage(text, type) {
    const messageContainer = document.createElement('div');
    messageContainer.classList.add('message-container');

    const message = document.createElement('p');
    message.classList.add('message-box');
    message.textContent = text;

    messageContainer.append(message);
    body.append(messageContainer);
}

function submitFormAnimation() {
    const header = document.querySelector('header');
    const main = document.querySelector('main');
    const footer = document.querySelector('footer');
    const headerContainer = document.querySelector('.header-container');
    const contactBox = document.querySelector('.contact-box');

    const collection = [header, main, footer];

    collection.forEach((element) => {
        element.style.backgroundColor = 'black';
    });
    headerContainer.style.opacity = '0';
    contactBox.style.opacity = '0';
}