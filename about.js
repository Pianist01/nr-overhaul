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
    const joksanInfo = document.createElement('div');
    joksanInfo.classList.add('joata-box');

    let height = 0;
    const maxHeight = 50;

    const animateHeight = () => {
        height += 4;
        joksanInfo.style.height = height + '%';

        if(height < maxHeight) {
            requestAnimationFrame(animateHeight);
        }
    };

    animateHeight();


    joksanInfo.style.gridColumnStart = '1';
    joksanInfo.style.gridColumnEnd = '4';
    joksanInfo.style.gridRowStart = '1';
    joksanInfo.style.gridRowEnd = '3';
    joksanInfo.style.zIndex = '1';
    joksanInfo.style.position = 'absolute';

    // const exitInfo = document.createElement('div');
    // exitInfo.style.backgroundColor = 'blue';
    // joksanInfo.append(exitInfo);
    mainContainer.append(joksanInfo);
});

// Function to blur screen when 
