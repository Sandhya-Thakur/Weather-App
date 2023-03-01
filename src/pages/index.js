import { useState } from 'react';
import { FaSearchLocation } from 'react-icons/fa';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  const [query, setQuery] = useState('');
  const [date, setDate] = useState('');
  const [tempreture, setTemperature] = useState('');
  const [humidity, setHumidity] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [feels_like, setFeels_like] = useState('');
  const [pressure, setPressure] = useState('');
  const [temp_max, setTemp_max] = useState('');
  const [temp_min, setTemp_min] = useState('');
  const [visibility, setVisibility] = useState('');
  const [wind_speed, setWind_speed] = useState('');
  const [wind_deg, setWind_deg] = useState('');
  const [wind_gust, setWind_gust] = useState('');
  const [clouds, setClouds] = useState('');
  const [sunrise, setSunrise] = useState('');
  const [sunset, setSunset] = useState('');
  const [timezone, setTimezone] = useState('');
  const [forecast, setForecast] = useState('');
  const [rain_possiblity, setRain_possiblity] = useState('');

  
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=6856527be403b37017e0889076638104&units=metri` 
      // api ke
    );
    const data = res.data;
    setDate(data.dt);
    setTemperature(data.main.temp);
    setHumidity(data.main.humidity);
    setLatitude(data.coord.lat);
    setLongitude(data.coord.lon);
    setFeels_like(data.main.feels_like);
    setPressure(data.main.pressure);
    setTemp_max(data.main.temp_max);
    setTemp_min(data.main.temp_min);
    setVisibility(data.visibility);
    setWind_speed(data.wind.speed);
    setWind_deg(data.wind.deg);
    setWind_gust(data.wind.gust);
    setClouds(data.clouds.all);
    setSunrise(data.sys.sunrise);
    setSunset(data.sys.sunset);
    setTimezone(data.timezone);
    setForecast(data.weather[0].description);
    setRain_possiblity(data.rain);
    const date = new Date(data.dt * 1000);
    const tempreture =res.data.main.temp;
    const humidity =res.data.main.humidity;
    const latitude =res.data.coord.lat;
    const longitude =res.data.coord.lon;
    const feels_like =res.data.main.feels_like;
    const pressure =res.data.main.pressure;
    const temp_max =res.data.main.temp_max;
    const temp_min =res.data.main.temp_min;
    const visibility =res.data.visibility;
    const wind_speed =res.data.wind.speed;
    const wind_deg =res.data.wind.deg;
    const wind_gust =res.data.wind.gust;
    const clouds =res.data.clouds.all;
    const sunrise =res.data.sys.sunrise;
    const sunset =res.data.sys.sunset;
    const timezone =res.data.timezone;
    const forecast =res.data.weather[0].description;
    const rain_possiblity =res.data.rain;
    



    console.log(res.data);
    
    } catch (error) {
      console.error(error);
      toast.error('Oops! Something went wrong. Please try again.');
    }
  };
  return (
    <div class = 'body'>
      <form onSubmit={handleSubmit}>
        <input  type="text"
          placeholder="Enter a city name"
          value={query}
          onChange={(e) => setQuery(e.target.value)} />
           <button type="submit">
          <FaSearchLocation />
        </button>
      </form>
      <div>
        
      </div>
      <ToastContainer />
      <div>
      <div>
    
      
      <p>Humidity: {humidity}%</p>
      <p>lat: {latitude}</p>
      <p>lon: {longitude}</p>
      <p> feels_like: {feels_like}</p>
      <p> pressure: {pressure}</p>
      <p> visibility: {visibility}</p>
      <p> rain_possiblity: {rain_possiblity}</p>
      <p> wind_deg: {wind_deg}</p>
      <p> wind_gust: {wind_gust}</p>
      <p> clouds: {clouds}</p>
      <p> sunrise: {sunrise}</p>
      <p> sunset: {sunset}</p>
      <p> timezone: {timezone}</p>
      <p>forecast:{forecast}</p>
      <p> Temperature:{tempreture}</p>
      
      
      </div>
      </div>
      <div class="frame">
      <div class="moon">
        <div class="crater crater1"></div>
        <div class="crater crater2"></div>
      </div>
      <div class="hill-bg-1"></div>
      <div class="hill-bg-2"></div>
      <div class="hill-fg-1"></div>
      <div class="hill-fg-2"></div>
      <div class="hill-fg-3"></div>
      <div class="front">
      <div class="temperature">
      Temperature: {tempreture} K
      </div>
      <div class="icons">
      <i class="fas fa-wind"></i><br/><i class="fas fa-tint"></i>
      </div>
      <div>
				<div class="info">
        wind_speed: {wind_speed}<br/>rain_possiblity: {rain_possiblity}
          </div>
          <table class="preview">
					<tbody>
						<tr>
							<td>date: {date}</td>
							<td> temp_max: {temp_max} | temp_min: {temp_min}</td>
						</tr>
            </tbody>
            </table>
        </div>
      </div>
      </div>
      <div class ="rain">
      <div class="drop-big-1"></div>
      <div class="drop-big-2"></div>
      <div class="drop-big-3"></div>
      <div class="drop-big-4"></div>
      <div class="drop-big-5"></div>
      <div class="drop-big-6"></div>
      <div class="drop-big-7"></div>
      <div class="drop-big-8"></div>
      <div class="drop-big-9"></div>
      <div class="drop-big-10"></div>
      <div class="drop-medium-1"></div>
      <div class="drop-medium-2"></div>
      <div class="drop-medium-3"></div>
      <div class="drop-medium-4"></div>
      <div class="drop-medium-5"></div>
      <div class="drop-medium-6"></div>
      <div class="drop-medium-7"></div>
      <div class="drop-medium-8"></div>
      <div class="drop-medium-9"></div>
      <div class="drop-medium-10"></div>
      <div class="drop-small-1"></div>
      <div class="drop-small-2"></div>
      <div class="drop-small-3"></div>
      <div class="drop-small-4"></div>
      <div class="drop-small-5"></div>
      <div class="drop-small-6"></div>
      <div class="drop-small-7"></div>
      <div class="drop-small-8"></div>
      <div class="drop-small-9"></div>
      <div class="drop-small-10"></div>
      </div>
</div>
  );
}
