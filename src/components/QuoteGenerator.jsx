import { useState, useEffect } from 'react';

export default function QuoteGenerator() {
  const [quote, setQuote] = useState({});

  const getQuote = async () => {
    const res = await fetch('https://api.quotable.io/random');
    const data = await res.json();
    setQuote(data);
  };

  useEffect(() => {
    getQuote();
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen bg-purple-100 p-6">
      <h1 className="text-3xl font-bold mb-4">Random Quote</h1>
      <div className="bg-white p-6 rounded shadow text-center max-w-md">
        <p className="italic">"{quote.content}"</p>
        <p className="mt-2 font-bold">- {quote.author}</p>
      </div>
      <button 
        className="mt-6 bg-blue-500 text-white px-4 py-2 rounded"
        onClick={getQuote}
      >
        New Quote
      </button>
    </div>
  );
}
