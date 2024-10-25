console.log('This is a test');

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
