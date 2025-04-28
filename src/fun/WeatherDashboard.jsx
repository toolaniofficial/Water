import { useState } from 'react';

export default function WeatherDashboard() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const fetchWeather = async () => {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY&units=metric`);
    const data = await res.json();
    setWeather(data);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-100 p-6">
      <input value={city} onChange={(e) => setCity(e.target.value)} placeholder="City" className="border p-2 mb-4" />
      <button onClick={fetchWeather} className="bg-blue-500 text-white px-4 py-2 rounded">Get Weather</button>
      {weather && (
        <div className="mt-4">
          <h2 className="text-2xl">{weather.name}</h2>
          <p>{weather.main.temp} °C</p>
          <p>{weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}
