const paragraph = document.getElementById('paragraph');
const loadP = document.getElementById('loadP');
const loader = document.getElementsByClassName('lds-roller');
const APIKey = `e6ea3b3e8309bf8f85532f3223735e46`;

console.log(loader);

/* setTimeout(() => {
    loadP.classList.add('show');
    loader[0].style.display = 'none';
}, 3000); */

const openWeather = async (city) => {
    const getDataFromAPIWeather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`);
    const responseData = await getDataFromAPIWeather.json();
    return responseData;
} 

openWeather('London')
.then((respClima) => {
    console.log(respClima);
})
.catch((err) => console.log(err));