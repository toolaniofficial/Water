import { useState } from 'react';

export default function URLShortener() {
  const [longUrl, setLongUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const shorten = async () => {
    const res = await fetch('https://your-backend.com/shorten', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url: longUrl }),
    });
    const data = await res.json();
    setShortUrl(data.shortUrl);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <input value={longUrl} onChange={(e) => setLongUrl(e.target.value)} placeholder="Enter URL" className="border p-2 w-64 mb-4" />
      <button onClick={shorten} className="bg-blue-500 text-white px-4 py-2 rounded">Shorten URL</button>
      {shortUrl && <p className="mt-4">{shortUrl}</p>}
    </div>
  );
}
