import { useState, useEffect } from 'react';

export default function ProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 100 : prev + 1));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-4">Progress: {progress}%</h1>
      <div className="w-64 bg-gray-300 rounded-full h-4">
        <div style={{ width: `${progress}%` }} className="bg-green-500 h-4 rounded-full"></div>
      </div>
    </div>
  );
}
