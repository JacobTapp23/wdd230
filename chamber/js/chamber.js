const nav = document.querySelector('.navigation');
nav.addEventListener('click', ()=>
{nav.classList.toggle('shown')});

const weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const d = new Date();
let weekday = weekdays[d.getDay()];
let month = months[d.getMonth()];
let day = d.getDate();
let year =d.getFullYear();
document.getElementById("day").innerHTML = "Saupark Chamber of Commerce | " + weekday + ", " + day + " " + month + " " + year;



let currentdate = document.lastModified;
      document.querySelector(".modified").textContent =
        "Last Updated: " + currentdate;
document.querySelector(".year").innerHTML = new Date().getFullYear();

if (d.getDay() == 1 || d.getDate() == 2) {
  document.querySelector(".meeting").style.display = "block";
};


let notapplicapble = " N/A"
let temp = parseFloat(document.getElementById('temp').innerHTML);
let windspeed = parseFloat(document.getElementById('speed').innerHTML);
let windchill = Math.round((35.74 + (0.6215 * temp))-(35.75 * Math.pow(windspeed,0.16)) + (0.4275*temp*Math.pow(windspeed,0.16)));

if (Math.round(temp) <= 50 && Math.round(windspeed) >= 3) {
  document.getElementById('chill').innerHTML = " " + windchill + "&#176;F";
}
else{
  document.getElementById('chill').innerHTML = notapplicapble;
};
