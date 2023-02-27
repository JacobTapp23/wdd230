const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

async function getProphetData() {
  const response = await fetch(requestURL);
  const data = await response.json();
  console.table(data.prophets);  // note that we reference the prophet array of the data object given the structure of the json file
  displayProphets(data.prophets);
}

getProphetData();

const displayProphets = (prophets) => {
  const cards = document.querySelector('div.cards'); // select the output container element

  prophets.forEach((prophet) => {
    // Create elements to add to the div.cards element
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let portrait = document.createElement('img');
    let place = document.createElement('p');
    let dob = document.createElement('p');

    // Build the h2 content out to show the prophet's full name - finish the template string
    h2.textContent = `${prophet.name} ${prophet.lastname}`;
    dob.textContent = `${prophet.birthdate}`
    place.textContent = `${prophet.birthplace}`

    // Build the image portrait by setting all the relevant attribute
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portait of ${prophet.name} ${prophet.lastname}`);

    // Append the section(card) with the created elements
    card.appendChild(h2);
    card.appendChild(portrait);
    card.appendChild(place);
    card.appendChild(dob);

    cards.appendChild(card);
  } // end of forEach loop
)}; // end of function expression


  //to clear out cards
//   let cards = document.querySelectorAll('.cards');
//   cards.forEach((item)=>{
//       item.remove();
//   });
// function changeStyles() {
// //changing styles in js
// if(window.innerWidth > 800 && window.innerWidth < 1000){
// let change = document.querySelector('.cards');
// change.setAttribute('style' , 'background-color: pink;');
//     };
// };

// // eventlisteners for resizing window and loading page
// window.addEventListener('resize', changeStyles);
 
  
