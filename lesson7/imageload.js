const images = document.querySelectorAll('img');
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
    