import { useState } from 'react';

export default function CounterApp() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 space-y-4">
      <h1 className="text-4xl font-bold">{count}</h1>
      <div className="flex space-x-4">
        <button className="px-4 py-2 bg-green-500 text-white rounded" onClick={() => setCount(count + 1)}>Increment</button>
        <button className="px-4 py-2 bg-red-500 text-white rounded" onClick={() => setCount(count - 1)}>Decrement</button>
        <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
}
