import React, { useState } from "react";
import "./Home.css"
import axios from 'axios';
function Home() {
    const [city, setCity] = useState('pune')
    const [temperature, setTemperature] = useState(0)
    function loadWeatherInfo(){
        const response = axios.get('https://api.openweathermap.org/data/2.5/weather?id=2172797&appid=f652964084c552e8c0492237a3fabd9c')
    }
    return(
        <div>

            <h1 className="app-title">Weather For {city}</h1>
            <input className="search-bar" 
             type="text"
             placeholder="Enter city..."
             value={city}
             onChange={(e) =>{
                setCity(e.target.value)
             }}/>

            <h1 className="temperature-text">Temperature: {temperature} °C</h1>
        </div>
    )
}