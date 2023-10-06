import React,{ useEffect, useState } from "react";
import axios from "axios";
import './Home.css';

function Home(){
    const [city,setCity] = useState('nagpur');
    const [temprature,setTemprature] = useState(0);
    const [message,setMessage] = useState('')

    async function loadweatherInfo(){
        try{
        const response = await axios.get('https://api.openweathermap.org/data/2.5/weather?id=2172797&appid=f652964084c552e8c0492237a3fabd9c');

        setTemprature((response.data.main.temp -273).toFixed(2));
        setMessage('✅city Found');
    }
    catch(err){
        setTemprature(0);
        setMessage('city not found');
    }
}

    useEffect(()=>{
        loadweatherInfo()
    },[city])

    return(
        <div>
            <h1 className="app-title">whether for {city}</h1>

            <input 
            className="search-bar" 
            type="text" 
            placeholder="Enter your city..."

            value={city}
            onChange={(e) =>{
                setCity(e.target.value)
            }}
            
            />
            <p className="message-text">{message}</p>
            <h1 className="temprature-text">Temprature: {temprature} °C</h1>
            
        </div>
    )
}

export default Home