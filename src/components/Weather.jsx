import { useState } from 'react';

export default function WeatherApp() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const getWeather = async () => {
    const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    const data = await res.json();
    setWeather(data);
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-6 bg-gradient-to-r from-blue-400 to-purple-500">
      <h1 className="text-4xl font-bold mb-4 text-white">Weather App</h1>
      <input 
        className="p-2 rounded mb-4" 
        value={city} 
        onChange={(e) => setCity(e.target.value)} 
        placeholder="Enter city name"
      />
      <button className="bg-white text-blue-600 px-4 py-2 rounded" onClick={getWeather}>Search</button>

      {weather && (
        <div className="bg-white p-4 mt-6 rounded shadow text-center">
          <h2 className="text-2xl">{weather.name}</h2>
          <p>{weather.main.temp}°C</p>
          <p>{weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}
