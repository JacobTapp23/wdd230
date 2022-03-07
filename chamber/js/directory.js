

fetch("./data.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const directory = jsonObject['directory'];
    directory.forEach(displayProphets);
 });

  function displayProphets(directory) {  // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');    // Change the textContent property of the h2 element to contain the prophet's full name
    let dob = document.createElement('p');
    let pob = document.createElement('p');
    let img = document.createElement('img');
    h2.textContent = `${directory.name}`;
    dob.textContent = `${directory.address}`;
    pob.textContent = `${directory.phone}`;
    img.setAttribute('src', directory.imageurl);
    img.setAttribute('alt', `${directory.name}`);
    img.classList.add("directory");
    h2.classList.add("directory")
    // Add/append the section(card) with the h2 element
    card.appendChild(h2);
    card.appendChild(dob);
    card.appendChild(pob);
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