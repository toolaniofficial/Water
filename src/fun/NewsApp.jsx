import { useState, useEffect } from 'react';

export default function NewsApp() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const res = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=YOUR_API_KEY`);
      const data = await res.json();
      setArticles(data.articles);
    };
    fetchNews();
  }, []);

  return (
    <div className="p-6">
      {articles.map((article, idx) => (
        <div key={idx} className="mb-4">
          <h2 className="text-xl font-bold">{article.title}</h2>
          <p>{article.description}</p>
        </div>
      ))}
    </div>
  );
}
