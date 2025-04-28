import { useState, useRef } from 'react';

export default function Stopwatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef(null);

  const start = () => {
    if (!isRunning) {
      setIsRunning(true);
      timerRef.current = setInterval(() => setTime((prev) => prev + 1), 1000);
    }
  };

  const stop = () => {
    setIsRunning(false);
    clearInterval(timerRef.current);
  };

  const reset = () => {
    setTime(0);
    stop();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100 p-6">
      <h1 className="text-5xl mb-4">{time}s</h1>
      <div className="flex space-x-4">
        <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={start}>Start</button>
        <button className="bg-yellow-500 text-white px-4 py-2 rounded" onClick={stop}>Stop</button>
        <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
