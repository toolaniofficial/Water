import { useState, useEffect } from 'react';

const text = "Test your typing speed with this simple app!";

export default function TypingSpeedTest() {
  const [input, setInput] = useState('');
  const [startTime, setStartTime] = useState(null);

  useEffect(() => {
    if (input.length === 1) {
      setStartTime(Date.now());
    }
  }, [input]);

  const calculateWPM = () => {
    const minutes = (Date.now() - startTime) / 60000;
    return Math.round((input.split(' ').length / minutes) || 0);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-100">
      <p className="mb-4">{text}</p>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-96 h-32 p-4 border rounded mb-4"
      />
      {input.length > 0 && <p>Speed: {calculateWPM()} WPM</p>}
    </div>
  );
}
