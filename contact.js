console.log('Working');

// Header functionality

const logo = document.querySelector('.logo');
logo.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = 'index.html';
});

const menu = document.querySelector('.icon-container');
const navMenu = document.querySelector('.navigation');
const navExit = document.querySelector('.exit');
menu.addEventListener('click', (e) => {
    e.preventDefault();
    navMenu.style.width = '300px';
});

navExit.addEventListener('click', (e) => {
    e.preventDefault();
    navMenu.style.width = '0';
});

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

window.addEventListener('scroll', (e) => {
    e.preventDefault();
    if(window.scrollY > 900) {
        main.style.backgroundColor = 'rgba(0, 0, 0, 1)';
        box.style.boxShadow = '1px 1px 20px 1px white';
        box.style.backgroundColor = 'white';
    }
});

const inputArea = document.querySelector('input');
const button = document.querySelector('button');

button.disabled = true;

inputArea.addEventListener('input', function() {
    if(inputArea.value.trim() !== '') {
        console.log('Filled');
        button.disabled = false;
    } else {
        console.log('Not filled');
        button.disabled = true;
    }
});

const formName = document.getElementById('contact-form-name');
const email = document.getElementById('contact-form-email');
const phoneNumber = document.getElementById('contact-form-phone');

const formQuestions = [formName, email, phoneNumber];

let formData = []

button.addEventListener('click', (e) => {
    e.preventDefault();
    formData.push(inputArea.value);
    console.log(formData);
});
