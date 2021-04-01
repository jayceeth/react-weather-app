import React from "react";
import FormatDate from "./FormatDate";

export default function CurrentWeather(props){
    return(
        <div className = "Weather">
                    <h1>{props.data.city}</h1>
                        <ul>
                            <li>Last Updated: <FormatDate date={props.data.date} /></li>
                            <li className="text-capitalize">{props.data.description}</li>
                        </ul>
                            <span role="img" aria-label="sunny" className="temperature">
                                ☀️{props.data.temperature}°F
                            </span>
                        <br />
                        <ul className="WeatherCondition">
                            <li className="humidity">Humidity: {props.data.humidity}%</li>
                            <li className="wind">Wind: {props.data.wind} mph</li>
                        </ul>
                </div>
    )
}