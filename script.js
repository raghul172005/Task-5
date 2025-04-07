document.getElementById("getWeatherBtn").addEventListener("click", function () {
    const city = document.getElementById("cityInput").value;
    const apiKey = "YOUR_API_KEY_HERE";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("City not found");
            }
            return response.json();
        })
        .then(data => {
            const weatherInfo = `
                <p>City: ${data.name}</p>
                <p>Temperature: ${data.main.temp} °C</p>
                <p>Weather: ${data.weather[0].description}</p>
                <p>Humidity: ${data.main.humidity}%</p>
                <p>Wind Speed: ${data.wind.speed} m/s</p>
            `;
            document.getElementById("weatherResult").innerHTML = weatherInfo;
        })
        .catch(error => {
            document.getElementById("weatherResult").innerHTML = `<p style="color:red;">${error.message}</p>`;
        });
});
