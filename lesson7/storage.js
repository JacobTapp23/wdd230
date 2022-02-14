let body = document.querySelector('body');
// localStorage.setItem('bgcolor', '0000FF');
// let color = localStorage.getItem('bgcolor');
// body.style.backgroundColor = '#' + color;

// Second:

var bgcolorForm = document.getElementById('bgcolor');


if(!localStorage.getItem('bgcolor')) {
    populateStorage();
} else {
    setStyles();
}

function populateStorage() {
    localStorage.setItem('bgcolor', bgcolorForm.value);

    setStyles();
}

function setStyles() {
    var currentColor = localStorage.getItem('bgcolor');

    // document.getElementById('bgcolor').value = currentColor;

    body.style.backgroundColor = '#' + currentColor;

}

bgcolorForm.addEventListener = ('change', populateStorage);