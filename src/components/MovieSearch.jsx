import { useState } from 'react';

const API_KEY = 'YOUR_OMDB_API_KEY'; // <-- Replace with your API key

export default function MovieSearchApp() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const searchMovies = async () => {
    const res = await fetch(`https://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`);
    const data = await res.json();
    setMovies(data.Search || []);
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-slate-100 p-6">
      <h1 className="text-3xl font-bold mb-4">Movie Search</h1>
      <div className="flex space-x-2 mb-4">
        <input
          className="border p-2 rounded"
          placeholder="Search movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={searchMovies}>
          Search
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl">
        {movies.map((movie) => (
          <div key={movie.imdbID} className="bg-white p-4 rounded shadow">
            <img src={movie.Poster} alt={movie.Title} className="rounded mb-2" />
            <p className="font-bold">{movie.Title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
