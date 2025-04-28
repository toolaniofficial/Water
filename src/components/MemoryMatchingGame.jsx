import { useState, useEffect } from 'react';

const initialCards = ['🍎', '🍌', '🍇', '🍓', '🍎', '🍌', '🍇', '🍓'].sort(() => Math.random() - 0.5);

export default function MemoryGame() {
  const [cards, setCards] = useState(initialCards);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);

  const handleClick = (index) => {
    if (flipped.length === 2 || flipped.includes(index)) return;
    const newFlipped = [...flipped, index];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      const [first, second] = newFlipped;
      if (cards[first] === cards[second]) {
        setMatched([...matched, cards[first]]);
      }
      setTimeout(() => setFlipped([]), 1000);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-slate-100">
      <h1 className="text-2xl font-bold mb-4">Memory Game</h1>
      <div className="grid grid-cols-4 gap-4">
        {cards.map((card, index) => (
          <div
            key={index}
            onClick={() => handleClick(index)}
            className="w-16 h-16 bg-white flex items-center justify-center text-2xl border rounded cursor-pointer"
          >
            {flipped.includes(index) || matched.includes(card) ? card : '?'}
          </div>
        ))}
      </div>
    </div>
  );
}
