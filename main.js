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
const maxHeight = 100;
const dropDown = document.createElement('div');

const serviceMenu = document.querySelector('.service');
serviceMenu.addEventListener('click', (e) => {
    e.preventDefault();

    serviceMenu.style.gridTemplateRows = 'repeat(5, .3fr)';
    dropDown.classList.add('dropdown');

    height = 0;
    maxHeight;

    const animateDrop = () => {
        height += 3;

        dropDown.style.height = height + '%';
        if(height < maxHeight) {
            requestAnimationFrame(animateDrop);
        }
    }

    animateDrop();
    dropDownContent();

    serviceMenu.append(dropDown);
});

// serviceMenu.addEventListener('mouseout', (e) => {
//     e.preventDefault();

//     const dropAway = () => {
//         height -= 3;
//         dropDown.style.height = height + '%';

//         if(height) {
//             serviceMenu.style.gridTemplateRows = '';
//             requestAnimationFrame(dropAway);
//         }
//     }

//     dropAway();

// });

let sunday, tuesday, cena, vigil;

const serviceLink = [sunday, tuesday, cena, vigil];

function dropDownContent() {
    serviceLink.forEach((service, index) => {
        service = document.createElement('a');
        if(index === 0) {
            service.href = '#';
            service.textContent = 'Domingos';
            service.classList.add('sunday');
            service.style.display = 'block';
        } else if(index === 1) {
            service.href = '#';
            service.textContent = 'Martes';
            service.classList.add('tuesday');
            // service.style.display = 'block';
        } else if(index === 2) {
            service.href = '#';
            service.textContent = 'Santa Cena';
            service.classList.add('cena');
            // service.style.display = 'block';
        } else if(index === 3) {
            service.href = '#';
            service.textContent = 'Vigilia';
            service.classList.add('vigil');
            // service.style.dispaly = 'block';
        }

        dropDown.append(service);
    });

}
