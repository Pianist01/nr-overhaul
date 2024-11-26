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

let height = 0;

const maxHeight = 60;

const minHeight = 0;

let memberInfo;

let img;

let joksanTitle;

// Overlays Selected

const overlayOne = document.querySelector('.overlay1');
const overlayTwo = document.querySelector('.overlay2');
const overlayThree = document.querySelector('.overlay3');
const overlayFour = document.querySelector('.overlay4');
const overlayFive = document.querySelector('.overlay5');

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

// This code will display the info for the band members when they are clicked on

const mainContainer = document.querySelector('.band');

const joksan = document.querySelector('.joksan-info');
const zaza = document.querySelector('.abel-info');
const baba = document.querySelector('.gadiel-info');
const poopi = document.querySelector('.poopi-info');
const rosa = document.querySelector('.rosa-info');
let clickCount = 0;

const bandArray = [joksan, zaza, baba, poopi, rosa];

const nameArray = ['Joksan Hernandez', 'Abel Garcia', 'Gadiel Garcia', 'Isai Hernandez', 'Rosy'];

bandArray.forEach((member, index) => {
    member.addEventListener('click', (e) => {

        if(bodyContainer !== e) {
            console.log('this is not body');
            bodyContainer.style.backgroundColor = 'black';
            bandArray.forEach((player) => {
                player.style.opacity = '0';
            });
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
            rosa.style.pointerEvents = 'none';
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
            rosa.style.pointerEvents = 'none';
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
            rosa.style.pointerEvents = 'none';
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
            rosa.style.pointerEvents = 'none';
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
    memberExit.addEventListener('click', (e) => {
        e.preventDefault();
        bodyContainer.style.backgroundColor = 'white';
        memberInfo.style.display = 'none';
        const goAway = () => {
            height -= 3;
            memberBox.style.height = height + '%';
            if(height) {
                requestAnimationFrame(goAway);
            }
        }
        bandArray.forEach((item) => {
            item.style.pointerEvents = '';
            item.style.opacity = '100';
        });
        goAway();
    });
    memberInfo.append(memberExit);
}

// This function and every other one named about(insert band member) will display member description
function aboutJoksan() {
    joksanTitle = document.createElement('h2');
    joksanTitle.classList.add('member-title');
    joksanTitle.textContent = nameArray[0];

    const joksanPosition = document.createElement('p');
    joksanPosition.classList.add('member-position');
    joksanPosition.textContent = 'Baterista/Primera Voz';

    const joksanDescrip = document.createElement('p');
    joksanDescrip.classList.add('member-paragraph');
    joksanDescrip.textContent = 'Tocando la baterai por la mayoria de su vida, Joksan lidera la banda de Nuevo Remanente con su talento y tambien con su voz. Joksan siempre le da todo su esfuerzo a adorar a nuestro se\u00F1or con cada cancion.';
    memberInfo.append(joksanTitle, joksanPosition, joksanDescrip);
}

function aboutAbel() {
    const abelTitle = document.createElement('h2');
    abelTitle.classList.add('member-title');
    abelTitle.textContent = nameArray[1];

    const abelPosition = document.createElement('p');
    abelPosition.classList.add('member-position');
    abelPosition.textContent = 'Guitarista';

    const abelDescrip = document.createElement('p');
    abelDescrip.classList.add('member-paragraph');
    abelDescrip.textContent = 'El primer guitarista del equipo, Abel demuestra su talento en la guitara electrica en cada servicio. Con sonidos de excellencia y nivel alta, y todo para nuestro Dios.';
    memberInfo.append(abelTitle, abelPosition, abelDescrip);
}

function aboutGadiel() {
    const gadielTitle = document.createElement('h2');
    gadielTitle.classList.add('member-title');
    gadielTitle.textContent = nameArray[2];

    const gadielPosition = document.createElement('p');
    gadielPosition.classList.add('member-position');
    gadielPosition.textContent = 'Bajo';

    const gadielDescrip = document.createElement('p');
    gadielDescrip.classList.add('member-paragraph');
    gadielDescrip.textContent = 'Nuestro bajo de Nuevo Remanente. Gadiel siempre completa cada cancion con su bajo. Sin el, muchas canciones sonarian vacias. Ademas del bajo, Gadiel toca la bateria y la guitara.';
    memberInfo.append(gadielTitle, gadielPosition, gadielDescrip);
}

function aboutIsai() {
    const isaiTitle = document.createElement('h2');
    isaiTitle.classList.add('member-title');
    isaiTitle.textContent = nameArray[3];

    const isaiPosition = document.createElement('p');
    isaiPosition.classList.add('member-position');
    isaiPosition.textContent = 'Pianista';

    const isaiDescrip = document.createElement('p');
    isaiDescrip.classList.add('member-paragraph');
    isaiDescrip.textContent = 'El maestro del piano. Isai trae la emocion en cada cancion con su talento. Es el paquete completo en el piano.';
    memberInfo.append(isaiTitle, isaiPosition, isaiDescrip);
}

function aboutRosy() {
    const rosaTitle = document.createElement('h2');
    rosaTitle.classList.add('member-title');
    rosaTitle.textContent = nameArray[4];

    const rosaPosition = document.createElement('p');
    rosaPosition.classList.add('member-position');
    rosaPosition.textContent = 'Segunda Voz';

    const rosaDescrip = document.createElement('p');
    rosaDescrip.classList.add('member-paragraph');
    rosaDescrip.textContent = 'Apasionada con cantando, Rosy ayuda la banda como la segunda voz. Ella le agrega mas emocion a cada cancion con una sonrisa en su cara.';
    memberInfo.append(rosaTitle, rosaPosition, rosaDescrip);
}