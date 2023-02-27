const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

async function getProphetData() {
  const response = await fetch(requestURL);
  const data = await response.json();
  console.table(data.prophets);  // note that we reference the prophet array of the data object given the structure of the json file
  const prophets = data['prophets'];
  prophets.forEach(displayProphets);
}

getProphetData();

  function displayProphets(prophet) {  // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');    // Change the textContent property of the h2 element to contain the prophet's full name
    let dob = document.createElement('p');
    let pob = document.createElement('p');
    // let dod = document.createElement('p');
    let img = document.createElement('img');
    h2.textContent = `${prophet.name} ${prophet.lastname}`;
    dob.textContent = `${prophet.birthdate}`;
    pob.textContent = `${prophet.birthplace}`;
    // dod.textContent =`${prophet.death}`;
    img.setAttribute('src', prophet.imageurl);
    img.setAttribute('alt', `${prophet.name} ${prophet.lastname} ${prophet.order}`);
    // Add/append the section(card) with the h2 element
    card.appendChild(h2);
    card.appendChild(dob);
    card.appendChild(pob);
    // card.appendChild(dod);
    card.appendChild(img);
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card);
  }

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
 
  
