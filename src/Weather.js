import React, {useState} from "react";
import axios from "axios";
import "./Weather.css"

export default function Weather(){
    const [weatherData, setWeatherData] = useState({ready:false})
    function handleResponse(response){
        setWeatherData({
            ready: true,
            temperature: Math.round(response.data.main.temp),
            wind: Math.round(response.data.wind.speed),
            city: response.data.name,
            humidity: response.data.main.humidity,
            description: response.data.weather[0].description,

        });
    }
    if (weatherData.ready){
        return (
                <div className = "Weather">
                    <h1>weatherData.city</h1>
                        <ul>
                            <li>Last updated: Saturday 10:00</li>
                            <li className="text-capitalize">{weatherData.description}</li>
                        </ul>
                            <span role="img" aria-label="sunny" className="temperature">
                                ☀️{weatherData.temperature}°F
                            </span>
                        <br />
                        <ul className="WeatherCondition">
                            <li className="humidity">Humidity: {weatherData.humidity}%</li>
                            <li className="wind">Wind: {weatherData.wind} mph</li>
                        </ul>
                </div>
            )
    } else{
        let city = "San Francisco";
        const apiKey = "f0229aa4803b78f326fa1951e4c8d9a5";
        let apiURL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
        axios.get(apiURL).then(handleResponse);
        return (
            "Loading..."
        )
    }
 
}