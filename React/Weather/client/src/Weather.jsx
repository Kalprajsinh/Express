import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Weather = () => {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchWeatherData = async () => {
          try {
            const response = await axios.get('http://localhost:3000/weather/india');
            setWeatherData(response.data);
            setError('');
          } catch (error) {
            setError('Error fetching weather data');
            console.error(error);
          }
        };
    
        fetchWeatherData();
      }, []);
      
    const getWeather = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/weather/${city}`);
            setWeatherData(response.data);
            setError('');
        } catch (err) {
            console.error(err);
            setError('Could not fetch weather data. Please try again.');
            setWeatherData(null);
        }
    };

    return (
        <div className="w-full h-screen bg-[url('https://images.unsplash.com/photo-1544274411-a7afe6230711?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover overflow-hidden">
        <div className="w-full h-full bg-black bg-opacity-35">
            <h1 className=' text-white text-4xl w-auto font-bold p-10 px-14'>Weather App</h1>

            <div className='flex w-full h-full'>
                <div className=' w-1/2 content-start pt-24 px-28'>
                    <input
                    className=' p-3 w-11/12 font-semibold text-base bg-inherit text-white border-b-2 placeholder-gray-400 focus:border-black-500 outline-none'
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Enter city" />
                    <button className='w-1/12 p-3 font-semibold pl-3 outline-none' onClick={getWeather}><svg xmlns="http://www.w3.org/2000/svg" fill="white" className="bi bi-search size-6" viewBox="0 0 16 16" type='submit'>
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                        </svg> 
                    </button>

                    <p className=' text-white pt-24'>
                     {error && <p className=' text-xl font-bold'>{error}</p>}
                     {weatherData && (
                        <div className='w-full'>
                            <h2 className=' text-xl font-semiblod flex'>Weather in <p className=' font-bold'> &nbsp;{weatherData.location.name}</p></h2>
                        <div className='text-center'>
                            <p className=' text-6xl font-semiblod'>{weatherData.current.temp_c}°C</p>
                            <p>Temperature</p>
                        </div>
                        </div>
                        )}
                    </p>
                </div>
                <div className=' text-white w-1/2 bg-black bg-opacity-45'>
                 {weatherData && (
                    <>
                        <div className='w-full h-20 flex font-semibold place-items-center text-xl'>
                        <img className=' h-12' src={weatherData.current.condition.icon} alt=""/>
                        <p>&nbsp;&nbsp;Condition - {weatherData.current.condition.text}</p>
                        </div>
                        <hr />
                        <br />
                        <div className='w-full flex flex-col space-y-2 font-semibold'>
                            <div className='flex items-center'>
                                &nbsp;&nbsp;&nbsp;&nbsp;<i className='fas fa-thermometer-half'></i>
                                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Temperature: {weatherData.current.temp_c}°C / {weatherData.current.temp_f}°F</p>
                            </div>
                            <div className='flex items-center'>
                                &nbsp;&nbsp;&nbsp;&nbsp;<i className='fas fa-thermometer-three-quarters'></i>
                                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Feels Like: {weatherData.current.feelslike_c}°C / {weatherData.current.feelslike_f}°F</p>
                            </div>
                            <div className='flex items-center'>
                                &nbsp;&nbsp;&nbsp;&nbsp;<i className='fas fa-wind'></i>
                                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Wind: {weatherData.current.wind_mph} mph / {weatherData.current.wind_kph} kph ({weatherData.current.wind_dir})</p>
                            </div>
                            <div className='flex items-center'>
                                &nbsp;&nbsp;&nbsp;&nbsp;<i className='fas fa-tachometer-alt'></i>
                                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Pressure: {weatherData.current.pressure_mb} mb / {weatherData.current.pressure_in} in</p>
                            </div>
                            <div className='flex items-center'>
                                &nbsp;&nbsp;&nbsp;&nbsp;<i className='fas fa-cloud-rain'></i>
                                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Precipitation: {weatherData.current.precip_mm} mm / {weatherData.current.precip_in} in</p>
                            </div>
                            <div className='flex items-center'>
                                &nbsp;&nbsp;&nbsp;&nbsp;<i className='fas fa-tint'></i>
                                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Humidity: {weatherData.current.humidity}%</p>
                            </div>
                            <div className='flex items-center'>
                                &nbsp;&nbsp;&nbsp;&nbsp;<i className='fas fa-cloud'></i>
                                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cloud Cover: {weatherData.current.cloud}%</p>
                            </div>
                            <div className='flex items-center'>
                                &nbsp;&nbsp;&nbsp;&nbsp;<i className='fas fa-temperature-low'></i>
                                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Wind Chill: {weatherData.current.windchill_c}°C / {weatherData.current.windchill_f}°F</p>
                            </div>
                            <div className='flex items-center'>
                                &nbsp;&nbsp;&nbsp;&nbsp;<i className='fas fa-temperature-high'></i>
                                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Heat Index: {weatherData.current.heatindex_c}°C / {weatherData.current.heatindex_f}°F</p>
                            </div>
                            <div className='flex items-center'>
                                &nbsp;&nbsp;&nbsp;&nbsp;<i className='fas fa-dewpoint'></i>
                                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dew Point: {weatherData.current.dewpoint_c}°C / {weatherData.current.dewpoint_f}°F</p>
                            </div>
                            <div className='flex items-center'>
                                &nbsp;&nbsp;&nbsp;&nbsp;<i className='fas fa-eye'></i>
                                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Visibility: {weatherData.current.vis_km} km / {weatherData.current.vis_miles} miles</p>
                            </div>
                            <div className='flex items-center'>
                                &nbsp;&nbsp;&nbsp;&nbsp;<i className='fas fa-sun'></i>
                                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;UV Index: {weatherData.current.uv}</p>
                            </div>
                            <div className='flex items-center'>
                                &nbsp;&nbsp;&nbsp;&nbsp;<i className='fas fa-wind'></i>
                                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Gusts: {weatherData.current.gust_mph} mph / {weatherData.current.gust_kph}</p>
                            </div>
                        </div>
                    </>
                )}
                </div>
            </div>
        </div>
        </div>
    );
};


export default Weather