import { useState, useEffect } from 'react';

export default function PomodoroTimer() {
  const [seconds, setSeconds] = useState(25 * 60);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (running) {
      timer = setInterval(() => setSeconds((prev) => prev - 1), 1000);
    }
    return () => clearInterval(timer);
  }, [running]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const secs = time % 60;
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-pink-100">
      <h1 className="text-3xl font-bold mb-6">Pomodoro Timer</h1>
      <div className="text-5xl font-bold mb-4">{formatTime(seconds)}</div>
      <button onClick={() => setRunning(!running)} className="px-6 py-2 bg-red-500 text-white rounded">
        {running ? 'Pause' : 'Start'}
      </button>
    </div>
  );
}
