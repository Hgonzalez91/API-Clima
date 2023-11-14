//VARIABLES

const paragraph = document.getElementById('paragraph');
const loadP = document.getElementById('loadP');
const loader = document.getElementsByClassName('lds-roller');
const inputCity = document.getElementById('inputCity');
const btnSearch = document.getElementById('btnSearch');
const nameCountry = document.getElementById('nameCountry');
const city = document.getElementById('city');
const temp = document.getElementById('temp');
const wind = document.getElementById('wind');
const icon = document.getElementsByTagName('img');
const APIKey = `e6ea3b3e8309bf8f85532f3223735e46`;

const openWeather = async (city) => {
    const getDataFromAPIWeather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`);
    const responseData = await getDataFromAPIWeather.json();
    return responseData;
}

btnSearch.addEventListener('click', () =>{

    loader[0].classList.add('show')
    openWeather(inputCity.value)
    .then((respClima) => {
        loader[0].classList.remove('show')
        loader[0].classList.add('none')
        nameCountry.innerText = 'Pais: ' + respClima.sys.country
        city.innerText = 'Ciudad: ' + respClima.name
        temp.innerText = 'Temp: ' + parseInt(respClima.main.temp - 273.15) + '°C'
        wind.innerText = 'v. Viento: ' + respClima.wind.speed + 'km/h'
        const iconWeather = null ;
        icon[0].setAttribute('src', `https://openweathermap.org/img/wn/${respClima.weather[0].icon}@2x.png`)
        console.log(respClima);
    })
    .catch((err) => console.log(err));
    });


/* setTimeout(() => {
    loadP.classList.add('show');
    loader[0].style.display = 'none';
}) */






//EJEMPLO DE ASYNC CON UN SETTIMEOUT

