console.log('This is a test');

const iconBox = document.querySelector('.icon-container');
const logo = document.querySelector('.logo');

logo.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = 'index.html';
});

iconBox.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('It works!');
    const navMenu = document.querySelector('.navigation');
    navMenu.style.width = '300px';
    navMenu.style.display = 'block';

    const closeMenu = document.querySelector('.exit');
    closeMenu.addEventListener('click', (e) => {
        e.preventDefault();
        navMenu.style.width = '0';
    });
});

const historyButton = document.querySelector('.history-btn');

historyButton.addEventListener('mouseover', (e) => {
    e.preventDefault();
    historyButton.style.boxShadow = '0 0 10px rgba(231, 234, 246, 0.6)';
});

historyButton.addEventListener('mouseout', (e) => {
    e.preventDefault();
    historyButton.style.boxShadow = '';
});

historyButton.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = 'about.html';
});

const serviceButton = document.querySelector('.service-btn');

serviceButton.addEventListener('mouseover', (e) => {
    e.preventDefault();
    serviceButton.style.boxShadow = '0 0 10px rgba(231, 234, 246, 0.6)';
});

serviceButton.addEventListener('mouseout', (e) => {
    e.preventDefault();
    serviceButton.style.boxShadow = '';
});

let height;
const maxHeight = 70;
let baseHeight = 25;
// const dropDown = document.createElement('div');

const serviceMenu = document.querySelector('.service');
// serviceMenu.addEventListener('mouseenter', (e) => {
//     e.preventDefault();

//     serviceMenu.style.gridTemplateRows = 'repeat(5, .3fr)';
//     dropDown.classList.add('dropdown');

//     height = 0;
//     maxHeight;

//     const animateDrop = () => {
//         height += 3;

//         dropDown.style.height = height + '%';
//         if(height < maxHeight) {
//             requestAnimationFrame(animateDrop);
//         }
//     }

//     animateDrop();
//     dropDownContent();

//     serviceMenu.append(dropDown);
// });

// serviceMenu.addEventListener('mouseleave', (e) => {
//     e.preventDefault();

//     const dropAway = () => {
//         height -= 3;
//         dropDown.style.height = height + '%';

//         if(height) {
//             serviceMenu.style.gridTemplateRows = 'none';
//             requestAnimationFrame(dropAway);
//         }
//     }

//     const about = document.querySelector('.about-us');
//     about.style.backGroundColor = 'white';

//     dropAway();

// });

let sunday = document.createElement('a');
let tuesday = document.createElement('a');
let cena = document.createElement('a');
let vigil = document.createElement('a');

const serviceLink = [sunday, tuesday, cena, vigil];

let serviceItem;

// Redoing dropdown menu

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
    })

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

// function dropDownContent(event) {
//     switch (event.type) {
//         case 'mouseenter': 
//         serviceLink.forEach((service, index) => {
//             service = document.createElement('a');
//             if(index === 0) {
//                 service.href = '#';
//                 service.textContent = 'Domingos';
//                 service.classList.add('sunday');
//                 service.style.display = 'block';
//             } else if(index === 1) {
//                 service.href = '#';
//                 service.textContent = 'Martes';
//                 service.classList.add('tuesday');
//                 service.style.display = 'block';
//             } else if(index === 2) {
//                 service.href = '#';
//                 service.textContent = 'Santa Cena';
//                 service.classList.add('cena');
//                 service.style.display = 'block';
//             } else if(index === 3) {
//                 service.href = '#';
//                 service.textContent = 'Vigilia';
//                 service.classList.add('vigil');
//                 service.style.display = 'block';
//             }
//     });

const insta = document.querySelector('.insta');

insta.addEventListener('click', (e) => {
    e.preventDefault();
    window.open('https://www.instagram.com/nuevoremanenteoc/', '_blank');
});
