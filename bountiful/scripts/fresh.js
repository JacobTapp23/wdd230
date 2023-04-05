// Responsive Hamburger Menu
const nav = document.querySelector('.navigation');
nav.addEventListener('click', ()=>
{nav.classList.toggle('shown')});

// Dynamic Last Updated Footer
let currentdate = document.lastModified;
      document.querySelector(".modified").textContent =
        "Last Updated: " + currentdate;
document.querySelector(".year").innerHTML = new Date().getFullYear();

fetch('https://andejuli.github.io/wdd230/fruit.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    // console.log(jsonObject);  // temporary checking for valid response and data parsing
    const fruit = jsonObject;
    fruit.forEach(displayFruitName1);
    fruit.forEach(displayFruitName3);
    fruit.reverse().forEach(displayFruitName2);

    function displayFruitName1(fruit) {  // Create elements to add to the document
      let fruitname = document.createElement('option');
      fruitname.textContent = `${fruit.name}`;
      fruitname.setAttribute('value', fruit.name);
      // Add/append the existing HTML div with the cards class with the section(card)
      document.querySelector('#fruit1').appendChild(fruitname);
    }
  
    function displayFruitName2(fruit) {  // Create elements to add to the document
      let fruitname = document.createElement('option');
      fruitname.textContent = `${fruit.name}`;
      fruitname.setAttribute('value', fruit.name);
      // Add/append the existing HTML div with the cards class with the section(card)
      document.querySelector('#fruit2').appendChild(fruitname);
    }
  
    function displayFruitName3(fruit) {  // Create elements to add to the document
      let fruitname = document.createElement('option');
      fruitname.textContent = `${fruit.name}`;
      fruitname.setAttribute('value', fruit.name);
      // Add/append the existing HTML div with the cards class with the section(card)
      document.querySelector('#fruit3').appendChild(fruitname);
    }

    const currentDate = new Date().toISOString().split("T")[0];
    const dateInput = document.getElementById("thedate");
    dateInput.value = currentDate;

const submit = document.querySelector(".submit")
submit.addEventListener('submit', (event) => {
  event.preventDefault();
  document.querySelector('.thankyou').classList.add('displayoutput');
  document.querySelector('.formoutput').classList.replace('formoutput', 'noimage');
  document.querySelector('#freshname').textContent = document.querySelector('#fname').value;
  document.querySelector('#freshemail').textContent = document.querySelector('#email').value;
  document.querySelector('#freshphone').textContent = document.querySelector('#phone').value;
  document.querySelector('#freshdate').textContent = document.querySelector('#thedate').value;
  document.querySelector('#specialinstructions').textContent = document.querySelector('#description').value;

  const fruit1 = document.querySelector('#fruit1').value;
  const fruit2 = document.querySelector('#fruit2').value;
  const fruit3 = document.querySelector('#fruit3').value;
  document.querySelector('#freshfruit1').textContent = fruit1;
  document.querySelector('#freshfruit2').textContent = fruit2;
  document.querySelector('#freshfruit3').textContent = fruit3;

  function findFruitNutritions(fruit1, fruitData) {
    for (const fruit of fruitData) {
        if (fruit.name.toLowerCase() === fruit1.toLowerCase()) {
            return fruit.nutritions;
        }
    }
    return null; // Return null if the fruit is not found
}

const nutritions1 = findFruitNutritions(fruit1, fruit);
const nutritions2 = findFruitNutritions(fruit2, fruit);
const nutritions3 = findFruitNutritions(fruit3, fruit);

const carbohydrates1 = nutritions1 ? nutritions1.carbohydrates : null;
const protein1 = nutritions1 ? nutritions1.protein : null;
const fat1 = nutritions1 ? nutritions1.fat : null;
const calories1 = nutritions1 ? nutritions1.calories : null;
const sugar1 = nutritions1 ? nutritions1.sugar : null;

const carbohydrates2 = nutritions2 ? nutritions2.carbohydrates : null;
const protein2 = nutritions2 ? nutritions2.protein : null;
const fat2 = nutritions2 ? nutritions2.fat : null;
const calories2 = nutritions2 ? nutritions2.calories : null;
const sugar2 = nutritions2 ? nutritions2.sugar : null;

const carbohydrates3 = nutritions3 ? nutritions3.carbohydrates : null;
const protein3 = nutritions3 ? nutritions3.protein : null;
const fat3 = nutritions3 ? nutritions3.fat : null;
const calories3 = nutritions3 ? nutritions3.calories : null;
const sugar3 = nutritions3 ? nutritions3.sugar : null;

let totalcarbs = Math.round((carbohydrates1 + carbohydrates2 + carbohydrates3) * 10) /10;
let totalprotein = Math.round((protein1 + protein2 + protein3) *10) /10;
let totalfat = Math.round((fat1 + fat2 + fat3) * 10) /10;
let totalcalories = Math.round((calories1 + calories2 + calories3) * 10) / 10;
let totalsugar = Math.round((sugar1 + sugar2 + sugar3) * 10) /10;
document.querySelector('#carbs').textContent = totalcarbs;
document.querySelector('#protein').textContent = totalprotein;
document.querySelector('#fat').textContent = totalfat;
document.querySelector('#calories').textContent = totalcalories;
document.querySelector('#sugar').textContent = totalsugar;

if(!localStorage.getItem('numsmoothies')) {
  localStorage.setItem('numsmoothies', 1);
} else {
  let numplus = localStorage.getItem('numsmoothies');
  numplus++;
  localStorage.setItem('numsmoothies', numplus);
}

});
    
 });



