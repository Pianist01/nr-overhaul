console.log('This page is working');

const screenWidth = window.innerWidth;
if(screenWidth <= 428) {
    document.body.style.height = 'auto';
    document.body.style.gridTemplateRows = 'auto auto auto';
}

// Logo functionality
const logo = document.querySelector('.logo');
logo.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = 'index.html';
});

// Nav menu

let navMenu;

const navBox = document.querySelector('.icon-container');
const navExit = document.querySelector('.nav-exit');

if(screenWidth > 428) {
    navBox.addEventListener('click', (e) => {
    navMenu = document.querySelector('.navigation');
    navMenu.style.width = '300px';
    navMenu.style.display = 'block';
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


let tuesday = document.createElement('a');
let cena = document.createElement('a');
let vigil = document.createElement('a');

const serviceLink = [tuesday, cena, vigil];

const serviceMenu = document.querySelector('.service');
const maxHeight = 60;
const baseHeight = 25;

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
                service.href = 'tuesday.html';
                service.textContent = 'Martes';
                service.classList.add('sunday');
                service.style.display = 'block';
            } else if(index === 1) {
                service.href = 'cena.html';
                service.textContent = 'Santa Cena';
                service.classList.add('tuesday');
                service.style.display = 'block';
            } else if(index === 2) {
                service.href = 'vigil.html';
                service.textContent = 'Vigilia';
                service.classList.add('cena');
                service.style.display = 'block';
            } 

            if(window.location.pathname.endsWith('tuesday.html')) {
                if(index === 0) {
                    service.href = 'sunday.html';
                    service.textContent = 'Domingos';
                    service.classList.add('sunday');
                    service.style.display = 'block';
                } else if(index === 1) {
                    service.href = 'cena.html';
                    service.textContent = 'Santa Cena';
                    service.classList.add('tuesday');
                    service.style.display = 'block';
                } else if (index === 2) {
                    service.href = 'vigil.html';
                    service.textContent = 'Vigilia';
                    service.classList.add('cena');
                    service.style.display = 'block';
                }
            }

            if(window.location.pathname.endsWith('cena.html')) {
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
                    service.href = 'vigil.html';
                    service.textContent = 'Vigilia';
                    service.classList.add('cena');
                    service.style.display = 'block';
                }
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
    })
}

dropDownUp();

const insta = document.querySelector('.insta');

insta.addEventListener('click', (e) => {
    e.preventDefault();
    window.open('https://www.instagram.com/nuevoremanenteoc/', '_blank');
})

// Code for screen size: 428px and below

if(screen.width <= 428) {
    navBox.addEventListener('click', (e) => {
        e.preventDefault();

        const navSmall = document.querySelector('.navigation');
        navSmall.style.height = '110vh';

        const closeSmall = document.querySelector('.exit');
        closeSmall.addEventListener('click', (e) => {
            e.preventDefault();

            navSmall.style.height = '0';
        });
    });
}
