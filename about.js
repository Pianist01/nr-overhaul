const bodyContainer = document.querySelector('body');

const iconBox = document.querySelector('.icon-container');

const figureBox = document.querySelector('figure');

const memberBox = document.createElement('div');
memberBox.classList.add('member-box');

let height = 0;

const maxHeight = 60;

let memberInfo;

let img;

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

bandArray.forEach((member, index) => {
    member.addEventListener('click', (e) => {

        if(index === 0) {
            console.log('This is Joksan' + index);
            memberBox;
            animate();
            aboutMember();
            img.src = 'img/Job.jpg';
            baba.style.pointerEvents = 'none';
            zaza.style.pointerEvents = 'none';
            poopi.style.pointerEvents = 'none';
            rosa.style.pointerEvents = 'none';
        } else if(index === 1) {
            console.log('This is Abel');
            memberBox;
            animate();
            aboutMember();
            img.src = 'img/Zaza.jpg';
            joksan.style.pointerEvents = 'none';
            baba.style.pointerEvents = 'none';
            poopi.style.pointerEvents = 'none';
            rosa.style.pointerEvents = 'none';
        } else if(index === 2) {
            console.log('This is Gadiel');
            memberBox;
            animate();
            aboutMember();
            img.src = 'img/Gadiel.jpg';
            joksan.style.pointerEvents = 'none';
            zaza.style.pointerEvents = 'none';
            poopi.style.pointerEvents = 'none';
            rosa.style.pointerEvents = 'none';
        } else if(index === 3) {
            console.log('This is Isai');
            memberBox;
            animate();
            aboutMember();
            img.src = 'img/poopi.jpg';
            joksan.style.pointerEvents = 'none';
            zaza.style.pointerEvents = 'none';
            baba.style.pointerEvents = 'none';
            rosa.style.pointerEvents = 'none';
        } else {
            console.log('This is Rosy');
            memberBox;
            animate();
            aboutMember();
            img.src = 'img/Rosa.jpg';
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

}

// This function and every other one named about(insert band member) will display member description
function aboutJoksan() {

}

// bandArray.forEach((item, index) => {
//     item.addEventListener('click', (e) => {
//         e.preventDefault();
//         console.log('Working' + index);
//         const memberBox = document.createElement('div');
//         memberBox.classList.add('band-box');

//         console.log(clickCount);

//         let height = 0;
//         const maxHeight = 60;

//         const animateHeight = () => {
//         height += 3;
//         memberBox.style.height = height + '%';

//         if(height < maxHeight) {
//             requestAnimationFrame(animateHeight);
//         }

// // Limit clicks to only one when clicking on a band member, clicking should be disabled after one is clicked, until they exit from that band member. 
//         clickCount += 1;
//         if(clickCount === 2) {
//             item.disabled = true;
//         }
//     };

//     animateHeight();

//         memberBox.style.gridColumnStart = '1';
//         memberBox.style.gridColumnEnd = '4';
//         memberBox.style.gridRowStart = '1';
//         memberBox.style.gridRowEnd = '3';
//         memberBox.style.zIndex = '1';
//         memberBox.style.position = 'absolute';

//     mainContainer.append(memberBox);
//     });
// });



// joksan.addEventListener('click', (e) => {
//     const joksanBox = document.createElement('div');
//     joksanBox.classList.add('joata-box');

//     let height = 0;
//     const maxHeight = 60;

//     const animateHeight = () => {
//         height += 3;
//         joksanBox.style.height = height + '%';

//         if(height < maxHeight) {
//             requestAnimationFrame(animateHeight);
//         }
//     };

//     animateHeight();

//     const darkenBackground = () => {
//         bodyContainer.style.backgroundColor = 'black';
//         joksan.style.opacity = '0';
//     }

//     darkenBackground();

    

//     joksanBox.style.gridColumnStart = '1';
//     joksanBox.style.gridColumnEnd = '4';
//     joksanBox.style.gridRowStart = '1';
//     joksanBox.style.gridRowEnd = '3';
//     joksanBox.style.zIndex = '1';
//     joksanBox.style.position = 'absolute';

//     // const exitInfo = document.createElement('div');
//     // exitInfo.style.backgroundColor = 'blue';
//     // joksanInfo.append(exitInfo);
//     mainContainer.append(joksanBox);
// });

// Function to blur screen when band member is clicked on

// function blurBackground() {
//     bodyContainer.style.opacity = '0';
// };
