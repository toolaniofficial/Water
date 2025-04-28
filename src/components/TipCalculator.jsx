import { useState } from 'react';

export default function TipCalculator() {
  const [bill, setBill] = useState('');
  const [tipPercent, setTipPercent] = useState('');
  
  const tip = bill && tipPercent ? (bill * (tipPercent / 100)) : 0;
  const total = bill ? (parseFloat(bill) + tip) : 0;

  return (
    <div className="flex flex-col items-center min-h-screen bg-green-100 p-6">
      <h1 className="text-3xl mb-4 font-bold">Tip Calculator</h1>
      <input
        type="number"
        placeholder="Bill Amount"
        className="border p-2 rounded mb-2"
        value={bill}
        onChange={(e) => setBill(e.target.value)}
      />
      <input
        type="number"
        placeholder="Tip %"
        className="border p-2 rounded mb-4"
        value={tipPercent}
        onChange={(e) => setTipPercent(e.target.value)}
      />
      <div className="text-lg font-semibold">
        <p>Tip: ₦{tip.toFixed(2)}</p>
        <p>Total: ₦{total.toFixed(2)}</p>
      </div>
    </div>
  );
}
