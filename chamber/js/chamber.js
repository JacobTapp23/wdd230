// Responsive Hamburger Menu
const nav = document.querySelector('.navigation');
nav.addEventListener('click', ()=>
{nav.classList.toggle('shown')});
// Dynamic Date Banner
const weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const d = new Date();
let weekday = weekdays[d.getDay()];
let month = months[d.getMonth()];
let day = d.getDate();
let year =d.getFullYear();
document.getElementById("day").innerHTML = "Saupark Chamber of Commerce | " + weekday + ", " + day + " " + month + " " + year;


// Dynamic Last Updated Footer
let currentdate = document.lastModified;
      document.querySelector(".modified").textContent =
        "Last Updated: " + currentdate;
document.querySelector(".year").innerHTML = new Date().getFullYear();

if (d.getDay() == 1 || d.getDate() == 2) {
  document.querySelector(".meeting").style.display = "block";
};
// weather API call
const apiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5605242&appid=4dca22dd938418525bfde3d55fe13bc7";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    let tempK = jsObject.list[0].main.temp;
    let tempF = Math.round(((tempK - 273.15) * 1.8000 + 32.00)* 10) / 10;
    document.querySelector("#temp").textContent = tempF;
    document.querySelector("#speed").textContent = jsObject.list[0].wind.speed;
    const iconsrc = `https://openweathermap.org/img/w/${jsObject.list[0].weather[0].icon}.png`;
    document.querySelector('#weathericon').setAttribute('src', iconsrc);
    document.querySelector('#condition').textContent = jsObject.list[0].weather[0].description;
// Wind Chill Calculation
    let notapplicapble = " N/A"
let temp = parseFloat(document.getElementById('temp').textContent);
let windspeed = parseFloat(document.getElementById('speed').textContent);
let windchill = Math.round((35.74 + (0.6215 * temp))-(35.75 * Math.pow(windspeed,0.16)) + (0.4275*temp*Math.pow(windspeed,0.16)));

if (temp <= 50.00 && windspeed >= 3.00) {
  document.getElementById('chill').innerHTML = " " + windchill + "&#176;F";
}
else{
  document.getElementById('chill').innerHTML = notapplicapble;
};
  });