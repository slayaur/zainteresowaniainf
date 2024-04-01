const apiKey = '333707842e574ab3911155106240104';
const city = 'Warsaw'; 

const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

function updateWeater(){
    fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
        throw new Error('Serwis zwrócił błąd');
        }
        return response.json();
    })
    .then(jason => {
        const weatherDiv = document.getElementById('weather');
        
        const temperature = jason.current.temp_c + "°C";
        const conditionText = jason.current.condition.text;
        const icon = jason.current.condition.icon;

        // Ustawienie tekstu z temperaturą
        const conditionTextElements = weatherDiv.getElementsByClassName("condition-text");
        conditionTextElements[0].innerHTML = temperature;       

        // aktualizowanie czasu co sekundę
        updateTime();
        setInterval(updateTime, 1000);


        // Ustawienie ikonki z temperaturą
        const iconElement = document.getElementById("weather-icon");
        iconElement.src = icon;        
        
    })
    .catch(error => {
        console.error('Wystąpił problem podczas pobierania pogody', error);
    })
};

function updateTime(){
    const dateElement = document.getElementById("current-time");
    dateElement.innerHTML = (new Date().toLocaleTimeString());
}

updateWeater();