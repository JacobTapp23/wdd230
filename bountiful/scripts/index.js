// Responsive Hamburger Menu
const nav = document.querySelector('.navigation');
nav.addEventListener('click', ()=>
{nav.classList.toggle('shown')});
// Dynamic Last Updated Footer
let currentdate = document.lastModified;
      document.querySelector(".modified").textContent =
        "Last Updated: " + currentdate;
document.querySelector(".year").innerHTML = new Date().getFullYear();

if(localStorage.getItem('numsmoothies')){
document.querySelector('#snumber').textContent = localStorage.getItem('numsmoothies');
};

// API call
const apiURL = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Carlsbad%20California?unitGroup=us&key=GR4ZVARZ2G4VWWTRUT4MR8ENW&contentType=json";
const getWeather = async () => {
    const response = await fetch(apiURL);
    const data = await response.json();
    console.log(data);
    let image1 = `https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/SVG/1st%20Set%20-%20Color/${data.days[0].icon}.svg`;
    let image2 = `https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/SVG/1st%20Set%20-%20Color/${data.days[1].icon}.svg`;
    let image3 = `https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/SVG/1st%20Set%20-%20Color/${data.days[2].icon}.svg`;
    document.querySelector('#humidity1').textContent = data.days[0].humidity;
    document.querySelector('#temp1').textContent = data.days[0].temp;
    document.querySelector('#condition1').textContent =  data.days[0].conditions;
    document.querySelector('#description1').textContent =  data.days[0].description;
    document.querySelector('#weathericon1').src = image1;
    document.querySelector('#weathericon1').alt= data.days[0].conditions + ' icon';
    document.querySelector('#date1').textContent = data.days[0].datetime;

    document.querySelector('#humidity2').textContent = data.days[1].humidity;
    document.querySelector('#temp2').textContent = data.days[1].temp;
    document.querySelector('#condition2').textContent =  data.days[1].conditions;
    document.querySelector('#description2').textContent =  data.days[1].description;
    document.querySelector('#weathericon2').src = image2;
    document.querySelector('#weathericon2').alt= data.days[1].conditions + ' icon';
    document.querySelector('#date2').textContent = data.days[1].datetime;

    document.querySelector('#humidity3').textContent = data.days[2].humidity;
    document.querySelector('#temp3').textContent = data.days[2].temp;
    document.querySelector('#condition3').textContent =  data.days[2].conditions;
    document.querySelector('#description3').textContent =  data.days[2].description;
    document.querySelector('#weathericon3').src = image3;
    document.querySelector('#weathericon3').alt= data.days[2].conditions + ' icon';
    document.querySelector('#date3').textContent = data.days[2].datetime;
}
getWeather();