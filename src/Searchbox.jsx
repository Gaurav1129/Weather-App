import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./Searchbox.css";
import { useState } from 'react';

export default function Searchbox({ updateInfo }) {
    let [city, setCity] = useState("");
    let [error, seterror] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather"
    const API_KEY = "d47e159ad9171d280b94d6ea3270b2eb";


    let getWeatherInfo = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResp = await response.json();
            console.log(jsonResp);

            let result = {
                city: city,
                temp: jsonResp.main.temp,
                minTemp: jsonResp.main.temp_min,
                maxTemp: jsonResp.main.temp_max,
                humidity: jsonResp.main.humidity,
                feelsLike: jsonResp.main.feels_like,
                waether: jsonResp.weather[0].description
            }
            console.log(result);
            return result;
        } catch (err) {
            throw err;
        }
    }



    let handleChange = (event) => {
        setCity(event.target.value);
    }

    let handleSubmit = async (event) => {
        try {
            event.preventDefault();
            console.log(city);
            setCity("");
            let res = await getWeatherInfo();
            updateInfo(res);
        } catch (err) {
            seterror(true);
        }
    }

    return (
        <div className="search-box">
            {/* <h2>Search for a city</h2> */}
            <form action="" onSubmit={handleSubmit}>
                <TextField id="city" label="City-name" variant="outlined"
                    required value={city} onChange={handleChange} />
                <br /> <br />
                <Button variant="contained" type="submit">Search</Button>
                {error && <p style={{ color: "red" }}>No such place exists!</p>}
            </form>
        </div>
    )
}