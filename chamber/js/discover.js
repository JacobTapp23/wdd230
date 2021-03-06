const date = new Date() / 1000;

if(!localStorage.getItem('lastLogin')) {
    populateStorage();
} else {
    loginTime();
}

function populateStorage() {
    localStorage.setItem('lastLogin', date);

    loginTime();
}

function loginTime() {
    let currentDate = new Date() / 1000;
    let lastLogin = localStorage.getItem('lastLogin');
    let daysPassed = (parseFloat(currentDate) - parseFloat(lastLogin)) / (8640);
    let displayTime = Math.round(daysPassed);
    let message = document.getElementById('day').innerHTML = "It has been " + displayTime + " days since your last visit!";
    localStorage.setItem('lastlogin', date);
    

}
;

const images = document.querySelectorAll('.main');
const options = {threshold: [0.9]};

function preloadImage(img) {
    const source = img.getAttribute('data-src');
    img.src = source;
}

const io = new IntersectionObserver(
    (entries, io) => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                preloadImage(entry.target); //call a function send in the image that is currently intersecting
                io.unobserve(entry.target); //stop observing the image
            } else {
                return;
            }
            //console.log(entries);
        });
    }, options);

images.forEach(images =>{
    io.observe(images);
});