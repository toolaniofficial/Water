import { useState } from 'react';

export default function StarRating() {
  const [rating, setRating] = useState(0);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <h1 className="text-2xl font-bold mb-4">Rate us!</h1>
      <div className="flex space-x-2">
        {[1,2,3,4,5].map((star) => (
          <button key={star} onClick={() => setRating(star)}>
            <span className={`text-4xl ${rating >= star ? 'text-yellow-400' : 'text-gray-400'}`}>★</span>
          </button>
        ))}
      </div>
      <p className="mt-4 text-lg">You rated {rating} star(s)</p>
    </div>
  );
}
