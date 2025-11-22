document.addEventListener('DOMContentLoaded', () => {
    const toggler = document.querySelector('.navbar__toggler');
    const menu = document.querySelector('.navbar__menu');

    toggler.addEventListener('click', () => {
        menu.classList.toggle('active');
        toggler.classList.toggle('active');
    });

    const links = document.querySelectorAll('.navbar__link');
    links.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('active');
            toggler.classList.remove('active');
        });
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            menu.classList.remove('active');
            toggler.classList.remove('active');
        }
    });
});