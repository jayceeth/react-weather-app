import React from "react";
import "./Weather.css"

export default function Weather(){
    return (
        <div className = "Weather">
            <h1> San Francisco</h1>
                  <ul>
                    <li>Last updated: Saturday 10:00</li>
                    <li>Sunny</li>
                  </ul>
                    <span role="img" aria-label="sunny">
                        ☀️68°F
                    </span>
                <br />
                <ul className="WeatherCondition">
                    <li>Humidity: 8%</li>
                    <li>Wind: 3 mph</li>
                </ul>
        </div>
    )
}