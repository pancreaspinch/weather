async function requestWeather(location) {
    try {
        const response = await fetch(
            //put key here
            `http://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${process.env.API_KEY}`,
            { mode: 'cors' }
        );
        let currentWeather = await response.json()
        return currentWeather;
    } catch (e) {
        console.log(e);
    }
}

function processWeather(currentWeather) {
    let processedWeather =
    {
        "condition": currentWeather.weather[0].main,
        "temperature": Math.round(currentWeather.main.temp),
        "feelsLike": Math.round(currentWeather.main.feels_like),
        "location": currentWeather.name,

        "wind": Math.round(currentWeather.wind.speed),
        "humidity": currentWeather.main.humidity,
        
    };

    return processedWeather;
}

function displayWeather(processedWeather){
    const location = document.querySelector(".location");
    const temperature = document.querySelector(".temperature");
    const feelsLike = document.querySelector(".feelsLike");
    const condition = document.querySelector(".condition");
    const wind = document.querySelector(".wind");
    const humidity = document.querySelector(".humidity");

    location.textContent = `${processedWeather.location}`;
    temperature.textContent = `${processedWeather.temperature}°`;
    feelsLike.textContent = `Feels like: ${processedWeather.feelsLike}°`;
    condition.textContent = `${processedWeather.condition}`;
    wind.textContent = `Wind: ${processedWeather.wind} MPH`;
    humidity.textContent = `Humidity ${processedWeather.humidity}%`

}

export {displayWeather, processWeather, requestWeather}