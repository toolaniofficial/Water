import { useState } from 'react';

const API_KEY = 'YOUR_SPOONACULAR_API_KEY'; // <-- Replace with your API key

export default function RecipeFinder() {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);

  const searchRecipes = async () => {
    const res = await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=${API_KEY}`);
    const data = await res.json();
    setRecipes(data.results);
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-pink-100 p-6">
      <h1 className="text-3xl font-bold mb-4">Recipe Finder</h1>
      <div className="flex space-x-2 mb-4">
        <input
          className="border p-2 rounded"
          placeholder="Search recipes..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={searchRecipes}>
          Search
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="bg-white p-4 rounded shadow">
            <img src={recipe.image} alt={recipe.title} className="rounded mb-2" />
            <p className="font-bold">{recipe.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
