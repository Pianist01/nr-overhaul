const bodyContainer = document.querySelector('body');

const iconBox = document.querySelector('.icon-container');

const figureBox = document.querySelector('figure');

const memberBox = document.createElement('div');
memberBox.classList.add('member-box');

const logo = document.querySelector('.logo');
logo.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = 'index.html';
});

const screenWidth = window.innerWidth;

const levaArea = document.querySelector('.pastors');

console.log(getComputedStyle(bodyContainer).backgroundColor);

let height = 0;

const maxHeight = 60;

const minHeight = 0;

let memberInfo;

let img;

let joksanTitle;

let exitImage;

let levaBox;

let levaSquare;

if(screenWidth > 428) {
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
}

const serviceMenu = document.querySelector('.service');
const maxMenuHeight = 70;
const baseHeight = 25;

let sunday = document.createElement('a');
let tuesday = document.createElement('a');
let cena = document.createElement('a');
let vigil = document.createElement('a');

const serviceLink = [sunday, tuesday, cena, vigil];

function dropDownUp() {
    serviceMenu.addEventListener('mouseenter', (e) => {
        e.preventDefault();

        height = 25;
        maxMenuHeight;

        const animateDrop = () => {
            height += 3;

            serviceMenu.style.height = height + '%';
            serviceMenu.style.gridTemplateRows = 'repeat(5, .3fr)';
            if(height < maxMenuHeight) {
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

// This code will display the info for the band members when they are clicked on

const mainContainer = document.querySelector('.band');

const joksan = document.querySelector('.joksan-info');
const zaza = document.querySelector('.abel-info');
const baba = document.querySelector('.gadiel-info');
const poopi = document.querySelector('.poopi-info');
// const rosa = document.querySelector('.rosa-info');
let clickCount = 0;

const bandArray = [joksan, zaza, baba, poopi];

const nameArray = ['Joksan Hernandez', 'Abel Garcia', 'Gadiel Garcia', 'Isai Hernandez'];

let transparent = 0;
const maxTransparent = 1;
const minTransparent = 0;

let insideChurch = document.querySelector('.service-image');
let levaWife = document.querySelector('.pastor-image');


levaWife.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('This is Leva and Reyna');

    levaWife.style.opacity = 0;

    levaBox = document.createElement('div');
    levaBox.classList.add('leva-container');

    if(screenWidth <= 428) {
        levaBox.style.width = '90%';
    } else {
        levaBox.style.width = '50%';
    }

    levaSquare = document.createElement('div');
    levaSquare.classList.add('leva-square');
    levaBox.append(levaSquare);

    bodyContainer.style.backgroundColor = 'rgba(0, 0, 0, 1)';
    bandArray.forEach((player) => {
        player.style.opacity = '0';
    });

    insideChurch.style.opacity = 0;

    height = 0;
    maxHeight;

    const animateHeight = () => {
        height += 3;
        levaBox.style.height = height + '%';

        if(height < maxHeight) {
            requestAnimationFrame(animateHeight);
        } 
    }

    animateHeight();

    aboutLeva();

    levaExit();

    levaBox.style.gridColumnStart = 1;
    levaBox.style.gridColumnEnd = 4;
    levaBox.style.gridRowStart = 1;
    levaBox.style.gridRowEnd = 4;
    levaBox.style.zIndex = 1;
    levaBox.style.position = 'absolute';
    levaBox.style.justifySelf = 'center';
    levaBox.style.alignSelf = 'center';

    levaArea.append(levaBox);
});




bandArray.forEach((member, index) => {
    member.addEventListener('click', (e) => {

        if(bodyContainer !== e) {
            console.log('this is not body');

            bodyContainer.style.backgroundColor = 'rgba(0, 0, 0, 1)';

            bandArray.forEach((player) => {
                player.style.opacity = '0';
            });

            insideChurch.style.opacity = 0;

            levaWife.style.opacity = 0;
        }

        if(index === 0) {
            console.log('This is Joksan' + index);
            memberBox;
            animate();
            aboutMember();
            aboutJoksan();
            enableClick();
            img.src = 'img/Job.jpg';
            joksan.style.pointerEvents = 'none';
            baba.style.pointerEvents = 'none';
            zaza.style.pointerEvents = 'none';
            poopi.style.pointerEvents = 'none';
        } else if(index === 1) {
            console.log('This is Abel');
            memberBox;
            animate();
            aboutMember();
            aboutAbel();
            enableClick();
            img.src = 'img/Zaza.jpg';
            zaza.style.pointerEvents = 'none';
            joksan.style.pointerEvents = 'none';
            baba.style.pointerEvents = 'none';
            poopi.style.pointerEvents = 'none';
        } else if(index === 2) {
            console.log('This is Gadiel');
            memberBox;
            animate();
            aboutMember();
            aboutGadiel();
            enableClick();
            img.src = 'img/Gadiel.jpg';
            baba.style.pointerEvents = 'none';
            joksan.style.pointerEvents = 'none';
            zaza.style.pointerEvents = 'none';
            poopi.style.pointerEvents = 'none';
        } else if(index === 3) {
            console.log('This is Isai');
            memberBox;
            animate();
            aboutMember();
            aboutIsai();
            enableClick();
            img.src = 'img/poopi.jpg';
            poopi.style.pointerEvents = 'none';
            joksan.style.pointerEvents = 'none';
            zaza.style.pointerEvents = 'none';
            baba.style.pointerEvents = 'none';
        } else {
            console.log('This is Rosy');
            memberBox;
            animate();
            aboutMember();
            aboutRosy();
            enableClick();
            img.src = 'img/Rosa.jpg';
            rosa.style.pointerEvents = 'none';
            joksan.style.pointerEvents = 'none';
            zaza.style.pointerEvents = 'none';
            baba.style.pointerEvents = 'none';
            poopi.style.pointerEvents = 'none';
        }
    });
    mainContainer.append(memberBox);
});

function animate() {
    height = 0;
    maxHeight;

    const animateHeight = () => {
        height += 3;
        memberBox.style.height = height + '%';

        if(height < maxHeight) {
            requestAnimationFrame(animateHeight);
        } 
    }

    animateHeight();

    memberBox.style.gridColumnStart = '1';
    memberBox.style.gridColumnEnd = '4';
    memberBox.style.gridRowStart = '1';
    memberBox.style.gridRowEnd = '3';
    memberBox.style.zIndex = '1';
    memberBox.style.position = 'absolute';
    
}

function aboutMember() {
    memberInfo = document.createElement('div');
    memberInfo.classList.add('info-box');

    img = document.createElement('img')
    img.classList.add('member-image');

    memberInfo.append(img);
    memberBox.append(memberInfo);
};

// This funciton will close member info box and reset pointer click event
function enableClick() {
    const memberExit = document.createElement('div');
    memberExit.classList.add('band-exit');
    exitImage = document.createElement('img');
    exitImage.src = 'img/exit.png';
    memberExit.append(exitImage);
    memberExit.addEventListener('click', (e) => {
        e.preventDefault();
        bodyContainer.style.backgroundColor = 'rgba(0, 0, 0, 0)';
        insideChurch.style.opacity = 1;
        levaWife.style.opacity = 1;
        memberInfo.style.display = 'none';
        const goAway = () => {
            height -= 3;
            memberBox.style.height = height + '%';
            if(height) {
                requestAnimationFrame(goAway);
            }
        }

        goAway();

        const backToWhite = () => {
            setInterval(() => {
                if(transparent > minTransparent) {
                    transparent -= .5;
                    bodyContainer.style.backgroundColor = `rgba(0, 0, 0, ${transparent})`;
                    requestAnimationFrame(backToWhite);
                }
            }, 1000);
        }

        backToWhite();

        bandArray.forEach((item) => {
            item.style.pointerEvents = '';
            item.style.opacity = '100';
        });
    });
    memberInfo.append(memberExit);
}

function levaExit() {
    const exit = document.createElement('div');
    exit.classList.add('leva-exit');
    exitImage = document.createElement('img');
    exitImage.src = 'img/exit.png';
    exit.append(exitImage)
    levaSquare.append(exit);

    exit.addEventListener('click', (e) => {
        bodyContainer.style.backgroundColor = 'rgba(0, 0, 0, 0)';
        const byeLeva = () => {
            height -= 3;
            levaBox.style.height = height + '%';
            if(height) {
                requestAnimationFrame(byeLeva);
            } else {
                levaBox.remove();
            }
        }

        byeLeva();

        levaWife.style.opacity = 1;
        insideChurch.style.opacity = 1;
        bandArray.forEach((item) => {
            item.style.opacity = 1;
        });
    });
}

function aboutLeva() {
    const levaTitle = document.createElement('h2')
    levaTitle.classList.add('member-title', 'pastor-nombre');
    levaTitle.textContent = 'Victor y Brizza Hernandez';

    const levaPosition = document.createElement('p');
    levaPosition.classList.add('member-position');
    levaPosition.textContent = 'Pastores';

    const levaDescrip = document.createElement('p');
    levaDescrip.classList.add('member-paragraph', 'leva-paragraph');
    levaDescrip.textContent = 'Victor y Brizza tienen 20 a\u00F1os casados. Con sus dos hijos y hija, toda la familia sirve dentro de la iglesia. Salvado de una vida de drogas y deliquencia, Victor sigue con el mismo fuego de servir a Cristo hoy como el primer dia. Pero, tras cada hombre que se esfuerza a servir a Dios a lo 100%, siempre hay una mujer de Dios tras de el. Brizza siempre hace todo lo posible de ayudar el ministerio con las mujeres y para todos en general. Siempre la puedes encontrar sirviendo la congregacion en todo lo que necesita.';

    levaSquare.append(levaTitle, levaPosition, levaDescrip);
}

// This function and every other one named about(insert band member) will display member description
function aboutJoksan() {
    joksanTitle = document.createElement('h2');
    joksanTitle.classList.add('member-title', 'joata-title');
    joksanTitle.textContent = nameArray[0];

    const joksanPosition = document.createElement('p');
    joksanPosition.classList.add('member-position', 'joata-position');
    joksanPosition.textContent = 'Baterista/Primera Voz';

    const joksanDescrip = document.createElement('p');
    joksanDescrip.classList.add('member-paragraph', 'joata-paragraph');
    joksanDescrip.textContent = 'Tocando la baterai por la mayoria de su vida, Joksan lidera la banda de Nuevo Remanente con su talento y tambien con su voz. Joksan siempre le da todo su esfuerzo a adorar a nuestro se\u00F1or con cada cancion.';
    memberInfo.append(joksanTitle, joksanPosition, joksanDescrip);
}

function aboutAbel() {
    const abelTitle = document.createElement('h2');
    abelTitle.classList.add('member-title', 'abel-title');
    abelTitle.textContent = nameArray[1];

    const abelPosition = document.createElement('p');
    abelPosition.classList.add('member-position', 'abel-position');
    abelPosition.textContent = 'Guitarista';

    const abelDescrip = document.createElement('p');
    abelDescrip.classList.add('member-paragraph', 'abel-paragraph');
    abelDescrip.textContent = 'El primer guitarista del equipo, Abel demuestra su talento en la guitara electrica en cada servicio. Con sonidos de excellencia y nivel alta, y todo para nuestro Dios.';
    memberInfo.append(abelTitle, abelPosition, abelDescrip);
}

function aboutGadiel() {
    const gadielTitle = document.createElement('h2');
    gadielTitle.classList.add('member-title', 'gadiel-title');
    gadielTitle.textContent = nameArray[2];

    const gadielPosition = document.createElement('p');
    gadielPosition.classList.add('member-position', 'gadiel-position');
    gadielPosition.textContent = 'Bajo';

    const gadielDescrip = document.createElement('p');
    gadielDescrip.classList.add('member-paragraph', 'gadiel-paragraph');
    gadielDescrip.textContent = 'Nuestro bajo de Nuevo Remanente. Gadiel siempre completa cada cancion con su bajo. Sin el, muchas canciones sonarian vacias. Ademas del bajo, Gadiel toca la bateria y la guitara.';
    memberInfo.append(gadielTitle, gadielPosition, gadielDescrip);
}

function aboutIsai() {
    const isaiTitle = document.createElement('h2');
    isaiTitle.classList.add('member-title', 'isai-title');
    isaiTitle.textContent = nameArray[3];

    const isaiPosition = document.createElement('p');
    isaiPosition.classList.add('member-position', 'isai-position');
    isaiPosition.textContent = 'Pianista';

    const isaiDescrip = document.createElement('p');
    isaiDescrip.classList.add('member-paragraph', 'isai-paragraph');
    isaiDescrip.textContent = 'El maestro del piano. Isai trae la emocion en cada cancion con su talento. Es el paquete completo en el piano.';
    memberInfo.append(isaiTitle, isaiPosition, isaiDescrip);
}

// function aboutRosy() {
//     const rosaTitle = document.createElement('h2');
//     rosaTitle.classList.add('member-title');
//     rosaTitle.textContent = nameArray[4];

//     const rosaPosition = document.createElement('p');
//     rosaPosition.classList.add('member-position');
//     rosaPosition.textContent = 'Segunda Voz';

//     const rosaDescrip = document.createElement('p');
//     rosaDescrip.classList.add('member-paragraph');
//     rosaDescrip.textContent = 'Apasionada con cantando, Rosy ayuda la banda como la segunda voz. Ella le agrega mas emocion a cada cancion con una sonrisa en su cara.';
//     memberInfo.append(rosaTitle, rosaPosition, rosaDescrip);
// }

const insta = document.querySelector('.insta');

insta.addEventListener('click', (e) => {
    e.preventDefault();
    window.open('https://www.instagram.com/nuevoremanenteoc/', '_blank');
});

// Code for screen size 428px and below
if(screenWidth <= 428) {
    iconBox.addEventListener('click', (e) => {
        e.preventDefault();
        console.log('This function will just be for smaller screen');
        const navSmall = document.querySelector('.navigation');
        navSmall.style.height = '100%';

        const closeSmall= document.querySelector('.exit');
        closeSmall.addEventListener('click', (e) => {
        e.preventDefault();
        console.log('Display before:', navSmall.style.display);
        navSmall.style.height = '0';
    });
    });

}
