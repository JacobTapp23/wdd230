const button = document.querySelector('.btn');
const ham = document.querySelector('.ham');
const nav = document.querySelector('.navigation')

function show() {
    button.classList.toggle('newstyle');
}

button.addEventListener('click', show);
ham.addEventListener('click', () => {
    nav.classList.toggle('responsive');
});

