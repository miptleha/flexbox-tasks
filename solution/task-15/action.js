document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.show-action');
    const main = document.querySelector('.main');
    button.addEventListener('click', () => {
        main.classList.toggle('visible');
    })
});