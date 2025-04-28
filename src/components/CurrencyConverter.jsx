import { useState, useEffect } from 'react';

export default function CurrencyConverter() {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [rates, setRates] = useState({});

  useEffect(() => {
    fetch('https://api.exchangerate-api.com/v4/latest/USD')
      .then((res) => res.json())
      .then((data) => setRates(data.rates));
  }, []);

  const convert = () => {
    if (rates[fromCurrency] && rates[toCurrency]) {
      const result = (amount / rates[fromCurrency]) * rates[toCurrency];
      return result.toFixed(2);
    }
    return '';
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-indigo-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Currency Converter</h1>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="border p-2 rounded mb-4"
        placeholder="Amount"
      />
      <div className="flex space-x-2 mb-4">
        <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)} className="p-2 border rounded">
          {Object.keys(rates).map((currency) => (
            <option key={currency}>{currency}</option>
          ))}
        </select>
        <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)} className="p-2 border rounded">
          {Object.keys(rates).map((currency) => (
            <option key={currency}>{currency}</option>
          ))}
        </select>
      </div>
      <h2 className="text-2xl font-semibold">{convert()} {toCurrency}</h2>
    </div>
  );
}
