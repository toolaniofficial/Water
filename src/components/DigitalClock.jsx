import { useEffect, useState } from 'react';

export default function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-5xl font-bold">{time.toLocaleTimeString()}</h1>
      <p className="text-lg mt-2">{time.toLocaleDateString()}</p>
    </div>
  );
}
