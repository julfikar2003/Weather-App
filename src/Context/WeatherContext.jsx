import { createContext, useState } from "react";

export const WeatherContext =createContext()
export const WeatherProvider = ({children}) =>{
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const fethchWeather = async (cityName) =>{
        setLoading(true);
        setError('');
        setCity(cityName);
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=002d13a16acc162bbf567f25638d65f3&units=metric`)
            const data = await response.json();
            console.log("Weather Data:", data);
            if(response.ok){
                setWeatherData(data);
               
            }else{
                setError(data.message || 'Fatching  weather Error');
            }
        } catch (error) {
            setError('Network Error',error);
        }finally{
            setLoading(false);
        }
    }
    return (
        <WeatherContext.Provider value={{city, weatherData, loading, error, fethchWeather}}>
            {children}
        </WeatherContext.Provider>
    )
}