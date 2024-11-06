const bodyContainer = document.querySelector('body');

const iconBox = document.querySelector('.icon-container');

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
joksan.addEventListener('click', (e) => {
    const joksanBox = document.createElement('div');
    joksanBox.classList.add('joata-box');

    let height = 0;
    const maxHeight = 60;

    const animateHeight = () => {
        height += 3;
        joksanBox.style.height = height + '%';

        if(height < maxHeight) {
            requestAnimationFrame(animateHeight);
        }
    };

    animateHeight();

    

    joksanBox.style.gridColumnStart = '1';
    joksanBox.style.gridColumnEnd = '4';
    joksanBox.style.gridRowStart = '1';
    joksanBox.style.gridRowEnd = '3';
    joksanBox.style.zIndex = '1';
    joksanBox.style.position = 'absolute';

    // const exitInfo = document.createElement('div');
    // exitInfo.style.backgroundColor = 'blue';
    // joksanInfo.append(exitInfo);
    mainContainer.append(joksanBox);
});

// Function to blur screen when band member is clicked on

// function blurBackground() {
//     blurOverlay.style.backdropFilter = 'blur(8px)';
// };
