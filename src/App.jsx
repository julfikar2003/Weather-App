
import './App.css'
import SearchBar from './Components/SearchBar'
import WeatherDisplay from './Components/WeatherDisplay'
import { WeatherProvider } from './Context/WeatherContext'

function App() {


  return (
    <>
      <WeatherProvider>
        <div className="max-w-md mx-auto mt-10 text-center">
          <h1 className="text-3xl font-bold mb-4">Weather App</h1>
          <SearchBar/>
          <WeatherDisplay />
        </div>
     </WeatherProvider>
    </>
  )
}

export default App
