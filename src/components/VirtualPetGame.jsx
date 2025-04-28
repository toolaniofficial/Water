import { useState } from 'react';

export default function VirtualPet() {
  const [hunger, setHunger] = useState(100);

  const feedPet = () => {
    setHunger((prev) => Math.min(prev + 10, 100));
  };

  const decreaseHunger = () => {
    setHunger((prev) => Math.max(prev - 1, 0));
  };

  setInterval(decreaseHunger, 5000);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-100">
      <h1 className="text-2xl font-bold mb-4">Virtual Pet 🐶</h1>
      <div className="text-lg mb-2">Hunger: {hunger}%</div>
      <button onClick={feedPet} className="px-4 py-2 bg-blue-500 text-white rounded">Feed</button>
    </div>
  );
}
