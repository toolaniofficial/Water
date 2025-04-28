import { useState } from 'react';

export default function ExpenseTracker() {
  const [transactions, setTransactions] = useState([]);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const addTransaction = () => {
    if (description && amount) {
      setTransactions([...transactions, { description, amount: parseFloat(amount) }]);
      setDescription('');
      setAmount('');
    }
  };

  const balance = transactions.reduce((acc, trans) => acc + trans.amount, 0);

  return (
    <div className="flex flex-col items-center min-h-screen bg-green-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Expense Tracker</h1>
      <div className="flex space-x-2 mb-4">
        <input
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="p-2 border rounded"
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="p-2 border rounded"
        />
        <button onClick={addTransaction} className="bg-green-600 text-white px-4 py-2 rounded">
          Add
        </button>
      </div>
      <h2 className="text-2xl font-bold mb-4">Balance: ${balance.toFixed(2)}</h2>
      <ul className="bg-white w-full max-w-md p-4 rounded shadow">
        {transactions.map((t, index) => (
          <li key={index} className="flex justify-between p-2 border-b">
            <span>{t.description}</span>
            <span className={`${t.amount < 0 ? 'text-red-500' : 'text-green-500'}`}>{t.amount}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
