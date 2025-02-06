const windChill = document.querySelector('#wind-chill');

// define variables
const celcTemp = 25;
const windSpeed = 16;

// calculates wind chill with celcius temperature and wind speed in km/h
const calculateWindChill = (tempC, windSpeedKmh) => Math.round(13.12 + (0.6215 * tempC) - (11.37 * Math.pow(windSpeedKmh, 0.16)) + (0.3965 * tempC * Math.pow(windSpeedKmh, 0.16)));

if (celcTemp <= 10 && windSpeed > 4.8) {
    windChill.innerHTML = `<span>Wind Chill: </span> ${calculateWindChill(celcTemp,windSpeed)}°C`;
} else {
    windChill.innerHTML = `<span>Wind Chill: </span> N/A`;
}