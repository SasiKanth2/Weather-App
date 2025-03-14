const apikey = "996d3c8d16a4fcb607342bb08df8b886";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.querySelector(".search input");
const btn = document.querySelector(".search button");
const weathericon=document.querySelector(".weather-icon");

async function Weather(city) {
    const response = await fetch(apiurl + city + "&appid=" + apikey);

    if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    const data = await response.json();

    console.log(data);

    document.querySelector(".temp").innerHTML = Math.round(data.main.temp )+ "°C";
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main == "Clouds") {
        weathericon.src ="./Weather images/images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
        weathericon.src ="./Weather images/images/clear.png" ;
    } else if (data.weather[0].main == "Rain") {
        weathericon.src = "./Weather images/images/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
        weathericon.src = "./Weather images/images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
        weathericon.src = "./Weather images/images/mist.png";
    }

    document.querySelector(".weather").style.display="block";
    document.querySelector(".error").style.display="none";

    }


btn.addEventListener("click", () => {
    Weather(searchbox.value);
});
