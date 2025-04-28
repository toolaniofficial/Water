import { useState, useEffect } from 'react';

export default function MemeGenerator() {
  const [meme, setMeme] = useState(null);

  const fetchMeme = async () => {
    const res = await fetch('https://meme-api.com/gimme');
    const data = await res.json();
    setMeme(data);
  };

  useEffect(() => {
    fetchMeme();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <button onClick={fetchMeme} className="mb-4 bg-blue-500 text-white px-4 py-2 rounded">Get New Meme</button>
      {meme && (
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-bold mb-2">{meme.title}</h2>
          <img src={meme.url} alt="meme" className="max-w-xs rounded" />
        </div>
      )}
    </div>
  );
}
