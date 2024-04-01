const apiKey = '333707842e574ab3911155106240104';
const city = 'Warsaw';

const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

async function updateWeater() {
    try {
        let response = await fetch(apiUrl, { method: "GET", mode: "no-cors" });
        let jason = await response.json();

        const weatherDiv = document.getElementById('weather');

        const temperature = jason.current.temp_c + "°C";
        const conditionText = jason.current.condition.text;
        const icon = jason.current.condition.icon;

        // Ustawienie tekstu z temperaturą
        const conditionTextElements = weatherDiv.getElementsByClassName("condition-text");
        conditionTextElements[0].innerHTML = temperature;

        // Ustawienie ikonki z temperaturą
        const iconElement = document.getElementById("weather-icon");
        iconElement.src = icon;

    } catch (error) {

        console.error('Wystąpił problem podczas pobierania pogody', error);

    }

};

function updateTime() {
    const dateElement = document.getElementById("current-time");
    dateElement.innerHTML = (new Date().toLocaleTimeString());
}

// aktualizowanie czasu co sekundę
updateTime();
setInterval(updateTime, 1000);

updateWeater();