import React, { Fragment, useContext } from 'react'
import { WeatherContext } from '../Context/WeatherContext';

const WeatherDisplay = () => {
    const { weatherData, loading, error,city } = useContext(WeatherContext);
    if (loading) {
        return <p className="text-center text-blue-500">Loading...</p>;
    }if (error) {
        return <p className="text-center text-red-500">{error}</p>;
    }if (!weatherData) return null;
    const weather = weatherData;
  return (
    <Fragment>
        <div className="mt-4 p-6 bg-blue-50 rounded-xl shadow-inner text-center">
            <h2 className="text-xl font-semibold text-blue-800 mb-2">{city}</h2>
            <p>{Math.round(weather.main.temp)}°C</p>
            <p className="text-gray-600">{weather.weather[0].description}</p>     
        <div className='flex justify-around text-sm text-blue-700 mt-4'>
                <div>
                <p className='font-medium'>Humidity </p>
                <p> {weather.main.humidity}%</p>
            </div>
            <div>
                <p  className='font-medium'>Wind</p>
                <p>{weather.wind.speed} m/s</p>
            </div>
            <div>
                <p className='font-medium'>Feels Like</p>
                <p>{Math.round(weather.main.feels_like)}°C</p>
            </div>
            <div>
                <p className='font-medium'>Pressure</p>
                <p>{weather.main.pressure} hPa</p>
            </div>
        

        </div>
        </div>
      
    </Fragment>

  )
}

export default WeatherDisplay
