export class WeatherApp {
    constructor() {
        this.init();
    }

    init() {
        document.getElementById('getWeather').addEventListener('click', async () => {
            const city = document.getElementById('city').value;
            if (city) this.fetchWeatherData(city);
        });
    }

    async fetchWeatherData(city) {
        try {
            const geoUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=en&format=json`;
            const geoData = await (await fetch(geoUrl)).json();

            if (!geoData.results) return this.displayWeather("City not found");

            const { latitude, longitude, name } = geoData.results[0];
            const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;
            const weatherData = await (await fetch(weatherUrl)).json();

            this.displayWeather(`${name}: ${weatherData.current_weather.temperature}°C`);
        } catch (error) {
            console.error("Error fetching weather data:", error);
        }
    }

    displayWeather(message) {
        document.getElementById('weather').innerHTML = `<p>${message}</p>`;
    }
}
