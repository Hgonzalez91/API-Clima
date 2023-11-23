const paragraph = document.getElementById('paragraph');
const loadP = document.getElementById('loadP');
const loader = document.getElementsByClassName('lds-roller');
const inputCity = document.getElementById('inputCity');
const btnSearch = document.getElementById('btnSearch');
const city = document.getElementById('city');
const date = document.getElementById('date');
const temp = document.getElementById('temp');
const tempMinMax = document.getElementById('tempMinMax');
const wind = document.getElementById('wind');
const clouds = document.getElementById('clouds');
const humidity = document.getElementById('humidity');
const sunrise = document.getElementById('sunrise');
const sunset = document.getElementById('sunset');
const icon = document.getElementsByTagName('img');
const APIKey = `e6ea3b3e8309bf8f85532f3223735e46`;

const openWeather = async (city) => {
    const getDataFromAPIWeather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`);
    const responseData = await getDataFromAPIWeather.json();
    return responseData;
}

function dateConverter (milisegundos){
    let dt = new Date(milisegundos * 1000).toLocaleDateString();
    return dt
}
function timeConverter (milisegundos){
    let dt = new Date(milisegundos * 1000).toLocaleTimeString();
    return dt
}

btnSearch.addEventListener('click', () =>{

    loader[0].classList.add('show')
    openWeather(inputCity.value)
    .then((respClima) => {
        loader[0].classList.remove('show')
        loader[0].classList.add('none')
        temp.innerText = parseInt(respClima.main.temp - 273.15) + '°'
        city.innerText = respClima.name.toLocaleUpperCase() + ', ' +respClima.sys.country.toLocaleUpperCase()
        date.innerText = 'TODAY, ' + dateConverter(respClima.dt)
        tempMinMax.innerText = parseInt(respClima.main.temp_min - 273.15) + '°C min / ' + parseInt(respClima.main.temp_max - 273.15) + '°C max'
        wind.innerText = respClima.wind.speed + 'km/h'
        const iconWeather = null ;
        icon[0].setAttribute('src', `https://openweathermap.org/img/wn/${respClima.weather[0].icon}@2x.png`)
        sunrise.innerText = timeConverter(respClima.sys.sunrise)
        sunset.innerText = timeConverter(respClima.sys.sunset)
        clouds.innerText = respClima.weather[0].description.toLocaleUpperCase()
        humidity.innerText = respClima.main.humidity + '%'
        console.log(respClima);



    })
    .catch((err) => console.log(err));
    });

/* setTimeout(() => {
    loadP.classList.add('show');
    loader[0].style.display = 'none';
}) */






//EJEMPLO DE ASYNC CON UN SETTIMEOUT

