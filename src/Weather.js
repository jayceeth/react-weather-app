import React, {useState} from "react";
import axios from "axios";

import CurrentWeather from "./CurrentWeather";
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
            date: new Date(response.data.dt * 1000),

        });
    }
    if (weatherData.ready){
        return (
                <CurrentWeather data={weatherData}/>
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