// Weather App

import Searchbox from './Searchbox'
import InfoBox from './InfoBox'
import { useState } from 'react'
import './WeatherApp.css'


export default function WeatherApp() {
    let [weatherInfor, setwaetherInfor] = useState({
        city: "kanpur",
        feelsLike: 26.97,
        humidity: 27,
        maxTemp: 28,
        minTemp: 28,
        temp: 28,
        weather: "clear sky"
    })

    let updateInfo = (newInfo) => {
        setwaetherInfor(newInfo)
    }
    return (
        <div className= "WeatherApp"style={{ textAlign: "center" }}>
            <h2 className="weatherHead">Weather Widget</h2>
            <Searchbox updateInfo={updateInfo} />
            <InfoBox weatherInfo={weatherInfor} />
        </div>
    )
}