import { useState } from 'react';

export default function CalculatorApp() {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    setInput(input + value);
  };

  const calculate = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput('Error');
    }
  };

  const clear = () => {
    setInput('');
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl mb-4">Calculator</h1>
      <input className="border p-2 rounded w-64 mb-4 text-center" value={input} readOnly />
      <div className="grid grid-cols-4 gap-2 w-64">
        {['7','8','9','/','4','5','6','*','1','2','3','-','0','.','=','+'].map((char) => (
          <button 
            key={char} 
            className="bg-blue-500 text-white p-4 rounded"
            onClick={() => char === '=' ? calculate() : handleClick(char)}
          >
            {char}
          </button>
        ))}
        <button className="col-span-4 bg-red-500 text-white p-2 rounded" onClick={clear}>Clear</button>
      </div>
    </div>
  );
}
