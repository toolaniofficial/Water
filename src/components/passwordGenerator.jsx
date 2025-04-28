import { useState } from 'react';

export default function PasswordGenerator() {
  const [length, setLength] = useState(8);
  const [password, setPassword] = useState('');

  const generatePassword = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
    let pwd = '';
    for (let i = 0; i < length; i++) {
      pwd += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPassword(pwd);
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-slate-200 p-6">
      <h1 className="text-3xl font-bold mb-4">Password Generator</h1>
      <input
        type="number"
        min="4"
        max="32"
        value={length}
        onChange={(e) => setLength(e.target.value)}
        className="p-2 border rounded mb-4"
      />
      <button onClick={generatePassword} className="bg-blue-500 text-white px-4 py-2 rounded mb-4">
        Generate
      </button>
      <p className="text-lg font-mono bg-white p-4 rounded shadow">{password}</p>
    </div>
  );
}
