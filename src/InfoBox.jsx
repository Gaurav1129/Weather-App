import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import "./InfoBox.css";


export default function InfoBox({ weatherInfo }) {

    const INT_URL = "https://plus.unsplash.com/premium_photo-1677105700661-dbfad22793ca?q=80&w=2068&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    const HOT_URL = "https://images.unsplash.com/photo-1602014505986-9f3d80bd340b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const COLD_URL = "https://images.unsplash.com/photo-1526991757821-1307bf7800f6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAIN_URL = "https://images.unsplash.com/photo-1529942523273-74d30bfb6989?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    // let weatherInfo = {
    //     city: "kanpur",
    //     feelsLike: 26.97,
    //     humidity:    27,
    //     maxTemp : 28,
    //     minTemp:  28,
    //     temp: 28,
    //     weather: "clear sky"
    // }
    return (
        <div className="info-box">
            {/* <h2>Weather Info - {weatherInfo.weather}</h2> */}
            <div className='card'>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={
                            weatherInfo.humidity > 80 ? RAIN_URL :
                                weatherInfo.temp > 15 ? HOT_URL : COLD_URL
                        }
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {weatherInfo.city}&nbsp;  <span />{
                                weatherInfo.humidity > 80 ? <ThunderstormIcon /> :
                                    weatherInfo.temp > 15 ? <WbSunnyIcon /> : <AcUnitIcon />
                            }
                        </Typography>
                        <Typography variant="body2" color="text.secondary" component="span">
                            <p>Tempearture: {weatherInfo.temp}&deg;C</p>
                            <p>Hunidity: {weatherInfo.humidity}</p>
                            <p>Min-Temp: {weatherInfo.minTemp}&deg;C</p>
                            <p>Max-Temp: {weatherInfo.maxTemp}&deg;C</p>
                            <p>Weather is described as <i>{weatherInfo.weather}</i> and feels like {weatherInfo.feelsLike}&deg;C</p>
                        </Typography>
                    </CardContent>
                    {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
                </Card>
            </div>
        </div>
    )
}